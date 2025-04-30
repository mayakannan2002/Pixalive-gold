import React from 'react';
import aboutImage from './../../assets/About/about2.png';

const AboutUs = () => {
  return (
    <div className="relative w-full px-4 pb-4 pt-0 bg-[#140113]">
      {/* Border matching the header */}
      <div className="absolute inset-0 border-b-8 border-l-8 border-r-8 border-[#140113] rounded-2xl pointer-events-none z-[-1]" />

      {/* Image Section with rounded corners */}
      <section
        className="relative w-[94%] mx-auto overflow-hidden rounded-2xl"
        style={{
           backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${aboutImage})`,
          
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
        }}
      >
        {/* Overlay heading */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            Building India's Future With Gold <br className="hidden sm:block" />
            You Can Trust
          </h1>
        </div>

        {/* Spacer to maintain height */}
        <div className="w-full h-[80vh]" />
      </section>

      {/* Bottom text section with matching background and bottom rounded */}
      <div className="w-[94%] mx-auto bg-[#140113] rounded-b-2xl py-10 px-6 text-center -mt-1">
        <p className="text-lg sm:text-xl md:text-2xl italic text-[#b3b3b3] leading-relaxed max-w-4xl mx-auto">
          <span className="text-3xl font-bold text-[#7a7a7a]">“ </span>
          Join the Pixalive Gold Network and be part of{' '}
          <span className="text-white font-semibold">Pixalive Gold Network</span> is India’s first social gold platform, combining the timeless value of gold with the power of innovation and connectivity. Our platform aims to redefine the gold ecosystem, providing a seamless integration of gold investments, financial services, and daily life needs.
          <span className="text-3xl font-bold text-[#7a7a7a]"> ”</span>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
