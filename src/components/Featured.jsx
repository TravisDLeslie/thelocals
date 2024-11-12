import React from "react";
import check from "../assets/icons/check.svg"; // Import custom checkmark SVG

const FeaturedSection = () => {
  const features = ["Auto Detailing", "Ceramic Coatings", "Paint Correction"];

  return (
    <section>
      {/* Main Section */}
      <div className="bg-[#0F0F0F] p-6 py-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-row items-center justify-center text-center border border-[#2DCBE0] text-white py-8 px-6 rounded-lg transition-transform transform hover:scale-105 hover:border-4 shadow-md hover:shadow-lg"
            >
              {/* Checkmark Icon */}
              <img
                src={check}
                alt="Checkmark"
                className="h-6 w-6 text-[#2DCBE0] hover:text-white mr-4"
              />

              {/* Feature Text */}
              <p className="text-lg uppercase text-center items-center hover:text-white font-bold">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* White Space at the Bottom */}
      <div className="bg-white py-12"></div>
    </section>
  );
};

export default FeaturedSection;
