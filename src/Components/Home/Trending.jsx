import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';  // Import Autoplay
import 'swiper/css';
import 'swiper/css/pagination';

const products = [
    { img: '/images/coin-1g.png', title: 'Pixalive 1Gram', desc: 'Gold Coin', karat: '24k (99.9%)' },
    { img: '/images/coin-2g.png', title: 'Pixalive 2Gram', desc: 'Gold Coin', karat: '24k (99.9%)' },
    { img: '/images/coin-3g.png', title: 'Pixalive 3Gram', desc: 'Gold Coin', karat: '24k (99.9%)' },
    { img: '/images/coin-4g.png', title: 'Pixalive 4Gram', desc: 'Gold Coin', karat: '24k (99.9%)' },
    { img: '/images/coin-5g.png', title: 'Pixalive 5Gram', desc: 'Gold Coin', karat: '24k (99.9%)' },

];

const TrendingProducts = () => {
    return (
        <section className="py-16 bg-white">
            <div className="px-4 md:px-20">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Trending Product</h2>
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-700">View More</a>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]} // Add Autoplay to the modules
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{  // Configure autoplay
                        delay: 1500,  // Set the delay to 2000ms (2 seconds)
                        disableOnInteraction: false, // Continue autoplay even when user interacts
                    }}
                    loop={true} // Enable loop mode for continuous scrolling
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="border border-gray-200 rounded-xl p-4 bg-white mb-15 shadow-md hover:shadow-lg transition-all h-full flex flex-col justify-between">
                                <div className="flex flex-col items-center text-center">
                                    <img src={product.img} alt={product.title} className="w-20 h-20 object-contain mb-4" />
                                    <h3 className="font-semibold text-lg text-gray-800">{product.title}</h3>
                                    <p className="text-sm text-gray-500">{product.desc}</p>
                                    <p className="text-sm text-gray-700 font-medium">{product.karat}</p>
                                </div>
                                <button className="mt-6 bg-yellow-700 hover:bg-yellow-900 text-white font-medium text-sm py-2 px-1 rounded-full ">
                                    View Details
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TrendingProducts;
