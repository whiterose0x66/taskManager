import mongoose from "mongoose" ;
import dotenv from "dotenv" ;

dotenv.config();

async function connect() {
  await mongoose.connect(process.env.MONGODB) ;
}

export {connect} ;


