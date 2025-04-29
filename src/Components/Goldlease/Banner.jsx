import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const QuoteSection = () => {
  return (
    <section className="bg-[#140113] text-gray-400 text-center px-6 py-12">
      <div className="max-w-4xl mx-auto relative">
        {/* Left Quote Icon */}
        <FaQuoteLeft className="text-xl md:text-xl text-gray-500 mb-4" />

        {/* Quote Text */}
        <p className="text-lg md:text-xl leading-relaxed font-light">
          <span className="text-gray-400">Pixalive Gold Lease offers </span>
          <span className="text-white font-medium">a unique and secure way to invest in gold</span>
          <span className="text-gray-400">. With our gold-backed lease programs, </span>
          <span className="text-white font-medium">you can enjoy attractive returns</span>
          <span className="text-gray-400">
            {" "}
            while ensuring that your gold is safely stored and protected. Whether you're
            a seasoned investor or just starting out, Pixalive Gold Lease offers the{" "}
          </span>
          <span className="text-white font-medium">
            flexibility, security, and profitability
          </span>
          <span className="text-gray-400"> you need to grow your wealth.</span>
        </p>

        {/* Right Quote Icon */}
        <FaQuoteRight className="text-xl md:text-xl text-gray-500 mt-4" />
      </div>
    </section>
  );
};

export default QuoteSection;