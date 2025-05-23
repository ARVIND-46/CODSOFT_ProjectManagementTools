import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Style.css';

const Landing = ({ projects }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/ProjectDasboard');
  };

  return (
    <>
      <div className="landing-container">
        <h1>Welcome to Project Manager</h1>
        <button onClick={() => navigate('/home')}>Create Project</button>
      </div>

      <div className="project-updation" onClick={handleClick}>
        {projects.length === 0 ? (
          <p>No projects created yet.</p>
        ) : (
          projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.name}</h3>
              <p><strong>Deadline:</strong> {new Date(project.deadline).toLocaleDateString()}</p>
              <p><strong>Tasks:</strong> {project.tasks.length}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Landing;
