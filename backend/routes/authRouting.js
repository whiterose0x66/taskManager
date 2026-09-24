import express from "express" ;
import { loginAuth , googleAuth } from "../controllers/authController";


const authRouter = express.Router() ;


authRouter.create('/login' , loginAuth) ;
authRouter.create('/google', googleAuth) ;


export {authRouter} ;

