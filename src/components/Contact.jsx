import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { slideIn } from "../utils/motion";
import { staggerContainer } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // dw2sWw3cbuqRb9-ir
    // template_uzxqgrc
    // service_8hq9uxr
    emailjs
      .send(
        "service_8hq9uxr",
        "template_uzxqgrc",
        {
          from_name: form.name,
          to_name: "Houstin",
          from_email: form.email,
          to_email: "houstin0000@gmail.com",
          message: form.message,
        },
        "dw2sWw3cbuqRb9-ir"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-8 px-3  max-w-7xl mx-auto relative z-0"
    >
      <span className="hash-span" id="contact">
        &nbsp;
      </span>
      <p className="sm:text-[18px] text-[14px] text-gray-500 uppercase tracking-wider text-center">
        Get in touch
      </p>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-4 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Information
          </h2>
         
          <div className="grid grid-cols-2 items-start">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="/icons/phone-call.gif"
                alt="Number"
                width={40}
                height={40}
              />
              <div>
                <h3 className="font-semibold text-black dark:text-white">
                  Phone Number
                </h3>
                <p className="text-black dark:text-white">+254 727 041 155</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/icons/email.gif"
                alt="email"
                width={40}
                height={40}
                
              />
              <div>
                <h3 className="font-semiboldtext-black dark:text-white">
                  Email
                </h3>
                <p className="text-black dark:text-white">
                  houstin00@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h3 className="text-black dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
        Email Me
        <span className="sm:text-[18px] text-[14px] ml-4 text-gray-500 uppercase tracking-wider text-center">
        directly
      </span>
      </h3>

      <div
        className={` flex xl:flex-row flex-col-reverse gap-4 overflow-hidden h-screen justify-center `}
      >
        <motion.div
          variants={slideIn("right", "tween", 0, 0.75)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-18 flex flex-col gap-4  "
          >
            <label className="flex flex-col">
              <span className="text-black dark:text-white font-medium mb-2">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" // Decreased the padding
              />
            </label>
            <label className="flex flex-col">
              <span className="text-black dark:text-white font-medium mb-2">
                Your email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your Email address?"
                className="bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" // Decreased the padding
              />
            </label>
            <label className="flex flex-col">
              <span className="text-black dark:text-white font-medium mb-2">
                Your Message
              </span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What is your Message for me?"
                className="bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" // Decreased the padding
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-2 px-4 rounded-lg outline-none text-black dark:text-white font-bold shadow-md shadow-primary" // Decreased the padding and rounded the corners more
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
