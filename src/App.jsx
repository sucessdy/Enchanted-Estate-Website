import React from "react";
import { Routes, Route } from "react-router-dom";
// import NewLetter from "./pages/NewLetter";
import "./index.css";
import Home from "./Home";
import ItemCard from "./ItemCard";
import Items from "./Items";
import Work from "./Work";
import Product from "./pages/Product";
import All from "./All";
import Email from "./pages/Email";
import Footer from "./Footer";

import Horizontal from "./Horizontal";

import DiscoverMore from "./components/DiscoverMore";
import ProductPage from "./ProductPage";
import Testimonial from "./pages/testimonial";
function App() {
  return (
    <>
      <Routes>
        
        <Route path="/about-us" element={<All />} />
        <Route path="/contact" element={<Email />} />

        <Route path="/discover" element={<DiscoverMore />} />
        <Route path="/style" element={<ProductPage />} />

        <Route path="/item" element={<Horizontal />} />
        <Route path="/testimonial" element={<Testimonial />} />
 
        <Route
          path="/*"
          element={
            <>
              <Home />

              <Items />
              <ItemCard />
              <Work />
              <Horizontal />
              <Product />
              
          
              <div className=" mb-3 ">
                <Footer />
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
}
export default App;
