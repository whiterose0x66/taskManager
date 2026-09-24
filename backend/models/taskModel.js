import {mongoose} from "mongoose" ;

const taskSchema = new mongoose.Schema({
  desc : {
    type : String ,
    required : true 
  },

  isChecked : {
    type : Boolean ,
    default : true 
  },

  userId : {
    type: mongoose.Schema.Types.ObjectId ,
    ref: "User" ,
    required: true 
  }

});

const Task = mongoose.model("Task" , taskSchema) ;

export {Task} ;
