import React from "react";
import { motion } from "framer-motion";
import icon1 from "../assets/icons/locallyownedIcon.png";
import icon2 from "../assets/icons/mobileIcon.png";
import icon3 from "../assets/icons/trustIcon.png";
import icon4 from "../assets/icons/locationIcon.png";
import icon5 from "../assets/icons/ecoIcon.png";
import AnimatedButton from "../components/RippleButton";

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

  // Animation Variants
  const itemVariants = {
    hidden: {
      rotateY: -90,
      opacity: 0,
    },
    visible: (i) => ({
      rotateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <section className="bg-white py-24 px-4">
      <h2 className="text-center text-3xl font-bold text-black mb-8">
        Why Choose <span className="text-[#2DCBE0]">The Locals</span>
      </h2>

      {/* Responsive Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center space-y-4 bg-[#f9f9f9] p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={index}
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
          </motion.div>
        ))}
      </div>

      <div className="mt-24 text-center">
      <AnimatedButton />
      </div>
    </section>
  );
};

export default WhyTheLocals;
