// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your actual MongoDB URI
mongoose.connect('mongodb+srv://2499009:<db_password>@cluster0.k5ezbqn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error(' MongoDB connection error:', err));

// Schema
const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  deadline: Date,
  tasks: [{ name: String, description: String, status: String }]
});
const Project = mongoose.model('Project', projectSchema);

// API
app.post('/api/projects', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json({ message: 'Project saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save project' });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
