import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function FooterForm() {
  return (
    <div className="bg-[#dc2e3a] rounded-md p-9 sm:w-[400px] sm:h-[270px] lg:w-[530px]  lg:h-[290px] ">
      <div className="text-white text-xl">Newsletter Signup</div>
      <div className="text-white text-sm mt-4">
        Subscribe to our latest newsletter to get news about
        <br /> special discounts and upcoming sales
      </div>
      <div className="flex ">
        <input
          type="text"
          placeholder="Enter Your Email.."
          className="h-11  mt-14  md:w-[400px] sm:w-[400px] w-[140px] lg:w-[400px] text-sm  p-3  "
        />
        <div className="bg-white mt-14 hover:text-[#dc2e3e]  h-11 w-11 text-center flex justify-center items-center  text-sm">
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
}
export default FooterForm;
