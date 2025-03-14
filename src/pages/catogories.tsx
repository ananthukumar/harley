import React from "react";
import banner2 from "../assets/images/banner-2.png";
import product from "../assets/images/product-1.jpg";
import product2 from "../assets/images/product-2.png";
import s1 from "../assets/images/small-1.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Link } from "react-router-dom";


const Catogories: React.FC = () => (
    <>
        <section className="relative">
            <img src={banner2} className="w-full" alt="" />
            <h2 className="text-xl sm:text-2xl md:text-5xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Men's Motorcycle Gear & Clothing</h2>
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
            <div className="flex justify-between border-t border-b py-2 border-[#D3D1D1] items-center">
                <h2 className="text-2xl">All Products</h2>
                <div className="md:flex gap-4 hidden ">
                    <div className="font-bold uppercase text-[14px]">Filter : </div>
                    <Menu>
                        <MenuButton className="uppercase text-[14px] inline-flex items-center gap-2">My account
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </MenuButton>
                        <MenuItems anchor="bottom end" className="bg-white border">
                            <MenuItem>
                                <div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown1</div>
                            </MenuItem>
                            <MenuItem>
                                <div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown1</div>
                            </MenuItem>
                            <MenuItem>
                                <div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown1</div>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                    <Menu>
                        <MenuButton className="uppercase text-[14px] inline-flex items-center gap-2">Catogories
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </MenuButton>
                        <MenuItems anchor="bottom end" className="bg-white border">
                            <MenuItem>
                                <div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown1</div>
                            </MenuItem>
                            <MenuItem>
                                <div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown1</div>
                            </MenuItem>
                            <MenuItem>
                                <div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown1</div>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                    <Menu>
                        <MenuButton className="uppercase text-[14px] inline-flex items-center gap-2">Size
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </MenuButton>
                        <MenuItems anchor="bottom end" className="bg-white border">
                            <MenuItem>
                                <div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown1</div>
                            </MenuItem>
                            <MenuItem>
                                <div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown1</div>
                            </MenuItem>
                            <MenuItem>
                                <div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown1</div>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                    <Menu>
                        <MenuButton className="uppercase text-[14px] inline-flex items-center gap-2">Recommended
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </MenuButton>
                        <MenuItems anchor="bottom end" className="bg-white border">
                            <MenuItem>
                                <div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown1</div>
                            </MenuItem>
                            <MenuItem>
                                <div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown1</div>
                            </MenuItem>
                            <MenuItem>
                                <div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown1</div>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </div>
            </div>
        </div>

        <div className="container mx-auto px-5 sm:px-0 pb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8">
                <div className="card_box relative">
                    <div className="image_1">
                        <img src={product} alt="" />
                    </div>
                    <div className="image_2">
                        <img src={product2} alt="" />
                    </div>
                    <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                    <h6 className="text-xl sm:text-2xl font-bold">SAR 132.00</h6>
                </div>
                <div className="card_box relative">
                    <div className="image_1">
                        <img src={product} alt="" />
                    </div>
                    <div className="image_2">
                        <img src={product2} alt="" />
                    </div>
                    <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                    <h6 className="text-xl sm:text-2xl font-bold">SAR 132.00</h6>
                </div>
                <div className="card_box relative">
                    <div className="image_1">
                        <img src={product} alt="" />
                    </div>
                    <div className="image_2">
                        <img src={product2} alt="" />
                    </div>
                    <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                    <h6 className="text-xl sm:text-2xl font-bold">SAR 132.00</h6>
                </div>
                <div className="card_box relative">
                    <div className="image_1">
                        <img src={product} alt="" />
                    </div>
                    <div className="image_2">
                        <img src={product2} alt="" />
                    </div>
                    <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                    <h6 className="text-xl sm:text-2xl font-bold">SAR 132.00</h6>
                </div>
                <div className="card_box relative">
                    <div className="image_1">
                        <img src={product} alt="" />
                    </div>
                    <div className="image_2">
                        <img src={product2} alt="" />
                    </div>
                    <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                    <h6 className="text-xl sm:text-2xl font-bold">SAR 132.00</h6>
                </div>
                <div className="card_box relative">
                    <div className="image_1">
                        <img src={product} alt="" />
                    </div>
                    <div className="image_2">
                        <img src={product2} alt="" />
                    </div>
                    <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                    <h6 className="text-xl sm:text-2xl font-bold">SAR 132.00</h6>
                </div>
                <div className="card_box relative">
                    <div className="image_1">
                        <img src={product} alt="" />
                    </div>
                    <div className="image_2">
                        <img src={product2} alt="" />
                    </div>
                    <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                    <h6 className="text-xl sm:text-2xl font-bold">SAR 132.00</h6>
                </div>
                <div className="card_box relative">
                    <div className="image_1">
                        <img src={product} alt="" />
                    </div>
                    <div className="image_2">
                        <img src={product2} alt="" />
                    </div>
                    <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                    <h6 className="text-xl sm:text-2xl font-bold">SAR 132.00</h6>
                </div>
                <div className="card_box relative">
                    <div className="image_1">
                        <img src={product} alt="" />
                    </div>
                    <div className="image_2">
                        <img src={product2} alt="" />
                    </div>
                    <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                    <h6 className="text-xl sm:text-2xl font-bold">SAR 132.00</h6>
                </div>
                <div className="card_box relative">
                    <div className="image_1">
                        <img src={product} alt="" />
                    </div>
                    <div className="image_2">
                        <img src={product2} alt="" />
                    </div>
                    <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                    <h6 className="text-xl sm:text-2xl font-bold">SAR 132.00</h6>
                </div>
            </div>
        </div>
    </>

);

export default Catogories;
