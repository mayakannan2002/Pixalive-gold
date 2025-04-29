import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick, isRightSide }) => (
    <div className="border-b border-gray-700 relative">
        {/* Gold Line on Right Side Accordion when open */}
        {isRightSide && isOpen && (
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#B98A30]"></div>
        )}
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center py-4 text-left"
        >
            <span className="font-semibold text-white">{title}</span>
            {/* Small Arrow */}
            <span className="text-black text-xs ml-2">
                {isOpen ? '▴' : '▾'}
            </span>
        </button>
        {isOpen && (
            <div className="text-white pb-4 text-sm leading-relaxed">
                {content}
            </div>
        )}
    </div>
);

const FranchiseAccordion = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const leftAccordions = [
        {
            title: "Established Brand Presence",
            content: "Pixalive Gold Network is India's leading gold-centric ecosystem, trusted by major players like MMTC-PAMP and known for innovation, reliability, and collaboration across the gold industry.",
        },
        {
            title: "Diverse Gold-Related Services",
            content: "From jewelry, bullion trading, investment plans, payments, to gold loans — a complete 360° gold ecosystem under one brand.",
        },
        {
            title: "Scalable Franchise Model",
            content: "Franchise structures designed to scale: from Area to Zonal levels, adaptable to various investment and expansion goals.",
        },
        {
            title: "High-Growth Industry",
            content: "Gold demand in India offers a recession-proof, continuously growing business with strong cultural and economic significance.",
        },
    ];

    const rightAccordions = [
        {
            title: "Lucrative Franchise Options",
            content: "Choose Zonal, State, District, or Area franchises based on your investment capability, maximizing returns and scalability.",
        },
        {
            title: "Robust Support System",
            content: "Comprehensive marketing, operational, onboarding, and technology support provided to every franchise partner.",
        },
        {
            title: "Digital Integration",
            content: "Seamless digital systems for transactions, CRM, operations, and real-time gold rate updates ensure efficient management.",
        },
        {
            title: "Long-Term Stability",
            content: "With our gold ecosystem approach, your business is backed by sustainable profitability and long-term industry relevance.",
        },
    ];

    return (
        <section className="bg-[#140113] px-6 md:px-20 py-16">
            {/* FOCO MODEL Section */}
            <div className="text-center mb-16">
                <h3 className="text-white text-lg md:text-xl font-bold mb-4">
                    <span className="text-[#B98A30]">FOCO</span> MODEL
                </h3>
                <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                    <span className="text-2xl text-gray-400">“</span> 
                    We follow a <span className="font-semibold text-white">Franchise-Owned, Company-Operated (FOCO)</span> model, 
                    where you own the franchise, and Pixalive runs the operations. 
                    You earn a share of the revenue while we ensure quality and smooth service.
                    <span className="text-2xl text-gray-400">”</span>
                </p>
            </div>

            {/* PIXALIVE GOLD NETWORK Accordions */}
            <h2 className="text-center text-xl md:text-2xl font-bold mb-12 text-white">
                PIXALIVE <span className="text-[#B98A30]">GOLD</span> NETWORK
            </h2>
            <div className="bg-[#5A5A5A] p-8 rounded-xl grid md:grid-cols-2 gap-10 relative">
                <div className="flex flex-col gap-4">
                    {leftAccordions.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            content={item.content}
                            isOpen={openIndex === index}
                            onClick={() => toggleAccordion(index)}
                            isRightSide={false} // left side
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-4 relative">
                    {rightAccordions.map((item, index) => (
                        <AccordionItem
                            key={index + leftAccordions.length}
                            title={item.title}
                            content={item.content}
                            isOpen={openIndex === index + leftAccordions.length}
                            onClick={() => toggleAccordion(index + leftAccordions.length)}
                            isRightSide={true} // right side
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FranchiseAccordion;
