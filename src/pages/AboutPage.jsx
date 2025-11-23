import React from "react";
import aboutus from "../assets/images/Aboutus.png";
import AnimatedButton from "../components/RippleButton";

const AboutPage = () => {
  return (
    <section className="bg-[#0F0F0F] py-8">

      {/* Main Content with Dark Background */}
      <div className="bg-[#0F0F0F] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Image Section */}
          <div className="mb-6">
            <img
              src={aboutus} // Replace with the actual path to your image
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <h2 className="text-3xl font-bold mb-2">About Us</h2>
          <p className="text-gray-400 italic mb-6">Est. 2021</p>
          <p className="text-lg leading-relaxed mb-6">
            Founded by Jake and Aiden, with a few bucks and a friendship in 2021,
            The Locals Detailing LLC is a homegrown mobile auto detailing service.
            With an entrepreneurial mindset and an unwavering commitment to
            customer satisfaction, we have established ourselves as the premier
            solution for the mobile detailing market. We have detailed over 1000
            cars and believe great service begins with the highest quality. We
            hope to serve you soon!
          </p>

          {/* Call-to-Action Button */}
         <AnimatedButton url="https://app.urable.com/virtual-shop/8KCjpE0z7HIuNt0ZaJ2K" />
        </div>
      </div>

      {/* Bottom White Padding */}
      <div className="bg-[#0F0F0F] py-12"></div>
    </section>
  );
};

export default AboutPage;
