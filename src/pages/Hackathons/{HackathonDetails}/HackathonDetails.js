import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import hackathonData from '../../../mockData/hackathonAndProjectShortdata';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import ParticipantDetails from '../../../layouts/Hackathon/ParticipantDetails'; // Import the new component

const HackathonDetail = () => {
  const { id } = useParams();
  const hackathonId = parseInt(id);
  const hackathon = hackathonData.find((item) => item.id === hackathonId);
  const [isApplyNowOpen, setApplyNowOpen] = useState(false);

  if (!hackathon) {
    return <div className="text-center text-red-500 mt-10">Hackathon not found!</div>;
  }

  const handleApplyNow = () => {
    setApplyNowOpen(true);
  };

  const handleClosePopup = () => {
    setApplyNowOpen(false);
  };

  return (
    <div>
      <Header />

      <div className="font-sans">
        <div className="bg-gradient-to-r from-indigo-100 via-white to-indigo-100 min-h-screen p-6 relative overflow-hidden mt-12">
          {/* Banner Section */}
          <div className="relative overflow-hidden">
            <img
              src={hackathon.bannerImage}
              alt={hackathon.title}
              className="w-full h-[400px] object-cover transform scale-110"
            />
          </div>

          {/* Title and Organizer Section */}
          <div className="mt-6 px-6 py-4 bg-white shadow-lg rounded-lg mx-6">
            <h1 className="text-4xl font-extrabold text-indigo-800">{hackathon.title}</h1>
            <p className="mt-3 text-lg font-medium text-opacity-80">
              Organized by: {hackathon.organizer}
            </p>
          </div>

          {/* Details Section */}
          <div className="p-6 bg-white shadow-lg mx-6 rounded-lg mt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={hackathon.logoImage}
                alt={`${hackathon.title} Logo`}
                className="w-32 h-32 object-contain mx-auto md:mx-0"
              />
              <div>
                <p className="text-gray-700 text-lg">{hackathon.description}</p>
                <div className="mt-4 space-y-2">
                  <p>
                    <span className="font-bold">Date:</span> {hackathon.date}
                  </p>
                  <p>
                    <span className="font-bold">Location:</span> {hackathon.location}
                  </p>
                  <p>
                    <span className="font-bold">Mode:</span> {hackathon.mode}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule Section */}
          <div className="mt-8 mx-6">
            <h2 className="text-2xl font-bold text-gray-800">Schedule</h2>
            <ul className="mt-4 bg-white shadow-md rounded-lg p-4 divide-y divide-gray-200">
              {hackathon.schedule.map((event, index) => (
                <li key={index} className="py-2">
                  <span className="font-bold">{event.time}:</span> {event.activity}
                </li>
              ))}
            </ul>
          </div>

          {/* Rules Section */}
          <div className="mt-8 mx-6">
            <h2 className="text-2xl font-bold text-gray-800">Rules</h2>
            <ul className="mt-4 bg-white shadow-md rounded-lg p-4 list-disc list-inside">
              {hackathon.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* Prize Details Section */}
          <div className="mt-8 mx-6">
            <h2 className="text-2xl font-bold text-gray-800">Prizes</h2>
            <ul className="mt-4 bg-white shadow-md rounded-lg p-4">
              {hackathon.prizeDetails.map((prize, index) => (
                <li key={index} className="py-2">
                  <span className="font-bold">{prize.place}:</span> {prize.prize}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mt-8 mx-6">
            <h2 className="text-2xl font-bold text-gray-800">Contact</h2>
            <div className="mt-4 bg-white shadow-md rounded-lg p-4 space-y-2">
              <p>
                <span className="font-bold">Email:</span>{' '}
                <a href={`mailto:${hackathon.contactEmail}`} className="text-blue-600">
                  {hackathon.contactEmail}
                </a>
              </p>
              <p>
                <span className="font-bold">Phone:</span> {hackathon.contactPhone}
              </p>
            </div>
          </div>

          {/* Apply Now Button */}
          <div className="mt-8 mx-6 flex justify-center">
            <button
              onClick={handleApplyNow}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
               // Ensure the button stays on top
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {isApplyNowOpen && (
        <div className="fixed inset-0 righ bg-opacity-50 flex justify-center items-center z-50 text-white">
         
           
              
             
            
            
            <ParticipantDetails />
          
        </div>
      )}

      <Footer />
    </div>
  );
};

export default HackathonDetail;
