import aboutImage from './../../assets/Franchise/hero.png';

const AboutUs = () => {
  return (
    <div className="relative w-full px-4 pb-4 pt-0 bg-[#140113]">
      {/* Border matching the header */}
      <div className="absolute inset-0 border-b-8 border-l-8 border-r-8 border-[#140113] rounded-2xl pointer-events-none z-[-1]" />

      {/* Image Section with rounded corners */}
      <section
        className="relative w-[94%] mx-auto overflow-hidden rounded-2xl"
        style={{
           backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${aboutImage})`,
          
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
        }}
      >
        {/* Overlay heading */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            Own a Piece of the Future with <br className="hidden sm:block" />
            Pixalive Gold Network!
          </h1>
        </div>

        {/* Spacer to maintain height */}
        <div className="w-full h-[80vh]" />
      </section>

      {/* Bottom text section with matching background and bottom rounded */}
      <div className="w-[94%] mx-auto bg-[#140113] rounded-b-2xl py-10 px-6 text-center -mt-1">
        <p className="text-lg sm:text-xl md:text-2xl italic text-[#b3b3b3] leading-relaxed max-w-4xl mx-auto">
          <span className="text-3xl font-bold text-[#7a7a7a]">“ </span>
          Join the Pixalive Gold Network and be part of{' '}
          <span className="text-white font-semibold">India’s biggest gold-focused ecosystem.</span>{' '}
          With a goal of <span className="text-white font-semibold">4,000+ branches</span>, we offer a great opportunity
          to grow with us in the gold investment and services space.
          <span className="text-3xl font-bold text-[#7a7a7a]"> ”</span>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
