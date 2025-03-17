import React from "react";
import harley from '../assets/images/harley.png';
import { Link } from "react-router-dom";
import location from '../assets/images/location.svg';
import facebookIcon from '../assets/images/facebook.svg';
import instaIcon from '../assets/images/insta.svg';
import youtubeIcon from '../assets/images/youtube.svg';
import xIcon from '../assets/images/x.svg';
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";


const Footer: React.FC = () => (
  <footer className="bg-black pt-8 sm:pt-10 lg:t-20 pb-2 text-white">
    <div className="container px-5 mx-auto">

      <div className="max-w-lg">
        <img src={harley} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="grid grid-cols-1 gap-10 sm:gap-3 sm:grid-cols-2 md:grid-cols-2 pt-10">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-start max-w-xs">
            <div className="border border-white inline-block p-2 flex-none">
              <img src={location} alt="" width="16" />
            </div>
            <p>Akshya Nagar 1st Block 1st Cross,
              Rammurthy nagar, Bangalore-
              560016</p>
          </div>
          <div className="flex gap-5 items-center max-w-xs">
            <div className="border border-white inline-block p-2 flex-none">
            <IoMdMail />
            </div>
            <p>contact@harley.com</p>
          </div>
          <div className="flex gap-5 items-center max-w-xs">
            <div className="border border-white inline-block p-2 flex-none">
            <IoCall  />

            </div>
            <p>+91 8593920102</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <div className="uppercase text-xs sm:text-sm gap-3 sm:gap-5 flex flex-col">
            <Link to="/" className="">home</Link>
            <Link to="" className="">about</Link>
            <Link to="/privacy-policy" className="">privacy policy</Link>
            <Link to="/terms-and-condition" className="">terms & condition</Link>
          </div>
          <div className="uppercase text-xs sm:text-sm gap-3 sm:gap-5 flex flex-col">
            <Link to="/shipping-policy" className="">shipping policy</Link>
            <Link to="/retun-policy" className="">return policy</Link>
            <Link to="/cookies-policy" className="">cookies</Link>
          </div>
        </div>
      </div>
      <hr className="mt-10 mb-5" />
      <div className="pb-3 text-center sm:flex items-center sm:justify-between">
        <p className="mb-3 sm:mb-0">Copyright © 2023 Harley Davidson Motor</p>
        <div className="flex gap-5 justify-center items-center sm:justify-end">
          <Link to="">
            <img src={facebookIcon} width="18" alt="" />
          </Link>
          <Link to="">
            <img src={instaIcon} width="18" alt="" />
          </Link>
          <Link to="">
            <img src={youtubeIcon} width="18" alt="" />
          </Link>
          <Link to="">
            <img src={xIcon} width="18" alt="" />
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;