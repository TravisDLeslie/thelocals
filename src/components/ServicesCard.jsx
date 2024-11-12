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
}) => {
  // Animation variants for the icon with custom delay
  const iconVariants = {
    hidden: {
      rotateY: -90,
      opacity: 0,
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.2, // Delay based on index
      },
    },
  };

  return (
    <div className="bg-[#1e1e1e] rounded-sm shadow-lg flex flex-col relative overflow-hidden">
      {/* Slider Section */}
      <div className="relative">
        {/* Most Popular Badge */}
        {isMostPopular && (
          <div className="absolute top-0 right-0 bg-[#FBD61E] text-black text-xs font-bold px-4 py-2 z-20">
            MOST POPULAR
          </div>
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
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col">
        {/* Service Icon and Title */}
        <div className="flex items-center mb-4">
          <motion.img
            src={icon}
            alt="Service Icon"
            className="h-6 w-6 text-[#2DCBE0] mr-3"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.2, rotate: 360 }} // Fun hover effect
          />
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
        <button className="bg-[#2DCBE0] text-black font-bold py-2 px-4 rounded hover:bg-[#5E297F] hover:text-white">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
