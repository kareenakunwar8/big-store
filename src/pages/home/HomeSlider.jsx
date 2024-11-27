import React, { useRef } from "react";
import SliderImg1 from "../../assets/images/SliderImg-1.jpg";
import SliderImg2 from "../../assets/images/SliderImg-2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderButton from "../../components/buttons/SliderButton";
import SliderText from "../../components/SliderText";

function HomeSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="rounded-md p-5 bg-white mb-5 w-full">
      <div className="relative w-full group">
        <Slider {...settings} ref={sliderRef} className="w-full">
          <div>
            <SliderText
              Message={"Latest Home Electronic Appliances"}
              Offer={"50%"}
            />

            <img src={SliderImg1} alt="sliderImg1" className="h-full" />
          </div>
          <div>
            <SliderText
              Message={"New Women Clothes Collection"}
              Offer={"40%"}
            />
            <img src={SliderImg2} alt="sliderImg1" className="h-full " />
          </div>
        </Slider>
        <div className="absolute w-full top-[50%] hidden group-hover:block px-4">
          <SliderButton onNext={handleNext} onPrev={handlePrev} />
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
