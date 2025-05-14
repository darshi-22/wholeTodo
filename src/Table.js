import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Table() {

  const [data,setData]=useState([]);
  useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/getTask`)
            .then(res => setData(res.data));
    }, []);

  return (
    <div>
      <table border='1'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Task</th>
            </tr>
        </thead>
        <tbody>
            {data.map((entry,index)=>(
                <tr key={index}>
                    <td>{entry.name}</td>
                    <td>{entry.task}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
