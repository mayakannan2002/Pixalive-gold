import React, { useState } from "react";

const plans = {
  below1000: [
    {
      title: "Starter Gold Plan",
      subtitle: "Significant potential due to larger volumes.",
      range: "1 - 100",
      unit: "grams",
      min: "1 gram",
      max: "100 gram",
      duration: "6 Months to 1 Year",
      yield: "4 - 5 %",
      benefits: [
        "Low entry barrier.",
        "Flexible tenure with early exit options.",
        "Free insured storage for up to 1 year."
      ]
    },
    {
      title: "Value Gold Plan",
      subtitle: "Significant potential due to larger volumes.",
      range: "100 - 500",
      unit: "grams",
      min: "100 gram",
      max: "500 gram",
      duration: "1 to 3 years",
      yield: "5 - 6 %",
      benefits: [
        "Higher returns due to larger gold weight.",
        "Access to quarterly portfolio updates.",
        "Option to extend the lease at no extra cost."
      ]
    },
    {
      title: "Premium Gold Plan",
      subtitle: "Significant potential due to larger volumes.",
      range: "500 - 1000",
      unit: "grams",
      min: "500 gram",
      max: "1000 gram",
      duration: "3 to 5 years",
      yield: "6 - 7 %",
      benefits: [
        "Personalized advisory for gold investments.",
        "Premium insurance for leased gold.",
        "Access to exclusive gold market insights."
      ]
    }
  ],
  above1000: [
    {
      title: "Elite Gold Plan",
      subtitle: "Significant potential due to larger volumes.",
      range: "1000+",
      unit: "grams",
      min: "1000 gram",
      max: "No limit",
      duration: "Customizable (5+ years)",
      yield: "7 - 8 %",
      benefits: [
        "Dedicated manager and free market insights.",
        "Discounts on bulk leasing fees.",
        "Premium insurance and storage access."
      ]
    }
  ]
};

const PlanCategories = () => {
  const [activeTab, setActiveTab] = useState("below1000");

  return (
    <section className=" bg-[#140113] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">PLAN CATEGORIES</h2>

        {/* Single Toggle Div */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-white rounded-full p-1">
            <div
              className={`px-4 py-2 rounded-full font-semibold cursor-pointer ${
                activeTab === "below1000"
                  ? "bg-[#2A1A2D] text-white"
                  : "text-black"
              }`}
              onClick={() => setActiveTab("below1000")}
            >
              Up to 1000 grams
            </div>
            <div
              className={`px-4 py-2 rounded-full font-semibold cursor-pointer ${
                activeTab === "above1000"
                  ? "bg-[#2A1A2D] text-white"
                  : "text-black"
              }`}
              onClick={() => setActiveTab("above1000")}
            >
              Above 1000 grams
            </div>
          </div>
        </div>

        {/* Plan Cards */}
        <div
  className={`grid gap-8 ${
    plans[activeTab].length === 1
      ? "grid-cols-1 place-items-center"
      : "grid-cols-1 md:grid-cols-3"
  }`}
>

          {plans[activeTab].map((plan, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-bold mb-1">{plan.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>
              <div className="text-2xl font-bold mb-4">
                {plan.range}
                <span className="text-sm font-normal">/{plan.unit}</span>
              </div>
              <button
  className="bg-[#b98a30] text-white font-semibold py-2 px-6 rounded cursor-pointer"
  onClick={() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.href = '/contact';
  }}
>
  Contact Us
</button>

              <hr className="my-4 border-gray-300" />
              <ul className="text-sm text-gray-700 mb-4 space-y-1 text-left">
                <li>
                  ✓ Minimum Gold Weight:{" "}
                  <span className="float-right">{plan.min}</span>
                </li>
                <li>
                  ✓ Maximum Gold Weight:{" "}
                  <span className="float-right">{plan.max}</span>
                </li>
                <li>
                  ✓ Lease Duration:{" "}
                  <span className="float-right">{plan.duration}</span>
                </li>
                <li>
                  ✓ Annual Lease Yield:{" "}
                  <span className="float-right">{plan.yield}</span>
                </li>
              </ul>
              <p className="font-semibold mb-2 text-left">Key Benefits :</p>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 text-left">
                {plan.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="bg-white text-center text-black mt-16 p-8 rounded-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            GET STARTED TODAY
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            For more information or personalized advice, our dedicated team is
            ready to assist. Let us help you secure your future with Pixalive
            Gold Lease.
          </p>
          <button
  className="bg-[#b98a30] text-white font-semibold py-2 px-6 rounded cursor-pointer"
  onClick={() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.href = '/contact';
  }}
>
  Contact Us
</button>

        </div>
      </div>
    </section>
  );
};

export default PlanCategories;