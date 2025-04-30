import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/divisions", label: "Divisions" },
    { path: "/services", label: "Services" },
    { path: "/franchise", label: "Franchise" },
    { path: "/goldlease", label: "Gold Lease" },
    { path: "/about", label: "About us" },
  ];

  const activeClass = "underline underline-offset-4 text-[#CC25BE]";

  return (
    <header className="bg-[#140113] text-white px-6 md:px-16 py-6 flex items-center justify-between shadow-md relative">
      {/* Logo */}
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
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? activeClass : "hover:underline"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Desktop Button */}
      <button
        className="hidden md:block bg-[#CC25BE] px-5 py-2 text-sm font-medium rounded-full"
        onClick={() => navigate("/signup")}
      >
        Login/Sign up
      </button>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden z-20"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#140113] text-white p-6 flex flex-col gap-4 font-medium md:hidden z-10 shadow-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? activeClass : "hover:underline"
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              navigate("/signup");
            }}
            className="bg-[#CC25BE] px-5 py-2 text-sm font-medium rounded-full mt-4"
          >
            Login/Sign up
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
