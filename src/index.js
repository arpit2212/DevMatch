import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';

import HackathonsList from './pages/Hackathons/HackathonsList';
import CreateHackathon from './pages/Hackathons/CreateHackathon'
import ApplyHackathon from './pages/Hackathons/ApplyHackathon';
import HackathonDetails from './pages/Hackathons/{HackathonDetails}/HackathonDetails';
import ProjectList from './pages/Projects/ProjectsList';
import CreateProject from './pages/Projects/CreateProject';
import ApplyProject from './pages/Projects/ApplyProject';
import ProjectDetail from './pages/Projects/{ProjectDetails}/ProjectDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hackathon" element={<HackathonsList />} />
        <Route path="/createHackathons" element={<CreateHackathon />} />
        <Route path="/AllHackathons" element={<ApplyHackathon />} />
        <Route path="/hackathon/:id" element={<HackathonDetails />} />
        <Route path="/Project" element={<ProjectList/>} />
        <Route path="/AllProjects" element={<ApplyProject />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/createProject" element={<CreateProject />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

