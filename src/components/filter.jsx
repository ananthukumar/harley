import { useState } from "react";
import { AiOutlineFilter, AiOutlineClose } from "react-icons/ai";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

const FilterSection = () => {
    const [filterOpen, setFilterOpen] = useState(false);

    return (
        <div className="flex justify-between border-t border-b py-2 border-[#D3D1D1] items-center">
            <h2 className="text-2xl">All Products</h2>

            {/* Desktop Filters */}
            <div className="hidden md:flex gap-4">
                <div className="font-bold uppercase text-[14px]">Filter:</div>


                {/* Categories */}
                <Menu>
                    <MenuButton className="uppercase text-[14px] inline-flex items-center gap-2">
                        Categories
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </MenuButton>
                    <MenuItems anchor="bottom end" className="bg-white border">
                        <MenuItem><div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown1</div></MenuItem>
                        <MenuItem><div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown2</div></MenuItem>
                        <MenuItem><div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown3</div></MenuItem>
                    </MenuItems>
                </Menu>

                {/* Size */}
                <Menu>
                    <MenuButton className="uppercase text-[14px] inline-flex items-center gap-2">
                        Size
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </MenuButton>
                    <MenuItems anchor="bottom end" className="bg-white border">
                        <MenuItem><div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown1</div></MenuItem>
                        <MenuItem><div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown2</div></MenuItem>
                        <MenuItem><div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown3</div></MenuItem>
                    </MenuItems>
                </Menu>

                {/* Recommended */}
                <Menu>
                    <MenuButton className="uppercase text-[14px] inline-flex items-center gap-2">
                        Recommended
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </MenuButton>
                    <MenuItems anchor="bottom end" className="bg-white border">
                        <MenuItem><div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown1</div></MenuItem>
                        <MenuItem><div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown2</div></MenuItem>
                        <MenuItem><div className="block data-[focus]:bg-black data-[focus]:text-white px-5 py-2 text-sm">Dropdown3</div></MenuItem>
                    </MenuItems>
                </Menu>
            </div>

            {/* Mobile Filter Button */}
            <button className="md:hidden text-xl flex items-center gap-2" onClick={() => setFilterOpen(true)}>
                <AiOutlineFilter />
                <span className="uppercase text-sm">Filter</span>
            </button>

            {/* Mobile Slide-In Filter Menu */}
            <div className={`fixed top-0 right-0 h-full w-64 z-10 bg-white text-black shadow-lg transform ${filterOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden`}>
                <button className="absolute top-4 right-4 text-2xl" onClick={() => setFilterOpen(false)}>
                    <AiOutlineClose />
                </button>
                <div className="flex flex-col items-start gap   -4 p-6 mt-10 uppercase text-sm font-bold">
                    <div className="text-lg">Filter Options</div>
                    <div className="w-full border-b py-2">Categories</div>
                    <div className="w-full border-b py-2">Size</div>
                    <div className="w-full border-b py-2">Recommended</div>
                </div>
            </div>
        </div>
    );
};

export default FilterSection;
