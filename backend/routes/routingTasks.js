import express from "express" ;
import { Router } from "express";
import { getTasksOfUser,updateTaskOfUser,createTaskOfUser,deleteTaskOfUser } from "../controllers/taskController.js";

const taskRouter = express.Router({mergeParams: true}) ;

taskRouter.get('/' , getTasksOfUser) ;
taskRouter.post('/' , createTaskOfUser) ;
taskRouter.delete('/:taskId' , deleteTaskOfUser) ;
taskRouter.patch('/:taskId' , updateTaskOfUser) ;


export {taskRouter};
