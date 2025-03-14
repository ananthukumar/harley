import React from "react";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => (
    <div className="bg-[#1F1E1E] py-8 md:py-16 px-4 sm:px-0">
        <div className="max-w-lg mx-auto bg-white p-5 sm:p-10 md:p-10">
            <h2 className="text-center uppercase font-bold text-3xl sm:text-4xl mb-5">SIGN UP</h2>
            <input type="text" className="border-[#000] border w-full p-3 mb-5" name="" id="" placeholder="First Name *" />
            <input type="text" className="border-[#000] border w-full p-3 mb-5" name="" id="" placeholder="Last Name *" />
            <input type="text" className="border-[#000] border w-full p-3 mb-5" name="" id="" placeholder="Mobile Number *" />
            <input type="text" className="border-[#000] border w-full p-3 mb-5" name="" id="" placeholder="Email *" />
            <input type="text" className="border-[#000] border w-full p-3 mb-3" name="" id="" placeholder="Password *" />
            <div className="flex gap-2 items-start mb-2">
                <input type="checkbox" className="w-4 h-4 mt-1 flex-none" name="" id="" />
                <div className="text-sm">By checking this box, I confirm that I have read and agree to the <span className="underline "><Link to="">Terms and Conditions  </Link></span> and <span className="underline"><Link to="">Privacy policy </Link></span>.</div>
            </div>

            <button className="w-full p-3 uppercase bg-black text-white mt-3 font-semibold mb-2">sign in</button>

        </div>
        <Link to="/login" className="text-center uppercase block text-white mt-8 font-bold underline">Login</Link>
    </div>
);

export default SignUp;
