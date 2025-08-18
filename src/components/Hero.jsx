import React, { useState, useRef } from "react";
import heroVideo from "../assets/videos/hero-bg.mp4";
import heroImage from "../assets/images/heroImage.png";
import stars from "../assets/icons/ReviewStars.svg";
import soundOnIcon from "../assets/icons/soundon.svg";
import soundOffIcon from "../assets/icons/soundoff.svg";
import replayIcon from "../assets/icons/replay.svg";
import AnimatedButton from "../components/RippleButton";
import LocationModal from "../components/LocationModal";
import logo from "../assets/icons/TheLocalsLogo.png";


// Example assets for cities & logo
import siteLogo from "../assets/icons/TheLocalsLogo.png";
import cityBucks from "../assets/images/Bucks_County.webp";
import cityMontgomery from "../assets/images/Montgomery_County.webp";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const videoRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const replayVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const cities = [
  {
    name: "Bucks County & Surrounding Areas",
    imageSrc: cityBucks,
    bookingUrl: "https://app.urable.com/virtual-shop/8KCjpE0z7HIuNt0ZaJ2K",
    areas:
      "Doylestown, Warrington, Chalfont, Warminster, Newtown, Richboro, New Hope, Horsham, Ambler, Lansdale, Hatboro, Buckingham, Perkasie, Glenside, Philadelphia and more",
  },
  {
    name: "Central Montgomery County Areas",
    imageSrc: cityMontgomery,
    bookingUrl: "https://app.urable.com/virtual-shop/lgwyYJjLNrRSLyPmMMqa",
    areas:
      "Conshohocken, Flourtown, Blue Bell, Norristown, Wyndmoor, Germantown, King of Prussia, Plymouth Meeting, Springfield, Villanova",
  },
];


  return (
    <section
      id="hero"
      className="relative min-h-screen max-w-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted={isMuted}
        playsInline
        poster={heroImage}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-full overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to The Locals</h1>
        <p className="mt-4 text-lg md:text-xl">Where convenience meets quality</p>

        {/* Reviews Row */}
        <div className="flex items-center justify-center space-x-4 my-4">
          <div className="flex space-x-1">
            {Array(5)
              .fill()
              .map((_, i) => (
                <img key={i} src={stars} alt="Star" className="h-4 md:h-6 max-w-full" />
              ))}
          </div>
          <p className="text-xl font-semibold">
            100+ <span className="ml-2 text-gray-100">5-star reviews</span>
          </p>
        </div>

        {/* Your existing CTA */}
        <div className="flex items-center justify-center gap-3">
  {/* Open Location Modal instead of navigating */}
  <AnimatedButton
    label="Schedule Your Appointment"
    onClick={() => setShowLocationModal(true)}
  />
        </div>

        
      </div>

      {/* Controls */}
      <div className="absolute top-8 left-0 right-0 flex items-center justify-between px-4">
        <button
          onClick={replayVideo}
          className="bg-white text-black font-bold p-3 rounded-full shadow hover:bg-gray-200 transition-colors"
        >
          <img src={replayIcon} alt="Replay" className="h-6 w-6" />
        </button>

        <button
          onClick={toggleMute}
          className="bg-white text-black font-bold p-3 rounded-full shadow hover:bg-gray-200 transition-colors"
        >
          <img
            src={isMuted ? soundOffIcon : soundOnIcon}
            alt={isMuted ? "Sound Off" : "Sound On"}
            className="h-6 w-6"
          />
        </button>
      </div>

      {/* Modal */}
      <LocationModal
        isOpen={showLocationModal}
        onClose={() => setShowLocationModal(false)}
        logoSrc={siteLogo}
        cities={cities}
      />
    </section>
  );
};

export default Hero;
