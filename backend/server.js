const express=require('express');
const connectDB=require('./connectDB');
const { createTask, getTask } = require('./controllers/taskController');
const cors=require('cors');

const app=express();
app.use(cors())
app.use(express.json())
connectDB();

app.post('/submit',createTask);
app.get('/getTask',getTask);
app.listen(5000,()=>{
    console.log('Server started at port 5000');
})