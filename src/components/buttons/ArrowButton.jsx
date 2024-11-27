import React from "react";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

function ArrowButton({ onNext, onPrev }) {
  return (
    <div className="flex gap-3">
      <KeyboardArrowLeftOutlinedIcon
        onClick={onPrev}
        className="cursor-pointer bg-[#f2f3f8] hover:bg-[#dc2e3a] rounded-md hover:text-white"
      />
      <KeyboardArrowRightOutlinedIcon
        onClick={onNext}
        className="cursor-pointer bg-[#f2f3f8] hover:bg-[#dc2e3a] rounded-md hover:text-white"
      />
    </div>
  );
}

export default ArrowButton;
