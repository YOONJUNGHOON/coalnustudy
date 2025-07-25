const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const indexRouter = require("./routes/index");
const app = express();
require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use("/api", indexRouter)
const mongoURI = `mongodb://localhost:27017/todo-demo`;

mongoose
  .connect(mongoURI,{ useNewUrlParser:true})
  .then(() => {
    console.log("mongoose connected");  
})
  .catch((err)=>{
    console.log("DB connection fail",err);
});

app.listen(5000,()=>{
  console.log("server on 5000");
});