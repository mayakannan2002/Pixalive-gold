import React from 'react';
import Heroimage from './../../assets/Division/hero.png';


const Hero = () => {
  return (
    <section className="bg-[#140113] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Text Content */}
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-2xl font-bold mb-0">
          Pixalive: Transform Your Digital <br />
          Gold into Everyday Luxury
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Seamlessly convert your Pixalive wallet gold into real-world services—
          shop, dine, groom, and more. Enjoy unparalleled convenience and value at your fingertips.
        </p>
        <button className="bg-[#b98a30]  text-white font-bold px-6 py-3 rounded-full"
          onClick={() => {
            window.location.href = '/';
          }}>
            Explore Pixalive Network →
          </button>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={Heroimage}
          alt="Hero Illustration"
          className="max-w-100 h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
