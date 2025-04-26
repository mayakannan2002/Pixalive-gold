import React from "react";
import mmtcLogo from "./../../assets/Headermain/mmtc.png"
const MmtcBanner = () => {
  return (
    <div className="bg-[#140113] text-white p-6 md:p-12 font-sans">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          <span className="text-[#b98a30] ">Pixalive Gold Network's</span> Strategic Collaboration with
        </h2>
        <div className="flex justify-center items-center gap-2 mt-2 mb-6">
          
          <span className="text-[#b98a30] text-xl md:text-2xl font-bold">MMTC-PAMP</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
        <div>
          <h3 className="text-lg font-bold">1. Authenticity and Quality:</h3>
          <p className="text-sm mt-2">
            All digital gold investments on the Pixalive platform are backed by MMTC-PAMP’s 24K, 999.9 pure gold, ensuring the highest standards of quality and authenticity.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold">2. Secure Storage:</h3>
          <p className="text-sm mt-2">
            MMTC-PAMP provides bank-grade vault storage for all digital gold, guaranteeing safety and peace of mind for users.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold">3. Seamless Transactions:</h3>
          <p className="text-sm mt-2">
            Users can buy, sell, and redeem their digital gold with ease, supported by MMTC-PAMP’s infrastructure for physical gold delivery.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold">4. Accessibility:</h3>
          <p className="text-sm mt-2">
            The collaboration makes gold investment simple and accessible, integrating secure gold transactions into Pixalive’s diverse services.
          </p>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-gray-400 max-w-3xl mx-auto">
  <img
    src={mmtcLogo}
    alt="MMTC-PAMP Logo"
    className="mx-auto h-8 md:h-10 mb-2"
  />
  The Pixalive Gold Network has partnered with MMTC-PAMP, a globally trusted and accredited gold refiner, to deliver unparalleled purity, security, and trust to its users. This strategic partnership brings together Pixalive’s innovation and MMTC-PAMP’s expertise, creating a trusted and innovative ecosystem for gold investment and usage.
</div>

    </div>
  );
};

export default MmtcBanner;
