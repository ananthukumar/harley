import React from "react";
import product from "../assets/images/product-1.jpg";
import product2 from "../assets/images/product-2.png";
import { Link } from "react-router-dom";
import FilterSection from "../components/filter";


const Catogorylist: React.FC = () => (
    <>
        <div className="bg-[#ECECEC]">
            <div className="container mx-auto px-5 sm:px-0 py-3">
                <div className="flex items-center gap-2 text-[12px]">
                    <Link to="" className="uppercase text-gray-500 leading-none">
                        Mens
                    </Link>
                    <span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                    </span>
                    <Link to="" className="uppercase leading-none">
                        jackets
                    </Link>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-5 sm:px-0 py-3">
            <h2 className="text-3xl">Jackets</h2>
        </div>
        <div className="bg-[#ECECEC] mb-10">
            <div className="container mx-auto px-5 sm:px-0">
            <FilterSection />
            </div>
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

export default Catogorylist;
