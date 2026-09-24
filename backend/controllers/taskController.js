import { Task } from "../models/taskModel.js";

async function getTasksOfUser(req , res) {
  try {
    const {userId} = req.params ;
    const Tasks = await Task.find({userId}) ;
    res.status(200).json(Tasks) ;
  }catch(err) {
    res.status(500).json({message: "server error" , error:err.message}) ;
  }
}

async function updateTaskOfUser(req , res) {
  try {
    const {userId , taskId} = req.params ;
    const {desc , isChecked} = req.body ;
    const updateTask = await Task.findOneAndUpdate(
      {_id : taskId , userId},
      {desc , isChecked},
      {new: true , runValidators: true}
    )
    if (!updateTask) {
      res.status(404).json({message : "task not found"}) ;
    }
  }catch(err) {
    res.status(500).json({message: "server error" , error: err.message}) ;
  }
} 

async function deleteTaskOfUser(req , res) {
  try {
    const {userId , taskId} = req.params ;
    const deletedTask = Task.findOneAndDelete({_id: taskId , userId}) ;
    if (!deletedTask) {
      res.status(404).json({message: "task no found"}) ;
    }
  } catch(err) {
    res.status(500).json({message: "server error" , error : err.message}) ;
  }
}

async function createTaskOfUser(req , res) {
  try {
    const {userId} = req.params ;
    const {desc , isChecked} = req.body ;
    const newTask = await Task.create({userId , desc , isChecked}) ;
    res.status(201).json(newTask);
  }catch(err) {
    res.status(500).json({message: "server error" , error: err.message}) ;
  }
}

export {getTasksOfUser , updateTaskOfUser , deleteTaskOfUser , createTaskOfUser} ;

