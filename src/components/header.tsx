import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoWhite from '../assets/images/logo-white.svg';
import carticon from '../assets/images/cart.svg';
import user from '../assets/images/user.svg';
import search from '../assets/images/search.svg';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white px-3 py-3 0">
      <nav className="flex items-center justify-between">
        {/* Left Section: Logo + Menu */}
        <div className="gap-4 md:gap-6 flex items-center">
          <Link to="/" className="text-white">
            <img src={logoWhite} className="md:w-[60px] w-[40px]" alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="uppercase gap-4 md:gap-6 text-sm font-bold hidden md:flex">
            <Link to="/catogories">Men</Link>
            <Link to="/catogories">Womens</Link>
            <Link to="/catogories">Accessories</Link>
            <Link to="">Parts</Link>
            <Link to="/gift">Gift</Link>
            <Link to="">Sales</Link>
            <Link to="">Contact Us</Link>
          </div>
        </div>

        {/* Right Section: Icons + Hamburger */}
        <div className="flex gap-4 items-center">
          <Link to="">
            <img src={search} alt="Search" width={20} />
          </Link>
          <Link to="">
            <div className="relative">
              <img src={carticon} alt="Cart" className="relative" width={20} />
              <div className="count absolute top-[-10px] right-[-10px] text-[10px] bg-[#F26A2B] w-4 h-4 rounded-full flex justify-center items-center text-center">
                3
              </div>
            </div>
          </Link>
          <Link to="/login">
            <img src={user} alt="User" width={20} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black transform z-10 ${menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          <AiOutlineClose />
        </button>
        <ul className="flex flex-col items-start gap-6 p-6 mt-10 uppercase text-sm font-bold">
          <Link to="/catogories" onClick={() => setMenuOpen(false)}>Men</Link>
          <Link to="/catogories" onClick={() => setMenuOpen(false)}>Womens</Link>
          <Link to="/catogories" onClick={() => setMenuOpen(false)}>Accessories</Link>
          <Link to="" onClick={() => setMenuOpen(false)}>Parts</Link>
          <Link to="/gift" onClick={() => setMenuOpen(false)}>Gift</Link>
          <Link to="" onClick={() => setMenuOpen(false)}>Sales</Link>
          <Link to="" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
