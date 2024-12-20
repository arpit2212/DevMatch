import React, { useEffect } from "react";

const Landingheader = () => {
  useEffect(() => {
    const createFireflies = () => {
      const fireflyContainer = document.getElementById("firefly-container");
      const fireflyCount = 50; // Number of fireflies
      const colors = [
        "radial-gradient(circle, rgba(255, 255, 255, 0.7), rgba(54, 70, 245, 0.7))", // Blue
        "radial-gradient(circle, rgba(255, 255, 255, 0.7), rgba(255, 87, 34, 0.7))", // Orange
        "radial-gradient(circle, rgba(255, 255, 255, 0.7), rgba(0, 150, 136, 0.7))", // Green
        "radial-gradient(circle, rgba(255, 255, 255, 0.7), rgba(255, 193, 7, 0.7))", // Yellow
        "radial-gradient(circle, rgba(255, 255, 255, 0.7), rgba(233, 30, 99, 0.7))", // Pink
      ];

      for (let i = 0; i < fireflyCount; i++) {
        const firefly = document.createElement("div");
        firefly.classList.add("firefly");
        // Random size between 5px and 10px
        const size = Math.random() * (10 - 5) + 5;
        firefly.style.width = `${size}px`;
        firefly.style.height = `${size}px`;
        firefly.style.top = `${Math.random() * 100}%`;
        firefly.style.left = `${Math.random() * 100}%`;
        firefly.style.animationDuration = `${Math.random() * 4 + 6}s`; // Slow down firefly speed
        firefly.style.animationDelay = `${Math.random() * 5}s`;
        firefly.style.animationTimingFunction = "ease-in-out";

        // Randomly select a gradient color from the array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        firefly.style.background = randomColor;

        fireflyContainer.appendChild(firefly);
      }
    };

    createFireflies();
  }, []);

  
  return (
    <div className="relative bg-black text-white flex items-center justify-center h-screen overflow-hidden">
      {/* Firefly effect */}
      <div id="firefly-container" className="absolute inset-0"></div>

      {/* Background patterns */}
      <div className="absolute inset-0">
        {/* Outer grey circle */}
      
        {/* Inner grey circle */}
        <div className="absolute rounded-full w-[300px] h-[300px] border border-gray-500 opacity-50 animate-pulse-slow" style={{ top: '50%', left: '40%' }}></div>
        {/* Center blue circle */}
        <div className="absolute rounded-full w-[500px] h-[500px] bg-gradient-to-r from-gray-800 to-transparent opacity-20 animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-6xl font-bold">
          Join the <span className="text-[#3646F5]">Ultimate Hackathon</span>
          <br /> Experience Today!
        </h1>
        <p className="text-gray-400 mt-10 max-w-4xl mx-auto">
          Connect, collaborate, and innovate with fellow tech enthusiasts. Discover hackathons, showcase your projects, and find your perfect partner!
        </p>
        <button
  className="mt-6 inline-flex items-center justify-center w-24 h-16 border-2 border-white hover:bg-[#3646F5] hover:border-[#3646F5] hover:text-white"
  onClick={() => {
    const section = document.getElementById("lading-features");
    if (section) {
      const offsetTop = section.offsetTop; // Get the section's position from the top
      window.scrollTo({
        top: offsetTop - 120, // Adjust for any overshoot (e.g., 50px margin)
        behavior: "smooth",
      });
    }
  }}
>
  <span className="text-3xl">↓</span>
</button>


      </div>

      {/* Firefly CSS */}
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
      `}</style>
    </div>
  );
};

export default Landingheader;
