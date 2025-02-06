import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import ProjectHeader from '../../layouts/Project/ProjectHeader';
import AllProjects from '../../layouts/Project/allProjects';


function ProjectList() {
  return (
    <div>
      
    <Header />
<ProjectHeader/>
<AllProjects/>


<Footer />
    </div>
  );
};

export default ProjectList
