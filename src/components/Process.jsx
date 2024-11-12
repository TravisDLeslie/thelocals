import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import step1Icon from "../assets/icons/step1.svg";
import step2Icon from "../assets/icons/step2.svg";
import step3Icon from "../assets/icons/step3.svg";

const Process = () => {
  const steps = [
    {
      number: 1,
      icon: step1Icon,
      text: "Book online or by phone and receive real-time updates on your appointment.",
    },
    {
      number: 2,
      icon: step2Icon,
      text: "Our experts arrive fully equipped to inspect and detail your vehicle using top-rated products and professional tools.",
    },
    {
      number: 3,
      icon: step3Icon,
      text: "We ensure your complete satisfaction before collecting payment.",
    },
  ];

  return (
    <section className="bg-[#fff] text-[#1e1e1e] py-24">
      <h2 className="p-4 text-center text-3xl font-bold mb-8">
        Our Mobile Detailing Simple 3 Step Process
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-8 py-12 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col text-[#fff] items-center rounded-lg text-center bg-[#1e1e1e] py-24 px-6 shadow-lg relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }} // Ensures animation runs only once when visible
          >
            {/* Step Number */}
            <div className="absolute top-6 right-6 text-8xl font-extrabold text-gray-500 opacity-50">
              {step.number}
            </div>
            {/* Step Icon */}
            <motion.img
              src={step.icon}
              alt={`Step ${step.number}`}
              className="h-16 mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              viewport={{ once: true }}
            />
            {/* Step Text */}
            <p className="text-lg">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
