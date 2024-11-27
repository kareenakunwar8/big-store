import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, updateCart } from "../../redux/CartSlice";

function Cart() {
  const cart = useSelector((state) => state?.cart.items);
  
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(deleteItem(id));
  };

  const handleIncrement = (id) => {
   const updatedCart = cart.map((item )=>{
    if(item.id === id){
      return {...item ,stock :item.stock + 1 , name: "abc" };
    }
    return item;
   });  

   console.log(updatedCart)
    dispatch(updateCart(updatedCart));
  };

  const handleDecrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.stock > 1) {
      return { ...item, stock: item.stock - 1 };
      }
      return item;
    });
    dispatch(updateCart(updatedCart));
  };

  return (
    <div>
      <div className="lg:flex gap-7">
        <div className=" h-full">
          <div className=" bg-white rounded-md lg:w-[700px] ">
            <div className="text-[15px] p-3 font-medium">Shopping Cart</div>
            <hr/>
            <div className="px-8 ">
              {cart.map((item, index) => {
                const totalProductPrice = (
                  item.price ? item.stock * item.price : 0
                ).toFixed(2);
                const name =item?.title?.length >5 ? `${item?.title.slice(0,7)}`:item?. title;
                  return (
                  <div key={index}>
                    <div className="lg:flex md:flex md:gap-5 lg:gap-24">
                      <div className="flex  lg:gap-1 md:gap-x-10 mt-5">
                        <img
                          src={item.images}
                          className="w-[80px] h-[100px] rounded-md bg-[#f2f3f8] "
                        />

                        <div className=" leading-6 ml-5">
                          <div className="text-[13px]   font-medium cursor-pointer hover:text-[#dc2e3a]">
                            {name}
                          </div>
                          <div className="text-[15px] flex gap-4 mt-1 text-gray-400">
                            <div className="line-through">
                              {item.price + item.discountPercentage}
                            </div>
                            <div className="text-orange-600">
                              {item.discountPercentage}
                            </div>
                          </div>
                          <div className="text-[16px] text-red-600">
                            {item.price}
                          </div>

                          <div className="text-[13px] flex gap-2 mt-1">
                            <div className="font-medium">Size:</div>{" "}
                            <div className=" text-gray-400"> S</div>
                          </div>

                          <div className="text-[13px] flex gap-2 ">
                            <div className="font-medium">Color: </div>
                            <div className=" text-gray-400">Red</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex lg:gap-x-20 gap-14 md:gap-x-10 mt-5">
                        <div className="flex ml-3  ">
                          <div
                            onClick={() => handleDecrement(item.id)}
                            className="border text-[20px] w-7 h-7 text-center cursor-pointer "
                          >
                            -
                          </div>
                          <div className="border text-[15px] w-7 h-7 text-center py-1  ">
                            {item.stock}
                          </div>
                          <div
                            onClick={() => handleIncrement(item.id)}
                            className="border text-[20px] w-7 h-7 text-center cursor-pointer"
                          >
                            +
                          </div>
                        </div>

                        <div className="text-[18px] font-semibold">
                          {totalProductPrice}
                        </div>
                        <div className="cursor-pointer">
                          <DeleteIcon onClick={() => handleRemove(item.id)} />
                        </div>
                      </div>
                    </div>
                    <hr className="mt-5" />
                  </div>
                );
              })}
            </div>
          </div>
          <a href="/">
            <div className="text-[11px]  w-40 cursor-pointer font-medium  p-2 py-2 tracking-wide hover:text-red-600">
              <ArrowBackIosIcon sx={{ fontSize: 13 }} />
              Continue shopping
            </div>
          </a>
        </div>
        <div>
          <div className="  bg-white rounded-md w-[400px] p-4">
            <div>
              <div className="flex justify-between text-[14px] tracking-wide font-medium leading-8">
                <div>
                  {cart.reduce(
                    (items, currentItem) => items + currentItem.stock,
                    0
                  )}
                  :items
                </div>
                <div>
                  {cart
                    .reduce(
                      (items, currentItem) =>
                        items + currentItem.stock * currentItem.price,
                      0
                    )
                    .toFixed(2)}
                </div>
              </div>
              <div className="flex justify-between text-[14px] tracking-wide font-medium leading-8">
                <div>Shipping</div>
                <div>€7.00</div>
              </div>
              <hr className="mt-3" />
              <div className="flex mt-3 justify-between text-[14px] tracking-wide font-medium leading-8">
                <div>Total (tax excl.)</div>
                <div> €399.84</div>
              </div>
              <div className="flex justify-between text-[14px] tracking-wide font-medium leading-8">
                <div>Total (tax incl.)</div>
                <div>€399.84</div>
              </div>
              <div className=" text-[#dc2e3a] text-[14px] mt-3 underline cursor-pointer">
                Have a promo code?
              </div>
              <div className="flex justify-center md:w-[150px]  lg:ml-20 lg:w-[220px]">
                <div className="text-white bg-[#dc2e3a] text-[14px ] p-3 cursor-pointer rounded-md w-[250px] text-center mt-6 ">
                  Process To Checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
