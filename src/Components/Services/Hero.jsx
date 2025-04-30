import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './../../assets/Service/services/servicehero.png';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full px-4 pt-0 bg-[#140113]">
      {/* Fullscreen Hero Section with Background */}
      <header
        className="relative w-[94%] bg-[#140113] mx-auto rounded-2xl text-white shadow-lg overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '80vh', // match the first header
        }}
      >
        <div className="relative z-0 flex flex-col justify-center h-full p-6 sm:p-20 pb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Your Gold, Your Way — Invest, Trade, and Grow with Pixalive Gold
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl">
            India's first social gold platform — offering 100% gold-backed investments,
            instant trading, secure gold loans, chit plans, and more. All powered by MMTC-PAMP purity.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 w-fit px-6 py-3 bg-[#b98a30] hover:bg-[#a27626] transition text-white font-semibold rounded-full shadow-md"
          >
            Explore Pixalive Network →
          </button>
        </div>
      </header>
    </div>
  );
}
