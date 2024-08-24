import { useState} from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { TbMenu } from "react-icons/tb";
import Button from "./components/ui/Button";
const Links = [
  { name: "Home", link: "./home" },
  { name: "About Us", link: "./about-us" },

  { name: "Service", link: "./service" },
  { name: "Testimonial", link: "./testimonial" },
];

const Home = () => {
  const [open, setOpen] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="home" id={`home`}>
      <div className=" relative items-center w-full h-full bg-transparent text-white  mt-5  mb-5">
        <nav className="flex justify-between items-center py-2 mx-4  ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {" "}
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start items-center gap-4 p-3  font-medium  font-manrope"
            >
              {" "}
              Enchanted
            </motion.h1>
          </motion.div>

          <div className="md:block hidden md:items-centerlist-none overflow-hidden z-40  gap-3">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 0.25,
                stiffness: 130,
                damping: 9,
                duration: 0.3,
              }}
              className="ml-10 flex items-center space-x-4 font-manrope "
            >
              {Links.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  onClick={() => {
                    setOpen(link.name);
                    setToggle(false);
                    window.scrollTo(0, 0);
                  }}
                  className={`${
                    open === link.name
                      ? "text-gray-300 "
                      : "hover:text-white"
                  } text-[16px] cursor-pointer  text-sm space-x-3 font-medium  `}
                >
                  {" "}
                  {link.name}
                </Link>
              ))}
            </motion.div>
          </div>

          {/* mobile  */}
          <div
            className="sm:hidden flex flex-1 justify-end items-center pl-12 text-xl
          "
          >
            <motion.button
              type="button"
              // id="menu-btn"
              onClick={handleToggle}
              className="  cursor-pointer h-6 "
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {toggle ? <RxCross1 className="font-[4rem]"  /> : <TbMenu  />}
            </motion.button>
            <div
              className={`${
                !toggle ? "hidden" : ""
              } p-6 bg-gradient-to-l from-stone-800 to-stone-400 bg-opacity-30 backdrop-blur-lg border border-gray-300 border-opacity-30 shadow-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl  `}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-8">
                {Links.map((link) => (
                  <li
                    key={link.link}
                    className="flex justify-end items-center gap-12 flex-col font-semibold text-black"
                  >
                    <Link
                      to={link.link}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(link.name);
                        window.scrollTo(0, 0);
                      }}
                      className={`${
                        open === link.name
                          ? "text-gray-500"
                          : "hover:text-slate-200"
                      } text-[1rem] cursor-pointer para `}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          

          <a href="./contact"  className="hidden lg:inline-block">
         <Button> Contact Us{" "} </Button>
            
      
        </a>

        </nav>
      </div>
    </div>
  );
};

export default Home;
