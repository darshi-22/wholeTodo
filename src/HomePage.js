import React from 'react'
import axios from'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function HomePage() {
    const [name,setName]=useState('');
    const [task,setTask]=useState('');
    const navigate=useNavigate();
    const submitHandler=async()=>{
         await axios.post('http://localhost:5000/submit',{
            name,task
         })
         navigate('/table')
    }
  return (
    <div>
      Name:  
      <input type='text' value={name} onChange={e=>setName(e.target.value)}/><br/>
      Task:
      <input type='text' value={task} onChange={e=>setTask(e.target.value)}/><br/>
    <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default HomePage
