import React from "react";
import LinkCardData from "../../../data/LinkCardData";
import Rating from "@mui/material/Rating";
import EuroSymbolOutlinedIcon from "@mui/icons-material/EuroSymbolOutlined";
import { Link } from "react-router-dom";

export default function AboutLeftSection() {
  return (
    <div>
      <div className=" bg-white p-5 mb-5 rounded-md w-[220px]">
        <div>New Products</div>
        <hr />
        <div className="mt-4">
          {LinkCardData.map((item, index) => {
            return (
              <div className="mt-9">
                <div>
                  <div className="text-[#dc2e3a] p-1 font-medium absolute text-xs">
                    {item.des}
                  </div>
                  <img
                    src={item.img}
                    className="h-[90px] w-[80px] rounded-md "
                  />
                </div>
                <div>
                  <Rating
                    sx={{ fontSize: 15 }}
                    name="half-rating-read "
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <Link to="/cart">
                  <div className="text-sm text-[#848684] hover:text-[#dc2e3a] leading-8">
                    {item.name}
                  </div>
                </Link>
                <div className="flex gap-1">
                  <div className="text-[#848684] text-[17px]">
                    <strike>
                      <EuroSymbolOutlinedIcon sx={{ fontSize: 15 }} />
                      {item.old}{" "}
                    </strike>
                  </div>
                  <div className="text-[#dc2e3a] text-[17px]">
                    <EuroSymbolOutlinedIcon sx={{ fontSize: 15 }} />
                    {item.Price}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" mt-9 underline-offset-1 underline ml-10 hover:text-[#dc2e3a]">
          All New Product
        </div>
      </div>
    </div>
  );
}
