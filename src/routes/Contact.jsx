import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import ServImage from "../assets/panel2.jpg";

const ContactUs = () => {
  return (
    <div className="pt-24 mb-16">
      <div className="relative aspect-image overflow-hidden rounded-lg">
        <img
          src={ServImage}
          className="w-full lg:h-[70vh] h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="flex lg:flex-row justify-between flex-col-reverse items-center px-12 gap-8">
         <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <ul className="flex space-x-4 justify-left">
            <li>
              <FaInstagram className="text-white-500 size-8 hover:text-green-400 cursor-pointer" />
            </li>
            <li>
              <FaFacebook className="text-white-500 size-8 hover:text-green-400 cursor-pointer" />
            </li>
            <li>
              <FaTwitter className="text-white-500 size-8 hover:text-green-400 cursor-pointer" />
            </li>
            <li>
              <FaLinkedin className="text-white-500 size-8 hover:text-green-400 cursor-pointer" />
            </li>
          </ul>
        </div>
        <div>
           <h2 className="text-lg font-bold mt-5 mb-2">Reach Us on WhatsApp</h2>
           <div className="flex space-x-4 justify-left">
              <FaWhatsapp className="text-white-500 size-8" />
              <span className="text-[20px]" >08138257344</span>
            </div>

          
          </div>

        <form
          action=""
          className="w-full md:w-1/2 sticky  rounded-[50px] border border-green-300 shadow-lg shadow-blue-500 bg-white p-10 z-50 mt-[-95px]"
        >
          <h1 className="text-4xl font-bold mb-7 text-center">Contact Us</h1>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black/80"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="mt-1 p-2 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black/80"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="mt-1 p-2 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-black/80"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="mt-1 p-2 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <button className="bg-green-900 px-3 py-2 rounded-xl text-white">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
