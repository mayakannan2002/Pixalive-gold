import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FranchiseAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordions = [
    {
      title: "Established Brand Presence",
      content:
        "Pixalive Gold Network is India’s leading gold-centric ecosystem, backed by trust, innovation, and collaboration with industry leaders like MMTC-PAMP.",
    },
    {
      title: "Diverse Gold-Related Services",
      content:
        "Offer a comprehensive range of services, including buying and selling gold, gold leasing, jewelry redemption, gold loans, and gold chits, catering to every customer’s need.",
    },
    {
      title: "Scalable Franchise Model",
      content:
        "Our FOCO (Franchise Owned, Company Operated) model ensures operational efficiency while you benefit from brand growth and customer trust.",
    },
    {
      title: "High-Growth Industry",
      content:
        "The gold market is ever-expanding, and Pixalive’s innovative approach ensures a competitive edge in a high-demand sector.",
    },
    {
      title: "Lucrative Franchise Options",
      content:
        "Choose from Zonal, State, District, or Area franchises, tailored to different investment levels, ensuring inclusivity for varied business scales.",
    },
    {
      title: "Robust Support System",
      content:
        "Benefit from end-to-end support, including marketing, training, technology, and operations, ensuring franchise success from day one.",
    },
    {
      title: "Digital Integration",
      content:
        "Leverage Pixalive’s cutting-edge digital platform to attract customers, manage services, and streamline operations effortlessly.",
    },
    {
      title: "Long-Term Stability",
      content:
        "With a 10-year franchise period, you gain a stable, profitable, and future-ready business opportunity.",
    },
    
  ];

  const renderAccordion = (items, baseIndex) =>
    items.map((item, index) => {
      const currentIndex = baseIndex + index;
      const isOpen = openIndex === currentIndex;

      return (
        <div
          key={index}
          className="relative border-l-4 transition-all"
          style={{ borderColor: isOpen ? '#B98A30' : '#78716c' }}
        >
          <button
            onClick={() => toggleAccordion(currentIndex)}
            className="w-full flex justify-between items-center px-4 py-3 text-left"
          >
            <span className="font-semibold text-white">{item.title}</span>
            <span className="text-white">
              {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>
          {isOpen && (
            <div className="px-4 pb-4 text-sm text-[#D4CECE]">{item.content}</div>
          )}
        </div>
      );
    });

  return (
    <section className="bg-[#140113] px-6 md:px-20 py-16">
      <h2 className="text-center text-xl md:text-2xl font-bold text-white mb-6">
        PIXALIVE <span className="text-[#B98A30]">GOLD</span> NETWORK
      </h2>

      <div className="max-w-6xl mx-auto bg-[#5A5A5A] rounded-xl px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          {renderAccordion(accordions.slice(0, 5), 0)}
          {renderAccordion(accordions.slice(5), 5)}
        </div>
      </div>
    </section>
  );
};

export default FranchiseAccordion;
