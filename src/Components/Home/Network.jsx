import React from 'react';

const features = [
  {
    title: '1. Comprehensive Gold Services:',
    description:
      'Offers a complete range of gold-related services, including digital gold investment, physical gold redemption, gold loans, and jewelry purchases.',
    image: '/images/gold-services.png',
  },
  {
    title: '2. Gold-Backed Ecosystem:',
    description:
      'Integrates gold into everyday life, allowing users to redeem their gold for groceries, pharmacy products, dining, salon services, and more.',
    image: '/images/gold-ecosystem.png',
  },
  {
    title: '3. Secure and Transparent:',
    description:
      'Ensures top-tier security with trusted partners like MMTC-PAMP, Brink’s, and blockchain-based operations for transparency.',
    image: '/images/secure-transparent.png',
  },
  {
    title: '4. Community-Centric Approach:',
    description:
      'Empowers local businesses and users through partnerships, franchise opportunities, and gold-backed rewards programs.',
    image: '/images/community-centric.png',
  },
  {
    title: '5. Profit Opportunities:',
    description:
      'Provides earning potential through franchise models, referral rewards, and gold leasing programs.',
    image: '/images/profit-opportunities.png',
  },
  {
    title: '6. Trusted Brand:',
    description:
      'Operated by Pixalive Group, a leader in integrating gold, technology, and community-driven services.',
    image: '/images/trusted-brand.png',
  },
];

const GoldFeatures = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-12">
        WHY CHOOSE <span className="text-yellow-600">PIXALIVE GOLD NETWORK?</span>
      </h2>
      <div className="max-w-5xl mx-auto space-y-10">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-6">
            <div className="w-3/4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
            <img
              src={feature.image}
              alt={feature.title}
              className="w-28 h-28 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoldFeatures;
