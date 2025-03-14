import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => (
  <div className="bg-[#1F1E1E] py-8 md:py-16 px-4 sm:px-0">
    <div className="max-w-lg mx-auto bg-white p-5 sm:p-10 md:p-10">
      <h2 className="text-center uppercase font-bold text-3xl sm:text-4xl mb-5">SIGN IN</h2>
      <input type="text" className="border-[#000] border w-full p-3 mb-5" name="" id="" placeholder="Email *" />
      <input type="text" className="border-[#000] border w-full p-3 mb-3" name="" id="" placeholder="Password *" />
      <Link to="/forgot-password" className="text-end block underline text-sm">Forgot Password</Link>

      <button className="w-full p-3 uppercase bg-black text-white mt-3 font-semibold mb-2">sign in</button>

      <div className="text-sm">By logging in, you agree to the <span className="underline "><Link to="">Terms of Use </Link></span> and <span className="underline"><Link to="">Privacy policy </Link></span>.</div>
    </div>
    <Link to="/signup" className="text-center uppercase block text-white mt-8 font-bold underline">Create Account</Link>
  </div>
);

export default Login;
