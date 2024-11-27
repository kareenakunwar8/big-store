import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function ContactInfo() {
  return (
    <div>
      <div>
        <div className="cursor-pointer  hover:text-[#dc2e3e]">
          Store Information
        </div>
        <div className="text-xs text-[#848684] mt-3 flex  ">
          <LocationOnIcon className="text-[#dc2e3e]" />
          <p className="w-60 ml-2 md:leading-4 lg:leading-6 tracking-widest">
            Bigstore - Online Mega Store 507-Union Trade ipsum Doler Centre
            France
          </p>
        </div>
        <div className="text-xs text-[#848684] flex mt-2 lg:mt-3 md: tracking-widest">
          <CallIcon className="text-[#dc2e3e]" />
          <div className="ml-2"> 000-000-0000</div>
        </div>
        <div className="text-xs text-[#848684] flex mt-3 tracking-widest">
          <MailOutlineIcon className="text-[#dc2e3e]" />
          <div className="ml-2"> sales@yourcompany.com </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
