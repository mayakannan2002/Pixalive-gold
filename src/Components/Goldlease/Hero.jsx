import React from "react";
import bg from "./../../assets/Goldlease/goldleasehero.png";

const Hero = () => {
  return (
    <div className="relative w-full px-4 pb-4 pt-0 bg-[#140113]">
      {/* Border like AboutUs */}
      <div className="absolute inset-0 border-b-8 border-l-8 border-r-8 border-[#140113] rounded-2xl pointer-events-none z-[-1]" />

      {/* Main Section */}
      <section
        className="relative w-[94%] mx-auto rounded-2xl overflow-hidden"
        style={{
           backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${bg})`,
            // Corrected this line
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
        }}
      >
        {/* Top-aligned content */}
        <div className="absolute inset-0 flex items-start px-4 sm:px-8 md:px-16 pt-12">
          <div className="text-left max-w-2xl">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              Welcome to Pixalive Gold Lease
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl mb-6">
              Secure, Flexible, and Profitable{" "}
              <span className="underline">Investment Solutions</span>
            </p>
            <button className="bg-[#c69c4a] hover:bg-[#b88c3c] text-white font-medium px-6 py-2 rounded-md shadow-md">
              Learn More
            </button>
          </div>
        </div>

        {/* Spacer to maintain full height */}
        <div className="w-full h-[80vh]" />
      </section>
    </div>
  );
};

export default Hero;
