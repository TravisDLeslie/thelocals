import React from "react";
import ServiceCard from "./ServicesCard";
import all from "../assets/icons/allservices.svg";
import interior from "../assets/icons/Interior.svg";
import exterior from "../assets/icons/Exterior.svg";
import interior1 from "../assets/images/interior1.jpg";
import interior2 from "../assets/images/interior2.jpg";
import interior3 from "../assets/images/interior3.jpg";
import exterior1 from "../assets/images/exterior1.jpg";
import exterior2 from "../assets/images/exterior2.jpg";
import exterior3 from "../assets/images/exterior3.jpg";
import all1 from "../assets/images/all1.jpg";
import all2 from "../assets/images/all2.jpg";
import all3 from "../assets/images/all3.jpg";








const ServicesPage = () => {
  const services = [
    {
      title: "Inside + Out Package",
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
      sliderImages: [all1, all2, all3],
      url: "https://app.urable.com/virtual-shop/8KCjpE0z7HIuNt0ZaJ2K/epv1N0MjQjRPJ6RpZeRU", // Add booking URL

    },
    {
      title: "Interior Only Package",
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
      sliderImages: [interior1, interior2, interior3],
      url: "https://app.urable.com/virtual-shop/8KCjpE0z7HIuNt0ZaJ2K/EffVmklBKRmLedepiWdp", // Add booking URL

    },
    {
      title: "Exterior Only Package",
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
      sliderImages: [exterior1, exterior2, exterior3],
      url: "https://app.urable.com/virtual-shop/8KCjpE0z7HIuNt0ZaJ2K/kWwqwFsjfzChDywownn1", // Add booking URL

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
