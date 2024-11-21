import React, { useState } from "react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#1e1e1e] text-black py-2 text-sm font-semibold flex justify-between items-center px-4">
      {/* Centered Text with Link */}
      <div className="flex flex-1 justify-center items-center text-white space-x-6">
        <span>✅ Licensed & Insured</span>
        <a
          href="https://app.urable.com/virtual-shop/8KCjpE0z7HIuNt0ZaJ2K" // Replace with your link
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Prevents security vulnerabilities
          className="underline hover:text-[#2DCBE0]" // Adds underline and hover effect
        >
          📅 24/7 Online Booking
        </a>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="text-lg text-white font-bold focus:outline-none"
      >
        ×
      </button>
    </div>
  );
};

export default AnnouncementBar;
