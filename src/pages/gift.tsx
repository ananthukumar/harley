import React from "react";
import card from '../assets/images/card.png';

const Gift: React.FC = () => (
    <div className="bg-black py-8 md:py-16 px-4 sm:px-0">
        <div className="container md:px-10 mx-auto">
            <img src={card} alt="" className="absolute z[-2] right-[30%]" />
            <div className="md:max-w-lg ms-auto">
                <div className=" bg-white p-5 sm:p-10 md:p-100 relative">
                    <h2 className="capitalize font-bold text-2xl pb-5">Gift your loved ones the spirit of
                        <br></br> Harley Davidson</h2>
                    <div className="uppercase text-[12px] text-[#878787] pb-3">Customer Amount</div>
                    <div className="mb-3 flex gap-3 items-center">
                        <div className="uppercase text-xl">sar</div>
                        <div className="text-3xl px-3 py-2 border-dashed border-[1.4px] border-[#000]">500</div>
                    </div>
                    <div className="uppercase text-[12px] text-[#878787] pb-3">Choose From</div>
                    <div className="flex flex-wrap gap-4 pb-3">
                        <div className="bg-black px-4 py-1 text-white">SAR 500</div>
                        <div className="bg-black px-4 py-1 text-white">SAR 1000</div>
                        <div className="bg-black px-4 py-1 text-white">SAR 100</div>
                    </div>
                    <div className="uppercase text-[12px] text-[#878787] pb-3">Delivery Options</div>
                    <div className="flex gap-2 items-center pb-3">
                        <input type="radio" className="w-5 h-5 pt-1" />
                        <label htmlFor="">Send as Gift</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="radio" className="w-5 h-5 pt-1" />
                        <label htmlFor="">Add to my account (for personal use)</label>
                    </div>

                    {/* when you click send a gift */}

                    {/* <div className="mt-5">
                        <>
                            <div className="uppercase text-[12px] text-[#878787] pb-3">receiver name</div>
                            <input type="text" className="border-[#000] border w-full p-3 mb-5" name="" id="" placeholder="Enter your email *" />
                        </>
                        <>
                            <div className="uppercase text-[12px] text-[#878787] pb-3">receiver email</div>
                            <input type="text" className="border-[#000] border w-full p-3 mb-5" name="" id="" placeholder="Enter your email *" />
                        </>
                        <>
                            <div className="uppercase text-[12px] text-[#878787] pb-3">message</div>
                            <textarea className="border-[#000] border w-full p-3 mb-5" name="" id="" placeholder="Enter your email *" />
                        </>
                    </div> */}

                </div>
                <button className="w-full p-3 uppercase bg-[#FF671F] text-white mt-3 font-semibold mb-2">buy now</button>
            </div>

        </div>


    </div>

);

export default Gift;
