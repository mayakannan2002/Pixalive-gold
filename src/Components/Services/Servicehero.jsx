import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import piggy from "./../../assets/Service/elements.png";
import goldCoin from "./../../assets/Service/gold-ingots 1.png";
import secureIcon from "./../../assets/Service/piggy.png";

const Service = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="bg-[#140113] text-white min-h-screen font-sans relative pb-20">
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-center py-6 z-40 space-y-4 absolute top-16 left-0 w-full">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "//" },
            { name: "Divisions", path: "/divisions" },
            { name: "Franchise", path: "/franchise" },
            { name: "Investment Plans", path: "/investment-plans" },
            { name: "About us", path: "/about" },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="block text-white text-lg font-medium hover:text-yellow-800"
            >
              {name}
            </Link>
          ))}
          <button className="bg-[#c73fef] hover:bg-[#a935c5] text-white px-6 py-2 rounded-full font-semibold">
            Login/Sign up
          </button>
        </div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 pt-10 md:pt-20 gap-10">
        <div className="text-center md:text-left max-w-xl space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Your Gold, Your Way — Invest, <br className="hidden md:block" />
            Trade, and Grow with Pixalive Gold
          </h1>
          <p className="text-gray-300 text-base md:text-lg font-medium">
            India’s first social gold platform — offering 100% gold-backed investments, instant trading,
            secure gold loans, chit plans, and more. All powered by MMTC-PAMP purity.
          </p>
          <button className="bg-[#b98a30]  text-white font-bold px-6 py-3 rounded-full"
          onClick={() => {
            window.location.href = '/';
          }}>
            Explore Pixalive Network →
          </button>
        </div>
        <div>
          <img src={piggy} alt="Piggy Illustration" className="w-72 md:w-[350px] mx-auto" />
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-16 px-6 md:px-24">
        <div className="bg-[#f5e8ff] rounded-xl p-6 md:p-10 text-center text-black space-y-4">
          <p className="text-[#c73fef] font-semibold text-sm md:text-base">
            Why Go Digital Gold?
          </p>
          <p className="text-base md:text-lg font-medium leading-relaxed">
            With Pixalive, you can start your journey of digital wealth by saving in{" "}
            <img src={goldCoin} alt="Gold Coin" className="h-5 inline" />{" "}
            <br />
            <span className="inline-flex items-center gap-1 text-[#d946ef] font-semibold ml-1">
              24K digital gold <img src={secureIcon} alt="Secure Icon" className="h-5 inline" />
            </span>{" "}
            at <span className="text-[#22c55e] font-semibold ml-1">99.5% purity</span> — powered by{" "}
            <span className="inline-flex items-center gap-1 text-[#b98a30] font-semibold ml-1">
              MMTC-PAMP
            </span>
            . It’s a smart, secure,<br /> and modern way to build long-term value for you and your family.
          </p>
        </div>
      </div>

     
    </section>
  );
};

export default Service;
