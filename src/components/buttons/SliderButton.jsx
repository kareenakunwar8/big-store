import React from "react";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

function SliderButton({ onNext, onPrev }) {
  return (
    <div className="">
      <div className="  justify-between z-20 flex ">
        <KeyboardArrowLeftOutlinedIcon
          onClick={onPrev}
          sx={{fontSize: 40}}
          className="cursor-pointer bg-[#dc2e3a] rounded-full  text-white"
        />
        <KeyboardArrowRightOutlinedIcon
          onClick={onNext}
          sx={{fontSize: 40}}

          className="cursor-pointer bg-[#dc2e3a] rounded-full  text-white"
        />
      </div>
    </div>
  );
}

export default SliderButton;
