import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/TheLocalsLogo.png";
import menuIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.svg"; // Import a close icon if available
import AnimatedButton from "../components/RippleButton";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#0F0F0F] text-white py-4 px-6 flex w-full justify-between items-center z-10">
     {/* Logo */}
<Link to="/" className="text-2xl ml-2 md:ml-12 font-bold">
  <img src={logo} alt="The Locals" className="h-24" />
</Link>

      {/* Mobile-Only Text */}
      <div className="block md:hidden text-sm font-semibold">
        The Locals Detailing
      </div>

      {/* Desktop Menu Items */}
      <ul className="hidden md:flex space-x-8 text-sm md:text-base uppercase font-medium">
        <li>
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-gray-400">
            Services
          </Link>
        </li>
        <li>
          <Link to="/areas" className="hover:text-gray-400">
            Areas
          </Link>
        </li>
        <li>
          <Link to="/faq" className="hover:text-gray-400">
            FAQ's
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="hover:text-gray-400">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className="hover:text-gray-400">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="hover:text-gray-400">
            About Us
          </Link>
        </li>
      </ul>

      {/* Schedule Appointment Button */}
      <div className="hidden md:block">
      <a href="https://app.urable.com/virtual-shop/8KCjpE0z7HIuNt0ZaJ2K">
        <button className="bg-[#2DCBE0] font-bold text-[#1e1e1e] py-2 px-4 mr-12 rounded hover:bg-[#5E287E] hover:text-white">
          Schedule Your Appointment
        </button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-300 hover:text-white"
        >
          <img
            src={isMobileMenuOpen ? closeIcon : menuIcon}
            alt="Menu"
            className="h-10 w-10"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0F0F0F] text-white flex flex-col items-center justify-evenly z-50">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-6 text-gray-300 hover:text-white"
          >
            <img src={closeIcon} alt="Close" className="h-8 w-8" />
          </button>
          <ul className="flex flex-col items-center space-y-6 text-xl uppercase font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-gray-400"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-gray-400"
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/areas"
                className="hover:text-gray-400"
                onClick={toggleMobileMenu}
              >
                Areas
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="hover:text-gray-400"
                onClick={toggleMobileMenu}
              >
                FAQ's
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-gray-400"
                onClick={toggleMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:text-gray-400"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="hover:text-gray-400"
                onClick={toggleMobileMenu}
              >
                About Us
              </Link>
            </li>
          </ul>
          <a href="https://app.urable.com/virtual-shop/8KCjpE0z7HIuNt0ZaJ2K">
          <button className="bg-[#2DCBE0] font-bold text-[#1e1e1e] py-3 px-8 rounded hover:bg-[#5E287E] hover:text-white">
            Schedule Your Appointment
          </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
