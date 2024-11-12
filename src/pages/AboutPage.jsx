import React from "react";
import aboutus from "../assets/images/Aboutus.png";

const AboutPage = () => {
  return (
    <section className="bg-[#0F0F0F] py-12">
      {/* Top White Padding */}

      {/* Main Content with Dark Background */}
      <div className="bg-[#0F0F0F] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Image Section */}
          <div className="mb-6">
            <img
              src={aboutus} // Replace with the actual path to your image
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <h2 className="text-3xl font-bold mb-2">About Us</h2>
          <p className="text-gray-400 italic mb-6">Est. 2021</p>
          <p className="text-lg leading-relaxed mb-6">
            Founded by Jake and Aiden, with a few bucks and a friendship in 2021,
            The Locals Detailing LLC is a homegrown mobile auto detailing service.
            With an entrepreneurial mindset and an unwavering commitment to
            customer satisfaction, we have established ourselves as the premier
            solution for the mobile detailing market. We have detailed over 500
            cars and believe great service begins with the highest quality. We
            hope to serve you soon!
          </p>

          {/* Call-to-Action Button */}
          <button className="bg-[#2DCBE0] text-[#1e1e1e] font-bold py-3 px-8 rounded shadow hover:bg-[#5E297F] hover:text-white transition-colors duration-300">
            Schedule Your Appointment
          </button>
        </div>
      </div>

      {/* Bottom White Padding */}
      <div className="bg-[#0F0F0F] py-12"></div>
    </section>
  );
};

export default AboutPage;
