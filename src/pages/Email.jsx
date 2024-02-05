import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import emailjs from "@emailjs/browser";
import ItemTitle from "../components/ItemTitle";
import Home from "../Home";

const Email = () => {
  const formRef = useRef();

  const [form, setForm] = useState({ name: "", email: "", message: "" });


  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_2t1mb7n",
        "template_xs9r38j",
        {
          from_name: form.name,
          to_name: "Mukta Kumari",
          from_email: form.email,
          to_email: "@sucessdy.com",
          message: form.message,
        },
        "2zr1K1Co3AP1tvqcE"
      )
      .then(
        () => {
          setLoading(false);
          alert("thank you, i will get back to you  as soon as possible");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("something went wrong");
        }
      );
  };

  // API key bleTstMfJYecB3mVG

  // template id  template_xs9r38j

  // service id
  // service_4yxhksi
  return (
    <> 
    <Home />
    <div
      id="contact"
      className=" xl:mt-12 xl:flex-row lg:flex-row md:flex-row flex-col-reverse flex overflow-hidden p-10"
    >
      {/* <div className="bg-white dark:bg-[#1d1d1c] rounded-2xl min-h-[300px] p-20"> */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className=" flex-1 bg-white dark:bg-[#1d1d1c]  p-8  rounded-lg  relative lg:w-1/2  md:w-1/2 w-full"
      >
        <p className="text-[#1d1d1c] font-Raleway -tracking-wider text-[18px]  dark:text-white ">
          {" "}
          Get in Touch with us
        </p>
        {/* <h3 className="text-[28px] capitalize font-bold sm:text-[48px] mt-1 text-[#1d1d1c] dark:text-gray-200 font-manrope leading-13  ">Contact
            {" "}
          </h3> */}
        <ItemTitle> Contact</ItemTitle>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 "
        >
          <label className="flex flex-col">
            <span className="text-[#1d1d1c] dark:text-white font-medium mb-4 ">
              {" "}
              Your Name
            </span>
            <input
            type ="text"
              name="name"
              value={form.name}
              onChange={handleChange}
             
              placeholder="
          What's your name"
          className="p-2 bg-[#1d1d1c]  dark:bg-white  rounded-lg border-gray-300  placeholder:text-stone-300 dark:placeholder:text-stone-600"


            />
          </label>

          {/* email */}

          <label className="flex flex-col">
            <span className="text-[#1d1d1c] dark:text-white font-medium mb-4 ">
              {" "}
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="
          What's your email"
          className="p-2 bg-[#1d1d1c]  dark:bg-white  rounded-lg border-gray-300  placeholder:text-stone-300 dark:placeholder:text-stone-600"

            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#1d1d1c] dark:text-white font-medium mb-4 ">
              {" "}
             Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="
          Youe Message"
          className="p-2 bg-[#1d1d1c]  dark:bg-white  rounded-lg border-gray-300  placeholder:text-stone-300 dark:placeholder:text-stone-600"

            />
          </label>

          <button
            type="submit"
            className="p-2 bg-[#1d1d1c]  dark:bg-white  border-gary-300  placeholder:text-stone-300 dark:placeholder:text-stone-600 py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl text=[#1d1d1c] "
          >
            {loading ? "Sending..." : "send"}{" "}
          </button>
        </form>

      </motion.div>


      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex    w-full  lg:w-1/2"
      >
        <img 
          src="https://i.pinimg.com/564x/dc/c3/13/dcc31316237dba0053d99c3122f4a3bd.jpg"
          className=" w-[100%] h-[100%] object-cover"
          alt="imag1"
        /> 
      </motion.div>
    </div>
    </>
  );
};

export default Email;
