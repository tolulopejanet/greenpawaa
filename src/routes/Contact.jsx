import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Lottie from "lottie-react";
// import contact from "../assets/contact.json";

const ContactUs = () => {
  return (
    <div className="pt-32 px-12 mb-16 mx-auto max-w-7xl">
      <div className="flex flex-col justify-between items-center gap-8">
        <form
          action=""
          className="w-full md:w-1/2 bg:gray-100 rounded-lg border border-green-300 shadow-lg shadow-blue-500 p-10"
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
