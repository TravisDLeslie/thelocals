import React, { useState } from "react";
import aboutus from "../assets/images/Aboutus.png";
import AnimatedButton from "../components/RippleButton";
import LocationModal from "../components/LocationModal";

// Reuse your assets (adjust paths if needed)
import siteLogo from "../assets/icons/TheLocalsLogo.png";
import cityBucks from "../assets/images/Bucks_County.webp";
import cityMontgomery from "../assets/images/Montgomery_County.webp";

const AboutUs = () => {
  const [showLocationModal, setShowLocationModal] = useState(false);

  const cities = [
    {
      name: "Bucks County & Surrounding Areas",
      imageSrc: cityBucks,
      bookingUrl: "https://app.urable.com/virtual-shop/8KCjpE0z7HIuNt0ZaJ2K",
      areas:
        "Doylestown, Warrington, Chalfont, Warminster, Newtown, Richboro, New Hope, Horsham, Ambler, Lansdale, Hatboro, Buckingham, Perkasie, Glenside, Philadelphia and more",
    },
    {
      name: "Central Montgomery County",
      imageSrc: cityMontgomery,
      bookingUrl: "https://app.urable.com/virtual-shop/lgwyYJjLNrRSLyPmMMqa",
      areas:
        "Conshohocken, Flourtown, Blue Bell, Norristown, Wyndmoor, Germantown, King of Prussia, Plymouth Meeting, Springfield, Villanova",
    },
  ];

  return (
    <section className="bg-white py-8">
      {/* Top White Padding */}
      <div className="bg-white py-8"></div>

      {/* Main Content with Dark Background */}
      <div className="bg-[#0F0F0F] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Image Section */}
          <div className="mb-6">
            <img
              src={aboutus}
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
            solution for the mobile detailing market. We have detailed over 1000
            cars and believe great service begins with the highest quality. We
            hope to serve you soon!
          </p>

          {/* CTA: open modal instead of navigating */}
          <AnimatedButton
            label="Schedule Your Appointment"
            onClick={() => setShowLocationModal(true)}
          />
        </div>
      </div>

      {/* Bottom White Padding */}
      <div className="bg-[#0F0F0F] py-12"></div>

      {/* Location Modal */}
      <LocationModal
        isOpen={showLocationModal}
        onClose={() => setShowLocationModal(false)}
        logoSrc={siteLogo}
        cities={cities}
      />
    </section>
  );
};

export default AboutUs;
