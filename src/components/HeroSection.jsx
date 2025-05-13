import React from "react";
import BackgroundImg from "../assets/background.jpg";

const HeroSection = () => {
  return (
    <section className="z-10 w-full ">
      <div className=" aspect-image overflow-hidden rounded-lg ">
        <img
          src={BackgroundImg}
          className="w-full lg:h-[90vh] h-[100vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 lg:h-[90vh] h-[100vh]"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-3/5 space-y-8 pt-8">
            <h2 className=" lg:text-8xl font-bold mb-5 text-white text-5xl">
              The Future is Solar Powered
            </h2>
            <p className="text-white leading-snug">
              By harnessing the abundant energy of the sun, we reduce our
              reliance on fossil fuels, lower carbon emissions, and pave the way
              for a greener, more resilient future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
