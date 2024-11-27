import React from "react";
import home_categories from "../../../data/Shopping_products";
import Slider from "react-slick";
import TrendingNav from "./TrendingNav";

function Trending() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white rounded-md w-full p-5 mb-5">
      <div className="flex md:gap-5 lg:gap-40  items-center mb-3">
        <div className="lg:text-[22px]  md:text-[20px] text-sm font-medium">
          Trending Products
        </div>
        <TrendingNav />
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {home_categories.map((item, index) => {
            const description =
              item?.des?.length > 70
                ? `${item?.des?.slice(0, 40)}...`
                : item?.des;

            return (
              <div key={index} className="border-white border-2">
                <img src={item.images} alt={item.name} className="w-full " />
                <div className="mt-3 text-sm hover:text-[#dc2e3a] text-gray-400 tracking-wider">
                  {item.name}
                </div>
                <a href="/cart">
                <div className="mt-2 cursor-pointer hover:text-[#dc2e3a] text-gray-800">
                  {description}
                </div></a>
                <div className="mt-2 text-[#dc2e3a]">${item.price}</div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Trending;
