import React from "react";
import FooterForm from "./FooterForm";
import BestServices from "./BestServices";
import FooterLinks from "./FooterLinks";
import ContactInfo from "./ContactInfo";

function Footer() {
  return (
    <div className="h-full w-full mt-2 lg:px-14 xl:py-14 bg-white">
      <div className=" lg:flex md:flex p-9 ">
        <FooterForm />
        <BestServices />
      </div>
      <hr />
      <div className="lg:flex md:flex gap-6 p-9">
        <ContactInfo />
        <FooterLinks />
      </div>
      <hr />
      <div className="text-xs text-[#848684]  mb-5 p-2 h-10">
        © 2024 - Ecommerce software by PrestaShop™
      </div>
    </div>
  );
}

export default Footer;
