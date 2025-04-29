import React from "react";
import yieldIcon from "./../../assets/Goldlease/invesment1.png";
import minInvestmentIcon from "./../../assets/Goldlease/invesment2.png";
import appreciationIcon from "./../../assets/Goldlease/invesment3.png";
import liquidityIcon from "./../../assets/Goldlease/invesment4.png";

const items = [
  {
    icon: yieldIcon,
    title: "Lease Yield",
    description: "Starting from ₹5 lakhs",
  },
  {
    icon: minInvestmentIcon,
    title: "Minimum Investment",
    description:
      "Attractive annual returns based on the current market rates for gold leases.",
  },
  {
    icon: appreciationIcon,
    title: "Gold Price Appreciation",
    description:
      "Watch your gold grow as its value increases with the global gold market.",
  },
  {
    icon: liquidityIcon,
    title: "Liquidity",
    description:
      "Choose flexible options for payouts or redeem your gold at the end of the lease period.",
  },
];

const InvestmentTerms = () => {
  return (
    <section className="bg-[#140113] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          INVESTMENT TERMS
        </h2>

        {/* Center Lines */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#e6c614a9] to-transparent z-0 transform -translate-y-1/2" />
                    {/* Vertical line */}
                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#e6c614a9] to-transparent z-0 transform -translate-x-1/2" />
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16 relative z-10">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                  {/* Glow background */}
                  <div className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-50 blur-md z-0" />
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="relative z-10 w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 max-w-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentTerms;