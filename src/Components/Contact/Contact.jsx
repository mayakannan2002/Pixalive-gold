import React from "react";
import contactBanner from "./../../assets/Contact/contact1.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Header from "./../../Components/Division/Header"

const Contact = () => {
  return (
    <div>
    <Header/>
    <div className="w-full">
      {/* Background Image Only (with built-in text in image) */}
      <div
        className="w-full h-[350px] bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBanner})` }}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-2">Let’s Start a Conversation</h2>
        <p className="text-2xl mb-8 text-black font-semibold">Please note : all fields are required</p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-3 rounded w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Mobile Number"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <input
              type="email"
              placeholder="Mail Id"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <textarea
              placeholder="Feed back"
              className="border border-gray-300 p-3 rounded w-full h-32 resize-none"
            />
            <button
              type="submit"
              className="bg-yellow-700 hover:bg-yellow-800 text-white py-3 px-6 rounded w-fit"
            >
              Submit
            </button>
          </form>

          {/* Right: Contact Info */}
          
          <div className="space-y-6 text-gray-700 text-sm">
            <div>
              <p className="font-semibold mb-2">Contact us</p>
              <p>📞 +91 87785 84566</p>
              <p>✉️ info@pixalive.network</p>
              <p className="mt-2">
                📍 Third Floor, No 35/2, Konappana Agrahara,<br />
                Hosur Road, Electronics City,<br />
                Bengaluru, Karnataka 560100, India
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">Contact With us</p>
              <div className="flex space-x-4 text-xl text-gray-700">
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
