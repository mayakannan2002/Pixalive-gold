import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import PriyaImg from "./../../assets/Review/priya.png"; // Make sure these paths are correct!
import AmitImg from "./../../assets/Review/amit.png";
import SnehaImg from "./../../assets/Review/sneha.png";
import ArjunImg from "./../../assets/Review/arjun.png";
import KavitaImg from "./../../assets/Review/kavita.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
    {
        name: "Priya R",
        location: "Chennai",
        review:
            '“A seamless and secure way to invest in gold!" I’ve always wanted to invest in gold, but Pixalive Gold Network made it easy and trustworthy. Their platform is user-friendly, and the returns are fantastic',
        image: PriyaImg,
    },
    {
        name: "Amit K.",
        location: "Bangalore",
        review:
            "Quick and hassle-free gold loans! The gold loan process was smooth and efficient. I got the best value for my gold with minimal paperwork. Highly recommend Pixalive Gold Network.",
        image: AmitImg,
    },
    {
        name: "Sneha M",
        location: "Delhi",
        review:
            "Love the jewelry options! Transforming my digital gold into beautiful ornaments was so simple with Pixalive Jewellery Network. Stunning designs and great quality!",
        image: SnehaImg,
    },
    {
        name: "Arjun P",
        location: "Mumbai",
        review:
            "A complete gold investment ecosystem. Pixalive Gold Network offers everything I need — secure storage, exchange, and great support. Truly innovative!",
        image: ArjunImg,
    },
    {
        name: "Kavita S",
        location: "Hyderabad",
        review:
            "Trusted and reliable. Knowing my investments are backed by MMTC-PAMP gives me complete peace of mind. Pixalive Gold Network is my go-to for all gold-related services.",
        image: KavitaImg,
    },
];

const CustomerReview = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        let intervalId;

        const settings = {
            dots: false,
            infinite: true,
            arrows: true,
            speed: 1000, // Increased speed for slower transition.  Adjust as needed.
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,       // Enable auto-scroll
            autoplaySpeed: 4000, // Time between slides in milliseconds (e.g., 4000 for 4 seconds)
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };

        // Initialize the slider
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(0, true);
        }


        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 1000, // Increased speed for slower transition.  Adjust as needed.
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,       // Enable auto-scroll
        autoplaySpeed: 1500, // Time between slides in milliseconds (e.g., 4000 for 4 seconds)
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <section className="bg-[#140113] text-white py-16 px-6 md:px-20 text-center relative">
            <p className="text-gray-400 text-lg">What our customers have to say</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Customer review</h2>

            <div className="max-w-3xl mx-auto">
                <Slider {...settings} ref={sliderRef}>
                    {reviews.map((r, idx) => (
                        <div key={idx}>
                            <p className="text-lg md:text-xl italic leading-relaxed mb-8">"{r.review}"</p>
                            <div className="flex flex-col items-center">
                                <img
                                    src={r.image}
                                    alt={r.name}
                                    className="w-14 h-14 rounded-full mb-2 object-cover"
                                />
                                <p className="font-semibold text-lg">{r.name}</p>
                                <p className="text-sm text-gray-400">{r.location}</p>
                                <div className="flex gap-1 mt-2">
                                    {[...Array(4)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-lg">★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

// Arrows
function SampleNextArrow(props) {
    return (
        <div
            onClick={props.onClick}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer z-10"
        >
            ❯
        </div>
    );
}

function SamplePrevArrow(props) {
    return (
        <div
            onClick={props.onClick}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer z-10"
        >
            ❮
        </div>
    );
}

export default CustomerReview;
