import React from "react";
import Panel from "../assets/panel.png";

const Aboutus = () => {
  return (
    <div className="px-8 py-12">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-xl font-normal text-gray-900">
          Fuel Your World with the Sun
        </h2>

        <div className="mb-12 mt-1">
          <p className="text-black text-3xl md:text-5xl text-center font-medium">
            Welcome to Green Pawaa
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="w-full ">
          <img src={Panel} alt="" />
        </div>
        <div className="">
          <p className="text-gray-600 text-lg md:text-xl max-w-xl text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
            nemo veniam? Harum esse sed facere sapiente sit aperiam vitae!
            Recusandae magni asperiores impedit eius suscipit eligendi,
            voluptatem quasi animi adipisci. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Deserunt, nemo veniam? Harum esse sed
            facere sapiente sit aperiam vitae! Recusandae magni asperiores
            impedit eius suscipit eligendi, voluptatem quasi animi adipisci.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
