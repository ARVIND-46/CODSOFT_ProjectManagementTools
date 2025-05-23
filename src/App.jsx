import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProjectForm from './pages/ProjectForm';
import ProjectDashboard from './pages/ProjectDashboard';

const App = () => {
  const [projects, setProjects] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage projects={projects} />} />
        <Route path="/home" element={<ProjectForm setProjects={setProjects} />} />
        <Route path="/ProjectDasboard" element={<ProjectDashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;
