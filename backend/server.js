import express from "express";
import dotenv from "dotenv" ;
import { connect } from "./config/db.js";
import { dbStatus } from "./middlewares/dbStatus.js";
import { userRouter } from "./routes/routingUsers.js";
import { taskRouter } from "./routes/routingTasks.js";
import { authRouter } from "./routes/authRouting.js";

dotenv.config() ;

const app = express() ;
app.use(express.json()) ;

app.listen(process.env.PORT , () => {
  console.log(`listening port : ${process.env.PORT}`)
})

connect().catch(err => {
  console.log(err) ;
}) ;

app.use(dbStatus) ;
app.use("/users" , userRouter) ;
app.use("/users/:userId/tasks" , taskRouter) ;
app.use("/auth" , authRouter) ;









