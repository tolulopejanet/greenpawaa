import React, { useState } from "react";
import ServImage from "../assets/panel2.jpg";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Image1 from "../assets/panel2.jpg";
import Image2 from "../assets/panel.png";
import Image3 from "../assets/gadgets.png";
import Image4 from "../assets/pic1.jpg";
import Image5 from "../assets/training.jpeg";
import Image6 from "../assets/powerbank.jpeg";
import { fadeIn } from "../utils/motion";

const blogs = [
  {
    title: "Lighting Up Africa: The Solar Energy Revolution",
    author: "Green Pawaa",
    image: Image2,
    preview:
      "Solar energy is changing lives across the continent — here’s how Green Pawaa is leading the charge...",
    content:
      "Access to reliable power has long been a challenge in many African regions. Green Pawaa is closing the gap with solar technology, empowering homes and businesses with clean, sustainable energy. From rooftop panels to rural electrification projects, we’re making solar accessible and impactful.",
  },
  {
    title: "Beyond the Grid: How Green Pawaa Empowers Rural Communities",
    author: "Green Pawaa",
    image: Image3,
    preview:
      "Rural communities deserve dependable power too — and we're delivering just that...",
    content:
      "In areas where national grids don’t reach, Green Pawaa steps in with portable solar kits and mini-grids. We’re enabling students to study at night, farmers to preserve crops, and health centers to run equipment. This blog highlights stories of hope and transformation from our projects in underserved communities.",
  },
  {
    title: "5 Reasons to Switch to Solar Now",
    author: "Green Pawaa",
    image: Image1,
    preview:
      "Still thinking about going solar? Here are five reasons why now is the perfect time...",
    content:
      "From lower electricity bills to reducing your carbon footprint, solar offers unbeatable advantages. With Green Pawaa's flexible financing and durable systems, making the switch has never been easier. This article outlines environmental, economic, and personal reasons to go green today.",
  },
  {
    title: "The Future of Energy in Africa: Decentralized and Digital",
    author: "Green Pawaa",
    image: Image4,
    preview:
      "A new energy era is rising, and it's smart, clean, and community-driven...",
    content:
      "Africa is leapfrogging traditional energy systems with decentralized solar solutions. Using smart meters, mobile monitoring, and AI diagnostics, Green Pawaa is building an energy future that’s efficient and inclusive. Discover how digital innovation is powering sustainable progress.",
  },
  {
    title: "Training the Next Generation of Green Tech Leaders",
    author: "Green Pawaa",
    image: Image5,
    preview:
      "Green energy isn’t just about systems — it’s about people. Here’s how we’re building talent...",
    content:
      "At Green Pawaa, we invest in people as much as in panels. Through our training programs, we equip young Nigerians with hands-on skills in solar installation, maintenance, and clean energy entrepreneurship. Learn how we’re preparing a new workforce for a brighter tomorrow.",
  },
  {
    title: "Going Green Made Simple: Your Solar Installation Checklist",
    author: "Green Pawaa",
    image: Image6,
    preview: "Thinking of installing solar at home or work? Start here...",
    content:
      "Going solar doesn’t have to be complicated. This post guides you through the steps: from assessing your energy needs, selecting the right system, preparing your site, to post-install maintenance. With Green Pawaa, clean energy is just a few steps away.",
  },
];

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <motion.section
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full bg-gray-50 pt-15 px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      <div className="relative aspect-image overflow-hidden rounded-lg">
        <img
          src={ServImage}
          className="w-full lg:h-[70vh] h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className=" lg:text-7xl leading-snug font-bold mb-5 text-white text-3xl">
            Welcome to Our Blog
          </h2>
          <p className="text-white text-center px-4">
            We offer everything you need to get started from helpful tips and
            tutorials
          </p>
        </div>
      </div>

      <div className="py-6 bg-gray-100 min-h-screen">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition"
              onClick={() => setSelectedBlog(blog)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-500 mb-1">{blog.author}</p>
              <p className="text-gray-600">{blog.preview}</p>
            </div>
          ))}
        </div>
        {selectedBlog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl max-w-xl w-full relative overflow-y-auto max-h-[90vh]">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
                onClick={() => setSelectedBlog(null)}
              >
                &times;
              </button>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{selectedBlog.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {selectedBlog.author}
              </p>
              <p className="text-gray-700 whitespace-pre-line">
                {selectedBlog.content}
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}
