import React from "react";

import SlideShow from "./SlideShow";
import Footer from "./Footer";
import Home from "./Home";

function All() {
  return (

    < > 
    <Home/>
  
    <div id="about-us"  className="about-us grid md:grid-cols-2 overflow-hidden  bg-white mb-0  p-3 ">
      { /* div 1 */}
      <div className=" bg-gray-50 md:p-12 ">
        <p className="text-black  my-2 font-manrope text-md"> o/1 </p>
        <h1 className="text-3xl p-3 font-cinzel text-amber-80  uppercase   ">
          {" "}
         About OUr Modern architect{" "}
        </h1>

        <h4 className="font-raleway my-3 p-1  ">
        Welcome to Enchanted, where innovation meets aesthetics, and every structure tells a unique story. We are not just architects; we are storytellers, weaving dreams into the very fabric of our designs.
        <br/>

{" "}
        </h4>

<p className="font-raleway my-3 p-1"> 
At Enchanted, we stand at the forefront of modern architecture, pushing boundaries to redefine what's possible. Our team is a collective of visionaries, passionate about transforming spaces into living, breathing works of art. 
</p>
        <a href="./contact" className=" mx-5  font-cinzel first-letter:font-bold text-amber-900 first-letter:text-orange-800  font-semibold ">
          Discover More+{" "}
        </a>
      </div>


      {/* di v  2 */}
      <div className="  transition-opacity ease-in duration-300 w-full ml-auto mx-auto  h-96  object-cover    flex">
        <SlideShow />
      </div>
    </div>

    <Footer/>
    </>

  );
}
export default All;
