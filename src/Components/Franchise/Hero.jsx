import aboutImage from './../../assets/Franchise/hero.png'; // Make sure this path is correct

const AboutUs = () => {
  return (
    <div className="bg-[#140113] text-[#7a7a7a] py-12 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        
        {/* Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={aboutImage}
            alt="About Pixalive Gold Network"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Paragraph Text */}
        <div className="relative px-4 sm:px-8 md:px-16">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            <span className="text-2xl font-bold text-[#7a7a7a]">“ </span>
            Join the Pixalive Gold Network and be part of <span className="text-white font-semibold">India’s biggest gold-focused ecosystem.</span> 
            With a goal of <span className="text-white font-semibold">4,000+ branches</span>, we offer a great opportunity to grow with us in the gold investment and services space.
            <span className="text-2xl font-bold text-[#7a7a7a]"> ”</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
