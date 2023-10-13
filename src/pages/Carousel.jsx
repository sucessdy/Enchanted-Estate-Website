import React from "react";
import image from "../image";
import {useRef, useEffect, useState} from "react"
import { motion } from "framer-motion";

export default function Carousel() {

  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(()=> {

; 
setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  } , [])
  
  return (
    <div className="box">
<motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div drag="x"  dragConstraints={{right: 0, left : -width }}className="inner-carousel">
          {image.map((images, index) => {
            return (
              <motion.div className="item">
                {" "}
                <img src={images} alt="images"  key={index}/>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
