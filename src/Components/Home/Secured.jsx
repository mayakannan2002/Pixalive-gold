import React from "react";

const securityLogos = [
  { src: "/partners/mmtc.png", alt: "MMTC-PAMP" },
  { src: "/partners/lbma.png", alt: "LBMA" },
  { src: "/partners/bis.png", alt: "Bureau of Indian Standards" },
  { src: "/partners/startupindia.png", alt: "Startup India" },
  { src: "/partners/npci.png", alt: "NPCI" },
  { src: "/partners/upi.png", alt: "UPI" },
  { src: "/partners/phonepe.png", alt: "PhonePe" },
  { src: "/partners/cashfree.png", alt: "Cashfree Payments" },
  ,
];

const SecuredBy = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16 text-center">
      <h3 className="text-xl md:text-2xl font-semibold text-[#2D1D2F] mb-6">Secured by</h3>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {securityLogos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-10 md:h-12 object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default SecuredBy;
