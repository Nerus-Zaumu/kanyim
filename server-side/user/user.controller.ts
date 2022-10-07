import { getUserId } from './../task/task.controller';
import { Request, Response } from "express";
import { User } from "../server/server.init";
import * as uuid from 'uuid'
import * as bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import { getLocalStorage } from "../models/localstorage";
import { mailer } from "../nodemailer/email";

export const createUser = async (req: Request, res: Response) => {
  const {username, email, user_password} = req.body
  const password = hashPassword(user_password)
  const userId = uuid.v4()

  try {
    const user = await User.findOrCreate({where: {userId, username, email, password}})
    const token = jsonwebtoken.sign({id: userId, username: username}, process.env.JWT_ACCESS_TOKEN as string)
    return res.cookie('authToken', token).json({success: true, developerMessage: 'Successful Creation', clientMessage: 'Successful creation'})
  } catch (error) {
   return res.status(res.statusCode).json({developerMessage: 'Successful Creation', clientMessage: 'Successful creation', payload: error})
  }
}

export const login = async(req: Request, res: Response) => {
  const {username, user_password} = req.body;
  const user = await User.findOne({where: {username: username}})
  const passwordIsHashed = unhashPassword(user_password, user?.getDataValue('password'))
  if(user && passwordIsHashed){
      const accessToken = jsonwebtoken.sign(
        {userId: user.getDataValue('userId'), email: user.getDataValue('email'), username},
        process.env.JWT_ACCESS_TOKEN as string,
        {
          expiresIn: '30m'
        }
      )

      const tempUserData = {username: username, email: user?.getDataValue('email'), userId: user?.getDataValue('userId')}
      const stringifiedData = JSON.stringify(tempUserData)
      //Temporal localStorage
      getLocalStorage()?.setItem('temp', stringifiedData)
      return res.cookie('authToken', accessToken).json({success: true, msg: 'Login Successful!'})
    }

}

export const logout = async (req: Request, res: Response) => {
  getLocalStorage()?.removeItem('temp')
  return res.cookie('authToken', null).json({success: true, msg: 'Logged out successfully'})
}

export const forgotPassword = async (req: Request, res: Response) => {
  const email = req.body.email
  const userExists = await User.findOne({where: {email: email}})
  if(!userExists){
   return res.status(404).json({developerMessage: 'User does not exist', clientMessage: 'User does not exist'})
  }
  mailer(email)
  return res.status(200).json({success: true, msg: 'Password recovery code has been sent to your email address'})
}

export const resetPassword = async (req: Request, res: Response) => {
  const { code, newPassword, confirmPassword } = req.body
  try {
    const userCode = +JSON.parse(getLocalStorage()?.getItem('userCode') as string)
    if(code === userCode && newPassword === confirmPassword){
    const hashedPassword = hashPassword(newPassword)
    const user = await User.update({password: hashedPassword}, {where: {userId: getUserId()}})
    return res.status(201).json({success: true, msg: 'Successfully changed password'})
   }
  } catch (error) {
    return res.status(401).json({success: false, developerMessage: 'Password Reset did not work', clientMessage: 'Password Update Failed', error: error})
  }
  getLocalStorage().removeItem('userCode')
}

export const updateCredentials = async (req: Request, res: Response) => {
  const {username, email, password} = req.body;
  try {
   const hashedPassword = hashPassword(password)
   const updatedUser = await User.update({username: username, email: email, password: hashedPassword}, {where: {userId: getUserId()}})
  return res.status(200).json({success: true, msg: 'Credentials successfully updated!'})
 } catch (error) {
  return res.status(401).json({success: false, developerMessage: 'User credentials could not be updated!', clientMessage: 'User credentials could not be updated due to validation issues!', error: error})
 }
}

export const hashPassword = (password: string) => {
  const saltCount = 10
  const hashed = bcrypt.hashSync(password, saltCount)
  return hashed
}

export const unhashPassword = (password: string, hash: string) => {
  const unhashed = bcrypt.compareSync(password, hash)
  return unhashed
}
