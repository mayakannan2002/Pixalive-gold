import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // using lucide-react icons (install with `npm install lucide-react`)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#140113] text-white px-6 md:px-16 py-6 flex items-center justify-between shadow-md relative">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Pixalive Logo" className="w-10 h-10" />
        <div className="leading-tight">
          <h1 className="text-sm font-bold">PIXALIVE</h1>
          <p className="text-xs text-gray-300">GOLD NETWORK</p>
          <p className="text-[10px] text-gray-400">INFINITE OPPORTUNITIES TO EARN</p>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 items-center font-medium">
        <a href="/" className="hover:underline">Home</a>
        <a href="/divisions"  className="hover:underline">Divisions</a>
        <a href="/services" className="hover:underline">Services</a>
        <a href="#" className="hover:underline">Franchise</a>
        <a href="#" className="hover:underline">Gold Lease</a>
        <a href="#" className="hover:underline">About us</a>
      </nav>

      {/* Login/Signup Button (Hidden on small if menu is open) */}
      <button className="hidden md:block bg-[#CC25BE] px-5 py-2 text-sm font-medium rounded-full"
       onClick={() => {
        window.location.href = '/signup';
      }}>
     
        Login/Sign up
      </button>

      {/* Toggle Icon for Small Screens */}
      <button
        className="md:hidden z-20"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1a001f] text-white p-6 flex flex-col gap-4 font-medium md:hidden z-10 shadow-md">
          <a href="/"  className="hover:underline" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/divisions" className="hover:underline" onClick={() => setIsOpen(false)}>Divisions</a>
          <a href="/services" className="hover:underline" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#" className="hover:underline" onClick={() => setIsOpen(false)}>Franchise</a>
          <a href="#" className="hover:underline" onClick={() => setIsOpen(false)}>Investment Plans</a>
          <a href="#" className="hover:underline" onClick={() => setIsOpen(false)}>About us</a>
          <button
  onClick={() => navigate("/signup")}
  className="bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 text-sm font-medium rounded-full mt-4"
>
  Login/Sign up
</button>        </div>
      )}
    </header>
  );
};

export default Header;
