import aboutImage from './../../assets/About/about.png'; // Make sure this path is correct

const AboutUs = () => {
  return (
    <div className="bg-[#140113] text-[#7a7a7a] py-12 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        
        {/* About Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={aboutImage}
            alt="About Pixalive Gold Network"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* About Text */}
        <div className="relative px-4 sm:px-8 md:px-16">
          <p className="text-base sm:text-lg md:text-xl  leading-relaxed">
            <span className="text-2xl font-bold text-[#7a7a7a]">“ </span>
            <span>
              <span className="text-2xl text-white font-semibold">Pixalive Gold Network </span> 
              is India’s first social gold platform, combining the timeless value of gold with the power of innovation and connectivity. Our platform aims to redefine the gold ecosystem, providing a seamless integration of gold investments, financial services, and daily life needs.
            </span>
            <span className="text-2xl font-bold text-[#7a7a7a]"> ”</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
