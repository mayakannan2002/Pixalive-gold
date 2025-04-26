import React from "react";
import gold1 from "./../../assets/Service/b1.png"
import gold2 from "./../../assets/Service/b1.png"
import gold3 from "./../../assets/Service/b1.png"

const benefits = [
  {
    icon: gold1,
    title: "100% Gold-Backed Security",
    description:
      "Your investments are fully backed by certified, high-purity gold — powered by MMTC-PAMP, ensuring trust, transparency, and real value.",
  },
  {
    icon: gold2,
    title: "One Network, Multiple Services",
    description:
      "From chit savings to jewellery, payments to bullion — everything you need for gold investment and utility, in one seamless ecosystem.",
    
  },
  {
    icon: gold3,
    title: "Smart, Flexible & Transparent Growth",
    description:
      "Tailored plans for every budget, with real-time tracking and flexible options to grow your gold wealth over time.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-[#140113] text-white py-20 px-4 md:px-10">
      <h2 className="text-center text-2xl md:text-4xl font-semibold mb-12">
        Benefits of the{" "}
        <span className="text-[#B98A30] font-bold">Pixalive Network</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="bg-white text-black rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-[60px] h-[60px] mx-auto mb-5"
            />
            <h3
              className={`font-bold text-lg md:text-xl mb-3 ${
                item.underline ? "underline" : ""
              }`}
            >
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;