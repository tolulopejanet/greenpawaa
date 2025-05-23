import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import mission from "../assets/mission.jpg";
import vision from "../assets/vision.jpg";
import support from "../assets/support.jpg";

const Aboutus = () => {
  return (
    <div className="pt-36 px-6 sm:px-10 md:px-16 lg:px-24 pb-12 bg-white">
      <div className="text-center space-y-5">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          About Us
        </h2>
        <p className="md:w-1/2 mx-auto">
          We design solutions that not only serve today but also shape a better
          tomorrow from residential solar setups to commercial systems and
          innovative energy products.
        </p>
      </div>

      <div className="py-12 md:w-4/5 mx-auto">
        <Tabs>
          <TabList className="flex flex-wrap justify-between items-center md:gap-8 gap-4 bg-white p-4 rounded-2xl shadow-md cursor-pointer">
            <Tab className="text-black hover:text-[#014130] hover:font-bold">
              Our Mission
            </Tab>
            <Tab className="text-black hover:text-[#014130] hover:font-bold">
              Our Vision
            </Tab>
            <Tab className="text-black hover:text-[#014130] hover:font-bold">
              Support
            </Tab>
          </TabList>

          <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
            <div className="md:w-1/2 bg-white rounded-lg p-12 mt-4">
              <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias consequuntur reiciendis dicta cum, ea deleniti error
                doloribus aspernatur sunt excepturi molestiae dolorem iusto
                porro dolor soluta. Et molestias maiores minus?
              </p>
            </div>

            <div className="md:w-1/2">
              <img
                src={mission}
                alt="mission"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </TabPanel>
          <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
            <div className="md:w-1/2 bg-white rounded-lg p-12">
              <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias consequuntur reiciendis dicta cum, ea deleniti error
                doloribus aspernatur sunt excepturi molestiae dolorem iusto
                porro dolor soluta. Et molestias maiores minus?
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={vision}
                alt="vision"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </TabPanel>
          <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
            <div className="md:w-1/2 bg-white rounded-lg p-12">
              <h3 className="text-3xl font-semibold mb-4">Our Support</h3>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias consequuntur reiciendis dicta cum, ea deleniti error
                doloribus aspernatur sunt excepturi molestiae dolorem iusto
                porro dolor soluta. Et molestias maiores minus?
              </p>
              <h4 className="text-xl font-medium text-black mb-4">Benefits</h4>
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
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Aboutus;
