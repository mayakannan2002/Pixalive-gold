import React from 'react';
import { useNavigate } from 'react-router-dom';
import Division1 from './../../assets/Division/Division-1.png';
import Division2 from './../../assets/Division/Division-2.png';
import Division3 from './../../assets/Division/Division-3.png';

const divisions = [
  {
    title: 'Pixalive Gold Network',
    image: Division1,
    description:
      'Reimagining traditional savings with the Pixalive Gold Network revolutionizes gold ownership with services like digital gold investment, gold loans, jewelry purchases, and gold-backed everyday transactions.',
  },
  {
    title: 'Pixalive Shopping Network',
    image: Division2,
    description:
      'A unique e-commerce platform integrated with Pixalive Network, onboarding multiple D2C brands to offer quality products at the right price. Users can convert their earned rewards or money from Pixalive Network into products.',
  },
  {
    title: 'Pixalive Grocery Network',
    image: Division3,
    description:
      'The Pixalive Grocery Network is a unique platform that brings grocery stores together under one brand and offers franchise opportunities. Users can use the gold in their Pixalive wallet to buy groceries.',
  },
];

const Divisions = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#140113] text-white py-16 px-4 md:px-20">
      <h3 className="text-center text-2xl font-bold mb-10">
        OUR <span className="text-[#B98A30]">DIVISIONS</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {divisions.map((div, i) => (
          <div key={i} className="bg-white text-black p-6 rounded-xl shadow-lg flex flex-col justify-between">
            <img src={div.image} alt={div.title} className="h-36 mx-auto mb-4 object-contain" />
            <h4 className="font-semibold text-lg mb-2">{div.title}</h4>
            <p className="text-sm text-gray-700 mb-4">{div.description}</p>
            <button
  className="bg-[#B98A30] text-white text-sm font-medium px-4 py-2 rounded-md"
  onClick={() => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Navigate to the /division route
    window.location.href = '/divisions';
  }}
>
  KNOW MORE
</button>

          </div>
        ))}
      </div>

      <div className="text-center">
      <button
  onClick={() => {
    navigate('/divisions');
    window.scrollTo(0, 0);
  }}
  className="bg-[#B98A30] text-white px-6 py-2 text-sm rounded-full"
>
  View all →
</button>
      </div>
    </section>
  );
};

export default Divisions;
