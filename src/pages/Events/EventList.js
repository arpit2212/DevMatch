import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


import EventsHeader from '../../layouts/Event/EventHeader';
import AllEvents from '../../layouts/Event/allEvents';


function EventsList() {
  return (
    <div>
      
    <Header />

<EventsHeader/>
<AllEvents/>

<Footer />
    </div>
  );
};

export default EventsList
