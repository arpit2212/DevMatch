import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../../App.css';
import backgroundImage from '../../assets/images/landingPage/allHackathonBg.png'; // Import background image
import { hackathonData} from '../../mockData/HackathonData';
import { ProjectData } from '../../mockData/ProjectData';

const LandingTophackathon = () => {
  return (
    <div
      className="overflow-hidden relative text-white py-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-4 mt-10 uppercase tracking-wide">
        Apply In Top Hackathons
      </h2>
      <p className="text-center text-base sm:text-lg font-medium mb-8 mt-10 tracking-wide">
        Unleash your creativity and innovation at these premier hackathons. <br />
        Apply now to showcase your skills and win exciting prizes!
      </p>
      <div className="relative overflow-hidden mt-20 mb-28">
        <div className="scroll-container flex overflow-x-scroll sm:overflow-auto">
          {hackathonData.concat(hackathonData).map((event, index) => (
            <Link
              key={index + 1}
              to={`/hackathon/${index + 1}`} // Dynamic route based on index
              className="scroll-card group/card transform transition-transform hover:scale-105 sm:w-96 w-80 mr-4"
              style={{
                backgroundImage: `url(${event.image})`,
              }}
            >
              <div className="relative card h-96 rounded-lg shadow-2xl overflow-hidden bg-cover bg-center flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent hover:to-black opacity-100 transition-opacity duration-300 group-hover/card:opacity-100"></div>
                <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-60 rounded-lg">
                  <h1 className="text-lg sm:text-2xl font-bold text-white mb-2">{event.title}</h1>
                  <p className="text-xs sm:text-sm text-white mb-1">{event.date}</p>
                  <p className="text-xs sm:text-sm text-white mb-4">{event.location}</p>
                  <p className="text-xs sm:text-sm text-white line-clamp-3">{event.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-4 mt-20 uppercase tracking-wide">
        Apply In Top Projects
      </h2>
      <p className="text-center text-base sm:text-lg font-medium mb-8 mt-10 tracking-wide">
        Turn your groundbreaking ideas into reality at these transformative Projects. <br />
        Build remarkable projects, collaborate with innovators, and gain infinite experience!!
      </p>
      <div className="relative overflow-hidden mt-20 mb-28">
        <div className="scroll2-container flex overflow-x-scroll sm:overflow-auto">
          {ProjectData.concat(ProjectData).map((event, index) => (
            <Link
              key={index + 1}
              to={`/project/${index + 1}`} // Dynamic route based on index
              className="scroll2-card group/card transform transition-transform hover:scale-105 sm:w-96 w-80 mr-4"
              style={{
                backgroundImage: `url(${event.image})`,
              }}
            >
              <div className="relative card h-96 rounded-lg shadow-2xl overflow-hidden bg-cover bg-center flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent hover:to-black opacity-100 transition-opacity duration-300 group-hover/card:opacity-100"></div>
                <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-60 rounded-lg">
                  <h1 className="text-lg sm:text-2xl font-bold text-white mb-2">{event.title}</h1>
                  <p className="text-xs sm:text-sm text-white mb-1">{event.date}</p>
                  <p className="text-xs sm:text-sm text-white mb-4">{event.location}</p>
                  <p className="text-xs sm:text-sm text-white line-clamp-3">{event.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingTophackathon;
