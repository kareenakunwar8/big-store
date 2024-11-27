import React from "react";
import { Link } from "react-router-dom";

export default function SliderText({ Message, Offer }) {
  return (
    <div className="absolute p-4">
      <div className="bg-[#dc2e3a] lg:block md:block hidden text-white text-xs lg:text-sm w-[250px] lg:w-[290px] p-1">
        Use This Code & Get 30% Off : #458UDS
      </div>
      <div className=" text-[15px] lg:text-[29px] lg:font-semibold w-[200px] md:w-[300px] lg:w-[400px]md:mt-3 mt-1 lg:mt-5">
        {Message}
      </div>
      <div className="text-[#575757] lg:mt-7 mt-1 text-xs lg:text-sm ">
        Up To{Offer} Off Best Selling At
        <span className="text-[#dc2e3a]">$199.99</span>{" "}
      </div>
      <Link to=" /Products">
        <button className="bg-[#dc2e3a] p-3 hidden  md:block lg:block lg:mt-7 md:mt-6 ml-24 w-28 mt-8 text-xs hover:bg-black ease-in-out	rounded-md text-white">
          Shop Now
        </button>
      </Link>
    </div>
  );
}
