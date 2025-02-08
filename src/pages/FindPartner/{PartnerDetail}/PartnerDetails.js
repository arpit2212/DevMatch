import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FindPartnerData } from "../../../mockData/FindPartner"; // Ensure correct import
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ProjectParticipantDetails from "../../../layouts/Project/ProjectParticipantDetails";

const PartnerDetails = () => {
  const { id } = useParams();
  const ProjectId = parseInt(id);
  const Project = FindPartnerData.find((item) => item.id === ProjectId);

  const [isApplyNowOpen, setApplyNowOpen] = useState(false);
  const navigate = useNavigate();

  if (!Project) {
    return <div className="text-center text-red-500 mt-10">Project not found!</div>;
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

      <div className="font-sans bg-gradient-to-r from-indigo-100 via-white to-indigo-100 min-h-screen p-6">
        {/* Banner Section */}
        <div className="relative overflow-hidden">
          <img
            src={Project.image}
            alt={Project.title}
            className="w-full h-[400px] object-cover transform scale-110"
          />
        </div>

        {/* Title and Organizer Section */}
        <div className="mt-6 px-6 py-4 bg-white shadow-lg rounded-lg mx-6">
          <h1 className="text-4xl font-extrabold text-indigo-800">{Project.title}</h1>
          <p className="mt-3 text-lg font-medium">Organized by: {Project.organizedBy}</p>
        </div>

        {/* Details Section */}
        <div className="p-6 bg-white shadow-lg mx-6 rounded-lg mt-6">
          <p className="text-gray-700 text-lg">{Project.description}</p>
          <div className="mt-4 space-y-2">
            <p><span className="font-bold">Date Posted:</span> {Project.datePosted}</p>
            <p><span className="font-bold">Location:</span> {Project.location}</p>
            <p><span className="font-bold">Duration:</span> {Project.duration}</p>
            <p><span className="font-bold">Team Size:</span> {Project.teamSize}</p>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-8 mx-6">
          <h2 className="text-2xl font-bold text-gray-800">Skills Required</h2>
          <ul className="mt-4 bg-white shadow-md rounded-lg p-4 list-disc list-inside">
            {Project.skillsRequired?.length > 0 ? (
              Project.skillsRequired.map((skill, index) => <li key={index}>{skill}</li>)
            ) : (
              <li>No skills specified</li>
            )}
          </ul>
        </div>

        {/* Looking For Section */}
        <div className="mt-8 mx-6">
          <h2 className="text-2xl font-bold text-gray-800">Looking For</h2>
          <ul className="mt-4 bg-white shadow-md rounded-lg p-4 list-disc list-inside">
            {Project.lookingFor?.length > 0 ? (
              Project.lookingFor.map((role, index) => <li key={index}>{role}</li>)
            ) : (
              <li>No roles specified</li>
            )}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mt-8 mx-6">
          <h2 className="text-2xl font-bold text-gray-800">Contact</h2>
          <div className="mt-4 bg-white shadow-md rounded-lg p-4 space-y-2">
            <p>
              <span className="font-bold">Email:</span>{" "}
              <a href={`mailto:${Project.contactInformation?.email || ""}`} className="text-blue-600">
                {Project.contactInformation?.email || "Not provided"}
              </a>
            </p>
            <p>
              <span className="font-bold">Phone:</span> {Project.contactInformation?.phone || "Not provided"}
            </p>
          </div>
        </div>

        {/* Apply Now Button */}
        <div className="mt-8 mx-6 flex justify-center">
          <button
            onClick={handleApplyNow}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Apply Now
          </button>
        </div>

        {/* Chat Button */}
        <div className="mt-8 mx-6 flex justify-center">
          <button
            onClick={handleChat}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Chat with the Organizer
          </button>
        </div>
      </div>

      {/* Popup for Apply Now */}
      {isApplyNowOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={handleClosePopup}>
              X
            </button>
            <ProjectParticipantDetails />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PartnerDetails;
