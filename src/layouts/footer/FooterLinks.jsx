import React from "react";
import AppImg1 from "../../assets/images/app-icon-1.png";
import AppImg2 from "../../assets/images/app-icon-2.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FooterLinks() {
  return (
    <div className="lg:text-sm  md:text-sm text-xs lg:mt-0 md:mt-0 sm:mt-3 mt-6 leading-6">
      <div className="lg:hidden xl:hidden md:hidden block">
      <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <div>Product</div>
        </AccordionSummary>
        <AccordionDetails>
     <div>New products</div>
        <div>Best sales</div>
        <div>Contact us</div>
        <div>Sitemap</div>  
        </AccordionDetails>
      </Accordion>
    </div>
    <div className="cursor-pointer text-sm font-medium  p-1 flex justify-between ">Products <KeyboardArrowDownIcon/>  
        </div>
        <div className="cursor-pointer text-sm font-medium p-1 flex justify-between "> Our company <KeyboardArrowDownIcon/></div>
        <div className="cursor-pointer text-sm font-medium  p-1 flex justify-between  "> Your account <KeyboardArrowDownIcon/></div>
      </div>
      <div className=" lg:block md:block hidden">
      <div className="flex gap-20 text-[#848684] leading-6"> 
      <ul className=" sm:w-20">
        <li className="text-base sm:text-xs md:text-sm text-black">Products</li>
        <li className="lg:mt-2 mt-0 md:mt-0">Prices drop</li>
        <li>New products</li>
        <li>Best sales</li>
        <li>Contact us</li>
        <li>Sitemap</li>  
      </ul>
      <ul className=" sm:w-28">
        <li className="text-base sm:text-xs md:text-sm text-black">
          Our company
        </li>
        <li className="lg:mt-2 mt-0 md:mt-0">Delivery</li>
        <li>Legal Notice</li>
        <li>
          Terms and conditions of
          <br /> use
        </li>
        <li>About us</li>
        <li>Secure payment</li>
      </ul>
      <ul>
        <li className=" lg:text-base md:text-sm sm:text-xs text-black">
          Your account
        </li>
        <li className="lg:mt-2 mt-0 md:mt-0">Personal info</li>
        <li>Orders</li>
        <li>Credit slips</li>
        <li>Addresses</li>
        <li>Vouchers</li>
      </ul>
      <ul className=" hidden xl:block lg:block">
        <li className="text-base text-black">Apps Store</li>
        <li className="mt-5 ">
          <img src={AppImg1} alt="AppImg" className="h-10 w-32" />
        </li>
        <li>
          <img src={AppImg2} alt="AppImg" className="h-10 mt-6 w-32" />
        </li>
      </ul>
      </div>
       </div>
      
  
    </div>
  );
}

export default FooterLinks;
