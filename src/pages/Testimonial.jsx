import React from "react";
import { motion } from "framer-motion";
import sectionWrapper from "../hoc/sectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import testimonials from "../data/testimonials";


const FeedbackCard = ({
  index,
  testimonial,
  name,
  company,
  image,
  designation,
}) => (
<motion.div
  variants={fadeIn("", "spring", index * 0.5, 0.75)}
  className="bg-[#2d2d2c] p-10 rounded-3xl xs:w-[320px] w-full"
>
    <h3 className="text-white font-black text-[40px]">"</h3>
    <div className="mt-1">
      {" "}
      <p className="text-white font-Raleway -tracking-wider text-[18px] ">
        {testimonial}
      </p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-white font-medium ">
            {" "}
            <span className="blue-text-gradient"> @</span> {name}
          </p>

          <p className="mt-1 text-white text-[12px]  ">
            {designation} of {company}
          </p>

        </div>
        <img src={image} alt={`feedback-by ${name}`}  className="w-10 h-10 rounded-full object-cover"/>
      </div>
    </div>
  </motion.div>
);

const Testimonial = () => {
  return (
    <div className="testimonial bg-black-100 rounded-[20px] mt-4">
      <div className="bg-tertiary rounded-2xl min-h-[300px] p-20">
        <motion.div variants={textVariant()}>
          <p className="text-sm font-lora uppercase text-[#dbdbd9] ">what others say</p>
          <h2 className="text-[28px] capitalize font-extrabold sm:text-[40px] mt-1 text-gray-200 font-Manrope leading-13">
            testimonials
          </h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-12 flex flex-wrap lg:flex-nowrap gap-7`}>
      {testimonials.map((testimonial, index) => (
  <FeedbackCard key={index} {...testimonial} />
))}
      </div>
    </div>
  );
};

export default sectionWrapper(Testimonial, "");
