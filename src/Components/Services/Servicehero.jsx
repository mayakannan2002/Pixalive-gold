import React from "react";
import goldCoin from "./../../assets/Service/gold-ingots 1.png";
import secureIcon from "./../../assets/Service/piggy.png";

const Service = () => {
  return (
    <>
      {/* Info Box Only */}
      <div className="bg-[#140113]">
        <div className="pt-20 px-6 md:px-24">
          <div className="bg-[#f5e8ff] rounded-xl p-6 md:p-10 text-center text-black space-y-4">
            <p className="text-[#c73fef] font-semibold text-sm md:text-base">
              Why Go Digital Gold?
            </p>
            <p className="text-base md:text-lg font-medium leading-relaxed">
              With Pixalive, you can start your journey of digital wealth by saving in{" "}
              <img src={goldCoin} alt="Gold Coin" className="h-5 inline" /> <br />
              <span className="inline-flex items-center gap-1 text-[#d946ef] font-semibold ml-1">
                24K digital gold <img src={secureIcon} alt="Secure Icon" className="h-5 inline" />
              </span>{" "}
              at <span className="text-[#22c55e] font-semibold ml-1">99.5% purity</span> — powered by{" "}
              <span className="inline-flex items-center gap-1 text-[#b98a30] font-semibold ml-1">
                MMTC-PAMP
              </span>
              . It’s a smart, secure,<br /> and modern way to build long-term value for you and your family.
            </p>
          </div>
        </div>

        {/* Red bottom spacer */}
        <div className="h-20 bg-[#140113]" />
      </div>
    </>
  );
};

export default Service;
