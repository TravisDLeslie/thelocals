import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ServiceCard = ({
  index,
  title,
  icon,
  isMostPopular,
  description,
  price,
  buttonText,
  sliderImages,
  url,
}) => {
  // Animation variants for the card container
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: index * 0.3,
        ease: "easeOut",
      },
    },
  };

  // Icon animation variants with looping
  const iconVariants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 2,
        repeat: 2,
        repeatType: "reverse",
      },
    },
  };

  // Most Popular Badge animation
  const badgeVariants = {
    initial: { scale: 1, opacity: 1 },
    animate: {
      scale: [1, 1.1, 1],
      backgroundColor: ["#FBD61E", "#FFD700", "#FBD61E"],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <motion.div
      className="bg-[#1e1e1e] rounded-sm shadow-lg flex flex-col relative overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Slider Section */}
      <div className="relative">
        {/* Most Popular Badge */}
        {isMostPopular && (
          <motion.div
            className="absolute top-0 right-0 text-black text-xs font-bold px-4 py-2 z-20"
            variants={badgeVariants}
            initial="initial"
            animate="animate"
          >
            MOST POPULAR
          </motion.div>
        )}

        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          initialSlide={0}
          pagination={{
            clickable: true,
          }}
        >
          {sliderImages.map((image, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={image}
                alt={`Slider ${idx + 1}`}
                className="w-full h-72 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col">
        {/* Service Icon and Title */}
        <div className="flex items-center mb-4">
          {/* Animated Icon */}
          <motion.img
            src={icon}
            alt="Service Icon"
            className="h-6 w-6 text-[#2DCBE0] mr-3"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Title */}
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>

        {/* Service Details */}
        <div className="mb-4">
          {description.exterior && (
            <>
              <h3 className="text-white font-semibold mb-2">Exterior</h3>
              <ul className="list-disc font-light list-inside text-[#ECECEC] mb-4">
                {description.exterior.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {description.interior && (
            <>
              <h3 className="text-white font-semibold mb-2">Interior</h3>
              <ul className="list-disc font-light list-inside text-[#ECECEC]">
                {description.interior.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Starting Price */}
        <p className="font-light text-lg text-white mb-4">
          Starting at <span className="font-bold">{price}</span>
        </p>

        {/* Choose Package Button */}
        <a
          href={url} // Link to the booking page
          className="bg-[#2DCBE0] text-black font-bold py-2 px-4 rounded hover:bg-[#5E297F] hover:text-white text-center"
        >
          {buttonText}
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;