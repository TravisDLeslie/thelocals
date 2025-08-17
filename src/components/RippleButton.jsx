import React from "react";
import { motion } from "framer-motion";

const baseClasses =
  "bg-[#2DCBE0] text-[#1e1e1e] font-bold uppercase py-3 px-8 rounded mt-6 border-2 border-[#2DCBE0] animate-pulse-border hover:bg-[#5E297F] hover:border-[#5E297F] hover:text-white inline-block";

const animProps = {
  animate: { scale: [1, 1.15, 1], opacity: [1, 1, 1] },
  transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
  whileHover: { scale: 1.1 },
};

const RippleButton = ({ url, onClick, label = "Schedule Your Appointment", className = "" }) => {
  // If onClick is provided, render as a button to open your modal
  if (typeof onClick === "function") {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        className={`${baseClasses} ${className}`}
        aria-label={label}
        {...animProps}
      >
        {label}
      </motion.button>
    );
  }

  // Fallback to anchor behavior if url is present
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${className}`}
      aria-label="Ripple Button"
      {...animProps}
    >
      {label}
    </motion.a>
  );
};

export default RippleButton;
