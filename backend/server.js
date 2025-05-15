const express = require('express');
const connectDB = require('./connectDB');
const { createTask, getTask } = require('./controllers/taskController');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// ✅ Define your backend API routes first
app.post('/submit', createTask);
app.get('/getTask', getTask);

// ✅ Serve frontend only after defining API routes
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(5000, () => {
  console.log('Server started at port 5000');
});
