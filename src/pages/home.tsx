import React from "react";
import banner1 from "../assets/images/banner-1.jpg";
import banner from "../assets/images/banner.jpg";
import product from "../assets/images/product-1.jpg";
import product2 from "../assets/images/product-2.png";
import men from "../assets/images/men.jpg";
import women from "../assets/images/women.jpg";
import a1 from "../assets/images/a1.png";
import a2 from "../assets/images/a2.png";
import a3 from "../assets/images/a3.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

const Home: React.FC = () => {

  return (
    <>
      <section>
        <div style={{ width: "100%", margin: "auto", overflow: "hidden" }}>
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            effect={'fade'}
            loop={true}
            // pagination={true}
            className="mySwiper"
         
            pagination={{
              clickable: true,
              type: "progressbar",
            }}
            modules={[Autoplay, Pagination]}

          >
            <SwiperSlide>
              <div className="banner-wrap relative h-[560px] md:h-[640px] lg:h-[640px]">
                <img src={banner1} alt="" className="w-full h-full object-cover" />
                <div className="banner-text text-white max-w-2xl">
                  <h2 className="text-xl sm:text-3xl pb-2 sm:pb-3">MARCH 1-8, 2025 | DAYTONA BEACH, FLORIDA</h2>
                  <h1 className="text-6xl sm:text-8xl pb-2">DAYTONA DEMO DAYS</h1>
                  <p className="text-sm sm:text-md">Be the first to demo ride our 2025 bikes, including the 127-hp, track-inspired 2025 CVO™ Road Glide™ ST. Start planning your trip to Daytona Bike Week.</p>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-wrap relative h-[560px] md:h-[640px] lg:h-[640px]">
                <img src={banner} alt="" className="w-full h-full object-cover" />
                <div className="banner-text text-white max-w-2xl">
                  <h2 className="text-xl sm:text-3xl pb-2 sm:pb-3">MARCH 1-8, 2025 | DAYTONA BEACH, FLORIDA</h2>
                  <h1 className="text-6xl sm:text-8xl pb-2">DAYTONA DEMO DAYS</h1>
                  <p className="text-sm sm:text-md">Be the first to demo ride our 2025 bikes, including the 127-hp, track-inspired 2025 CVO™ Road Glide™ ST. Start planning your trip to Daytona Bike Week.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-wrap relative h-[560px] md:h-[640px] lg:h-[640px]">
                <img src={banner1} alt="" className="w-full h-full object-cover" />
                <div className="banner-text text-white max-w-2xl">
                  <h2 className="text-xl sm:text-3xl pb-2 sm:pb-3">MARCH 1-8, 2025 | DAYTONA BEACH, FLORIDA</h2>
                  <h1 className="text-6xl sm:text-8xl pb-2">DAYTONA DEMO DAYS</h1>
                  <p className="text-sm sm:text-md">Be the first to demo ride our 2025 bikes, including the 127-hp, track-inspired 2025 CVO™ Road Glide™ ST. Start planning your trip to Daytona Bike Week.</p>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-20">
        <div className="container mx-auto px-5" >
          <h3 className="text-3xl mb-5">Men’s Gear & Apparel</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="card_box relative ">
              <Link to="">
                <div className="border border-[#EFEFEF] ">
                  <div className="image_1">
                    <img src={product} alt="" />
                  </div>
                  <div className="image_2">
                    <img src={product2} alt="" />
                  </div>
                </div>
                <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                <h6 className="text-md sm:text-2xl font-bold">SAR 132.00</h6>
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
                <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                <h6 className="text-md sm:text-2xl font-bold">SAR 132.00</h6>
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
                <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                <h6 className="text-md sm:text-2xl font-bold">SAR 132.00</h6>
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
                <h5 className="text-lg leading-none sm:text-2xl font-medium mt-2 sm:mt-5">Men's Potomac 3-in-1 Leather Jacket</h5>
                <h6 className="text-md sm:text-2xl font-bold">SAR 132.00</h6>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-8 sm:py-10 lg:py-20 md:px-10 px-5">
        <h3 className="text-4xl sm:text-5xl text-white mb-5">
          SHOP GEAR & APPAREL
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="relative">

            <Link to="/catogories">
              <img src={men} className="w-full h-full object-cover" alt="" />
              <h4 className="uppercase p-2 sm:p-4 absolute w-full bottom-0 text-white text-2xl bg-gray-900 bg-opacity-45">MEN'S GEAR & APPAREL</h4 >
            </Link>
          </div>
          <div className="relative">
            <Link to="/catogories">
              <img src={women} className="w-full h-full object-cover" alt="" />
              <h4 className="uppercase p-2 sm:p-4 absolute w-full bottom-0 text-white text-2xl bg-gray-900 bg-opacity-45">WOMEN'S GEAR & APPAREL</h4 >
            </Link>
          </div>
        </div>
      </section>

      <section className=" py-8 sm:py-10 lg:py-20 md:px-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="relative">
            <img src={men} className="w-full h-full object-cover" alt="" />
            <h4 className="uppercase p-2 sm:p-4 absolute w-full bottom-0 text-white text-2xl bg-gray-900 bg-opacity-45">MEN'S GEAR & APPAREL</h4 >
          </div>
          <div className="relative">
            <img src={women} className="w-full h-full object-cover" alt="" />
            <h4 className="uppercase p-2 sm:p-4 absolute w-full bottom-0 text-white text-2xl bg-gray-900 bg-opacity-45">WOMEN'S GEAR & APPAREL</h4 >
          </div>
          <div className="relative">
            <img src={women} className="w-full h-full object-cover" alt="" />
            <h4 className="uppercase p-2 sm:p-4 absolute w-full bottom-0 text-white text-2xl bg-gray-900 bg-opacity-45">WOMEN'S GEAR & APPAREL</h4 >
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-20 md:px-10 px-5 bg-hme">
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
};

export default Home;
