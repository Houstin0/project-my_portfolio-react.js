import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


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
        'service_8hq9uxr',
        'template_uzxqgrc',
        {
          from_name: form.name,
          to_name: "Houstin",
          from_email: form.email,
          to_email: "houstin0000@gmail.com",
          message: form.message,
        },
        'dw2sWw3cbuqRb9-ir'
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
    <div
      className={`xl:mt-4 flex xl:flex-row flex-col-reverse gap-4 overflow-hidden h-screen justify-center `}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
  ref={formRef}
  onSubmit={handleSubmit}
  className='mt-18 flex flex-col gap-4  '
>
  <label className='flex flex-col'>
    <span className='text-white font-medium mb-2'>Your Name</span> 
    <input
      type='text'
      name='name'
      value={form.name}
      onChange={handleChange}
      placeholder="What's your name?"
      className='bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' // Decreased the padding
    />
  </label>
  <label className='flex flex-col'>
    <span className='text-white font-medium mb-2'>Your email</span> 
    <input
      type='email'
      name='email'
      value={form.email}
      onChange={handleChange}
      placeholder="What's your Email address?"
      className='bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' // Decreased the padding
    />
  </label>
  <label className='flex flex-col'>
    <span className='text-white font-medium mb-2'>Your Message</span> 
    <textarea
      rows={5}
      name='message'
      value={form.message}
      onChange={handleChange}
      placeholder='What is your Message for me?'
      className='bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' // Decreased the padding
    />
  </label>

  <button
    type='submit'
    className='bg-tertiary py-2 px-4 rounded-lg outline-none text-white font-bold shadow-md shadow-primary' // Decreased the padding and rounded the corners more
  >
    {loading ? "Sending..." : "Send"}
  </button>
</form>

      </motion.div>

     
    </div>
  );
};

export default SectionWrapper(Contact, "contact");