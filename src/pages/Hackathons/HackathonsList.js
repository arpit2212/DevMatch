import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HackathonHeader from '../../layouts/Hackathon/HackathonHeader';
import AllHackathons from '../../layouts/Hackathon/allHackathons'


function HackathonsList() {
  return (
    <div>
      
    <Header />

<HackathonHeader />

<AllHackathons />

<Footer />
    </div>
  );
};

export default HackathonsList
