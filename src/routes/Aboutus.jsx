import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Aboutus = () => {
  return (
    <div className="pt-28 px-6 sm:px-10 md:px-16 lg:px-24 pb-12 bg-white">
      <div className="text-center space-y-5">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          About Us
        </h2>
        <p className="md:w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          accusantium eligendi debitis animi aspernatur quibusdam consequatur
          delectus, nihil perferendis earum quod minima, natus esse odit
          voluptate magnam unde itaque expedita?
        </p>
      </div>

      <div className="py-12 md:w-4/5 mx-auto">
        <Tabs>
          <TabList>
            <Tab>Our Mission</Tab>
            <Tab>Our Vision</Tab>
            <Tab>Support</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Aboutus;
