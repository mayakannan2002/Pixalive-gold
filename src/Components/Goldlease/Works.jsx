import React from "react";
import step1 from "./../../assets/Goldlease/work1.png";
import step2 from "./../../assets/Goldlease/work2.png";
import step3 from "./../../assets/Goldlease/work3.png";

const HowItWorks = () => {
  const steps = [
    {
      image: step1,
      title: "Deposit Your Gold",
      description:
        "Deposit your gold with Pixalive Gold Lease, and they’ll safely store it with a bank guarantee.",
    },
    {
      image: step2,
      title: "Earn Consistent Returns",
      description:
        "Earn regular payments and enjoy extra returns as gold prices rise during the lease period.",
    },
    {
      image: step3,
      title: "Redeem or Renew",
      description:
        "At lease end, you can either reclaim your gold or renew the lease based on your strategy.",
    },
  ];

  return (
    <section className="bg-[rgb(248,247,248)] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">HOW IT WORK</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className="relative p-6 mb-9"
                style={{
                  background: "radial-gradient(circle, rgba(255,236,202,0.6) 0%, rgba(248,247,248,0) 70%)",
                  borderRadius: "99999px",
                  boxShadow: "0 0 60px rgba(255, 214, 153, 0.4)",
                }}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-20 h-20 rounded-full mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;