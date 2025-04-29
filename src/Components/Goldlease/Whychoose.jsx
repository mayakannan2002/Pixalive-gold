import React from "react";
import img1 from "./../../assets/Goldlease/why1.png";
import img2 from "./../../assets/Goldlease/why2.png";
import img3 from "./../../assets/Goldlease/why3.png";
import img4 from "./../../assets/Goldlease/why4.png";

const WhyChoose = () => {
  const cards = [
    {
      src: img1,
      title: "Attractive Investment Returns",
      text: "Pixalive Gold Lease provides dual benefits: regular lease payments and the potential for your gold investment to appreciate as gold prices rise.",
    },
    {
      src: img2,
      title: "Guaranteed Gold Security",
      text: "We back your gold investment with a bank guarantee and store your assets in high-security facilities, ensuring your gold is always safe and secure.",
    },
    {
      src: img3,
      title: "Flexible Lease Terms",
      text: "Choose from various flexible lease tenures to suit your financial goals. Whether short-term or long-term, our leases are specifically designed to fit your unique needs.",
    },
    {
      src: img4,
      title: "Easy Investment Access",
      text: "Begin with a low minimum investment, making gold leasing a flexible and accessible option for both new investors and seasoned professionals.",
    },
  ];

  return (
    <section className="bg-[#140113] text-white py-16 px-4 md:px-18">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Text Block */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Why Choses <br />
            Pixalive Gold Lease
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Gold is a tried-and-true asset that has historically maintained
            value, especially in uncertain economic climates.
          </p>
        </div>

        {/* Right Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl shadow-md p-6 flex flex-col gap-3"
            >
              <img
                src={card.src}
                alt={card.title}
                className="w-10 h-10 object-contain"
              />
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <hr className="border-t border-gray-200" />
              <p className="text-sm text-gray-700">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;