import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingPlans = () => {
  const plans = [
    {
      name: "Mini Pawaa",
      price: "₦15,000",
      description:
        "Perfect for small households or individuals starting with solar.",
      benefits: [
        "Powerful Lithium Battery",
        "3 LED Bulbs",
        "Weatherproof Design for Outdoor Use",
        "USB phone charging port",
      ],
      popular: false,
    },
    {
      name: "Standard Pawaa",
      price: "₦30,000",
      description:
        "Ideal for families or small offices needing reliable energy.",
      benefits: [
        "Powerful Lithium Battery",
        "3 LED Bulbs",
        "Rechargeable fan",
        "USB phone charging port",
      ],
      popular: true,
    },
    {
      name: "Midi Pawaa",
      price: "₦15,000",
      description:
        "Perfect for small households or individuals starting with solar.",
      benefits: [
        "Powerful Lithium Battery",
        "3 LED Bulbs",
        "Weatherproof Design for Outdoor Use",
        "USB phone charging port",
      ],
      popular: false,
    },

    {
      name: "Basic Pawaa",
      price: "₦15,000",
      description:
        "Perfect for small households or individuals starting with solar.",
      benefits: [
        "Powerful Lithium Battery",
        "3 LED Bulbs",
        "Weatherproof Design for Outdoor Use",
        "USB phone charging port",
      ],
      popular: false,
    },
    {
      name: "Premium Pawaa",
      price: "₦30,000",
      description:
        "Ideal for families or small offices needing reliable energy.",
      benefits: [
        "Powerful Lithium Battery",
        "3 LED Bulbs",
        "Rechargeable fan",
        "USB phone charging port",
      ],
      popular: true,
    },
    {
      name: "Maxi Pawaa",
      price: "₦15,000",
      description:
        "Perfect for small households or individuals starting with solar.",
      benefits: [
        "Powerful Lithium Battery",
        "3 LED Bulbs",
        "Weatherproof Design for Outdoor Use",
        "USB phone charging port",
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

            <button className="mt-6 w-full bg-[#014130] text-white py-2 rounded-md font-semibold hover:bg-green-800 transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
