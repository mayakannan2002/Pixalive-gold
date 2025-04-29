import React from "react";
import img8 from "./../../assets/Goldlease/key1.png";
import img9 from "./../../assets/Goldlease/key2.png";
import img10 from "./../../assets/Goldlease/key3.png";
import img11 from "./../../assets/Goldlease/key4.png";

const features = [
  {
    id: "01",
    src: img8,
    title: "Bank Guarantee",
    description: "Enjoy complete peace of mind knowing your gold is backed by a trusted financial institution.",
  },
  {
    id: "02",
    src: img9,
    title: "Flexible Lease Terms",
    description: "Choose from a range of lease durations, including 6 months, 1 year, and longer.",
  },
  {
    id: "03",
    src: img10,
    title: "Gold Price Appreciation",
    description: "Your gold investment appreciates with the market, giving you added value along with lease returns.",
  },
  {
    id: "04",
    src: img11,
    title: "High-Security Storage",
    description: "Your gold is stored in state-of-the-art vaults, with 24/7 monitoring and guaranteed protection.",
  },
];

const KeyFeatures = () => {
  return (
    <section className=" bg-[#140113] text-white py-16 px-4 md:px-18">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">KEY FEATURES</h2>
        <p className="text-gray-400 mb-12 max-w-3xl mx-auto text-sm md:text-base">
          Flexible Maturity Options — Upon Completing The Lease Term, You Can Either Take Back Your Gold Or Extend The Lease, Giving You Full Control Over Your Gold Investment Journey
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              tabIndex={0}
              className="group bg-white text-black rounded-xl p-6 shadow-sm min-h-[320px] flex flex-col justify-between relative overflow-hidden transition-all duration-300 focus:outline-none"
            >
              <div className="mb-4">
                <img src={feature.src} alt={feature.title} className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-sm text-gray-500 mb-1">{feature.id}</div>
              <h3 className="text-lg font-semibold leading-snug mb-2">
                {feature.title.split(" ")[0]}{" "}
                <br className="sm:hidden" />
                {feature.title.split(" ").slice(1).join(" ")}
              </h3>

              {/* Hidden Description on Default, Show on Hover or Tap */}
              <div className="absolute bottom-0 left-0 w-full bg-white p-4 transition-all duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <hr className="my-4 border-gray-300" />
                <p className="text-lg text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;