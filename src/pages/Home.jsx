import React from 'react';
import ProjectForm from './ProjectForm';

const Home = ({ onCreateProject, projects }) => {
  return (
    <div>
      <ProjectForm onSubmit={onCreateProject} />
    </div>
  );
};

export default Home;
