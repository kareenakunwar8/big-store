import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Rating from "@mui/material/Rating";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Slider from "react-slick";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Img1 from "../../assets/images/Img1.png";
import Img2 from "../../assets/images/Img2.png";
import ProductPhoto from "../../assets/images/ProductPhoto.png";
import Shopping_products from "../../data/Shopping_products";
import {  useDispatch} from "react-redux";
import {addToCart} from '../../redux/CartSlice'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ProductDetails() {
 const dispatch = useDispatch();
 const handleAddToCart = () =>{
  dispatch(addToCart(product))
}
  const { Id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [value, setValue] = useState(0);
  const [color, setColor] = useState("Red");
  const [sizes ,setSize] = useState("M")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getData = () => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${Id}`)
      .then((res) => res.json())
      .then((result) => setProduct(result))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <div>Loading...</div>;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const handleClickImage = (item) => {
    setProduct(item);
  };
  const handleColor = (color) => {
    setColor(color);
  };

  const handleSize =(size) =>{
    setSize(size);
  }
  return (
    <div>
      <Breadcrumbs >
        <Link underline="hover" href="/" color="inherit" sx={{fontSize:13}} >
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/Products" sx={{fontSize:13}}>
          Products
        </Link>
        
      </Breadcrumbs>
      <div className="lg:text-[21px] text-[19] py-4 ">{product.title}</div>
      <div className="lg:flex md:flex">
        <div>
          <div className="border-2 border-white md:w-[250px] md:h-[330px] h-[280px] w-[330px] lg:w-[350px] lg:h-[430px] ">
            <img
              src={product.images}
              alt="img"
              className="w-full cursor-crosshair h-full object-cover"
            />
          </div>
          <div className=" mt-5 ml-2 md:w-[250px] h-[100px] w-[220px] lg:w-[320px] ">
            <Slider {...settings}>
              {Shopping_products.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      src={item.images}
                      className=" border w-[100px] h-[110px] rounded-md border-white "
                      alt={item.name}
                      onClick={() => handleClickImage(item)}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="lg:w-[560px] md:w-[500px] w-[360px]  leading-7 px-5 lg:px-9">
          <div className="flex gap-3">
            <Rating
              name="size-medium"
              sx={{ fontSize: 15 }}
              defaultValue={5}
              className="py-1"
            />
            <div className="text-[14px] text-[#848684]"> 1 Review(s) </div>
          </div>

          <div className="lg:text-[13px] text-[12px] tracking-wide text-justify text-[#848684]">
            {product.description}
          </div>
          <div className="bg-white mt-2 p-4 px-6">
            <div className="flex ">
              <div className="leading-7">
                <div className="flex gap-1 text-[13px]">
                  <span className="font-medium">Brand: </span>
                  <p className="text-[#848684]">{product.brand}</p>
                </div>
                <div className="flex gap-1 text-[13px]">
                  <span className="font-medium">Category:</span>{" "}
                  <p className="text-[#848684]">{product.category}</p>{" "}
                </div>
                <div className="flex gap-1 text-[13px]">
                  <span className="font-medium">Reference:</span>
                  <p className="text-[#848684]">product1</p>{" "}
                </div>
                <div className="flex gap-1 text-[13px]">
                  <span className="font-medium">Available In Stock:</span>
                  <p className="text-green-600 font-medium">
                    {product.availabilityStatus}
                  </p>
                </div>
              </div>
              <div>
                <img src={ProductPhoto} alt="img" className="border md:ml-1 lg:ml-28 h-[80px] w-[130px] " />
              </div>
            </div>

            <div className="text-[14px]"><span className="font-medium">Size:</span> {sizes} </div>
            <div className="flex gap-3 mt-1">
              <div
                onClick={() => handleSize("S")}
                className="bg-slate-100 cursor-pointer text-sm text-center p-1 w-7 font-medium"
              >
                S
              </div>
              <div
                onClick={() => handleSize("M")}
                className="bg-slate-100 cursor-pointer  text-sm text-center p-1 w-7 font-medium"
              >
                M
              </div>
              <div
                onClick={() => handleSize("L")}
                className="bg-slate-100 cursor-pointer text-sm text-center p-1 w-7 font-medium"
              >
                L
              </div>
            </div>

            <div className="mt-2 text-[14px]"><span className="font-medium">Color:</span> {color}</div>
            <div className="flex gap-3 mt-1">
              <div
                onClick={() => handleColor("Red")}
                className="w-7 h-7 cursor-pointer  rounded-full bg-red-600"
              ></div>
              <div
                onClick={() => handleColor("Blue")}
                className="w-7 h-7 cursor-pointer rounded-full bg-blue-600"
              ></div>
              <div
                onClick={() => handleColor("green")}
                className="w-7 h-7 cursor-pointer rounded-full bg-green-600"
              ></div>
            </div>
            <div className="flex gap-2 mt-4">
              <div className="xl:text-[16x]  md:text-[15px] lg:text-[16x] flex line-through text-gray-300">
                <EuroSymbolIcon sx={{ fontSize: 21, mt: 1 }} />
                <div className=" mt-1 md:text-[18] text-[16] lg:text-[20px] ">
                {product.price + product.discountPercentage}
                </div>
              </div>
              <div className="xl:text-[16x] md:text-[15px] lg:text-[16x]  flex  text-[#dc2e3a]">
                <EuroSymbolIcon sx={{ fontSize: 21, mt: 1 }} />
                <div className=" mt-1 font-semibold md:text-[18] text-[16] lg:text-[20px]">
                  {product.price}
                </div>
              </div>
              <div className=" text-orange-400 font-medium text-[15px]  mt-1">
                - {product.discountPercentage}
              </div>
            </div>
            <div className="flex gap-6 mt-4">
           
             
              <button 
              onClick={handleAddToCart}
              className=" bg-[#dc2e3a] cursor-pointer lg:p-2 p-1 rounded-md  w-24 lg:w-44 lg:text-[15px] text-[13px] text-white hover:bg-black">
                Add To Cart
              </button>
            </div>
            <div className="lg:flex md:flex cursor-pointer gap-5 mt-5">
              <div className=" text-sm cursor-pointer text-[#6b6868] hover:text-[#dc2e3a]">
                <FavoriteBorderIcon sx={{ fontSize: 19 }} />
                Add To Wishlist
              </div>
              <div className=" text-sm text-[#6e6a6a] lg:mt-0 md:mt-0 mt-2 hover:text-[#dc2e3a]">
                <ContentCopyIcon sx={{ fontSize: 19 }} /> Add To Compare
              </div>
            </div>
            <div className=" border mt-4 border-green-600 bg-green-100 text-green-600 text-[13px] w-20 h-7 text-center p">
              Stock : {product.stock}
            </div>
          </div>
        </div>
        <div className=" xl:block  hidden">
          <img src={Img1} alt="img1" className="mt-5" />
          <img src={Img2} alt="img2" className="mt-5" />
        </div>
      </div>
      <div className="border bg-white rounded-md mt-20">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Product Details" {...a11yProps(1)} />
            <Tab label="Attachments" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="text-sm text-[#848684] leading-8">
            {" "}
            Symbol of lightness and delicacy, the hummingbird evokes curiosity
            and joy. Studio Design' PolyFaune collection features classic
            products with colorful patterns, inspired by the traditional
            japanese origamis. To wear with a chino or jeans. The sublimation
            textile printing process provides an exceptional color rendering and
            a color, guaranteed overtime. Fashion has been creating
            well-designed collections since 2010. The brand offers feminine
            designs delivering stylish separates and statement dresses which has
            since evolved into a full ready-to-wear collection in which every
            item is a vital part of a woman's wardrobe. The result? Cool, easy,
            chic looks with youthful elegance. Contrary to popular belief, Lorem
            Ipsum is not simply random text. Many desktop publishing packages
            and web page editors now use Lorem Ipsum as their default model
            text, and a search for 'lorem ipsum' will uncover many web sites
            still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <img src={ProductPhoto} alt="img" className="border  h-[80px] w-[130px] " />
        <div className="mt-5"> 
          <div className="flex gap-3 text-[15px]">Reference : <div className="text-[#848684]">Product1</div> </div>
          <div className="flex gap-3 text-[15px]">Category :<div className="text-[#848684]">{product.category}</div></div>
          <div className="flex gap-3 text-[15px]">Available In Stock :<div className="text-[#36e136]"> {product.availabilityStatus}
        </div></div>
        </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </div>
    </div>
  );
}

export default ProductDetails;
