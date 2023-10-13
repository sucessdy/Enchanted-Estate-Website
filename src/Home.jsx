import { useState, useEffect } from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { AiOutlineMenu, AiOutlineCloseCircle } ~from "react-icons/ai";
import { FaTimesCircle } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
const Links = [
  { name: "Home", link: "#home" },
  { name: "Contact", link: "./contact" },

  { name: "Style", link: "./style" },
  { name: "Service", link: "./work" },
]

const Home = () => {
  const [open, setOpen] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="home" id={`home`}>
      <div className=" relative items-center w-full h-full bg-transparent text-white  ">
        <nav className="flex justify-between items-center py-2 mx-4 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {" "}
            <h2 className="flex justify-start items-center gap-4 p-3 font-Outfit font-semibold ">
              {" "}
              Enchanted
            </h2>
          </motion.div>

          <div className="md:block hidden md:items-center list-none overflow-hidden z-40  gap-3">
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
              className="ml-10 flex items-center space-x-4 "
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
                    open === link.name ? "text-white" : "hover:text-stone-400"
                  } text-[16px] cursor-pointer font-Raleway text-sm space-x-3 font-medium  `}
                  
                >
                  {" "}
                  {link.name}
                </Link>
              ))}
              ;
            </motion.div>
          </div>

          {/* mobile  */}
          <div
            className="sm:hidden flex flex-1 justify-end items-center pl-12 
          "
          >
            <button
              type="button"
              // id="menu-btn"
              onClick={handleToggle}
              className=" h-7 cursor-pointer"
            >
              {toggle ? <FaTimesCircle /> : <FaHamburger />}
            </button>
            <div
              className={`${
                !toggle ? "hidden" : ""
              } p-6 bg-gradient-to-l from-stone-800 to-stone-400 opacity-80 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-12">
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
                          ? "text-white"
                          : "hover:text-slate-200"
                      } text-[16px] cursor-pointer font-manrope `}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <a href="./all">
            <button className="flex justify-end items-end px-4 py-2 bg-black text-white hover:text-black rounded-md hover:bg-white max-md:invisible">
              {" "}
              Exlpore
            </button>
          </a>
        </nav>

        <Header />
      </div>
    </div>
  );
};

export default Home;
