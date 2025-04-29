import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Add your franchise images here
import img1 from "./../../assets/Franchise/franchise1.png";
import img2 from "./../../assets/Franchise/franchise2.png";
import img3 from "./../../assets/Franchise/franchise3.png";
import img4 from "./../../assets/Franchise/franchise4.png";

const fallbackImg = "https://via.placeholder.com/300x200?text=Image+Missing";

const franchiseData = [
    {
        title: "Zonal Franchise",
        investment: "₹ 10 Crores",
        scope: "Oversee multiple states within a designated zone.",
        responsibilities: "Oversee multiple states within a designated zone.",
        franchisePeriod: "10 years, renewable",
        img: img1 || fallbackImg,
    },
    {
        title: "State Franchise",
        investment: "₹ 5 Crores",
        scope: "Operate and manage all district and area franchises within a state.",
        responsibilities: "Handle statewide marketing, operations, and partner onboarding.",
        franchisePeriod: "10 years, renewable",
        img: img2 || fallbackImg,
    },
    {
        title: "District Franchise",
        investment: "₹ 50 Lakhs",
        scope: "Manage all area franchises within a district.",
        responsibilities: "Local offers, customer connection, and smooth daily operations.",
        franchisePeriod: "10 years, renewable",
        img: img3 || fallbackImg,
    },
    {
        title: "Area Franchise",
        investment: "₹ 25 Lakhs",
        scope: "Operate in a specific locality or area within a district.",
        responsibilities: "Direct customer interactions, sales, and service delivery.",
        franchisePeriod: "10 years, renewable",
        img: img4 || fallbackImg,
    },
];

const FranchiseCarousel = () => {
    return (
        <section className="bg-[#fef7ff] text-black px-6 md:px-20 py-16">
            <h2 className="text-center text-xl md:text-2xl font-bold mb-10">
                OUR <span className="text-[#B98A30]">FRANCHISE</span>
            </h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {franchiseData.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between mb-8" style={{ minHeight: '480px' }}>
                            <img
                                src={card.img}
                                alt={card.title}
                                className="mx-auto mb-4 h-28 object-contain"
                                onError={(e) => (e.currentTarget.src = fallbackImg)}
                            />
                            <h3 className="font-bold text-md mb-1">{index + 1}. {card.title}</h3>
                            <p className="text-sm text-gray-700 mb-2"><strong>Investment:</strong> {card.investment}</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Scope:</strong> {card.scope}</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Responsibilities:</strong> {card.responsibilities}</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Franchise Period:</strong> {card.franchisePeriod}</p>
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

export default FranchiseCarousel;
