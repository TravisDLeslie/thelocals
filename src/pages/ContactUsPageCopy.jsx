import React from "react";
{/* Name Input */}
const ContactUsPage = () => {
  return (
    <section className="bg-[#0F0F0F] text-[#1e1e1e] py-12 px-6">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">The Locals Detailing</h2>

        <form className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-white text-[#1e1e1e] py-3 px-4 rounded focus:outline-none"
          />

          {/* Phone Input */}
          <input
            type="tel"
            placeholder="Phone #"
            className="w-full bg-white text-[#1e1e1e] py-3 px-4 rounded focus:outline-none"
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-white text-[#1e1e1e] py-3 px-4 rounded focus:outline-none"
          />

          {/* Make & Model Input */}
          <input
            type="text"
            placeholder="Make & Model"
            className="w-full bg-white text-[#1e1e1e] py-3 px-4 rounded focus:outline-none"
          />

          {/* Area of Town Input */}
          <input
            type="text"
            placeholder="Area of Town"
            className="w-full bg-white text-[#1e1e1e] py-3 px-4 rounded focus:outline-none"
          />

          {/* Vehicle Condition Dropdown */}
          <label className="block text-left text-sm text-white mb-1">
            Please select one below for accurate pricing
          </label>
          <select className="w-full bg-white text-[#1e1e1e] py-3 px-4 rounded focus:outline-none">
            <option value="" disabled selected>
              Vehicle Condition
            </option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#2DCBE0] text-black font-bold py-3 px-8 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsPage;
