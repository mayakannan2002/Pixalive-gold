import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay
import 'swiper/css';
import 'swiper/css/pagination';
import Division1 from './../../assets/Division/Division-1.png';
import Division2 from './../../assets/Division/Division-2.png';
import Division3 from './../../assets/Division/Division-3.png';
import Division4 from './../../assets/Division/Division-4.png';
import Division5 from './../../assets/Division/Division-5.png';
import Division6 from './../../assets/Division/Division-6.png';
import Division7 from './../../assets/Division/Division-7.png';

const divisions = [
    {
        title: 'Pixalive Gold Network',
        image: Division1,
        desc: 'Reimagining traditional savings with the Pixalive Gold Network revolutionizes gold ownership with services like digital gold investments, gold loans, jewelry purchases, and gold-backed everyday transactions. It ensures security, transparency, and convenience while offering earning opportunities through franchise and rewards. Pixalive makes gold a valuable part of daily life in a gold-backed value.',
        features: [],
    },
    {
        title: 'Pixalive Shopping Network',
        image: Division2,
        desc: 'A unique e-commerce platform integrated with the Pixalive Network, empowering users to buy and sell quality products at the right price. Users can convert their earned rewards or money from the Pixalive Network into products, enjoying a seamless shopping experience with express delivery and secure payments.',
        features: [],
    },
    {
        title: 'Pixalive Grocery Network',
        image: Division3,
        desc: 'The Pixalive Grocery Network is a unique platform that brings grocery stores together under one brand and offers franchise opportunities. Users can use their Pixalive wallet (gold or money) for making grocery shopping easy and valuable. Franchisees receive exclusive rights, support, and a chance to grow with a trusted and innovative brand.',
        features: [],
    },
    {
        title: 'Pixalive Restaurant Network',
        image: Division4,
        desc: 'The Pixalive Restaurant Network is a unique platform bringing restaurants under the Pixalive brand while offering franchise opportunities. Users can redeem their Pixalive wallet (gold or money) for dining experiences, making meals rewarding. Franchisees benefit from exclusive rights, brand recognition, branding support, and access to a wide customer base through the Pixalive ecosystem, fostering growth and innovation in the food industry.',
        features: [],
    },
    {
        title: 'Pixalive Pharmacy Network',
        image: Division5,
        desc: 'The Pixalive Pharmacy Network connects pharmacies under the Pixalive brand and offers franchise opportunities. Users can use their Pixalive wallet (gold or money) to purchase medicines and health products, adding value to their healthcare expenses. Franchise owners enjoy exclusive rights, branding support, operational support, and a strong customer base, making it a trusted and innovative approach to modern pharmacy services.',
        features: [],
    },
    {
        title: 'Pixalive Salon Network',
        image: Division6,
        desc: 'The Pixalive Salon Network caters to both new and existing salon owners under the Pixalive brand, offering exciting franchise opportunities. Users can redeem their Pixalive wallet (gold or money) for grooming and beauty services, ensuring value with every treatment. Franchise owners enjoy exclusive rights, branding support, and a loyal customer base, offering a modern and inclusive salon experience to everyone.',
        features: [],
    },
    {
        title: 'Pixalive Bakery Network',
        image: Division7,
        desc: 'The Pixalive Bakery Network brings bakeries together under the Pixalive brand and offers exciting franchise opportunities. Users can redeem their Pixalive wallet (gold or money) to purchase fresh bakery products, making every purchase rewarding. Franchise owners gain exclusive rights, branding support, and access to a large customer base, creating a modern and profitable bakery experience.',
        features: [],
    },
];

const Divisions = () => {
    return (
        <section className="bg-[#fef7ff] text-black px-6 md:px-20 py-16">
            <h3 className="text-center text-xl md:text-2xl font-bold mb-10">
                OUR <span className="text-[#B98A30]">DIVISIONS</span>
            </h3>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Pagination, Autoplay]} // Add Autoplay
                autoplay={{  // Configure autoplay
                    delay: 1500,  // Set the delay to 1500ms (1.5 seconds)
                    disableOnInteraction: false, // Continue autoplay even when user interacts
                }}
                loop={true} // Enable loop mode for continuous scrolling

            >
                {divisions.map((d, i) => (
                    <SwiperSlide key={i}>
                        <div className="bg-white p-6 rounded-xl shadow-md min-h-[450px] flex flex-col justify-between mb-8">
                            {/* Added min-h-[450px] and removed h-full.  mb-8 added for spacing */}
                            <img src={d.image} alt={d.title} className="mx-auto mb-4 h-28 object-contain" />
                            <h4 className="font-bold text-md mb-1">{d.title}</h4>
                            <p className="text-sm text-gray-700 mb-2">{d.desc}</p>
                            <div>
                                {d.features.length > 0 && (
                                    <>
                                        <p className="font-semibold mb-1">Features:</p>
                                        <ul className="text-sm text-gray-600 list-disc list-inside">
                                            {d.features.map((f, idx) => (
                                                <li key={idx}>{f}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                            <button
                                className="bg-[#B98A30] text-white mt-4 px-4 py-2 text-sm rounded-md"
                                onClick={() => {
                                    window.location.href = '/';
                                }}
                            >
                                KNOW MORE
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Divisions;
