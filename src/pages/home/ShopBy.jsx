import React, { useRef } from "react";
import home_categories from "../../data/home_categories";
import ArrowButton from "../../components/buttons/ArrowButton";
import Slider from "react-slick";

function ShopBy() {
  const sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
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

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="bg-white rounded-md w-full p-5 mb-5">
      <div className="flex justify-between items-center mb-3">
        <div className="lg:text-[22px]  md:text-[20px] text-sm font-medium">
          Shop By Categories
        </div>
        <ArrowButton onNext={handleNext} onPrev={handlePrev} />
      </div>      
      
      <div className="slider-container">
        <Slider {...settings} ref={sliderRef}>
          {home_categories.map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={item.img}
                  className="h-[120px] w-[150px] border-2 border-white"
                  alt={item.name}
                />
                <div className="mt-3 ml-5">{item.name}</div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default ShopBy;




//state = state is the current situation of the component that store the  properties of component 
//props = propes is an argument
//component = component is the bit of reuseable code that   
//usestate = manage local state of  components 
//using setstate we update the current state state   
//useeffect = when we display the component at first render 
//useref = access the refrence of  html element 
// usereduce =