import React, { useState } from "react";
import footerImage from "../assets/images/footer.jpg";
import fb from "../assets/icons/fb.svg";
import ig from "../assets/icons/ig.svg";
import phone from "../assets/icons/phone.svg";
import mail from "../assets/icons/mail.svg";
import book from "../assets/icons/book.svg";

import LocationModal from "../components/LocationModal";
import siteLogo from "../assets/icons/TheLocalsLogo.png";
import cityBucks from "../assets/images/Bucks_County.webp";
import cityMontgomery from "../assets/images/Montgomery_County.webp";

const Footer = () => {
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
    <footer className="bg-[#0F0F0F] text-white py-12 md:py-36 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        {/* Contact and Info Section */}
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
          {/* Header Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">The Locals Detailing</h2>
            <p className="text-gray-400">100% Satisfaction Guaranteed.</p>
            <div className="mt-6">
              <button
                onClick={() => setShowLocationModal(true)}
                className="bg-[#2DCBE0] text-[#1e1e1e] font-bold py-3 px-8 rounded shadow hover:bg-[#5E297F] hover:text-white transition-colors duration-300"
              >
                Schedule Your Appointment
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-[#2DCBE0] font-bold">CONTACT</h3>

            <div className="flex items-center space-x-3 hover:text-[#5E297F]">
              <a href="tel:2679803237" className="flex items-center space-x-3">
                <img src={phone} alt="Phone" className="h-5 w-5" />
                <p>267-980-3237</p>
              </a>
            </div>

            <div className="flex items-center space-x-3 hover:text-[#5E297F]">
              <a
                href="mailto:info@thelocalsdetailing.co"
                className="flex items-center space-x-3"
              >
                <img src={mail} alt="Email" className="h-5 w-5" />
                <p>info@thelocalsdetailing.co</p>
              </a>
            </div>

            {/* Book Online -> open modal */}
            <button
              onClick={() => setShowLocationModal(true)}
              className="flex items-center space-x-3 hover:text-[#5E297F] mt-2"
            >
              <img src={book} alt="Book" className="h-5 w-5" />
              <p>Book Online</p>
            </button>
          </div>

          {/* Hours Section */}
          <div>
            <h3 className="text-[#2DCBE0] font-bold">HOURS</h3>
            <p>24/7 Online Scheduling</p>
          </div>

          {/* Service Areas Section */}
          <div>
            <h3 className="text-[#2DCBE0] text-start font-bold">OUR SERVICES AREAS</h3>
            <p className="w-[300px] text-start">
              <span className="text-white mb-2 block">Based out of Warrington</span>
              Our mobile unit services Montgomery, Bucks, Chester, Delaware, Berks, and Philadelphia counties.
            </p>
          </div>
        </div>

        {/* Footer Image Section */}
        <div className="w-full md:w-1/2 order-2 md:order-1 mt-8 md:mt-0">
          <img
            src={footerImage}
            alt="Footer"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Social Media Icons, CTA, and Footer Bottom */}
      <div className="mt-12 space-y-6 text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/thelocals.detailing/" className="hover:opacity-80">
            <img src={fb} alt="Facebook" className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/thelocals.detailing/?hl=en" className="hover:opacity-80">
            <img src={ig} alt="Instagram" className="h-6 w-6" />
          </a>
          <a href="tel:267-980-3237" className="hover:opacity-80">
            <img src={phone} alt="Phone" className="h-6 w-6" />
          </a>
        </div>

        {/* CTA Button -> open modal */}
        <div>
          <button
            onClick={() => setShowLocationModal(true)}
            className="border-2 border-[#2DCBE0] text-[#2DCBE0] font-bold py-3 px-8 rounded hover:bg-[#2DCBE0] hover:text-[#1e1e1e] transition-colors duration-300"
          >
            Schedule Your Appointment
          </button>
        </div>

        {/* Footer Bottom */}
        <div className="text-gray-500">
          <p>Copyright 2024 The Locals Detailing</p>
        </div>
      </div>

      {/* Modal */}
      <LocationModal
        isOpen={showLocationModal}
        onClose={() => setShowLocationModal(false)}
        logoSrc={siteLogo}
        cities={cities}
      />
    </footer>
  );
};

export default Footer;
