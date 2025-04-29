import React from "react";
import bg from "./../../assets/Goldlease/goldleasehero.png";

const Hero = () => {
  return (
    <section className="relative w-full px-4 md:px-25 py-4 bg-[#140113]">
      <div className="relative rounded-xl overflow-hidden h-[561px]">
        {/* Background Image */}
        <img
          src={bg}
          alt="Gold Rings"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to Pixalive Gold Lease
          </h1>
          <p className="text-base md:text-lg mb-6">
            Secure, Flexible, and Profitable{" "}
            <span className="underline">Investment Solutions</span>
          </p>
          <button className="flex items-center gap-2 bg-[#B98A30] text-white font-medium px-6 py-2 rounded-md shadow-md transition-colors duration-300 w-fit cursor-pointer">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;