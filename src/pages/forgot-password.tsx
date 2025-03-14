import React from "react";

const ForgotPassword: React.FC = () => (
    <div className="bg-[#1F1E1E] py-8 md:py-16 px-4 sm:px-0">
        <div className="max-w-lg mx-auto bg-white p-5 sm:p-10 md:p-10">
            <h2 className="text-center uppercase font-bold text-3xl sm:text-4xl mb-5">Forgot password</h2>
            <input type="text" className="border-[#000] border w-full p-3 mb-5" name="" id="" placeholder="Enter your email *" />
            <button className="w-full p-3 uppercase bg-black text-white font-semibold mb-2">SEND EMAIL</button>
        </div>
    </div>
);

export default ForgotPassword;
