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
import PartnerList from './pages/FindPartner/PartnerList';
import ApplyPartner from './pages/FindPartner/ApplyPartner';
import PartnerDetails from './pages/FindPartner/{PartnerDetail}/PartnerDetails';
import CreatePartner from './pages/FindPartner/CreatePartner';
import ContactUs from './pages/ContactUs/ContactUs';

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
        <Route path="/createProject" element={<CreateProject />} />
        <Route path="/AllProjects" element={<ApplyProject />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/FindPartner" element={<PartnerList/>} />
        <Route path="/createPartner" element={<CreatePartner />} />
        <Route path="/AllFindPartner" element={<ApplyPartner />} />
        <Route path="/findPartner/:id" element={<PartnerDetails />} />
        <Route path="/ContactUs" element={<ContactUs />} />


      
      </Routes>
    </Router>
  </React.StrictMode>
);

