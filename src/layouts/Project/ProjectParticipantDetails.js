import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectParticipantDetails = () => {
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
  

  const handleLeaderChange = (event) => {
    setTeamLeader({
      ...teamLeader,
      [event.target.name]: event.target.value
    });
  };


    const [resume, setResume] = useState(null)
  

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
  const handleResumeChange = (event) => {
    event.preventDefault();
    if (resume) {
      console.log("Resume submitted:", resume);
      // You can now upload the file to a server or process it further
    } else {
      console.log("No resume selected");
    }
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
          

          {/* Team Leader Details */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Your Details</h3>
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
                <label className="block text-gray-700 font-semibold">Tech Stack</label>
                <input
                  type="text"
                  name="Tech Stack"
                  value={teamLeader.TechStack}
                  onChange={handleLeaderChange}
                  className="w-full p-3 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Experience</label>
                <input
                  type="text"
                  name="Experience"
                  value={teamLeader.Experience}
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
              <div>
  <label className="block text-gray-700 font-semibold">Resume</label>
  <input
    type="file"
    name="resume"
    onChange={handleResumeChange} // Assuming you have a function to handle file changes
    className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    required
  />
</div>
            </div>
          </div>

          {/* Team Member Details */}
          
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

export default ProjectParticipantDetails;
