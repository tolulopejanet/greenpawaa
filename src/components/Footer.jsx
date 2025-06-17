import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#014130] text-white px-6 pt-12 pb-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-green-100">
        
        {/* Logo + About */}
        <div className>
          <img
            src={logo}
            alt="Green Pawaa Logo"
            className="h-30 w-auto ml-[-20px]"
          />
          <p className="mt-[-20px]">
            Powering the future with clean, reliable, and sustainable energy solutions across Africa and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/aboutus" className="hover:underline">About Us</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Services / Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
          <ul className="space-y-2">
            <li><Link to="/showcase" className="hover:underline">Showcase</Link></li>
            <li><Link to="/pawaa-pay" className="hover:underline">Pawaa Pay</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/partnership" className="hover:underline">Partnership and Enterprises</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4 md:justify-start mb-4">
            {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedin].map((Icon, idx) => (
              <Icon
                key={idx}
                className="text-green-100 hover:text-white transition text-lg cursor-pointer"
              />
            ))}
          </div>
          <p>Let’s stay connected on social media and build a greener future together.</p>
        </div>
      </div>

      {/* Divider*/}
      <div className="max-w-7xl mx-auto mt-10 border-t border-green-100/20 pt-4 text-center text-green-200 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Green Pawaa. All rights reserved.</p>
        <div className="space-x-4">
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:underline">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;