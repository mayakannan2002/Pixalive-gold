import { useNavigate } from 'react-router-dom';

const PartnershipSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#140113] text-[#ffffff] py-16 px-2 space-y-16">
      
      {/* Partnership Text */}
      <div className="text-center max-w-5xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold">
          OUR <span className="text-[#F5A623]">PARTNERSHIP</span>
        </h2>
        <blockquote className="text-gray-300 text-base leading-relaxed">
          <p>“We have partnered with <span className="font-semibold text-white">MMTC-PAMP</span>, India's most trusted refinery, to ensure that every gram of gold you own through <span className="font-semibold text-white">Pixalive Gold</span> is certified, pure, and insured. Your investment is real, secure, and future-ready.”</p>
        </blockquote>
      </div>

      {/* Contact CTA */}
      <div className="bg-[#f9f8fc] text-[#140113] max-w-5xl mx-auto p-10 rounded-md text-center space-y-6">
        <h3 className="text-2xl font-bold">Join the Gold Revolution</h3>
        <p className="text-gray-600">
          Be part of a platform that is redefining the way India interacts with gold.
        </p>
        <button
          onClick={handleContactClick}
          className="bg-[#B98A30] hover:bg-[#a87a28] text-white font-semibold px-6 py-3 rounded-md transition duration-300"
        >
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default PartnershipSection;
