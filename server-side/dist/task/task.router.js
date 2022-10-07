import { Router } from 'express';
import { createTask, getAllUserTasks, updateSingleTask, deleteSingleTask, filterTasks, changeTaskStatus } from './task.controller';
export const taskRouter = Router();
// taskRouter.use('/tasks', authenticateToken)
taskRouter.route('/tasks/create').post(createTask);
taskRouter.route('/tasks/all').get(getAllUserTasks);
taskRouter.route('/tasks/:taskId/update').put(updateSingleTask);
taskRouter.route('/tasks/:taskId/delete').delete(deleteSingleTask);
taskRouter.route('/tasks/all/filter').get(filterTasks);
taskRouter.route('/tasks/:taskId/:category/status').put(changeTaskStatus);
