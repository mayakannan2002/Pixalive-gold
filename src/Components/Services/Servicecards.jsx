import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from "./../../assets/Service/services/Service1.png";
import img2 from "./../../assets/Service/services/Service2.png";
import img3 from "./../../assets/Service/services/Service3.png";
import img4 from "./../../assets/Service/services/Service4.png";
import img5 from "./../../assets/Service/services/Service5.png";
import img6 from "./../../assets/Service/services/Service6.png";
import img7 from "./../../assets/Service/services/Service7.png";

const fallbackImg = "https://via.placeholder.com/300x200?text=Image+Missing";

const cardData = [
    {
        title: "Pixalive Gold Jewellery",
        desc: "Pixalive turns your digital gold into beautiful, wearable jewelry.",
        features: [
            "Buy, sell, and exchange gold jewelry seamlessly.",
            "Doorstep delivery within 1 hour or branch collection.",
            "Partnerships with leading jewelry brands for exclusive collections.",
        ],
        img: img1 || fallbackImg,
    },
    {
        title: "Pixalive Gold Investment",
        desc: "Smart gold investment plans designed to grow your wealth.",
        features: [
            "Invest in gold from 50g to 1000g.",
            "Earn 3–4% annual returns.",
            "Benefit from gold value growth of 10–14%.",
            "Total returns of 14–18% per year.",
        ],
        img: img2 || fallbackImg,
    },
    {
        title: "Pixalive Gold Chits",
        desc: "Pixalive modernizes chit funds with a gold-backed savings system.",
        features: [
            "Flexible monthly plans for all income levels.",
            "Transparent tracking with real-time updates.",
            "Safe, community-based gold savings.",
        ],
        img: img3 || fallbackImg,
    },
    {
        title: "Pixalive Gold Finance",
        desc: "Pixalive helps you unlock cash from your gold for any need—personal, business, or emergency.",
        features: [
            "Quick gold loans with low interest rates.",
            "Co-lending with top banks and NBFCs.",
            "Fast approval with minimal paperwork.",
        ],
        img: img4 || fallbackImg,
    },
    {
        title: "Pixalive Gold Payment",
        desc: "Pixalive lets you use gold like money for everyday transactions.",
        features: [
            "Instant peer-to-peer gold transfers.",
            "Pay merchants and services with gold.",
            "Works with top payment platforms for ease.",
        ],
        img: img5 || fallbackImg,
    },
    {
        title: "Pixalive Gold Exchange",
        desc: "A trusted way to sell or trade your old gold for the best price.",
        features: [
            "Fair, competitive pricing with real-time gold rates.",
            "Safe and transparent transactions.",
            "Easy exchange process within the Pixalive ecosystem.",
        ],
        img: img6 || fallbackImg,
    },
    {
        title: "Pixalive Gold Bullion",
        desc: "A secure and easy way to buy, sell, and invest in gold.",
        features: [
            "Trade gold at competitive prices.",
            "Real-time gold rates.",
            "Use Pixalive rewards for transactions.",
        ],
        img: img7 || fallbackImg,
    },
];

const CardCarousel = () => {
    return (
        <section className="bg-[#fef7ff] text-black px-6 md:px-20 py-16">
            <h2 className="text-center text-xl md:text-2xl font-bold mb-10">
                OUR <span className="text-[#B98A30]">SERVICES</span>
            </h2>

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
                {cardData.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between mb-8" style={{ minHeight: '480px' }}>
                            {/* Added inline style for minHeight and mb-8 for spacing */}
                            <img
                                src={card.img}
                                alt={card.title}
                                className="mx-auto mb-4 h-28 object-contain"
                                onError={(e) => (e.currentTarget.src = fallbackImg)}
                            />
                            <h3 className="font-bold text-md mb-1">{index + 1}. {card.title}</h3>
                            <p className="text-sm text-gray-700 mb-2">{card.desc}</p>
                            <div>
                                <p className="font-semibold mb-1">Features:</p>
                                <ul className="text-sm text-gray-600 list-disc list-inside">
                                    {card.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
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

export default CardCarousel;
