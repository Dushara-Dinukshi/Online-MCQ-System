const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// MongoDB connection URL (replace with your full connection string)
mongoose.connect('mongodb+srv://mcquser:12345SE@cluster0.r7wom5q.mongodb.net/mcqDB?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('MCQ backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
