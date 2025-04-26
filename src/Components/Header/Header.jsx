import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from './../../assets/logo.png';
import backgroundImage from './../../assets/Headermain/background.png';
import immtcLogo from './../../assets/Headermain/mmtcpamp.png';
import lbmaLogo from './../../assets/Headermain/lbma.png';
import { motion, AnimatePresence } from 'framer-motion';
import buyIcon from './../../assets/Headermain/buy.png';
import sellIcon from './../../assets/Headermain/buy.png';
import jewelleryIcon from './../../assets/Headermain/jewellery.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Buy');
  const [buyMode, setBuyMode] = useState('rupees');
  const [value, setValue] = useState('');
  const goldPrice = 10200.64;
  const purity = '24k 99.99%';

  const navigate = useNavigate();

  const getConvertedValue = () => {
    if (!value) return '';
    if (buyMode === 'rupees') {
      return `= ${(parseFloat(value) / goldPrice).toFixed(4)} gm`;
    }
    return `₹${(parseFloat(value) * goldPrice).toLocaleString()}`;
  };

  const tabs = [
    { label: 'Buy', icon: buyIcon },
    { label: 'Sell', icon: sellIcon },
    { label: 'Jewellery', icon: jewelleryIcon },
  ];

  return (
    <header
      className="relative w-full min-h-screen text-white  before:absolute before:inset-0  before:z-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Navbar */}
      <nav className="relative z-8 flex items-center justify-between px-2 py-1 md:px-14">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Pixalive Gold Network" className="h-18  w-auto md:h-12 "/>
        </div>
        <div className="hidden md:flex space-x-12 font-bold text-1xl">
          <a href="/" className="hover:text-white-400 hover:underline transition duration-300">Home</a>
          <a href="/services" className="hover:text-white-400 hover:underline transition duration-300">Services</a>
          <a href="/divisions" className="hover:text-white-400 hover:underline transition duration-300">Divisions</a>
          <a href="#" className="hover:text-white-400 hover:underline transition duration-300">Franchise</a>
          <a href="#" className="hover:text-white-400 hover:underline transition duration-300">Gold Lease</a>
          <a href="#" className="hover:text-white-400 hover:underline transition duration-300">About us</a>
        </div>
        <button
          onClick={() => navigate("/signup")}
          className="hidden md:block bg-[#891F82] px-12 py-3 rounded-full font-semibold hover:bg-[#891F82] transition duration-300 ml-3 "
        >
          Sign up
        </button>
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 w-full bg-black/80 backdrop-blur-md p-6 flex flex-col space-y-4 text-lg font-medium z-40"
        >
          <a href="#" className="hover:text-white-400 hover:underline">Home</a>
          <a href="/services" className="hover:text-white-400 hover:underline">Services</a>
          <a href="/divisions" className="hover:text-white-400 hover:underline">Divisions</a>
          <a href="#" className="hover:text-white-400 hover:underline">Franchise</a>
          <a href="#" className="hover:text-white-400 hover:underline">Gold Lease</a>
          <a href="#" className="hover:text-white-400 hover:underline">About us</a>
          <button
            onClick={() => navigate("/signup")}
            className="bg-[#891F82] px-2 py-2 rounded-full hover:bg-[#891F82] transition"
          >
            Sign up
          </button>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="relative z-10 inset-0 flex flex-col md:flex-row items-center justify-between px-4 md:px-20 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="p-6 md:p-10 rounded-xl text-center md:text-left md:w-1/2"
        >
          <h1 className="text-3xl md:text-5xl mt-0 font-semibold leading-tight">Pixalive Gold Network:</h1>
          <h2 className="text-3xl md:text-5xl font-semibold mt-4">Trusted Gold, Endless</h2>
          <h2 className="text-3xl md:text-5xl font-semibold mt-5">Possibilities</h2>
          <p className="mt-7 text-xl md:text-2xl font-semibold">
            "Secure Your Future with India’s First Social Gold
            <span className='ml-2'>Network.</span>"
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-6 mt-4">
            <img src={immtcLogo} alt="IMMT Logo" className="h-13 w-60" />
            <img src={lbmaLogo} alt="LBMA Logo" className="h-13 w-35" />
          </div>
        </motion.div>

        {/* Buy/Sell/Jewellery Panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-yellow-100 text-black rounded-xl p-6 mt-10 w-full max-w-md shadow-xl mx-auto"
        >
          <div className="flex items-center justify-around mb-6">
            {tabs.map(({ label, icon }) => (
              <button
                key={label}
                onClick={() => setActiveTab(label)}
                className={`flex flex-col items-center font-bold text-lg transition ${
                  activeTab === label ? 'text-black border-b-2 border-black' : 'text-gray-400'
                }`}
              >
                <img src={icon} alt={label} className="h-6 w-6 mb-1" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'Buy' && (
              <motion.div
                key="buy"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white p-4 rounded shadow mb-4 relative flex justify-between">
                  <div>
                    <p className="text-sm font-semibold">Live Buy Price</p>
                    <p className="text-purple-700 font-bold">₹{goldPrice.toLocaleString()} / gm</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">Purity</p>
                    <p>{purity}</p>
                  </div>
                  <div className="absolute top-2 right-4 text-xs text-gray-500">3:00 PM</div>
                </div>

                <div className="bg-white p-4 rounded shadow">
                  <div className="flex justify-between items-center text-sm mb-3">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        checked={buyMode === 'rupees'}
                        onChange={() => setBuyMode('rupees')}
                      />
                      <span>Buy in rupees</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        checked={buyMode === 'grams'}
                        onChange={() => setBuyMode('grams')}
                      />
                      <span>Buy in grams</span>
                    </label>
                  </div>

                  <input
                    type="number"
                    placeholder={`Enter ${buyMode}`}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md mb-2 text-lg"
                  />
                  <p className="text-xs text-right text-gray-600 font-semibold">{getConvertedValue()}</p>

                  <button
                    onClick={() => navigate("/signup")}
                    className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded-lg border-2 border-purple-500"
                  >
                    Buy Gold
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 'Sell' && (
              <motion.div
                key="sell"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <img src={sellIcon} alt="Sell" className="mx-auto h-28" />
                <p className="my-4 font-semibold text-xl">
                  Create an account to buy and sell 24k gold!
                </p>
                <button
                  onClick={() => navigate("/signup")}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-full"
                >
                  Sell Now →
                </button>
              </motion.div>
            )}

            {activeTab === 'Jewellery' && (
              <motion.div
                key="jewellery"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <img src={jewelleryIcon} alt="Jewellery" className="mx-auto h-28" />
                <p className="my-4 font-semibold text-xl">
                  Create an account and buy digital gold for jewellery
                </p>
                <button
                  onClick={() => navigate("/signup")}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-full"
                >
                  Sign Up →
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
}
