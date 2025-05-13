import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#014130]  pt-16">
      <div className="px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-green-50 text-center">
        <div>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p className="text-green-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit blanditiis doloremque, facilis odit id commodi vel
            placeat nisi.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a href="#" className="hover:underline text-green-100 ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-green-100 ">
                Our Impact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-green-100 ">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-green-100 ">
                Sign Up
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-green-100 ">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <ul className="flex space-x-4 justify-center">
            <li>
              {" "}
              <FaInstagram className="text-white-500 size-5" />
            </li>
            <li>
              <FaFacebookF className="text-white-500 size-5" />
            </li>
            <li>
              <FaTwitter className="text-white-500 size-5" />
            </li>
            <li>
              <FaLinkedin className="text-white-500 size-5" />
            </li>
          </ul>

          <div className="mt-10">
            <div className="h-full flex items-center justify-center">
              <form className="w-96 relative" action="">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full text-green-300 p-4 h-10 rounded-full focus:outline-none focus:border outline-[2px] border-green-300"
                />
                <button
                  type="submit"
                  className="bg-green-300 px-8 py-2 rounded-full text-black absolute top-0 right-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-green-100 p-4 text-green-100 text-center mt-10">
        <p>&copy; 2025 Green Pawaa. All Rights Reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
