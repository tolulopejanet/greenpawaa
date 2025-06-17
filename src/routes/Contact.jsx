import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import ServImage from "../assets/panel2.jpg";

const ContactUs = () => {
  return (
    <div className="pt-20">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh] overflow-hidden rounded-lg">
        <img
          src={ServImage}
          alt="Solar Panel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold text-center px-4">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* Left Column */}
        <div className="flex flex-col justify-center self-center space-y-10">
          <div>
            <h2 className="text-xl font-bold mb-4 text-green-900">Follow Us</h2>
            <div className="flex space-x-4 text-green-800 text-2xl">
              <FaInstagram className="hover:text-green-500 cursor-pointer" />
              <FaFacebook className="hover:text-green-500 cursor-pointer" />
              <FaTwitter className="hover:text-green-500 cursor-pointer" />
              <FaLinkedin className="hover:text-green-500 cursor-pointer" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2 text-green-900">WhatsApp</h2>
            <div className="flex items-center space-x-2 text-lg text-green-800">
              <a
  href="https://wa.me/2348138257344"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-2 text-lg text-green-800 hover:text-green-500 transition"
>
  <FaWhatsapp />
  <span>0813 825 7344</span>
</a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 bg-white border border-green-300 rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-900">
            Get In Touch
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-700 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;