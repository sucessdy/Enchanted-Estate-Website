import React from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import ItemCard from "./ItemCard";
import Items from "./Items";
import Work from "./Work";
import Product from "./pages/Product";
import All from "./All";
import Email from "./pages/Email";
import Footer from "./Footer";

import Horizontal from "./Horizontal";
import Header from "./Header";
import DiscoverMore from "./components/DiscoverMore";
import ProductPage from "./ProductPage";
import Testimonial from "./pages/Testimonial";
// import { BentoDemo } from "./components/ui/BentoGrid";
function App() {
  return (
    <>
      <Routes>
      
       <Route path="/about-us" element={<All />} />
        <Route path="/contact" element={<Email />} />

        <Route path="/discover" element={<DiscoverMore />} />
        <Route path="/service" element={<ProductPage />} />

        <Route path="/item" element={<Horizontal />} />
        <Route path="/testimonial" element={<Testimonial />} /> 
 
        <Route
          path="/*"
          element={
            <>
         
<Header />
              <Items />
              <ItemCard />
              <Work />
              <Horizontal />
              <Product />
              {/* <BentoDemo/> */}
              
          
            </>
          }
        />
      </Routes>
    </>
  );
}
export default App;
