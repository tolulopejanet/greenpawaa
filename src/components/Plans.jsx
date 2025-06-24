import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingPlans = () => {
  const plans = [
    {
      name: "Mini Pawaa",
      description:
        "Yes, there is a package for everyone. Anyone can start with our Mini Pawaa Package.",
      benefits: [
        "Pawaa Bank",
        "Pawaa USB Fan",
        "2 Pawaa USB Bulb",
        "Pawaa Radio",
      ],
      popular: false,
    },
    {
      name: "Standard Pawaa",
      description:
        "Affordable all-around solution ideal for families or small offices needing reliable energy.",
      benefits: [
        "2 Pawaa LED Solar Bulb",
'Pawaa 18" Solar Fan',
"Pawaa Eco PS",
"Pawaa Bank",
"High-Efficiency Solar Panel",
      ],
      popular: true,
    },
    {
      name: "Midi Pawaa",
      description:
        "Portable Essentials Pack for travelers, students, and Individuals on a budget.",
      benefits: [
        "Pawaa PS200 Power Station", 
        "Pawaa USB Fan",
        "2 Pawaa USB Bulb",
        "Multi Pawaa PS",
        "Panel",
      ],
      popular: false,
    },

    {
      name: "Basic Pawaa",
      description:
        "Only the Basics for users looking to start small with reliable solar lighting and power.",
      benefits: [
        "1 Pawaa LED Solar Bulb",
        "1 Pawaa LED Bulb",
        'Pawaa 8" Rechargeable Fan',
        "PawaaBank",
        "Pawaa Radio (Optional)",
      ],
      popular: false,
    },
    {
      name: "Premium Pawaa",
      description:
        "Premium all-in-one kit for solar-powered living. Perfect for families or small offices needing reliable energy.",
      benefits: [
      "Pawaa PS500 Power Station",
      'Pawaa 16" Solar Fan',
      "3x Pawaa LED Solar Bulbs",
      "Pawaa Bank",
      "Panel",
      ],
      popular: true,
    },
    {
      name: "Maxi Pawaa",
      description:
        "Retail & Small Shop Power Kit, tailored for kiosks, salons, and small business setups.",
      benefits: [
        "Pawaa PS300 Power Station",
        "2 Pawaa LED Bulb",
        "Pawaa Radio (Digital Clock + Bluetooth)",
        'Pawaa 18" Rechargeable Fan',
        "Panel",
      ],
      popular: false,
    },
  ];

  return (
    <div className="py-12 px-4 bg-gray-50">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-green-800 mb-20">
        Effective & Flexible Pricing That Adapts Your Needs
      </h2>

      <div className="grid md:grid-cols-3 gap-18 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-xl border flex flex-col justify-between text-center transition hover:shadow-lg
              ${
                plan.popular
                  ? "bg-green-100 border-green-600 shadow-xl mt-[-30px] z-10"
                  : "bg-white border-gray-200"
              }
              p-8`}
          >
            <div>
              <h3 className="text-xl font-semibold text-green-700">
                {plan.name}
              </h3>
              <p className="text-2xl font-bold text-black my-2">{plan.price}</p>
              <p className="text-gray-600 mb-4">{plan.description}</p>

              <ul className="space-y-3 text-sm text-left">
                {plan.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-6 w-full bg-[#014130] text-white py-2 rounded-full font-semibold hover:bg-green-800 transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
