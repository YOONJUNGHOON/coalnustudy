const taskController = {}

taskController.createTask =async (req,res) => {
  try{
  
  
    const {task,isComplete} = req.body;
    const newTask = new task({task,isComplete});
    await newTask.save();
    res.status(200).json({status: 'ok', data:newTask});

  }catch(err){
    res.stauts(400).json({status: 'fail',error:err})
  }

};

taskController.getTask = async (req,res) => {
  try{
    const taskList = await Task.find({}).select("-__v");
    res.status(200).json({status:"ok",data: taskList});

  }catch(err){
    res.status(400).json({status: 'fail',error:err});

  }
}


taskController.updateTask = async (req,res) => {
  try{
    const {id} = req.params;
    const {task, isComplete} = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {task, isComplete},
      {new: true}
    );

    res.status(200).json({ status: 'ok', data: updatedTask });

  }catch(err){
    res.status(400).json({ status: 'fail', error: err });

  }
}

taskController.deleteTask = async (req,res) => {
  try{
    const {id} = req.params;
    const deletedTask = await Task.FindByIdAndDelete(id);

    res.status(200).json({ status: 'ok', data: deletedTask });

  }catch(err){
    res.status(400).json({ status: 'fail', error: err });

  }
}













module.exports = taskController