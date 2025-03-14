import React from "react";
import banner1 from "../assets/images/banner-1.jpg";
import product from "../assets/images/product-1.jpg";
import product2 from "../assets/images/product-2.png";
import men from "../assets/images/men.jpg";
import women from "../assets/images/women.jpg";
import a1 from "../assets/images/a1.png";
import a2 from "../assets/images/a2.png";
import a3 from "../assets/images/a3.png";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from 'swiper/react';



const Home: React.FC = () => (
  <>
    <section>
      <div className="">
        <div className="relative">
          <img src={banner1} className="w-full h-full object-cover" alt="" />
          <div className="absolute md:w-1/2 text-white top-3 md:top-[30%] md:px-20 px-5">
            <h2>MARCH 1-8, 2025 | DAYTONA BEACH, FLORIDA</h2>
            <h1 className="md:text-6xl">DAYTONA DEMO DAYS</h1>
            <p>Be the first to demo ride our 2025 bikes, including the 127-hp, track-inspired 2025 CVO™ Road Glide™ ST. Start planning your trip to Daytona Bike Week.</p>
          </div>
        </div>

      </div>
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-content">
            <h2>Slide 1: Centered Text</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h2>Slide 2: Centered Text</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h2>Slide 3: Centered Text</h2>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </section>

    <section className="py-20">
      <div className="container mx-auto px-5" >
        <h3 className="text-3xl mb-5">Men’s Gear & Apparel</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="card_box relative">
            <Link to="">
              <div className="image_1">
                <img src={product} alt="" />
              </div>
              <div className="image_2">
                <img src={product2} alt="" />
              </div>
              <h5 className="text-2xl font-medium mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
              <h6 className="text-xl sm:text-2xl font-bold">SAR 132.00</h6>
            </Link>
          </div>
          <div className="card_box relative">
            <Link to="">
              <div className="image_1">
                <img src={product} alt="" />
              </div>
              <div className="image_2">
                <img src={product2} alt="" />
              </div>
              <h5 className="text-2xl font-medium mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
              <h6 className="text-xl sm:text-2xl font-bold">SAR 132.00</h6>
            </Link>
          </div>
          <div className="card_box relative">
            <Link to="">
              <div className="image_1">
                <img src={product} alt="" />
              </div>
              <div className="image_2">
                <img src={product2} alt="" />
              </div>
              <h5 className="text-2xl font-medium mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
              <h6 className="text-xl sm:text-2xl font-bold">SAR 132.00</h6>
            </Link>
          </div>
          <div className="card_box relative">
            <Link to="">
              <div className="image_1">
                <img src={product} alt="" />
              </div>
              <div className="image_2">
                <img src={product2} alt="" />
              </div>
              <h5 className="text-2xl font-medium mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
              <h6 className="text-xl sm:text-2xl font-bold">SAR 132.00</h6>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-black py-20 md:px-10 px-5">
      <h3 className="text-5xl text-white mb-5">
        SHOP GEAR & APPAREL
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="relative">

          <Link to="/catogories">
            <img src={men} className="w-full h-full object-cover" alt="" />
            <h4 className="uppercase p-4 absolute w-full bottom-0 text-white text-2xl bg-gray-900 bg-opacity-45">MEN'S GEAR & APPAREL</h4 >
          </Link>
        </div>
        <div className="relative">
          <Link to="/catogories">
            <img src={women} className="w-full h-full object-cover" alt="" />
            <h4 className="uppercase p-4 absolute w-full bottom-0 text-white text-2xl bg-gray-900 bg-opacity-45">WOMEN'S GEAR & APPAREL</h4 >
          </Link>
        </div>
      </div>
    </section>

    <section className=" py-20 md:px-10 px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="relative">
          <img src={men} className="w-full h-full object-cover" alt="" />
          <h4 className="uppercase p-4 absolute w-full bottom-0 text-white text-2xl bg-gray-900 bg-opacity-45">MEN'S GEAR & APPAREL</h4 >
        </div>
        <div className="relative">
          <img src={women} className="w-full h-full object-cover" alt="" />
          <h4 className="uppercase p-4 absolute w-full bottom-0 text-white text-2xl bg-gray-900 bg-opacity-45">WOMEN'S GEAR & APPAREL</h4 >
        </div>
        <div className="relative">
          <img src={women} className="w-full h-full object-cover" alt="" />
          <h4 className="uppercase p-4 absolute w-full bottom-0 text-white text-2xl bg-gray-900 bg-opacity-45">WOMEN'S GEAR & APPAREL</h4 >
        </div>
      </div>
    </section>

    <section className="py-20 md:px-10 px-5 bg-hme">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-5">
        <div className="text-white">
          <p>Building Our Legend And
            Leading Through
            Innovation,evolution And Emotion</p>
        </div>
        <div>
          <img src={a1} alt="w-full h-full object-cover" />
          <h4 className="mt-4 text-white text-4xl">AUTHENTIC</h4>
        </div>
        <div>
          <img src={a2} alt="w-full h-full object-cover" />
          <h4 className="mt-4 text-white text-4xl">AMERICAN</h4>
        </div>
        <div>
          <img src={a3} alt="w-full h-full object-cover" />
          <h4 className="mt-4 text-white text-4xl">EMOTION</h4>
        </div>
      </div>
    </section>
  </>
);

export default Home;
