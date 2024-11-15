import React, { useState, useRef } from "react";
import heroVideo from "../assets/videos/hero-bg.mp4";
import heroImage from "../assets/images/TL_Hero.png"; // Import fallback image
import stars from "../assets/icons/ReviewStars.svg"; // Import stars SVG
import soundOnIcon from "../assets/icons/soundon.svg"; // Import sound-on icon
import soundOffIcon from "../assets/icons/soundoff.svg"; // Import sound-off icon

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true); // State to toggle mute
  const videoRef = useRef(null); // Ref for the video element

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        ref={videoRef} // Attach ref to video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted={isMuted} // Controlled by state
        playsInline // Add this line
        poster={heroImage} // Set the fallback image as the poster
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        {/* Main Hero Content */}
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to The Locals</h1>
        <p className="mt-4 text-lg md:text-xl">
          Discover the best local mobile detail experiences tailored for you.
        </p>

        {/* Reviews Row */}
        <div className="flex items-center justify-center space-x-4 my-4">
          {/* Render Stars */}
          <div className="flex space-x-1">
            {Array(5)
              .fill()
              .map((_, i) => (
                <img key={i} src={stars} alt="Star" className="h-6" />
              ))}
          </div>
          {/* Text */}
          <p className="text-xl font-semibold">
            60+ <span className="text-gray-100">5-star reviews</span>
          </p>
        </div>

        {/* Call-to-Action Button */}
        <button className="bg-[#2DCBE0] text-[#1e1e1e] font-bold uppercase py-3 px-8 rounded mt-6 hover:bg-[#5E297F] hover:text-white">
          Schedule Your Appointment
        </button>
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 bg-white text-black font-bold p-3 rounded-full shadow hover:bg-gray-200 transition-colors"
      >
        <img
          src={isMuted ? soundOffIcon : soundOnIcon}
          alt={isMuted ? "Sound Off" : "Sound On"}
          className="h-6 w-6"
        />
      </button>
    </section>
  );
};

export default Hero;
