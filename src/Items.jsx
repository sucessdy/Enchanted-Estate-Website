import React from "react";

import contacts from "./data/contacts";
import ItemsInfo from "./components/ItemsInfo";
import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "./utils/motion";
const variants = {
  initial: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "spring",
      duration: 0.75,
    },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.75,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 }, 
  show: { opacity: 1, y: 0 }, 
};


function Items({ index }) { 
  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        id="items"
        className=" items animate-fade pt-0 "
      >
        <div
       
          className=" bg-white w-full h-full top-0 bottom-0 right-0 left-0 "
        >
          <h1
            className=" text-3xl font-BodoniModa text-[#1d1d1c] m-5 uppercase mx-auto py-4 p-7  items-center flex justify-center leading-7 space-x-3 mt-4 pt-9 tracking-wide font-medium
       "
          >
            Service
          </h1>
          <p className="text-gray-500 flex  justify-center items-center flex-1 text-sm sm:text-lg  para flex-wrap p-2">
            {" "}
            Embrace the Pinnacle of Luxury: Exquisite Services for Discerning
            Tastes
          </p>
          {/* <div >  */}
          <motion.div


variants={staggerContainer()}
initial="hidden"
whileInView="show"
viewport={{ once: true, amount: 0.25 }} 

            className=" mx-auto relative z-0  grid sm:grid-cols-2 md:grid-cols-3 gap-4  bottom-3  max-sm:justify-center sm:items-center sm:text-center md:flex-row md:flex sm:flex   md:justify-center space-x-4 font-manrope"
          >
            {contacts.map((contact, index) => (
            
            <motion.div key={index} variants={itemVariants}>
                  <ItemsInfo 
                    key={index}
                    title={contact.title}
                    description={contact.description}
                    image={contact.image}
                    className="w-[70%] h-[70%] shadow-xl rounded-md"
                  /> 
               
               </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}


export default Items; 

