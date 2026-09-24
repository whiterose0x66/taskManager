const express = require("express");
const keys = require("./config/index.js") ;
const app = express() ;











app.listen(() => {
  console.log(`server listens on port ${keys.PORT}`) ;
})

