import React from "react";
import Panel from "../assets/home1.jpg";
import Panel2 from "../assets/home2.jpg";
import {
  FaArrowRight,
  FaAtom,
  FaBullseye,
  FaCentos,
  FaCheckCircle,
  FaDiceD20,
  FaGgCircle,
} from "react-icons/fa";

const Features = () => {
  const serviceItems = [
    {
      icon: <FaAtom className="mr-2 size-6" />,
      service:
        "Deploy reliable solar energy systems to power homes and businesses",
    },
    {
      icon: <FaBullseye className="mr-2 size-6" />,
      service: "Design and offer affordable solar-powered products",
    },
    {
      icon: <FaDiceD20 className="mr-2 size-6" />,
      service: "Educate and empower communities on sustainable living",
    },
    {
      icon: <FaGgCircle className="mr-2 size-6" />,
      service: "Bridge the energy gap for underserved regions",
    },
  ];

  const operationItems = [
    {
      icon: <FaCheckCircle className="mr-2 size-6" />,
      operation:
        "Affordable pricing: We tailor solutions for different income levels",
    },
    {
      icon: <FaCheckCircle className="mr-2 size-6" />,
      operation: "Eco-conscious: 100% clean, renewable energy",
    },
    {
      icon: <FaCheckCircle className="mr-2 size-6" />,
      operation: "Community-driven: Focused on impact, not just sales",
    },
    {
      icon: <FaCheckCircle className="mr-2 size-6" />,
      operation:
        "Innovation-first: Developing smarter, more efficient solar products",
    },
  ];

  return (
    <div className="px-12 py-12 space-y-16">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-[18px] font-normal text-gray-900">
          Power your everyday experience, sustainably with GreenPawaa.
        </h2>
        <p className="text-black text-3xl md:text-5xl font-bold mt-1">
          Welcome to Green Pawaa
        </p>
      </div>

      {/* Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full">
          <img src={Panel2} alt="" className="w-full rounded-lg" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-gray-600 text-lg md:text-xl text-left">
            Greenpawaa is a forward-thinking organization committed to
            transforming lives through sustainable energy solutions. We
            specialize in solar technology, from installations to product
            innovation, with one goal: to make everyday life easier and greener
            for all.
            <button className="mt-4 bg-[#014130] hover:text-green-300 text-white font-bold py-2 px-4 border-b-4 border-[#014130] rounded-full flex items-center">
              Explore Our Solar Solutions
              <FaArrowRight className="ml-2" />
            </button>
          </p>
        </div>
      </div>

      {/* What We Do Section */}
      <div>
        <h1 className="font-bold text-3xl mb-6 text-center text-green-800">
          What We Do
        </h1>
        <div className="space-y-4 w-full max-w-4xl mx-auto">
          {serviceItems.map((serviceItem, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-green-600 text-2xl">{serviceItem.icon}</div>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                {serviceItem.service}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-3xl mb-6 text-green-800 text-center lg:text-left">
            Why Choose Greenpawaa?
          </h1>
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
            {operationItems.map((operationItem, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-green-600 text-2xl">
                  {operationItem.icon}
                </div>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  {operationItem.operation}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={Panel}
            alt="Solar Panel"
            className="w-full h-full max-h-[500px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
