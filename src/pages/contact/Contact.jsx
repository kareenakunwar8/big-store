import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ContactForm from "./ContactForm";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" href="/" color="inherit">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/Contact">
            Contact
          </Link>
        </Breadcrumbs>
      </div>
      <div className="lg:flex xl:flex xl:gap-7 lg:gap-2 mt-5  ">
        <div className=" lg:hidden xl:hidden block">
          <ContactForm />
        </div>
        <div className=" bg-white p-5 mb-5 xl:mt-0 lg:mt-0 mt-5  rounded-md xl:w-[250px] md:w-[190px] lg:w-[200px] lg:block md:block  hidden">
          <div>Store information</div>
          <hr className="mt-5" />
          <div>
            <div className="text-xs text-[#848684] mt-3 flex  ">
              <LocationOnIcon />
              <p className="w-60 ml-2 md:leading-4 lg:leading-8 tracking-widest">
                Bigstore - Online Mega Store 507-Union Trade ipsum Doler Centre
                France
              </p>
            </div>
            <hr className="mt-5" />
            <div className="text-xs text-[#848684]  mt-2 lg:mt-3 md: tracking-widest">
              <div className="flex">
                <CallIcon />
                <div className="ml-2"> Call us:</div>
              </div>
              <div className="ml-8"> 000-000-0000</div>
            </div>
            <hr className="mt-5" />
            <div className="text-xs text-[#848684]  mt-3 tracking-widest">
              <div className="flex">
                <MailOutlineIcon />
                <div className="ml-2"> Email us: </div>
              </div>
              <div className="ml-8">
                sales@your
                <br className="block  xl:hidden" />
                company.com
              </div>
            </div>
          </div>
        </div>
        <div className="lg:block xl:block hidden">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
