import React, { useState } from "react";
import AnimatedButton from "../components/RippleButton";



const FAQPage = () => {
    const faqs = [
      {
        question: "How long does it take?",
        answer: (
          <p className="text-gray-600">
            Depending on the package you have selected, a job may range from an hour to 4 hours. When booking an auto detail, we will always give you an estimate for how long a job will be, and schedule you accordingly.
          </p>
        ),
      },
      {
        question: "What do you need from me?",
        answer: (
          <p className="text-gray-600">
            We will need the keys to the vehicle as well as access to your home’s power and water supply.
          </p>
        ),
      },
      {
        question: "What forms of payment do you take?",
        answer: (
          <p className="text-gray-600">
            We accept cash, check, Venmo, or card. We always ask for payment after a job is completed to ensure you are satisfied!
          </p>
        ),
      },
      {
        question: "How often should I schedule mobile detailing for my vehicle?",
        answer: (
          <p className="text-gray-600">
            The frequency of detailing depends on factors such as your driving habits, environmental conditions, and personal preferences. As a general guideline, we recommend scheduling detailing appointments every 3 to 6 months to keep your vehicle looking its best and maintain value.
          </p>
        ),
      },
      {
        question: "Is there anything I need to do before you come and detail my car?",
        answer: (
          <p className="text-gray-600">
            Yes, please make sure to remove all personal items and belongings from your vehicle. This allows us to provide the most thorough and efficient service possible.
          </p>
        ),
      },
      {
        question: "What happens if it rains on the day of my appointment?",
        answer: (
          <p className="text-gray-600">
            In the event of rain, we typically do not perform detailing services. However, we assess the situation on a case-by-case basis to see if we can still complete the job. If not, we will promptly reschedule your appointment for the earliest available time.
          </p>
        ),
      },
    ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 mb-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Note Section */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 px-4 py-3 mb-6">
          <p className="text-sm font-medium">
            Please note that access to a hose and power outlet will be required.
          </p>
        </div>

        {/* Header */}
        <h2 className="text-3xl font-bold mb-2">FAQ</h2>
        <p className="text-gray-500 italic mb-6">Commonly Asked Questions</p>

        {/* FAQ List */}
        <div className="space-y-4 ">
          {faqs.map((faq, index) => (
             <div
             key={index}
             className={`transition-all duration-300 ${
               openIndex === index
                 ? "border-l-[6px] bg-gray-50 border-gradient-to-b from-purple-500 via-blue-500 to-cyan-500"
                 : "border-l-[6px] border-gray-200"
             } p-4 rounded-lg shadow-md`}
           >
             {/* Question */}
             <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-start w-full font-semibold text-left text-lg text-gray-800 "
              >
                {faq.question}
                <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
               <div className="mt-4 pl-4 text-start relative">
               <div className="absolute top-0 left-0 h-full w-[3px]  bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500"></div>
               <div className="pl-6">
                 {faq.answer}
               </div>
             </div>
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-100 p-4 mt-12 rounded shadow-sm">
          <p className="text-sm font-semibold text-gray-700">
            Disclaimer: Stain removal is not guaranteed as various conditions can affect the outcome.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <AnimatedButton url="https://app.urable.com/virtual-shop/8KCjpE0z7HIuNt0ZaJ2K"/>        </div>
      </div>
    </section>
  );
};

export default FAQPage;
