import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "../components/RippleButton";
import LocationModal from "../components/LocationModal";

// Reuse your assets (adjust paths if needed)
import siteLogo from "../assets/icons/TheLocalsLogo.png";
import cityBucks from "../assets/images/Bucks_County.webp";       // replace with real Bucks image
import cityMontgomery from "../assets/images/Montgomery_County.webp"; // replace with real Montgomery image

const AddOns = () => {
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

  const addOns = [
    {
      title: "Clay Bar",
      price: "$74.99",
      description:
        "Remove embedded contaminants that can cause damage to your paint. This treatment will make rough paint smooth and enhance the sealant applied after",
      gradient: "from-[#5E297F] to-[#5E297F]",
    },
    {
      title: "Odor Removal",
      price: "$99.99",
      description:
        "Ozone treatment & fragrance bomb (kills bacteria & leaves fresh scent).",
      gradient: "from-[#553B89] to-[#553B89]",
    },
    {
      title: "Black Trim Restoration",
      price: "$99.99",
      description: "Completely restores faded trim back to black",
      gradient: "from-[#4E4A91] to-[#4E4A91]",
    },
    {
      title: "Engine Bay Detail",
      price: "$49.99",
      description:
        "Deep cleaning of the engine bay to enhance performance, and eliminate daily build up",
      gradient: "from-[#475899] to-[#475899]",
    },
    {
      title: "Headlight Restoration & Polish",
      price: "$99.99",
      description:
        "For cloudy/foggy headlights. Removes oxidation, fog, yellowing, and other build-up",
      gradient: "from-[#4076AB] to-[#4076AB]",
    },
  ];

  const cardVariants = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: (i) => ({
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.2, duration: 0.8, delay: i * 0.2 },
    }),
  };

  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-center text-3xl font-bold text-black mb-8">
        Enhance Your Detailing with Our Add-Ons
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
        {addOns.map((addOn, index) => (
          <motion.div
            key={index}
            custom={index}
            className={`p-1 rounded-lg bg-gradient-to-r ${addOn.gradient}`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
          >
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-black">{addOn.title}</h3>
                <p className="text-lg font-bold text-zinc-900">{addOn.price}</p>
              </div>
              <p className="text-gray-600">{addOn.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        {/* Use the same animated CTA, but open the modal */}
        <AnimatedButton
          label="Schedule Your Appointment"
          onClick={() => setShowLocationModal(true)}
        />
      </div>

      {/* Reuse the same modal */}
      <LocationModal
        isOpen={showLocationModal}
        onClose={() => setShowLocationModal(false)}
        logoSrc={siteLogo}
        cities={cities}
      />
    </section>
  );
};

export default AddOns;
