import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ParticipantDetails = () => {
  const [teamName, setTeamName] = useState('');
  const [teamLeader, setTeamLeader] = useState({
    name: '',
    email: '',
    contact: '',
    college: ''
  });
  const [members, setMembers] = useState([
    { name: '', email: '', contact: '', college: '' }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(true); // State to control modal visibility
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleInputChange = (index, event) => {
    const updatedMembers = [...members];
    updatedMembers[index][event.target.name] = event.target.value;
    setMembers(updatedMembers);
  };

  const handleLeaderChange = (event) => {
    setTeamLeader({
      ...teamLeader,
      [event.target.name]: event.target.value
    });
  };

  const handleAddMember = () => {
    setMembers([
      ...members,
      { name: '', email: '', contact: '', college: '' }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Team Name:', teamName);
    console.log('Team Leader:', teamLeader);
    console.log('Team Members:', members);

    // Show alert after successful registration
    alert('Test registration successful!');

    // Redirect to the respective hackathon page (assuming 'hackathonId' is available in the URL)
     
    setIsModalOpen(false);// Replace `teamName` with actual hackathon ID if applicable
  };

  const handleClose = () => {
    setIsModalOpen(false); // Close the modal when the close button is clicked
  };

  return (
    isModalOpen && (  // Conditionally render the modal based on isModalOpen state
      <div className="flex justify-center items-center min-h-screen bg-gray-700 bg-opacity-50 fixed inset-0 z-50">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-xl p-6 rounded-lg shadow-lg overflow-y-auto"
          style={{ height: 'auto', maxHeight: '90vh', overflowY: 'auto' }}
        >
          <div className="absolute top-2 right-2 text-gray-500 cursor-pointer ">
            <button type="button" className="text-4xl text-black hover:text-red-600 mt-12 " onClick={handleClose}>
              &times;
            </button>
          </div>

          {/* Team Name */}
          <div className="mb-6">
            <h2 className="text-gray-800 font-semibold text-lg mb-4">Fill up your details for registration</h2>
            <label className="block text-gray-700 font-semibold mb-2">Team Name</label>
            <input
              type="text"
              name="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Team Leader Details */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Team Leader Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={teamLeader.name}
                  onChange={handleLeaderChange}
                  className="w-full p-3 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={teamLeader.email}
                  onChange={handleLeaderChange}
                  className="w-full p-3 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={teamLeader.contact}
                  onChange={handleLeaderChange}
                  className="w-full p-3 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">College</label>
                <input
                  type="text"
                  name="college"
                  value={teamLeader.college}
                  onChange={handleLeaderChange}
                  className="w-full p-3 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Team Member Details */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Team Member Details</h3>
            {members.map((member, index) => (
              <div key={index} className="space-y-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-semibold">Member {index + 1} Name</label>
                  <input
                    type="text"
                    name="name"
                    value={member.name}
                    onChange={(e) => handleInputChange(index, e)}
                    className="w-full p-3 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={member.email}
                    onChange={(e) => handleInputChange(index, e)}
                    className="w-full p-3 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">Contact</label>
                  <input
                    type="text"
                    name="contact"
                    value={member.contact}
                    onChange={(e) => handleInputChange(index, e)}
                    className="w-full p-3 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">College</label>
                  <input
                    type="text"
                    name="college"
                    value={member.college}
                    onChange={(e) => handleInputChange(index, e)}
                    className="w-full p-3 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>
            ))}
            {/* Add Member Button */}
            <button
              type="button"
              onClick={handleAddMember}
              className="w-full py-3 bg-indigo-600  text-white rounded-lg hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Add Team Member
            </button>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default ParticipantDetails;
