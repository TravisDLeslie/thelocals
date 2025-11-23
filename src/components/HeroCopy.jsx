import React, { useState, useRef } from "react";
import heroVideo from "../assets/videos/hero-bg.mp4";
import heroImage from "../assets/images/heroImage.png";
import stars from "../assets/icons/ReviewStars.svg";
import soundOnIcon from "../assets/icons/soundon.svg";
import soundOffIcon from "../assets/icons/soundoff.svg";
import replayIcon from "../assets/icons/replay.svg";
import AnimatedButton from "../components/RippleButton";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
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
        {/* Main Hero Content */}
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to The Locals</h1>
        <p className="mt-4 text-lg md:text-xl">
          Where convenience meets quality
        </p>

        {/* Reviews Row */}
        <div className="flex items-center justify-center space-x-4 my-4">
          {/* Render Stars */}
          <div className="flex space-x-1">
            {Array(5)
              .fill()
              .map((_, i) => (
                <img
                  key={i}
                  src={stars}
                  alt="Star"
                  className="h-4 md:h-6 max-w-full"
                />
              ))}
          </div>
          {/* Text */}
          <p className="text-xl font-semibold">
            100+ <span className="ml-2 text-gray-100">5-star reviews</span>
          </p>
        </div>
        <AnimatedButton url="https://app.urable.com/virtual-shop/8KCjpE0z7HIuNt0ZaJ2K" />
      </div>

      {/* Controls */}
      <div className="absolute top-8 left-0 right-0 flex items-center justify-between px-4">
        {/* Replay Button */}
        <button
          onClick={replayVideo}
          className="bg-white text-black font-bold p-3 rounded-full shadow hover:bg-gray-200 transition-colors"
        >
          <img src={replayIcon} alt="Replay" className="h-6 w-6" />
        </button>

        {/* Mute/Unmute Button */}
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
    </section>
  );
};

export default Hero;
