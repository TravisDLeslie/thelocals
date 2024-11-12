import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import stars from "../assets/icons/ReviewStars.svg"; // Star icons
import prevIcon from "../assets/icons/prev.svg"; // Previous arrow icon
import nextIcon from "../assets/icons/next.svg"; // Next arrow icon

const Reviews = () => {
  const reviews = [
    {
      text: "These guys are the real deal when it comes to anything related to car detailing. Excellent professional service, reasonably priced, and amazing results. Their personal attention to detail and quality of work is outstanding! Could not have been more pleased with their service, and the car looks and smells brand new! Thank you Jake and Team.",
      author: "Suzan Kramer",
    },
    {
      text: "Jake and his team were fantastic! They arrived on time and turned my car into something I could barely recognize. Highly professional, super friendly, and the work speaks for itself. I would recommend The Locals to everyone I know.",
      author: "Mark Davis",
    },
    {
      text: "The Locals are simply the best. Their eco-friendly approach and attention to detail blew me away. My car looks stunning! The whole process was seamless and stress-free. I’ll definitely be coming back for more services.",
      author: "Emily Carter",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Animation variants for the container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Delay between each star's animation
      },
    },
  };

  // Animation variants for each star
  const starVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="bg-[#0F0F0F] text-white py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <motion.div
            className="flex justify-center items-center space-x-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[...Array(5)].map((_, index) => (
              <motion.img
                key={index}
                src={stars}
                alt="5 Stars"
                className="h-6"
                variants={starVariants}
              />
            ))}
          </motion.div>
          <h2 className="text-3xl font-bold mt-4">Customers Love Us</h2>
          <p className="text-gray-400 mt-2">Real reviews from happy customers.</p>
        </div>

        {/* Review */}
        <div>
          <div className="flex justify-center items-center space-x-2 mb-4">
            {[...Array(5)].map((_, index) => (
              <img key={index} src={stars} alt="5 Stars" className="h-6" />
            ))}
          </div>
          <p className="text-lg font-medium mb-6">
            {reviews[currentIndex].text}
          </p>
          <p className="text-sm text-gray-400">
            - {reviews[currentIndex].author}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <img src={prevIcon} alt="Previous" className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <img src={nextIcon} alt="Next" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
