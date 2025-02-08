import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col">
      {/* Moving Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-wave"></div>

      {/* Starry Background */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 300 }).map((_, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`, // 1px - 3px
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.8 + 0.2, // Brightness variation
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`, // Twinkle effect
            }}
          ></div>
        ))}
      </div>

      {/* Page Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-lg shadow-2xl w-full max-w-sm md:max-w-md border border-white/20 mt-20 mb-20 lg:ml-[110px]">

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 rounded bg-transparent text-white border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 rounded bg-transparent text-white border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 rounded bg-transparent text-white border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded   transition-all duration-300 w-full"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes wave {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 0%; }
          }
          .animate-wave {
            background-size: 400% 400%;
            animation: wave 60s linear infinite;
          }

          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          .animate-twinkle {
            animation: twinkle 3s infinite alternate;
          }
        `}
      </style>
    </div>
  );
};

export default ContactUs;
