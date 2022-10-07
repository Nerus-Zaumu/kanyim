var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Task } from '../server/server.init';
import * as uuid from 'uuid';
import { getLocalStorage } from '../models/localstorage';
export const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    const taskId = uuid.v4();
    try {
        const newTask = yield Task.create({ taskId: taskId, title: title, description: description, status: 'NEW', userUserId: getUserId() });
        return res.status(201).json({ msg: 'Task created successfully', payload: newTask });
    }
    catch (error) {
        return res.status(404).json({ developerMessage: 'Unauthorized access', clientMessage: 'Unauthorized User', payload: error });
    }
});
export const getAllUserTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield Task.findAll({ where: { userUserId: getUserId() } });
        return res.status(201).json({ msg: 'Success', payload: tasks });
    }
    catch (error) {
        return res.status(res.statusCode).json({ developerMessage: 'Could not get data due to validation Error', clientMessage: 'Could not get data', error: error });
    }
});
export const updateSingleTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskId = req.params.taskId;
    const { title, description } = req.body;
    try {
        const updatedTask = yield Task.update({ title, description }, { where: { taskId: taskId } });
        return res.status(200).json({ msg: 'Successfully updated Task', payload: updatedTask });
    }
    catch (error) {
        return res.status(400).json({ developerMessage: 'Task update unsucessful', clientMessage: 'Task could not be updated!', error: error });
    }
});
export const deleteSingleTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskId = req.params.taskId;
    try {
        const deletedTask = yield Task.destroy({ where: { taskId: taskId } });
        return res.json({ msg: 'Task succesfully deleted', payload: deletedTask });
    }
    catch (error) {
        return res.json({ developerMessage: 'Task could not be deleted due to validation error', clientMessage: 'Task could not be deleted!', error: error });
    }
});
export const changeTaskStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskId = req.params.taskId;
    const newCategory = req.params.category;
    try {
        const task = yield Task.update({ status: newCategory }, { where: { taskId: taskId } });
        return res.json({ msg: 'task status successfully updated', payload: task });
    }
    catch (error) {
        return res.json({ developerMessage: 'Task status could not be changed successfully', clientMessage: 'Task status could not be changed', error: error });
    }
});
export const filterTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, date } = req.query;
    let whereStatus;
    try {
        if (category && date) {
            whereStatus = { status: category, createdAt: date };
        }
        if (category && !date) {
            whereStatus = { status: category };
        }
        if (!category && date) {
            whereStatus = { createdAt: date };
        }
        const filteredTasks = yield Task.findAll({ where: whereStatus });
        return res.json({ msg: 'tasks successfully filtered', payload: filteredTasks });
    }
    catch (error) {
        return res.json({ developerMessage: 'Task status could not be filtered successfully', clientMessage: 'Task status could not be filtered', error: error });
    }
});
export const getUserId = () => {
    var _a;
    let tempUserData = (_a = getLocalStorage()) === null || _a === void 0 ? void 0 : _a.getItem('temp');
    let userData = tempUserData && JSON.parse(tempUserData);
    return userData.userId;
};
