import React from "react";
import bgImage1 from "../assets/images/auto-detailing.jpg"; // Replace with your background images
import bgImage2 from "../assets/images/ceramic-coating.jpg";
import bgImage3 from "../assets/images/paint-protection.jpg";

const FeaturedStyled = () => {
  const features = [
    {
      title: "Auto Detailing",
      description: "Premium interior and exterior detailing",
      price: "Price Varies",
      bgImage: bgImage1,
    },
    {
      title: "Ceramic Coating",
      description: "Expert ceramic coating application",
      price: "Price Varies",
      bgImage: bgImage2,
    },
    {
      title: "Paint Protection",
      description: "Professional paint correction services",
      price: "Price Varies",
      bgImage: bgImage3,
    },
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center text-white text-center py-20 px-4 rounded-lg overflow-hidden shadow-md"
            style={{
              backgroundImage: `url(${feature.bgImage})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
                {feature.title}
              </h2>
              <p className="text-lg mb-2">{feature.description}</p>
              <p className="text-md font-semibold mb-6">{feature.price}</p>
              <button className="bg-[#2DCBE0] text-black font-bold py-3 px-8 rounded shadow hover:bg-[#5E297F] hover:text-white transition-colors duration-300">
                Schedule Your Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedStyled;
