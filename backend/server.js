const express = require('express');
const connectDB = require('./connectDB');
const { createTask, getTask } = require('./controllers/taskController');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// API routes first
app.post('/submit', createTask);
app.get('/getTask', getTask);

// Serve React frontend if build exists
const clientBuildPath = path.join(__dirname, '../client/build');

if (fs.existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
