import React from "react";
import ServiceCard from "../components/ServicesCard";
import all from "../assets/icons/allservices.svg";
import interior from "../assets/icons/Interior.svg";
import exterior from "../assets/icons/Exterior.svg";
import sliderImage1 from "../assets/images/slider-image1.png";
import sliderImage2 from "../assets/images/slider-image2.png";
import sliderImage3 from "../assets/images/slider-image3.png";

const ServicesPage = () => {
  const services = [
    {
      title: "Inside + Out Packages",
      icon: all,
      isMostPopular: true,
      description: {
        exterior: [
          "Detailed Hand Wash & Foam Bath",
          "Bug Removal",
          "Ceramic Paint Protection",
          "Wheels & Rims Deep Cleaned",
          "Dressing Applied to Tires",
        ],
        interior: [
          "Detailed Vacuum",
          "Detailed Wipe Down",
          "Light Stain Removal",
          "Floor Mats Cleaned",
          "Windows Cleaned",
          "Door Jambs Cleaned",
          "Trunk Cleaned",
        ],
      },
      price: "$250",
      buttonText: "Choose Package",
      sliderImages: [sliderImage1, sliderImage2, sliderImage3],
    },
    {
      title: "Interior Only Packages",
      icon: interior,
      isMostPopular: false,
      description: {
        interior: [
          "Detailed Vacuum",
          "Detailed Wipe Down",
          "Carpet Mats Shampoo",
          "Rubber Mats Shined",
          "Seats Shampoo",
          "Carpet Shampoo",
          "Light stain removal (if needed)",
          "Windows Cleaned",
          "Door Jambs Cleaned",
          "Trunk Cleaned",
        ],
      },
      price: "$180",
      buttonText: "Choose Package",
      sliderImages: [sliderImage2, sliderImage3, sliderImage1],
    },
    {
      title: "Exterior Only Packages",
      icon: exterior,
      isMostPopular: false,
      description: {
        exterior: [
          "Detailed Hand Wash & Foam Bath",
          "Bug Removal",
          "Windows In & Out",
          "Premium Ceramic Paint Protection",
          "Wheels & Rims Deep Cleaned",
          "Dressing Applied to Tires",
        ],
      },
      price: "$130",
      buttonText: "Choose Package",
      sliderImages: [sliderImage3, sliderImage1, sliderImage2],
    },
  ];

  return (
    <section className="bg-[#0F0F0F] text-white py-24 px-4">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-8">
        Our Services & Packages
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mb-24 mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
