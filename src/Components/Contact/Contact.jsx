import React from "react";
import contactBanner from "./../../assets/Contact/contact2.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#140113] min-h-screen">
    
      
     {/* Hero Banner
<div
  className="w-80% relative aspect-[16/6] md:aspect-[16/4] lg:aspect-[16/5] bg-cover bg-center"
  style={{ backgroundImage: `url(${contactBanner})` }}
>
  <div className="absolute inset-0 bg-black/30" />
</div> */}

        
      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
          Let’s Start a Conversation With Us
        </h2>
        <p className="text-lg text-center text-[#b98a30] mb-10">
          Please note: all fields are required
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <form className="bg-[#1e0a23] p-8 shadow-lg rounded-xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 p-3 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 p-3 rounded-lg w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Mobile Number"
              className="bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 p-3 rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Mail Id"
              className="bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 p-3 rounded-lg w-full"
            />
            <textarea
              placeholder="Feedback"
              className="bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 p-3 rounded-lg w-full h-32 resize-none"
            />
           <div className="flex justify-center">
  <button
    type="submit"
    className="bg-[#B98A30] hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300"
  >
    Submit
  </button>
</div>
          </form>

          {/* Contact Details */}
          <div className="flex flex-col justify-center bg-[#1e0a23] p-8 shadow-lg rounded-xl space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Contact Us</h3>
              <p className="text-gray-300 mb-1">📞 +91 87785 84566</p>
              <p className="text-gray-300 mb-1">✉️ info@pixalive.network</p>
              <p className="text-gray-300 mt-4 leading-relaxed">
                📍 Third Floor, No 35/2, Konappana Agrahara, <br />
                Hosur Road, Electronics City, <br />
                Bengaluru, Karnataka 560100, India
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Connect With Us</h3>
              <div className="flex space-x-5 text-2xl text-[#ba8a30]">
                <a href="#" className="hover:text-yellow-400">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
