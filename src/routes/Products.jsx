import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Image1 from "../assets/Bulb2.png";
import Image2 from "../assets/Bulb4.png";
import Image3 from "../assets/Bulb3.png";
import Image4 from "../assets/bulb.png";
import Image11 from "../assets/StandingFan1.png";
import Image12 from "../assets/Fan3.png";
import Image13 from "../assets/StandingFan2.png";
import Image14 from "../assets/Fan4.png";
import Image21 from "../assets/PowerStation.png";
import Image22 from "../assets/PowerStation.png";
import Image23 from "../assets/Radio3.png";
import Image24 from "../assets/PowerStation.png";
import Image31 from "../assets/GRadio2.jpg";
import Image32 from "../assets/GRadio.png";
import Image33 from "../assets/GRadio.png";
import Image34 from "../assets/Panel.png";
import Image41 from "../assets/Carton.png";
import Image42 from "../assets/Fan.png";
import Image43 from "../assets/SECURITY.png";
import Image44 from "../assets/GPanel.png";


import { FiBatteryCharging, FiSettings, FiBox } from "react-icons/fi";
import { BsLightningCharge, BsLightbulb, BsFan } from "react-icons/bs";
import { MdUsb, MdPower, MdSolarPower } from "react-icons/md";

const Products = () => {
  const highlightColor = "#014130";

  const specIcons = [
    { icon: <FiBatteryCharging />, label: "Battery" },
    { icon: <FiSettings />, label: "Settings" },
    { icon: <FiBox />, label: "Packaging" },
    { icon: <BsLightningCharge />, label: "Charge" },
    { icon: <BsLightbulb />, label: "Light" },
    { icon: <BsFan />, label: "Fan" },
    { icon: <MdUsb />, label: "USB" },
    { icon: <MdPower />, label: "Power" },
    { icon: <MdSolarPower />, label: "Solar" },
  ];

  const categories = [
    {
      name: "Bulb",
      id: "bulb",
      items: [
        {
          name:"Bulb1",
          specs: ["Fast Charge", "Brighter and Durable", "360 Lighting", "Lithium Battery"],
          image: Image1,
        },
        {
          name: "Wall Solar Fan",
          specs: ["Solar Panel Charge","Brighter and Durable","360 Lighting","Lithium Battery"],
          image: Image2,
        },
        {
          name: "Standing Solar Fan",
          specs: ["5V USB Powered ", "Brighter and Durable","360 Lighting","Hangable and Portable"],
          image: Image3,
        },
        {
          name: "Mini Desk Solar Fan",
          specs: ["USB chargeable", "Compact", "Lightweight", "Efficient"],
          image: Image4,
        },
      ],
    },
    {
      name: "Fan",
      id: "fan",
      items: [
        {
          name: "LED Solar Bulb",
          specs: ["7W", "1000lm brightness", "Long life", "Energy saving"],
          image: Image11,
        },
        {
          name: "Emergency Solar Bulb",
          specs: ["Auto-on", "During outage", "Rechargeable", "12 hrs runtime"],
          image: Image12,
        },
        {
          name: "Smart Solar Bulb",
          specs: ["Remote control", "Dimmable", "Cool & Warm", "Wireless"],
          image: Image13,
        },
        {
          name: "Hanging Solar Bulb",
          specs: ["Outdoor hook", "12 hrs use", "Compact", "Bright light"],
          image: Image14,
        },
      ],
    },
    {
      name: "Power Station",
      id: "power-station",
      items: [
        {
          name: "500W Inverter",
          specs: ["Pure sine wave", "12V", "Compact", "Fanless"],
          image: Image21,
        },
        {
          name: "1kVA Solar Inverter",
          specs: ["Built-in controller", "Durable", "Display", "Safety fuse"],
          image: Image22,
        },
        {
          name: "Hybrid Inverter",
          specs: ["1.5kW", "MPPT charge", "Solar/AC hybrid", "Low noise"],
          image: Image23,
        },
        {
          name: "Compact Inverter",
          specs: ["300W backup", "Wall-mountable", "LED indicators", "Safe"],
          image: Image24,
        },
      ],
    },
   
    {
      name: "Others",
      id: "others",
      items: [
        {
          name: "10000mAh Powerbank",
          specs: ["Dual USB", "LED light", "Compact", "Solar panel"],
          image: Image31,
        },
        {
          name: "20000mAh Solar Pack",
          specs: ["Waterproof", "Rugged design", "4 outputs", "Fast charge"],
          image: Image32,
        },
        {
          name: "Slim Solar Powerbank",
          specs: ["Fast charging", "Pocket size", "USB-C", "LED display"],
          image: Image33,
        },
        {
          name: "Wireless Solar Charger",
          specs: ["Qi enabled", "15000mAh", "Solar + USB", "LED torch"],
          image: Image34,
        },
      ],
    },
     {
      name: "Old Stock",
      id: "old-stock",
      items: [
        {
          name: "10000mAh Powerbank",
          specs: ["Dual USB", "LED light", "Compact", "Solar panel"],
          image: Image41,
        },
        {
          name: "20000mAh Solar Pack",
          specs: ["Waterproof", "Rugged design", "4 outputs", "Fast charge"],
          image: Image42,
        },
        {
          name: "Slim Solar Powerbank",
          specs: ["Fast charging", "Pocket size", "USB-C", "LED display"],
          image: Image43,
        },
        {
          name: "Wireless Solar Charger",
          specs: ["Qi enabled", "15000mAh", "Solar + USB", "LED torch"],
          image: Image44,
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveCategory(visible.target.id);
        }
      },
      { threshold: 0.4 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToCategory = (id) => {
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="pt-28 px-4 sm:px-6 md:px-16 lg:px-24 pb-12 bg-white">
      {/* Mobile nav */}
      <div className="md:hidden sticky top-20 z-10 bg-white  py-2 overflow-x-auto border-b">
        <div className="flex space-x-3 px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={`text-sm px-4 py-2 rounded-full whitespace-nowrap border transition-colors duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#014130] text-white border-[#014130]"
                  : "bg-gray-200 text-gray-700 border-gray-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-6">
        {/* Sidebar */}
        <div className="hidden md:block w-1/4 sticky top-28 h-max">
          <div className="rounded-xl p-4 shadow-lg bg-white">
            <h2 className="text-xl font-semibold mb-4">Solar Products</h2>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`cursor-pointer p-2 rounded transition-colors duration-300 ${
                    activeCategory === cat.id
                      ? "bg-[#014130] text-white font-semibold"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main content */}
        <div className="w-full md:w-3/4 space-y-12">
          {categories.map((cat) => (
            <div
              key={cat.id}
              id={cat.id}
              ref={(el) => (sectionRefs.current[cat.id] = el)}
              className="scroll-mt-32"
            >
              <h3 className="text-xl font-semibold mb-6">{cat.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition"
                  >
                    <img
                      loading="lazy"
                      src={item.image}
                      alt={item.name}
                      className="w-full h-72 object-cover"
                    />
                    <div className="p-4 text-left">
                      <div className="font-bold text-md mb-4">{item.name}</div>
                      <h4 className="text-sm text-left font-semibold text-[#014130] mb-2">
                        Specifications
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        {item.specs.map((spec, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span
                              className="text-lg"
                              title={specIcons[i % specIcons.length].label}
                              style={{ color: highlightColor }}
                            >
                              {specIcons[i % specIcons.length].icon}
                            </span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
