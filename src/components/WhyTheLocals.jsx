import React from "react";
import icon1 from "../assets/icons/locallyownedIcon.png"; // Replace with your icon paths
import icon2 from "../assets/icons/mobileIcon.png";
import icon3 from "../assets/icons/trustIcon.png";
import icon4 from "../assets/icons/locationIcon.png";
import icon5 from "../assets/icons/ecoIcon.png";

const WhyTheLocals = () => {
  const reasons = [
    {
      icon: icon1,
      title: "Locally Owned & Operated",
      description:
        "We’re proud to be part of the community, serving our neighbors with care.",
    },
    {
      icon: icon2,
      title: "Convenient Mobile Service",
      description:
        "We come to you, saving you time while delivering top-notch detailing.",
    },
    {
      icon: icon3,
      title: "Detailing You Can Trust",
      description:
        "Our team is committed to quality, reliability, and a spotless finish every time.",
    },
    {
      icon: icon4,
      title: "Customer-Centered Approach",
      description:
        "Your satisfaction is our top priority—because you’re not just a client; you’re our neighbor.",
    },
    {
      icon: icon5,
      title: "Eco-Friendly Products",
      description:
        "We use environmentally safe products to protect both your car and the planet.",
    },
  ];

  return (
    <section className="bg-white py-24 px-4">
      <h2 className="text-center text-3xl font-bold text-black mb-8">
        Why Choose <span className="text-[#2DCBE0]">The Locals</span>
      </h2>

      {/* Responsive Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4 bg-[#f9f9f9] p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            {/* Icon */}
            <div className="p-4 rounded-full">
              <img
                src={reason.icon}
                alt={reason.title}
                className="h-16 w-16 object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-black">{reason.title}</h3>

            {/* Description */}
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <button className="bg-[#2DCBE0] text-black font-bold py-3 px-8 rounded shadow hover:bg-[#5E297F] hover:text-white transition-colors duration-300">
          Schedule Your Appointment
        </button>
      </div>
    </section>
  );
};

export default WhyTheLocals;
