import React from "react";
import { motion } from "framer-motion";

function HorizontalTitle({ title, button, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}  
      animate={{ opacity: 1, y: 0 }}  
      transition={{ delay: 0.176 }} 
      className=" w-[210px] inline-block p-4 hover:scale-105 ease-in-out transition-500  "
    > 
      <img
        className=" flex h-60 w-100 max-sm:w-[350px] max-sm:justify-center  object-cover" 
        src={image}
        alt="aimg" 
      />
      <div className="text-xl font-raleway uppercase mx-auto my-4 text-gray-100 "> 
        {" "}
        {title} 
      </div> 
      <a id="text" className="text-sm text-gray-300  first-letter:capitalize "> 
        {button}  
      </a>  
      .
    </motion.div>  
  );
}

export default HorizontalTitle;
