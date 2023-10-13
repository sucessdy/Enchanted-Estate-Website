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
// import "./App.css"
import Horizontal from "./Horizontal";
// import ProductPage from "./ProductPage";
// import House from "./pages/House";
// import WorkItem from "./components/WorkItem";
// import WorkHouse from "./components/WorkHouse";
// import Quantity from "./mistake/Quantity";
import DiscoverMore from "./components/DiscoverMore";
import ProductPage from "./ProductPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/house" element={<House />} /> */}

        <Route path="/all" element={<All />} />
        <Route path="/contact" element={<Email />} />

        <Route path="/discover" element={<DiscoverMore />} />
        <Route path="/style"  element={<ProductPage /> } />

        {/* <Contact/> */}

        <Route path="/item" element={<Horizontal />} />
      </Routes>
      <Items />
      <ItemCard />
      <Work />
      <Horizontal />
     
      <Product />
      {/* <ProductPage />  */}

      {/* <NewLetter /> */}
      <div className=" mb-3 "> 
      <Footer />
       </div>
    </div>
  );
}
export default App;
