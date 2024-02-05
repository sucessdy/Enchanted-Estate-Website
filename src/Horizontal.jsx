import React from "react";
import scroll from "./data/scroll";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import HorizontalTitle from "./pages/HorizontalTitle";

import HorizontalHeading from "./components/HorizontalHeading";
import Home from "./Home";
const SlideLeft = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft -= 500; 
}

const  SlideRight = () => {
  var slider = document.getElementById('slider')
  slider.scrollLeft += 500; 
}
export default function Horizontal() {
  return ( <> 
  <Home /> 
  <HorizontalHeading />
    
    <div className="relative  mb-4 items-center flex w-full mt-5 ">
     
      <MdKeyboardArrowLeft className="text-white cursor-pointer" size={40} onClick={SlideLeft}/>
      <div 
        id="slider"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide  my-5"
      >
       {scroll.map((scroll ) => (
        <HorizontalTitle key={scroll.title}
        title={scroll.title} 
        button={scroll.button} 
        image={scroll.image}
        > </HorizontalTitle>
       ))}
 {/* w-[210px] inline-block p-4 hover:scale-105 ease-in-out transition-500 */}
 
      </div>

      <MdKeyboardArrowRight className="text-white cursor-pointer " size={40} onClick={SlideRight}/>
    </div>
    </>
  );
}
