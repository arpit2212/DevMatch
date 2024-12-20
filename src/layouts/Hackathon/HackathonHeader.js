import React from "react";
import Rightimg from "../../assets/images/Hacakthon/right-img.png"; // Adjust the import path if needed

const HackathonHeader = () => {
  return (
    <div className="flex relative bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white items-center justify-center h-screen overflow-hidden">
      {/* Firefly effect */}

      {/* Animated shapes */}

      {/* Content Section */}
      <div className="flex relative z-10 px-4 flex-col lg:flex-row justify-center content-center items-center  lg:justify-between w-full max-w-7xl">
        {/* Left Side Content */}
        <div className="text-center lg:text-left lg:w-1/2 content-center ">
          <h1 className="text-5xl md:text-5xl font-bold leading-tight">
           <span className="text-[#3646F5]">Hackathon :</span> A Platform for Innovation 
          </h1>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto lg:mx-0">
          Hackathons are more than just events – they are innovation hubs where bright ideas meet real-world impact. Imagine a space buzzing with energy, filled with visionaries collaborating to solve pressing challenges. Whether you’re a coder, designer, or creative thinker, hackathons offer a golden opportunity to showcase your talent, connect with like-minded individuals, and turn dreams into reality.          </p>

          <div className="flex justify-center lg:justify-start items-center mt-8 gap-4">
            <button
              className="px-6 py-3 border-2  bg-black border-[#3646F5] rounded hover:bg-[#3646F5] hover:border-[#3646F5] hover:text-white"
              onClick={() => (window.location.href = '/createBlog')}
            >
              Create Hackathon
            </button>
            <button
              className="px-6 py-3 border-2  bg-[#3646F5] border-[#3646F5] text-white  rounded hover:bg-black hover:border-[#3646F5] hover:text-white"
              onClick={() => (window.location.href = '/readBlog')}
            >
              View All Hackathon
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
          <img
            src={Rightimg}
            alt="Blog Illustration"
            className="w-3/4 md:w-2/3 rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Firefly and shape animation CSS */}
      <style jsx>{`
        .firefly {
          position: absolute;
          border-radius: 50%;
          opacity: 0;
          animation: firefly-animation 10s infinite;
        }

        @keyframes firefly-animation {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(calc(100vw - 50px), calc(100vh - 50px));
            opacity: 0;
          }
        }

        .animate-shape {
          position: absolute;
          animation: shape-animation 6s infinite ease-in-out;
        }

        @keyframes shape-animation {
          0% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-50px) rotate(180deg);
          }
          100% {
            transform: translateY(0) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default HackathonHeader;
