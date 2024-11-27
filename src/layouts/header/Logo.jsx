import React from "react";
import LogoImg from "../../assets/logo/logo.jpg";

function Logo() {
  return (
    <img
      src={LogoImg}
      alt="Logo img"
      className=" items-center mt-1 sm:h-7 sm:w-28 lg:h-[30px] lg:w-[150px] "
    />
  );
}

export default Logo;
