import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import logo from "./../../assets/Headermain/logo.png";
import goldAnimation from "./../../assets/Animation1.gif";
import mmtc from "./../../assets/Headermain/mmtcpamp.png"; // Ensure this path is correct
import lbma from "./../../assets/Headermain/lbma.png"; // Ensure this path is correct
import { useNavigate } from 'react-router-dom'; // Make sure you have react-router-dom installed

export default function LoginPage() {
  const [showTerms, setShowTerms] = useState(false);
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#f9f6f2] flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-white flex items-center justify-center py-1 ">
        <img src={logo} alt="Pixalive Gold Logo" className="h-30 w-30" />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center flex-1 w-full max-w-6xl p-4">
        {/* Left Side - Animation & Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left px-6 py-4"
        >
          <img
            src={goldAnimation}
            alt="Gold Animation"
            className="rounded-full w-60 h-60 mx-auto lg:mx-0 object-cover"
          />
          <h2 className="text-xl mt-4 text-[#B98A30] font-semibold">
            Earn Up To 16% <br /> From Your Gold Every Year
          </h2>
        </motion.div>
        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 max-w-md bg-white shadow-xl rounded-2xl p-6 flex flex-col"
        >
          <button className="text-[#B98A30] mb-4">
            <ArrowLeft />
          </button>
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Login or Sign Up</h1>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            className="w-full border border-[#B98A30] px-4 py-2 rounded-md mb-4 focus:outline-none"
          />
          <button className="w-full bg-[#B98A30] text-white font-semibold py-2 rounded-full hover:bg-[#966d24]">
            Continue
          </button>

          <p
            className="text-sm text-center text-[#B98A30] mt-4 cursor-pointer underline"
            onClick={() => setShowTerms(!showTerms)}
          >
            Terms and Conditions
          </p>

          {showTerms && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-sm text-gray-600 space-y-2"
            >
              <p>1. Minimum investment required is ₹100.</p>
              <p>2. Gold value may fluctuate as per market conditions.</p>
              <p>3. Annual returns up to 16% depend on leasing plans.</p>
              <p>4. Withdrawals are subject to processing time.</p>
            </motion.div>
          )}

<div className="text-xs text-center mt-6 text-gray-400 flex items-center justify-center gap-2">
  Secured by
  <img src={mmtc}  className="h-6 w-auto" />
  <img src={lbma} alt="Description of Secured By Partner 2" className="h-6 w-auto" />
</div>

          <button
            onClick={handleGoHome}
            className="mt-4 w-full bg-gray-300 text-gray-700 font-semibold py-2 rounded-full hover:bg-gray-400"
          >
            Go Back Home
          </button>
        </motion.div>
      </div>
    </div>
  );
}