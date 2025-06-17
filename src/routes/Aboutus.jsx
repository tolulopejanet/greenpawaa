import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import mission from "../assets/mission.jpg";
import vision from "../assets/vision.jpg";
import support from "../assets/support.jpg";

const Aboutus = () => {
  return (
    <div className="pt-48 pb-12 px-12 bg-white">
      <div className="text-center space-y-5">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          About Us
        </h2>
        <p className="md:w-1/2 mb-12 mx-auto">
          We design solutions that not only serve today but also shape a better
          tomorrow from residential solar setups to commercial systems and
          innovative energy products.
        </p>
      </div>

      <div className="py-12 mx-auto">
        <Tabs>
          <TabList className="flex flex-wrap justify-between items-center md:gap-8 gap-4 bg-white p-4 rounded-2xl border shadow-lg cursor-pointer">
            <Tab className="text-black font-bold hover:text-[#014130] hover:underline">
              Our Mission
            </Tab>
            <Tab className="text-black hover:text-[#014130] font-bold hover:underline">
              Our Vision
            </Tab>
            <Tab className="text-black hover:text-[#014130] font-bold hover:underline">
              Support
            </Tab>
          </TabList>

          <TabPanel>
            <div className="flex flex-col md:flex-row gap-8 mt-8">
              <div className="md:w-1/2 bg-white rounded-full p-12 mt-4">
                <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
                <p className="mb-8 text-justify">
                  At Greenpawaa, our mission is to{" "}
                  <b>harness the power of the sun</b> to improve everyday life.
                  We are committed to delivering sustainable, clean, and
                  affordable solar energy solutions that empower individuals,
                  homes, and communities regardless of their income level. By
                  integrating technology with purpose, we strive to close the
                  energy gap and promote a greener future for all.
                </p>
              </div>

              <div className="md:w-1/2">
                <img
                  src={mission}
                  alt="mission"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col md:flex-row gap-8 mt-8">
              <div className="md:w-1/2 bg-white rounded-lg p-12">
                <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
                <p className="mb-8 text-justify">
                  We envision a world where access to clean energy is not a
                  privilege, but a right. Greenpawaa is building a future where
                  every home, school, and small business no matter how remote
                  can rely on renewable solar power as a dependable and
                  affordable energy source. Our vision is to lead the transition
                  to a{" "}
                  <b>
                    more sustainable, inclusive, and energy-independent world
                  </b>
                  .
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src={vision}
                  alt="vision"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col md:flex-row gap-8 mt-8">
              <div className="md:w-1/2 bg-white rounded-lg p-12">
                <h3 className="text-3xl font-semibold mb-4">Our Support</h3>
                <p className="mb-8 text-justify">
                  We are not just a solar company, we are your energy partner.
                  Greenpawaa offers ongoing support, consultation, and
                  maintenance to ensure our customers get the most out of their
                  solar investment. Whether you're exploring solar for the first
                  time or upgrading your system, our team is here to walk with
                  you every step of the way with{" "}
                  <b>clarity, care, and commitment</b>.
                </p>
                <h4 className="text-xl font-medium text-black mb-4">
                  Benefits
                </h4>
                <ul className="list-disc list-inside space-y-3">
                  <li>24/7 Virtual Support</li>
                  <li>No Downtime</li>
                  <li>Affordable Payment Plan</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src={support}
                  alt="support"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Aboutus;
