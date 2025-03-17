import React from "react";
import banner2 from "../assets/images/banner-2.png";
import product from "../assets/images/product-1.jpg";
import product2 from "../assets/images/product-2.png";
import s1 from "../assets/images/small-1.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { Link } from "react-router-dom";
import FilterSection from "../components/filter";
import { Navigation } from 'swiper/modules';



const Catogories: React.FC = () => (
    <>
        <section className="relative">
            <img src={banner2} className="w-full" alt="" />
            <h2 className="text-2xl text-center leading-none sm:text-2xl md:text-5xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Men's Motorcycle Gear & Clothing</h2>
        </section>
        <div className="pt-5 md:pt-16 pb-5">
            <h2 className="text-xl sm:text-3xl text-center mb-5">All Categories</h2>
            <div className="container px-5 sm:px-0 mx-auto">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={7}
                    loop={true}
                    navigation={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Navigation]}

                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 50,
                        },
                    }}
                >
                    <SwiperSlide>
                        <Link to="/catogories-list">
                            <div className="">
                                <img src={s1} className="w-full h-full object-contain" alt="" />
                                <h2 className="text-center text-xl mt-3">Jackets</h2>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/catogories-list">
                            <div className="">
                                <img src={s1} className="w-full h-full object-contain" alt="" />
                                <h2 className="text-center text-xl mt-3">Jackets</h2>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/catogories-list">
                            <div className="">
                                <img src={s1} className="w-full h-full object-contain" alt="" />
                                <h2 className="text-center text-xl mt-3">Jackets</h2>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/catogories-list">
                            <div className="">
                                <img src={s1} className="w-full h-full object-contain" alt="" />
                                <h2 className="text-center text-xl mt-3">Jackets</h2>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/catogories-list">
                            <div className="">
                                <img src={s1} className="w-full h-full object-contain" alt="" />
                                <h2 className="text-center text-xl mt-3">Jackets</h2>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/catogories-list">
                            <div className="">
                                <img src={s1} className="w-full h-full object-contain" alt="" />
                                <h2 className="text-center text-xl mt-3">Jackets</h2>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/catogories-list">
                            <div className="">
                                <img src={s1} className="w-full h-full object-contain" alt="" />
                                <h2 className="text-center text-xl mt-3">Jackets</h2>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/catogories-list">
                            <div className="">
                                <img src={s1} className="w-full h-full object-contain" alt="" />
                                <h2 className="text-center text-xl mt-3">Jackets</h2>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/catogories-list">
                            <div className="">
                                <img src={s1} className="w-full h-full object-contain" alt="" />
                                <h2 className="text-center text-xl mt-3">Jackets</h2>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <div className="container mx-auto px-5 sm:px-0 pb-5">
            <FilterSection />
        </div>

        <div className="container mx-auto px-5 sm:px-0 pb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8">
                <div className="card_box relative ">
                    <Link to="">
                        <div className="border border-[#EFEFEF] ">
                            <div className="image_1">
                                <img src={product} alt="" />
                            </div>
                            <div className="image_2">
                                <img src={product2} alt="" />
                            </div>
                        </div>
                        <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                        <h6 className="text-md sm:text-2xl font-bold">SAR 132.00</h6>
                    </Link>
                </div>
                <div className="card_box relative ">
                    <Link to="">
                        <div className="border border-[#EFEFEF] ">
                            <div className="image_1">
                                <img src={product} alt="" />
                            </div>
                            <div className="image_2">
                                <img src={product2} alt="" />
                            </div>
                        </div>
                        <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                        <h6 className="text-md sm:text-2xl font-bold">SAR 132.00</h6>
                    </Link>
                </div>
                <div className="card_box relative ">
                    <Link to="">
                        <div className="border border-[#EFEFEF] ">
                            <div className="image_1">
                                <img src={product} alt="" />
                            </div>
                            <div className="image_2">
                                <img src={product2} alt="" />
                            </div>
                        </div>
                        <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                        <h6 className="text-md sm:text-2xl font-bold">SAR 132.00</h6>
                    </Link>
                </div>
                <div className="card_box relative ">
                    <Link to="">
                        <div className="border border-[#EFEFEF] ">
                            <div className="image_1">
                                <img src={product} alt="" />
                            </div>
                            <div className="image_2">
                                <img src={product2} alt="" />
                            </div>
                        </div>
                        <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                        <h6 className="text-md sm:text-2xl font-bold">SAR 132.00</h6>
                    </Link>
                </div>
                <div className="card_box relative ">
                    <Link to="">
                        <div className="border border-[#EFEFEF] ">
                            <div className="image_1">
                                <img src={product} alt="" />
                            </div>
                            <div className="image_2">
                                <img src={product2} alt="" />
                            </div>
                        </div>
                        <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                        <h6 className="text-md sm:text-2xl font-bold">SAR 132.00</h6>
                    </Link>
                </div>
                <div className="card_box relative ">
                    <Link to="">
                        <div className="border border-[#EFEFEF] ">
                            <div className="image_1">
                                <img src={product} alt="" />
                            </div>
                            <div className="image_2">
                                <img src={product2} alt="" />
                            </div>
                        </div>
                        <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                        <h6 className="text-md sm:text-2xl font-bold">SAR 132.00</h6>
                    </Link>
                </div>
                <div className="card_box relative ">
                    <Link to="">
                        <div className="border border-[#EFEFEF] ">
                            <div className="image_1">
                                <img src={product} alt="" />
                            </div>
                            <div className="image_2">
                                <img src={product2} alt="" />
                            </div>
                        </div>
                        <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                        <h6 className="text-md sm:text-2xl font-bold">SAR 132.00</h6>
                    </Link>
                </div>
                <div className="card_box relative ">
                    <Link to="">
                        <div className="border border-[#EFEFEF] ">
                            <div className="image_1">
                                <img src={product} alt="" />
                            </div>
                            <div className="image_2">
                                <img src={product2} alt="" />
                            </div>
                        </div>
                        <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                        <h6 className="text-md sm:text-2xl font-bold">SAR 132.00</h6>
                    </Link>
                </div>
                <div className="card_box relative ">
                    <Link to="">
                        <div className="border border-[#EFEFEF] ">
                            <div className="image_1">
                                <img src={product} alt="" />
                            </div>
                            <div className="image_2">
                                <img src={product2} alt="" />
                            </div>
                        </div>
                        <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                        <h6 className="text-md sm:text-2xl font-bold">SAR 132.00</h6>
                    </Link>
                </div>
                <div className="card_box relative ">
                    <Link to="">
                        <div className="border border-[#EFEFEF] ">
                            <div className="image_1">
                                <img src={product} alt="" />
                            </div>
                            <div className="image_2">
                                <img src={product2} alt="" />
                            </div>
                        </div>
                        <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                        <h6 className="text-md sm:text-2xl font-bold">SAR 132.00</h6>
                    </Link>
                </div>
            </div>
        </div>
    </>

);

export default Catogories;
