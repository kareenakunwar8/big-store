import React from "react";
import HomeSlider from "./HomeSlider";
import ShopBy from "./ShopBy";
import HImg from "../../assets/images/Harman.png";
import Wireless from "../../assets/images/Wireless.png";
import Trending from "./Trendin/Trending";
import HomeTestimonial from "./HomeTestimonial";
function Home() {
  return (
    <div className="w-full ">
      <HomeSlider />
      <ShopBy />
      <Trending />
      <div className="lg:flex md:flex lg:gap-5 md:gap-5 w-full mb-8">
        <img src={Wireless} className=" rounded-md xl:w-[606px] md:w-[270px] lg:w-[400px]" />
        <img src={HImg} className=" sm:mt-5 mt-3 lg:mt-0  xl:w-[606px] md:w-[270px] lg:w-[400px] md:mt-0 rounded-md   " />
      </div>
      <HomeTestimonial />
    </div>
  );
}

export default Home;
