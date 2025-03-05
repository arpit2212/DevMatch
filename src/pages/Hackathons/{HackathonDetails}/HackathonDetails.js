import React, { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import hackathonData from '../../../mockData/HackathonData';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import ParticipantDetails from '../../../layouts/Hackathon/ParticipantDetails'; // Import the new component
import axios from 'axios';

const HackathonDetail = () => {
  const { id } = useParams();
  const hackathonId = parseInt(id);
  const [hackathon,setHackathonData] = useState([]);
  const [isApplyNowOpen, setApplyNowOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
      const fetchHackathon = async()=>{
        try{
          const response = await axios.get(`http://127.0.0.1:8787/hackathon/${id}`);
          setHackathonData(response.data[0]);
          console.log(response.data)
        }catch(e){
          console.log('Error occured while getting hackathon');
          
        }
      }
      fetchHackathon();
  },[])

  if (!hackathon) {
    return <div className="text-center text-red-500 mt-10">Hackathon not found!</div>;
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
          {/* Banner Section */}
          <div className="relative overflow-hidden">
            <img
              src={hackathon.banner_image}
              alt={hackathon.hackathon_name}
              className="w-full h-[400px] object-cover transform scale-110"
            />
          </div>

          {/* Title and Organizer Section */}
          <div className="mt-6 px-6 py-4 bg-white shadow-lg rounded-lg mx-6">
            <h1 className="text-4xl font-extrabold text-indigo-800">{hackathon.hackathon_name}</h1>
            <p className="mt-3 text-lg font-medium text-opacity-80">
              Organized by: {hackathon.organizer}
            </p>
          </div>

          {/* Details Section */}
          <div className="p-6 bg-white shadow-lg mx-6 rounded-lg mt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={hackathon.logo_image}
                alt={`${hackathon.hackathon_name} Logo`}
                className="w-32 h-32 object-contain mx-auto md:mx-0"
              />
              <div>
                <p className="text-gray-700 text-lg">{hackathon.description}</p>
                <div className="mt-4 space-y-2">
                  <p>
                    <span className="font-bold">Date: {hackathon.start_date} - {hackathon.end_date}</span>
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
            {/* <ul className="mt-4 bg-white shadow-md rounded-lg p-4 divide-y divide-gray-200">
              {hackathon.schedule.map((event, index) => (
                <li key={index} className="py-2">
                  <span className="font-bold">{event.time}:</span> {event.activity}
                </li>
              ))}
            </ul> */}
            {hackathon.schedule}
          </div>

          {/* Rules Section */}
          <div className="mt-8 mx-6">
            <h2 className="text-2xl font-bold text-gray-800">Rules</h2>
            {/* <ul className="mt-4 bg-white shadow-md rounded-lg p-4 list-disc list-inside">
              {hackathon.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul> */}
            {hackathon.hackathon_rules}
          </div>

          {/* Prize Details Section */}
          <div className="mt-8 mx-6">
            <h2 className="text-2xl font-bold text-gray-800">Prizes</h2>
            {/* <ul className="mt-4 bg-white shadow-md rounded-lg p-4">
              {hackathon.prizeDetails.map((prize, index) => (
                <li key={index} className="py-2">
                  <span className="font-bold">{prize.place}:</span> {prize.prize}
                </li>
              ))}
            </ul> */}
            {hackathon.prize_details}
          </div>

          {/* Contact Section */}
          <div className="mt-8 mx-6">
            <h2 className="text-2xl font-bold text-gray-800">Contact</h2>
            <div className="mt-4 bg-white shadow-md rounded-lg p-4 space-y-2">
              <p>
                <span className="font-bold">Email:</span>{' '}
                <a href={`mailto:${hackathon.contact_email}`} className="text-blue-600">
                  {hackathon.contact_email}
                </a>
              </p>
              <p>
                <span className="font-bold">Phone:</span> {hackathon.contact_phone}
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
        <div className="fixed inset-0 righ bg-opacity-50 flex justify-center items-center z-50 text-white">
         
           
              
             
            
            
            <ParticipantDetails />
          
        </div>
      )}

      <Footer />
    </div>
  );
};

export default HackathonDetail;
