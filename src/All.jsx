import React from "react";

import SlideShow from "./SlideShow";

import {motion } from "framer-motion"

function All() {
  return (

    < > 
  
  
    <div id="about-us"  className="about-us grid md:grid-cols-2 overflow-hidden   bg-gray-50 mb-0  p-5 px-2 my-6  ">
      { /* div 1 */}
      <div className=" bg-gray-50 md:p-12  ">
        <p className="text-black  my-2 para text-md"> o/1 </p>
        <h1 className="text-3xl p-3 font-cinzel text-amber-80  uppercase   ">
          {" "}
         About OUr Modern architect{" "}
        </h1>

        <p className="para my-3 p-1 ">
        Welcome to Enchanted, where innovation meets aesthetics, and every structure tells a unique story. We are not just architects; we are storytellers, weaving dreams into the very fabric of our designs.
        

{" "}
        
</p>
<p className="para my-3 p-1 ">

At Enchanted, we stand at the forefront of modern architecture, pushing boundaries to redefine what's possible. Our team is a collective of visionaries, passionate about transforming spaces into living, breathing works of art. 
</p>
 

 <span  className=" mb-10 mt-4 text-2xl leading-[1.5] sm:text-4xl para" > 
 Our Vision

 </span>
 <p className="para my-3 p-1">We envision a world where every structure is more than just a building; it’s a testament to innovation and craftsmanship. Our commitment is to provide exceptional service, guided by integrity and a deep understanding of the market. We are here to turn your real estate dreams into reality, offering personalized solutions tailored to your unique needs.</p>
        <a href="contact" className="  para first-letter:font-bold border-black text-amber-900 first-letter:text-orange-800  font-semibold ">
        <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "tween", duration: 0.3 }} className=" text-center text-white hover:text-black text-xs border bg-[#1d1d1c] hover:bg-[#ffffff] p-4  h-12 w-2/2  uppercase font-semibold mt-4">
          Discover More+{" "}
          </motion.button>
        </a>
      </div>


      {/* di v  2 */}
      <div className="  transition-opacity ease-in duration-300 w-full ml-auto mx-auto  h-96  object-cover mt-6   flex mb-40">
        <SlideShow />
      </div>
    </div>
</>

  );
}
export default All;
