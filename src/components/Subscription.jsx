import React from "react";

const Subscription = () => {
  return (
    <div className="bg-white text-[#014130] px-6 pt-12 pb-10 shadow-inner">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
        <p className="text-sm mb-6 max-w-xl mx-auto text-gray-600">
          Be the first to know about solar innovations, special offers, and energy insights from <strong>Green Pawaa</strong>.
        </p>
        <form className="relative max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 pl-4 pr-32 rounded-full border border-[#014130] text-[#014130] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <button
            type="submit"
            className="absolute right-1 top-1 bottom-1 bg-[#014130] text-white px-6 rounded-full text-sm font-medium hover:bg-green-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscription;