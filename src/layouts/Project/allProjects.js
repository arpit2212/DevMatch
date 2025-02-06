import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearch, IoClose } from 'react-icons/io5';
import ProjectData from '../../mockData/ProjectData';

const AllProjects = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter the hackathons based on the search input
  const filteredProjects = ProjectData.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate pagination details
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  // Change page
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-gradient-to-r from-white via-gray-100 to-white min-h-screen p-6 relative overflow-hidden mt-12">
      {/* Background animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-96 h-96 bg-indigo-300 opacity-30 rounded-full blur-2xl absolute top-10 left-10 animate-slow-pulse"></div>
        <div className="w-80 h-80 bg-blue-300 opacity-40 rounded-full blur-2xl absolute bottom-10 right-20 animate-slow-pulse"></div>
      </div>

      <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-10 drop-shadow-md">All Projects</h2>

      {/* Search bar with icon */}
      <div className="flex items-center border-2 border-indigo-300 hover:border-indigo-600 px-4 py-3 rounded-full shadow-lg mb-10 w-full max-w-md mx-auto bg-white backdrop-blur-sm">
        <IoSearch className="text-indigo-500 mr-3 text-xl" />
        <input
          type="text"
          placeholder="Search Projects"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // Reset to first page on search
          }}
          className="flex-grow bg-transparent border-none focus:outline-none text-gray-700 text-lg"
        />
        {search && (
          <IoClose
            className="text-indigo-500 text-xl cursor-pointer"
            onClick={() => {
              setSearch('');
              setCurrentPage(1); // Reset to first page on clear
            }}
          />
        )}
      </div>

      {/* Show message if no hackathons are found */}
      {filteredProjects.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No Projects Found</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {currentItems.map((project) => (
              <Link
                key={project.id}
                to={`/Project/${project.id}`}
                className="relative bg-gradient-to-t from-white via-gray-200 to-white text-black rounded-xl shadow-lg border border-gray-200 p-6 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="absolute inset-0 border-2 border-indigo-400 rounded-xl group-hover:border-indigo-600 group-hover:border-spacing-6 animate-border-motion"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2 text-indigo-700">{project.title}</h3>
                <p className="text-black mb-3">{project.description}</p>
                <p className="text-sm text-black mb-1">Location: {project.location}</p>
                <p className="text-sm text-gray-600">Date: {project.date}</p>
                <div
                  className="mt-4 inline-block bg-indigo-500 border text-white py-2 px-5 rounded-xl shadow hover:bg-indigo-600 transition-colors text-center"
                >
                  View Details
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-10 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 py-2 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 transition disabled:opacity-50"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-full shadow ${
                  currentPage === index + 1
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } transition`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 transition disabled:opacity-50"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AllProjects;
