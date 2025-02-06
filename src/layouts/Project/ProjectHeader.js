import React from "react";
import RightimgProject from "../../assets/images/Project/right-img_Project.png"; // Adjust the import path if needed

const ProjectHeader = () => {
  return (
    <div className="relative text-white h-screen overflow-hidden flex items-center justify-center mt-10 ">
      {/* Moving Wave Background with Black and Blue */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#1d1d23] animate-wave"></div>

      {/* Twinkling Stars Effect */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full overflow-hidden">
          {[...Array(500)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-0 animate-twinkle"
              style={{
                width: `2px`, // Fixed size for all stars
                height: `2px`,
                top: `${Math.random() * 100}%`, // Random vertical position
                left: `${Math.random() * 100}%`, // Random horizontal position
                animationDuration: `${Math.random() * 1 + 3}s`, // Random duration between 3s and 8s
                animationDelay: `${Math.random() * 3}s`, // Random delay up to 5s
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 px-4 flex flex-col lg:flex-row justify-center items-center lg:justify-between w-full max-w-7xl mt-16 mb-16 sm:mt-20 sm:mb-20">
        {/* Left Side Content */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-[#3646F5]">Projects :</span>  A Platform for Collaboration
          </h1>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
          Projects are more than just ideas – they are opportunities for innovation and teamwork. Imagine a space where creators, developers, and visionaries come together to bring projects to life. Whether you're looking to start a new initiative, contribute your skills, or find the right team members, this platform connects you with like-minded individuals ready to collaborate. Turn your ideas into reality, build something impactful, and be part of a thriving community of innovators.
</p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center mt-6 gap-4">
            <button
              className="px-4 py-2 sm:px-6 sm:py-3 border-2 bg-black border-[#3646F5] rounded hover:bg-[#3646F5] hover:border-[#3646F5] hover:text-white text-sm sm:text-base"
              onClick={() => (window.location.href = '/createProject')}
            >
              Post Projects
            </button>
            <button
              className="px-4 py-2 sm:px-6 sm:py-3 border-2 bg-[#3646F5] border-[#3646F5] text-white rounded hover:bg-black hover:border-[#3646F5] hover:text-white text-sm sm:text-base"
              onClick={() => (window.location.href = '/AllProjects')}
            >
              View All Projects
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="mt-8 lg:mt-0 w-full lg:w-1/2 flex justify-center">
        <img
  src={RightimgProject}
  alt="Blog Illustration"
  className="w-4/6 sm:w-3/4 md:w-2/3 rounded-lg shadow-lg mix-blend-lighten"
/>

        </div>
      </div>

      {/* Tailwind and Custom Animation Styles */}
      <style jsx>{`
        @keyframes wave {
          0% {
            background-position: 0 0;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0 0;
          }
        }

        .animate-wave {
          animation: wave 10s ease-in-out infinite;
          background-size: 200% 200%;
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-twinkle {
          animation: twinkle infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ProjectHeader;
