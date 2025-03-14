import React from "react";
import { Link } from "react-router-dom";
import logoWhite from '../assets/images/logo-white.svg';
import carticon from '../assets/images/cart.svg';
import user from '../assets/images/user.svg';
import search from '../assets/images/search.svg';


const Header: React.FC = () => (
  <header className="bg-black text-white px-3 py-3">
    <nav className="flex items-center justify-between">
      <div className="gap-4 flex items-center">
        <Link to="/" className="text-white">
          <img src={logoWhite} className="md:w-[60px] w-[30px]" alt="" />
        </Link>
        <div className="uppercase gap-4 text-sm font-bold hidden md:flex">
          <Link to="/catogories" className="">
            Men
          </Link>
          <Link to="/catogories" className="">
            Womens
          </Link>
          <Link to="/catogories" className="">
            Accessories
          </Link>
          <Link to="" className="">
            Parts
          </Link>
          <Link to="/gift" className="">
            Gift
          </Link>
          <Link to="" className="">
            Sales
          </Link>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <Link to="" className="">
          <img src={search} alt="" width={20} />
        </Link>
        <Link to="" className="">
          <img src={carticon} alt="" width={20} />
        </Link>
        <Link to="/login" className="">
          <img src={user} alt="" width={20} />
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
