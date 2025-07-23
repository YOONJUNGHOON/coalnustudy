const express = require("express")
const router = express.Router()

router.post("/",(req,res)=>{
  res.send('create tasks');
});

router.get("/",(req,res)=>{
  res.send('get tasks');
});

router.put("/:id",(req,res)=>{
  res.send('update task');
});

router.delete("/:id",(req,res)=>{
  res.send('update task');
});

module.exports = router;