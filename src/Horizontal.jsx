import React from "react";
import scroll from "./data/scroll";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import HorizontalTitle from "./pages/HorizontalTitle";
import { staggerContainer } from "./utils/motion";

import { motion } from "framer-motion";
import HorizontalHeading from "./components/HorizontalHeading";
const SlideLeft = () => {
  var slider = document.getElementById("slider");
  slider.scrollLeft -= 500;
};

const SlideRight = () => {
  var slider = document.getElementById("slider");
  slider.scrollLeft += 500;
};
export default function Horizontal() {
  return (
    <>
      <HorizontalHeading />

      <motion.div  variants={staggerContainer()}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}  className="relative  mb-4 items-center flex w-full mt-5 ">
        <MdKeyboardArrowLeft
          className="text-white cursor-pointer"
          size={40}
          onClick={SlideLeft}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide  my-5"
        >
          {scroll.map((scroll) => (
            <HorizontalTitle
              key={scroll.title}
              title={scroll.title}
              button={scroll.button}
              image={scroll.image}
            ></HorizontalTitle>
          ))}
        </div>

        <MdKeyboardArrowRight
          className="text-white cursor-pointer "
          size={40}
          onClick={SlideRight}
        />
      </motion.div>
    </>
  );
}
