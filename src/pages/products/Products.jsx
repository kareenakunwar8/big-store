import React, {  useState, useEffect } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ViewHeadlineOutlinedIcon from "@mui/icons-material/ViewHeadlineOutlined";
import ProductText from "../../components/cards/ProductText";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  
  const getData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => setProducts(result.products));
  };

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div>
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" href="/" color="inherit">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/Products">
            Products
          </Link>
        </Breadcrumbs>
      </div>
      <div className="rounded-md mt-10  w-full bg-white p-5">
        <div className="flex items-center gap-2">
          <GridViewOutlinedIcon
            sx={{ fontSize: 27 }}
            className="text-[#dc2e3a] "
          />
          <ViewHeadlineOutlinedIcon sx={{ fontSize: 28 }} />
          <div className="text-[13px] tracking-wide">There are 7 products.</div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4  gap-x-3 mt-10 rounded-md gap-y-8">
          {products.map((item, index) => {
            const des =
              item?.description?.length > 40
                ? `${item?.description?.slice(0, 22)}...`
                : item?.description;
                
            const name =
              item?.title?.length > 10
                ? `${item?.title?.slice(0, 15)}`
                : item?.title;

            const hoverImg =
              item.images.length < 2 ? item.images[0] : item.images[1];
            return (
              <div key={index} className="rounded-md group relative">
                <div className="absolute hidden group-hover:block">
                  <ProductText
                    desCount={item.discountPercentage}
                    hoverImg={hoverImg}
                    product={item}
                  />
                </div>
                <img
                  src={item.images}
                  className="lg:h-52 xl:h-52 md:h-44 sm:w-48 rounded-md bg-[#f2f3f8] md:w-40 lg:w-48 xl:w-48"
                  alt="img"
                />
                <div className="text-[12px] mt-2 hover:text-[#dc2e3a] tracking-wider text-gray-500">
                  {name}
                </div>
                <Link
                to={`/productDetails/${item.id}`}
                  className="text-[14px] cursor-pointer tracking-wide hover:text-[#dc2e3a] mt-2"
                >
                  {des}
                </Link>
                <div className="flex gap-1">
                  <div className="xl:text-[16x]  text-[13px] md:text-[15px] lg:text-[16x] flex mt-1 line-through text-gray-500">
                    <EuroSymbolIcon sx={{ fontSize: 16, mt: 1 }} />
                    <div className="lg:mt-1 xl:mt-1 mt-[6px]">{item.price}</div>
                  </div>
                  <div className="xl:text-[16x]  text-[14px] md:text-[15px] lg:text-[16x]  flex mt-1 text-[#dc2e3a]">
                    <EuroSymbolIcon sx={{ fontSize: 14, mt: 1 }} />
                    <div className="mt-1">{item.price}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
