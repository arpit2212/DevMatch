import React from 'react';

import featimg1 from '../assets/images/landingPage/postHackathon.png';
import featimg2 from '../assets/images/landingPage/hackathon.png';
import featimg3 from '../assets/images/landingPage/project.png';
import featimg4 from '../assets/images/landingPage/postporject.png';
import featimg5 from '../assets/images/landingPage/postpartner.png';
import featimg6 from '../assets/images/landingPage/findpartner.jpg';

const FeatureCard = ({ title, description, imageSrc, onButtonClick }) => {
  return (
    <div id="lading-features" className="flex items-center p-6 border rounded-md shadow-sm">
      {/* Image on the left side */}
      <div className="w-40 h-40 mr-6">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      {/* Text content on the right side */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          className="px-4 py-2 bg-black hover:bg-blue-500 text-white rounded-md"
          onClick={onButtonClick}
        >
          Try Yourself
        </button>
      </div>
    </div>
  );
};

const LadingFeatures = () => {
  const features = [
    {
      title: 'Post Hackathon',
      description:
        'Easily post your hackathon details to attract the right participants and sponsors.',
      imageSrc:
        featimg1, // Replace with actual image URL
    },
    {
      title: 'Apply for Hackathon',
      description:
        'Discover exciting hackathons and apply to showcase your skills and projects.',
      imageSrc:
      featimg2,    },
    {
      title: 'Post Project',
      description:
        'Share project ideas and find team members or collaborators to bring them to life.',
      imageSrc:
      featimg3,
    },
    {
      title: 'Apply for Project',
      description:
        'Browse through available projects and join one that aligns with your expertise.',
      imageSrc:
      featimg4,
    },
    {
      title: 'Post for Partner',
      description:
        'Looking for a partner for your venture? Post your requirements here.',
      imageSrc:
      featimg5,
    },
    {
      title: 'Apply for Partner',
      description:
        'Explore partnership opportunities and apply to collaborate with like-minded individuals.',
      imageSrc:
      featimg6,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Features of DevMatch</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              onButtonClick={() =>
                alert(`You clicked for: ${feature.title}`)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LadingFeatures;
