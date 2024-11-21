import React from 'react';
import { motion } from 'framer-motion';

const RippleButton = ({ url }) => {
  return (
    <motion.a
      href={url} // Use an anchor tag for navigation
      target="_blank" // Open in a new tab (optional)
      rel="noopener noreferrer" // Security best practice for external links
      className="bg-[#2DCBE0] text-[#1e1e1e] font-bold uppercase py-3 px-8 rounded mt-6 border-2 border-[#2DCBE0] animate-pulse-border hover:bg-[#5E297F] hover:border-[#5E297F] hover:text-white inline-block"
      aria-label="Ripple Button"
      // Continuous Pulsating Animation
      animate={{
        scale: [1, 1.15, 1], // Scale up to 105%, then back to 100%
        opacity: [1, 1, 1], // Fade to 80% opacity, then back to 100%
      }}
      transition={{
        duration: 2, // Duration of one complete cycle (2 seconds)
        repeat: Infinity, // Repeat the animation infinitely
        repeatType: "loop", // Loop the animation seamlessly
        ease: "easeInOut", // Smooth easing for scaling and opacity
      }}
      whileHover={{ scale: 1.1 }} // Slight scale on hover for interactivity
    >
      Schedule Your Appointment
    </motion.a>
  );
};

export default RippleButton;
