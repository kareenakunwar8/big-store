import React from "react";
import { Link } from "react-router-dom";

function TrendingNav() {
    
  return (
    <div className="hidden lg:block md:block">
      <div className="text-[14px] tracking-wide flex md:gap-1 lg:gap-4">
      <Link
        to="/"
        className=" cursor-pointer rounded-md h-11 w-16 p-2 text-center hover:text-[#dc2e3a] "
      >
        Fashion
      </Link>
      <Link
        to="/"
        className=" cursor-pointer rounded-md h-11 w-16 p-2 text-center hover:text-[#dc2e3a] "
      >
        Clothes
      </Link>
      <Link
        to="/"
        className=" cursor-pointer rounded-md h-11 w-16 p-2 text-center hover:text-[#dc2e3a] "
      >
        Kitchen
      </Link>
      <Link
        to="/"
        className=" cursor-pointer rounded-md h-11 w-16 p-2 text-center hover:text-[#dc2e3a] "
      >
        Furniture 
      </Link>
      <Link
        to="/"
        className=" cursor-pointer rounded-md h-11 w-16 p-2 text-center hover:text-[#dc2e3a] "
      >
        Decoration
      </Link>
    </div>
       </div>
    
  );
}

export default TrendingNav;
