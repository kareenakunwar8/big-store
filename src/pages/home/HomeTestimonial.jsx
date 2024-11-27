import React, { useRef } from "react";
import TestimonialData from "../../data/TestimonialData";
import ArrowButton from "../../components/buttons/ArrowButton";
import Slider from "react-slick";

function HomeTestimonial() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    
    ]
    
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="bg-white rounded-md w-full p-3">
      <div className="flex justify-between items-center  mb-5">
        <div className="text-[22px] font-medium">Our Testimonials</div>
        <ArrowButton onNext={handleNext} onPrev={handlePrev} />
      </div>
      <hr className="mb-5" />
      <div className="slider-container">
        <Slider {...settings} ref={sliderRef}>
          {TestimonialData.map((item, index) => {
            return (
              <div key={index} className=" border-x-8 border-white">
                <div className=" bg-[#f2f3f8] absolute ml-36 rounded-full text-center font-serif text-[#dc2e3a] w-8 h-8 text-6xl">
                  “
                </div>
                <img
                  src={item.img}
                  className="h-[60px] w-[60px] ml-40"
                  alt={item.name}
                />
                <div className="mt-3 text-center text-[13px] text-gray-800 leading-7 tracking-wide">
                  {item.des}
                </div>
                <hr className="mt-6 bg-black h-[2px] w-10 ml-40" />
                <div className="mt-3 text-center text-sm font-medium hover:text-[#dc2e3a] tracking-wide">
                  {item.name}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default HomeTestimonial;
