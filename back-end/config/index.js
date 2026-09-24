const dotenv = require("dotenv") ;
dotenv.config() ;

const keys = {
  PORT : process.env.PORT ,
  NODE_ENV : process.env.NODE_ENV
} ;

module.exports = keys ;

