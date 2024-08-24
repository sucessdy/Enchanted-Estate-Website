import React from "react";
import ItemTitle from "../components/ItemTitle";
import works from "../data/works";
import WorkHouse from "../components/WorkHouse"
import sectionWrapper from "../hoc/sectionWrapper";
import {motion }  from "framer-motion"
import { staggerContainer } from "../utils/motion";
const itemVariants = {
  hidden: { opacity: 0, y: 20 }, 
  show: { opacity: 1, y: 0 }, 
};
 function Product() {
  return (
    <motion.div 

    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }} id='product' className=" product w-full  ">
      <ItemTitle className="text-white "> Go Big and Go home </ItemTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  p-5 ">
        
       {works.map((work, index) =>  (
         <motion.div key={index} variants={itemVariants}> 
          <WorkHouse
            key={index}
            img={work.img}
            title={work.title}
            icons={work.icons}
            iconItem={work.iconItem}
            icon1={work.icon1}
            name1={work.name1}
            icon2={work.icon2}
            name2={work.name2}
            icon3={work.icon3}
            name3={work.name3}
            button={work.button}
            amount={work.amount}
          >
            {" "}
          </WorkHouse> 
        </motion.div>
        ))}
      </div>
    </motion.div>
  );
}


export default sectionWrapper(Product, "")