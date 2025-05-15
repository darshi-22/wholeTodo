const path = require('path');
const fs = require('fs');
const express = require('express');
const connectDB = require('./connectDB');
const { createTask, getTask } = require('./controllers/taskController');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

// ✅ FIXED PATH HERE
const clientBuildPath = path.join(__dirname, '../build');
if (fs.existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

app.post('/submit', createTask);
app.get('/getTask', getTask);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
