var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getUserId } from './../task/task.controller';
import { User } from "../server/server.init";
import * as uuid from 'uuid';
import * as bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { getLocalStorage } from "../models/localstorage";
import { mailer } from "../nodemailer/email";
export const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, user_password } = req.body;
    const password = hashPassword(user_password);
    const userId = uuid.v4();
    try {
        const user = yield User.findOrCreate({ where: { userId, username, email, password } });
        const token = jsonwebtoken.sign({ id: userId, username: username }, process.env.JWT_ACCESS_TOKEN);
        return res.cookie('authToken', token).json({ success: true, developerMessage: 'Successful Creation', clientMessage: 'Successful creation' });
    }
    catch (error) {
        return res.status(res.statusCode).json({ developerMessage: 'Successful Creation', clientMessage: 'Successful creation', payload: error });
    }
});
export const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { username, user_password } = req.body;
    const user = yield User.findOne({ where: { username: username } });
    const passwordIsHashed = unhashPassword(user_password, user === null || user === void 0 ? void 0 : user.getDataValue('password'));
    if (user && passwordIsHashed) {
        const accessToken = jsonwebtoken.sign({ userId: user.getDataValue('userId'), email: user.getDataValue('email'), username }, process.env.JWT_ACCESS_TOKEN, {
            expiresIn: '30m'
        });
        const tempUserData = { username: username, email: user === null || user === void 0 ? void 0 : user.getDataValue('email'), userId: user === null || user === void 0 ? void 0 : user.getDataValue('userId') };
        const stringifiedData = JSON.stringify(tempUserData);
        //Temporal localStorage
        (_a = getLocalStorage()) === null || _a === void 0 ? void 0 : _a.setItem('temp', stringifiedData);
        return res.cookie('authToken', accessToken).json({ success: true, msg: 'Login Successful!' });
    }
});
export const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    (_b = getLocalStorage()) === null || _b === void 0 ? void 0 : _b.removeItem('temp');
    return res.cookie('authToken', null).json({ success: true, msg: 'Logged out successfully' });
});
export const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const userExists = yield User.findOne({ where: { email: email } });
    if (!userExists) {
        return res.status(404).json({ developerMessage: 'User does not exist', clientMessage: 'User does not exist' });
    }
    mailer(email);
    return res.status(200).json({ success: true, msg: 'Password recovery code has been sent to your email address' });
});
export const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const { code, newPassword, confirmPassword } = req.body;
    try {
        const userCode = +JSON.parse((_c = getLocalStorage()) === null || _c === void 0 ? void 0 : _c.getItem('userCode'));
        if (code === userCode && newPassword === confirmPassword) {
            const hashedPassword = hashPassword(newPassword);
            const user = yield User.update({ password: hashedPassword }, { where: { userId: getUserId() } });
            return res.status(201).json({ success: true, msg: 'Successfully changed password' });
        }
    }
    catch (error) {
        return res.status(401).json({ success: false, developerMessage: 'Password Reset did not work', clientMessage: 'Password Update Failed', error: error });
    }
    getLocalStorage().removeItem('userCode');
});
export const updateCredentials = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = hashPassword(password);
        const updatedUser = yield User.update({ username: username, email: email, password: hashedPassword }, { where: { userId: getUserId() } });
        return res.status(200).json({ success: true, msg: 'Credentials successfully updated!' });
    }
    catch (error) {
        return res.status(401).json({ success: false, developerMessage: 'User credentials could not be updated!', clientMessage: 'User credentials could not be updated due to validation issues!', error: error });
    }
});
export const hashPassword = (password) => {
    const saltCount = 10;
    const hashed = bcrypt.hashSync(password, saltCount);
    return hashed;
};
export const unhashPassword = (password, hash) => {
    const unhashed = bcrypt.compareSync(password, hash);
    return unhashed;
};
