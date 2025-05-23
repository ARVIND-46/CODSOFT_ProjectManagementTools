import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Style.css';

const ProjectForm = ({ setProjects }) => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  const navigate = useNavigate();

  const handleAddTask = () => {
    if (taskName.trim() === '') return;
    setTasks([...tasks, { name: taskName }]);
    setTaskName('');
  };

  // New function to remove task by index
  const handleRemoveTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      name: projectName,
      description,
      deadline,
      tasks,
    };

    setProjects((prev) => [...prev, newProject]);

    setProjectName('');
    setDescription('');
    setDeadline('');
    setTasks([]);

    navigate('/');
  };

  return (
    <div className="project-form-container">
      <h1>Create Project</h1>
      <form onSubmit={handleSubmit}>
        <label>Project Name:</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter project description... "
        />

        <label>Deadline:</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />

        <label>Add Task:</label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter task name"
          />
          <button type="button" onClick={handleAddTask}>+ Add Task</button>
        </div>

        {tasks.length > 0 && (
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {task.name}
                <button
                  type="button"
                  onClick={() => handleRemoveTask(index)}
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    padding: '2px 6px'
                  }}
                >
                   X
                </button>
              </li>
            ))}
          </ul>
        )}

        <button type="submit">Create Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;
