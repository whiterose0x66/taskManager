import mongoose from "mongoose" ;

//error middleware.
function dbStatus(req , res , next) {
  const isConnected = mongoose.connection.readyState === 1 ;
  if (!isConnected) {
    return res.status(503).sendFile("/home/whiterose/Code/projects/TaskManager/backend/public/error.html") ;
  }
  next() ;
}


export {dbStatus} ;
