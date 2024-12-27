import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';

import HackathonsList from './pages/Hackathons/HackathonsList';
import CreateHackathon from './pages/Hackathons/CreateHackathon'
import ApplyHackathon from './pages/Hackathons/ApplyHackathon';
import HackathonDetails from './pages/Hackathons/{HackathonDetails}/HackathonDetails';

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
      </Routes>
    </Router>
  </React.StrictMode>
);

