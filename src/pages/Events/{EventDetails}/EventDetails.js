import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import eventData from '../../../mockData/EventData';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import ParticipantDetails from '../../../layouts/Event/EventParticipantDetails';

const EventDetail = () => {
  const { id } = useParams();
  const eventId = parseInt(id);
  const event = eventData.find((item) => item.id === eventId);
  const [isApplyNowOpen, setApplyNowOpen] = useState(false);
  const navigate = useNavigate();

  if (!event) {
    return <div className="text-center text-red-500 mt-10">Event not found!</div>;
  }

  const handleChat = () => {
    navigate("/chat");
  };

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
          <div className="relative overflow-hidden">
            <img
              src={event.bannerImage}
              alt={event.title}
              className="w-full h-[400px] object-cover transform scale-110"
            />
          </div>

          <div className="mt-6 px-6 py-4 bg-white shadow-lg rounded-lg mx-6">
            <h1 className="text-4xl font-extrabold text-indigo-800">{event.title}</h1>
            <p className="mt-3 text-lg font-medium text-opacity-80">Organized by: {event.organizer}</p>
          </div>

          <div className="p-6 bg-white shadow-lg mx-6 rounded-lg mt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={event.logoImage}
                alt={`${event.title} Logo`}
                className="w-32 h-32 object-contain mx-auto md:mx-0"
              />
              <div>
                <p className="text-gray-700 text-lg">{event.description}</p>
                <div className="mt-4 space-y-2">
                  <p><span className="font-bold">Date:</span> {event.date}</p>
                  <p><span className="font-bold">Location:</span> {event.location}</p>
                  <p><span className="font-bold">Mode:</span> {event.mode}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 mx-6">
            <h2 className="text-2xl font-bold text-gray-800">Schedule</h2>
            <ul className="mt-4 bg-white shadow-md rounded-lg p-4 divide-y divide-gray-200">
              {event.schedule.map((eventItem, index) => (
                <li key={index} className="py-2">
                  <span className="font-bold">{eventItem.time}:</span> {eventItem.activity}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 mx-6">
            <h2 className="text-2xl font-bold text-gray-800">Contact</h2>
            <div className="mt-4 bg-white shadow-md rounded-lg p-4 space-y-2">
              <p>
                <span className="font-bold">Email:</span>
                <a href={`mailto:${event.contactEmail}`} className="text-blue-600"> {event.contactEmail}</a>
              </p>
              <p><span className="font-bold">Phone:</span> {event.contactPhone}</p>
            </div>
          </div>

          <div className="mt-8 mx-6 flex justify-center">
            <button
              onClick={handleApplyNow}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
            >
              Apply Now
            </button>
          </div>

          <div className="mt-8 mx-6 flex justify-center">
            <button
              onClick={handleChat}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
            >
              Chat with the Organizer
            </button>
          </div>
        </div>
      </div>

      {isApplyNowOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 text-white">
          <ParticipantDetails onClose={handleClosePopup} />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default EventDetail;
