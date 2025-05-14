const Task=require('../models/task')
const createTask=async(req,res)=>{
    const {name,task}=req.body;
    try{
        const newTask=new Task({name,task});
        await newTask.save();
        res.status(201).send('Task saved');
    }
    catch(e){
        res.status(400).send('Error saving task');
    }
}
const getTask=async(req,res)=>{
    try{
        const tasks=await Task.find();
        res.json(tasks);
    }
    catch(e){
        res.status(500).send('Error getting task');
    }
}
module.exports={createTask,getTask};