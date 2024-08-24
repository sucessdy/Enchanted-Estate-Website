import { motion, useViewportScroll, useTransform } from "framer-motion";

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
export const Scroll = () => {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 24]);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className="absolute xs:bottom-10 bottom-10 p-5 w-full flex justify-end items-end z-99 mb-3"
    >
      <a href="#items">
        <div className="w-[2rem] h-[3rem] p-1 rounded-3xl border-4 border-secondary flex justify-center items-start sm:p-2 sm:w-[2.5rem] sm:h-[4rem]">
          <motion.div
            style={{ y }}
           animate= {{ y: [0, 24, 0] }}
            transition={{

              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-stone-500 mb-1"
          />
        </div>
      </a>
    </motion.div>
  );
};
