import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact"
import Products from "../pages/products/Products";
import ProductDetails from "../pages/products/ProductDetails";
import Cart from "../pages/cart/Cart"

export const routePath = {
  home: "/",
  about: "/about",
  contact :"/contact",
  products :"/products",
  productDetails :"/productDetails/:Id",
  cart : "/cart"
};


export const routes = [
  {
    path: routePath.home,
    component: <Home />,
  },
  {
    path: routePath.about,
    component: <About />,
  },
  {
path: routePath.contact,
component: <Contact />,

  },
  {
    path: routePath.products,
    component: <Products />,
    
      },
      {
        path: routePath.productDetails,
        component: <ProductDetails />,
       },
       {
        path: routePath.cart,
        component: <Cart />,
       },
   
];
