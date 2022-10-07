import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import { sequelize } from "./server/server.init";
import { userRouter } from "./user/user.router";
import { taskRouter } from "./task/task.router"
import {config} from 'dotenv';
import { authenticateToken } from "./middleware/authentication";
import cookieParser from 'cookie-parser';

config()


const server = express()


//General Middleware
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use(cors())
server.use(cookieParser())

//Router Middleware
server.use('/api/v1.0', userRouter)
server.use('/api/v1.0', taskRouter)
server.use('/api/v1.0/tasks', authenticateToken)

const PORT = process.env.PORT || 3000

const start = async () => {
  sequelize.sync()
  .then((result) => {
    console.log(result)
    server.listen(PORT, () => {
      console.log(`Server started. Listening on Port... ${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error);
  })
}

start()









