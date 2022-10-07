var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import { sequelize } from "./server/server.init";
import { userRouter } from "./user/user.router";
import { taskRouter } from "./task/task.router";
import { config } from 'dotenv';
import { authenticateToken } from "./middleware/authentication";
import cookieParser from 'cookie-parser';
config();
const server = express();
//General Middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
server.use(cookieParser());
//Router Middleware
server.use('/api/v1.0', userRouter);
server.use('/api/v1.0', taskRouter);
server.use('/api/v1.0/tasks', authenticateToken);
const PORT = process.env.PORT || 3000;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    sequelize.sync()
        .then((result) => {
        console.log(result);
        server.listen(PORT, () => {
            console.log(`Server started. Listening on Port... ${PORT}`);
        });
    })
        .catch((error) => {
        console.log(error);
    });
});
start();
