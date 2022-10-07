import { Request, Response } from 'express';
import { Task } from '../server/server.init';
import * as uuid from 'uuid'
import { getLocalStorage } from '../models/localstorage';

export const createTask = async (req: Request, res: Response) => {
  const {title, description} = req.body
  const taskId = uuid.v4()
  try {
    const newTask = await Task.create({taskId: taskId, title: title, description: description, status: 'NEW', userUserId: getUserId()})
    return res.status(201).json({msg: 'Task created successfully', payload: newTask})
  } catch (error) {
    return res.status(404).json({developerMessage: 'Unauthorized access', clientMessage: 'Unauthorized User', payload: error})
  }
}

export const getAllUserTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.findAll({where: {userUserId: getUserId()}})
    return res.status(201).json({msg: 'Success', payload: tasks})
  } catch (error) {
    return res.status(res.statusCode).json({developerMessage: 'Could not get data due to validation Error', clientMessage: 'Could not get data', error: error})
  }
}

export const updateSingleTask = async (req: Request, res: Response) => {
  const taskId = req.params.taskId
  const {title, description} = req.body
  try {
    const updatedTask = await Task.update({title, description}, {where: {taskId: taskId}})
    return res.status(200).json({msg: 'Successfully updated Task', payload: updatedTask})
  } catch (error) {
    return res.status(400).json({developerMessage:'Task update unsucessful', clientMessage: 'Task could not be updated!', error: error})
  }
}

export const deleteSingleTask = async(req: Request, res: Response) => {
  const taskId = req.params.taskId
  try {
    const deletedTask = await Task.destroy({where: {taskId: taskId}})
    return res.json({msg: 'Task succesfully deleted', payload: deletedTask})
  } catch (error) {
    return res.json({developerMessage: 'Task could not be deleted due to validation error', clientMessage: 'Task could not be deleted!', error: error})
  }
}

export const changeTaskStatus = async(req: Request, res: Response) => {
  const taskId = req.params.taskId
  const newCategory = req.params.category
  try {
    const task = await Task.update({status: newCategory}, {where: {taskId: taskId}})
    return res.json({msg: 'task status successfully updated', payload: task})
  } catch (error) {
    return res.json({developerMessage: 'Task status could not be changed successfully', clientMessage: 'Task status could not be changed', error: error})
  }
}


export const filterTasks = async (req: Request, res: Response) => {
  const {category, date} = req.query
  let whereStatus: {};
  try {
    if(category && date){
      whereStatus = {status: category, createdAt: date}
    }
    if(category && !date){
      whereStatus = {status: category}
    }
    if(!category && date){
      whereStatus = {createdAt: date}
    }
    const filteredTasks = await Task.findAll({where: whereStatus!})
    return res.json({msg: 'tasks successfully filtered', payload: filteredTasks})
  } catch (error) {
    return res.json({developerMessage: 'Task status could not be filtered successfully', clientMessage: 'Task status could not be filtered', error: error})
  }

}

export const getUserId = () => {
  let tempUserData = getLocalStorage()?.getItem('temp')
  let userData = tempUserData && JSON.parse(tempUserData)
  return userData.userId
}
