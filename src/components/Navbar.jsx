import React, { useState } from "react";
import { MdClose, MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const menuItems = {
    installations: {
      title: "Our Solutions",
      items: [
        {
          link: "productandpricing-plan",
          name: "Product and Pricing Plan",
          desc: "Be productive with Solar",
        },
        {
          link: "partnership",
          name: "Partnership and Enterprises",
          desc: "Win more clients",
        },
        {
          link: "pawaaplatform",
          name: "Pawaa Platform",
          desc: "Drive more growth",
        },
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

  return (
    <nav className="bg-[#014130] text-white fixed top-0 left-0 right-0 border-b border-white/10 z-50">
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* logo */}
          <div>
            <Link to="/" className="text-xl ">
              <img src={Logo} alt="logo" className="w-20 h-25 object-cover" />
            </Link>
          </div>

          {/* desktop menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/"
              className="hover:text-gray-300 text-sm font-medium px-3"
            >
              {" "}
              Home
            </Link>
            <Link
              to="/aboutus"
              className="hover:text-gray-300 text-sm font-medium px-3"
            >
              {" "}
              About Us
            </Link>
            {Object.keys(menuItems).map((key) => (
              <div key={key.title} className="relative">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center cursor-pointer"
                >
                  {menuItems[key].title}
                  <MdKeyboardArrowDown
                    className={`ml-2 h-5 w-5 transition-transform ${
                      activeDropdown === key ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === key && (
                  <div className="absolute left-0 mt-2 w-screen max-w-md bg-white rounded-md shadow-lg py-1 text-black">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4">
                      {key === "platform" ? (
                        menuItems[key].sections.map((section, idx) => (
                          <div key={idx}>
                            <h3 className="text-xs font-semibold text-gray-500 tracking-wider mb-2">
                              {section.title}
                            </h3>
                            {/* You might want to render items inside this section if needed */}
                          </div>
                        ))
                      ) : (
                        <div className="space-y-2">
                          {menuItems[key].items.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.link}
                              className="group flex items-start w-full p-2 rounded-lg hover:bg-gray-50 bg-white transition-colors"
                            >
                              <div className="w-full">
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              className="hover:text-gray-300 text-sm font-medium"
            >
              {" "}
              Contact Us
            </Link>
          </div>

          {/* auth btn */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="hover:text-gray-300 hidden bg-green-900 px-4 py-2 rounded-md hover:bg-green-100 hover:text-green-900 xl:block"
            >
              Sign Up
            </Link>
          </div>

          {/* mobile menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 hover-bg gray-700"
            >
              {!isMenuOpen ? (
                <MdMenu className="block w-6 h-6" />
              ) : (
                <MdClose className="block w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 hover:bg-green-800 bg:text-green-100"
            >
              Home{" "}
            </Link>
            <Link
              to="/aboutus"
              className="block px-3 py-2 hover:bg-green-800 bg:text-green-100"
            >
              About Us{" "}
            </Link>
            {Object.keys(menuItems).map((key) => (
              <div className="">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="px-3 py-2 rounded-md flex items-center cursor-pointer"
                >
                  {menuItems[key].title}
                  <MdKeyboardArrowDown
                    className={`ml-2 h-5 w-5 transition-transform ${
                      activeDropdown === key ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === key && (
                  <div className="">
                    <div className="pl-4">
                      {key === "platform" ? (
                        menuItems[key].sections.map((section, idx) => (
                          <div key={idx}>
                            <h3 className="text-xs font-semibold tracking-wider mb-2 hover:text-green-800">
                              {section.title}
                            </h3>
                            <div>
                              {section.items.map((item, itemIdx) => (
                                <Link
                                  key={itemIdx}
                                  to={item.link}
                                  className="group flex items-start p-2 rounded-lg hover:text-green-800"
                                ></Link>
                              ))}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="space-y-2">
                          {menuItems[key].items.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.link}
                              className="group flex items-start p-2 rounded-lg"
                            >
                              <div className="px-4">
                                <p className="text-sm font-medium text-green-100">
                                  {item.name}
                                </p>
                                <p className="text-sm text-green-300">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              className="block px-3 py-2 hover:bg-green-800 bg:text-green-100"
            >
              Contact Us{" "}
            </Link>

            <Link
              to="/"
              className="block px-3 py-2 bg:text-green-100 bg-green-900 px-4 py-2 rounded-md hover:bg-green-100 hover:text-green-900"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
