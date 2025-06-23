import React, { useState, useEffect, useRef } from "react";
import { MdClose, MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const navLinkClass = ({ isActive }) =>
    `px-3 text-sm font-bold ${isActive ? "text-green-400" : "hover:text-gray-300"}`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-3 py-2 text-sm font-medium ${isActive ? "text-green-400" : "hover:bg-green-800"}`;

  const menuItems = {
    installations: {
      title: "Our Solutions",
      items: [
        { link: "products", name: "Products", desc: "Be productive with Solar" },
        { link: "pawaa-pay", name: "Pawaa Pay", desc: "Affordable and flexible payment" },
        { link: "partnership", name: "Partnership and Enterprises", desc: "Drive more growth" },
      ],
    },
    impact: {
      title: "Our Impact",
      items: [
        { link: "showcase", name: "Showcase", desc: "Scale up your business" },
        { link: "blog", name: "Blog", desc: "Be productive with Solar" },
        { link: "community", name: "Community", desc: "Join the conversation" },
      ],
    },
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="bg-[#014130] text-white fixed top-0 left-0 right-0 border-b border-white/10 z-50"
    >
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <NavLink to="/" className="text-xl">
              <img src={Logo} alt="logo" className="h-30 mx-auto md:mx-0" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/aboutus" className={navLinkClass}>About Us</NavLink>

            {Object.keys(menuItems).map((key) => (
              <div key={key} className="relative">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-bold flex items-center cursor-pointer"
                >
                  {menuItems[key].title}
                  <MdKeyboardArrowDown
                    className={`ml-2 h-5 w-5 transition-transform ${activeDropdown === key ? "rotate-180" : ""}`}
                  />
                </button>

                {activeDropdown === key && (
                  <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg py-1 text-black z-10">
                    <div className="grid grid-cols-1 gap-4 p-4">
                      {menuItems[key].items.map((item, idx) => (
                        <NavLink
                          key={idx}
                          to={`/${item.link}`}
                          className="group flex items-start w-full p-2 rounded-lg hover:bg-gray-50 bg-white transition-colors"
                        >
                          <div className="w-full">
                            <p className="text-sm font-bold text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
          </div>

          {/* Auth Button */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/"
              className="hidden xl:block bg-green-900 px-4 py-2 rounded-full hover:bg-green-100 hover:text-green-900"
            >
              Sign Up
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300"
            >
              {isMenuOpen ? <MdClose className="w-6 h-6" /> : <MdMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <NavLink to="/" className={mobileNavLinkClass}>Home</NavLink>
          <NavLink to="/aboutus" className={mobileNavLinkClass}>About Us</NavLink>

          {Object.keys(menuItems).map((key) => (
            <div key={key}>
              <button
                onClick={() => toggleDropdown(key)}
                className="px-3 py-2 rounded-md flex items-center w-full text-left"
              >
                {menuItems[key].title}
                <MdKeyboardArrowDown
                  className={`ml-2 h-5 w-5 transition-transform ${activeDropdown === key ? "rotate-180" : ""}`}
                />
              </button>

              {activeDropdown === key && (
                <div className="pl-4 space-y-1">
                  {menuItems[key].items.map((item, idx) => (
                    <NavLink
                      key={idx}
                      to={`/${item.link}`}
                      className="block text-sm text-green-100 hover:text-green-400"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          <NavLink to="/contact" className={mobileNavLinkClass}>Contact Us</NavLink>
          <NavLink
            to="/"
            className="block px-3 py-2 bg-green-900 rounded-md text-white text-center hover:bg-green-100 hover:text-green-900"
          >
            Sign Up
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;