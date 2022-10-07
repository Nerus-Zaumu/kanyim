
import { Router } from 'express';
import {
  createUser,
  login,
  logout,
  forgotPassword,
  resetPassword,
  updateCredentials
} from './user.controller';

export const userRouter = Router()

//Middleware inception

userRouter.route('/create-user').post(createUser)
userRouter.route('/login').post(login)
userRouter.route('/logout').post(logout)
userRouter.route('/forgot-password').post(forgotPassword)
userRouter.route('/reset-password').put(resetPassword)
userRouter.route('/update-credentials').put(updateCredentials)
