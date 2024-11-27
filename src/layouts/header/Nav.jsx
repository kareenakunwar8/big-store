import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { useSelector} from "react-redux";

export default function Nav() {
  
  const Items = useSelector((state) => state.cart.items);
 const itemNumbers = Items.length 

 return (
    <div className=" md:block lg:block hidden">
      <div className="h-11 gap-8 md:gap-8  w-full ml-10 justify-center items-center text-sm flex  text-[#dc2e3a]">
        <hr className=" bg-slate-300 w-[1px] h-8" />
        <Link
          to="/"
          className=" cursor-pointer rounded-md h-9 w-16 p-2 text-center hover:bg-[#dc2e3a] hover:text-white "
        >
          Home
        </Link>
        <Link
          to="/about"
          className=" cursor-pointer rounded-md  p-2 hover:bg-[#dc2e3a] hover:text-white h-9 w-16  text-center"
        >
          About
        </Link>
        <Link
          to="/Products"
          className=" cursor-pointer rounded-md  p-2 hover:bg-[#dc2e3a] hover:text-white h-9 w-20 text-center"
        >
          Products
        </Link>
        <Link
          to="/Contact"
          className=" cursor-pointer rounded-md  p-2 hover:bg-[#dc2e3a] hover:text-white h-9 w-28 text-center"
        >
          Contact Us
        </Link>
        <Link
          to="/Cart"
          className="cursor-pointer hidden lg:block xl:block mt-0 text-end h-9 md:ml-[200px] lg:ml-[100px] xl:ml-[500px] w-52"
        >
          <div className="flex  mt-2">
            <Badge badgeContent={itemNumbers}
             color="error">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </Link>
      </div>
    </div>
  );
}
