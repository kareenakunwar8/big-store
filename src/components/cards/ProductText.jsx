import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

function ProductText({ product, desCount, hoverImg }) {

  const Items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  console.log(Items)

  const ProductInCart = Items.filter((item) => item.id === product.id).length > 0;

  const handleAddToCart = () => {
    if (!ProductInCart) {
      dispatch(addToCart(product));
    }
  };  
  return (
    <div>
      <div className=" absolute w-48 p-2">
        <div className="flex justify-between ">
          <div>
            <div className="bg-white p-1 w-7 cursor-pointer hover:text-white  hover:bg-[#dc2e3a] rounded-sm">
              <VisibilityIcon sx={{ fontSize: 17 }} />
            </div>      
            <div
              onClick={handleAddToCart}
              className="bg-white mt-1 w-7 cursor-pointer hover:text-white  hover:bg-[#dc2e3a] rounded-sm p-1"
            >
              <ShoppingCartIcon sx={{ fontSize: 17 }}
           />
            </div>
          </div>
          <div className="text-[11px] w-9 text-center h-6 py-1 rounded-md bg-[#f83642] text-white">
            -{desCount}
          </div>
        </div>
        <Rating
          name="size-medium"
          className="mt-24"
          sx={{ fontSize: 20 }}
          defaultValue={2}
        />
      </div>
      <img src={hoverImg} className="w-48 h-52 bg-[#f2f3f8]" alt="img " />
    </div>
  );
}

export default ProductText;










