import { User } from '../server/server.init';
import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { getLocalStorage } from '../models/localstorage';

// export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
//   const authHeaders = req.headers['authorization']
//   const token = authHeaders?.split(' ')[1]
//   if(!token){
//       res.sendStatus(401)
//   }
//   jsonwebtoken.verify(token!, process.env.JWT_ACCESS_TOKEN as string, (err, user) => {
//     if(err)return res.sendStatus(403)
//     req.currentUser = user
//     next()
//   })
// }

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authToken } = req.cookies
    console.log(authToken)
    if(!authToken){
      getLocalStorage()?.removeItem('temp')
      return next({success: false, msg: 'Please Log in to access data!'})
    }
    const verify = jsonwebtoken.verify(authToken, process.env.JWT_ACCESS_TOKEN as string)
    // const currentUser = await User.findOne({where: {userId: verify.}})
    next()
  } catch (error) {
    return next(error)
  }
}
