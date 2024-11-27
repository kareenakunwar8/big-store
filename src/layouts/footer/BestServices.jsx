import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Forward30Icon from "@mui/icons-material/Forward30";
import DiscountIcon from "@mui/icons-material/Discount";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function BestServices() {
  return (
    <div className="lg:p-10 md:p-9 sm:p-5 p-4 ">
      <div className="text-xl font-medium">Best Services</div>
      <div className="text-sm  mt-2 text-[#7b7777]">
        We provide best and fast premium & free service
      </div>
      <div className="lg:mt-14 md:mt-14 sm:mt-3 mt-3 text-[14px] tracking-wide ">
        <div className="lg:flex xl:flex md:flex gap-16">
          <div className="hover:text-[#dc2e3e] lg:mt-0 md:mt-0 sm:mt-3 mt-4 ">
            <LocalShippingIcon className=" hover:rotate-45" />
            Worldwide Shipping
          </div>
          <div className="hover:text-[#dc2e3e] lg:mt-0 md:mt-0 sm:mt-3 mt-4">
            <CurrencyRupeeIcon className=" hover:rotate-45" />
            Money Back Guarentee
          </div>
        </div>
        <div className="lg:flex xl:flex md:flex gap-16 ">
          <div className="hover:text-[#dc2e3e] lg:mt-5 md:mt-0 sm:mt-3 mt-4">
            <Forward30Icon className=" hover:rotate-90" />
            Easy 30 Day Returns
          </div>
          <div className="hover:text-[#dc2e3e] lg:mt-5 md:mt-0 sm:mt-3 mt-4 ">
            <DiscountIcon className=" hover:rotate-90" />
            Member Discount
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestServices;
