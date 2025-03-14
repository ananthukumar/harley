import React from "react";
import product from "../assets/images/product-1.jpg";
import product2 from "../assets/images/product-2.png";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Link } from "react-router-dom";


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
                <div className="flex justify-between py-3 items-center">
                    <div className="uppercase text-xs text-gray-600">71 Products</div>
                    <div className="md:flex gap-4 hidden">
                        <div className="font-bold uppercase text-xs">Filter : </div>
                        <Menu>
                            <MenuButton className="uppercase text-xs inline-flex items-center gap-2">My account
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
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
                            <MenuButton className="uppercase text-xs inline-flex items-center gap-2">Catogories
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
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
                            <MenuButton className="uppercase text-xs inline-flex items-center gap-2">Size
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
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
                            <MenuButton className="uppercase text-xs inline-flex items-center gap-2">Recommended
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
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
                    <h6 className="text-xl sm:text-xl sm:text-2xl font-bold">SAR 132.00</h6>
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

export default Catogorylist;
