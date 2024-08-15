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
  const [showToast, setShowToast] = useState(false);

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

    emailjs
      .send(
        "service_8hq9uxr",
        "template_uzxqgrc",
        {
          from_name: form.name,
          to_name: "Houstin",
          from_email: form.email,
          to_email: "houstin00@gmail.com",
          message: form.message,
        },
        "dw2sWw3cbuqRb9-ir"
      )
      .then(
        () => {
          setLoading(false);
          setShowToast(true);

          // Hide the toast after 5 seconds
          setTimeout(() => {
            setShowToast(false);
          }, 10000);

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
      {showToast && (
        <div
          id="toast-simple"
          className="fixed flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-50"
          role="alert"
        >
          <svg
            className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
            />
          </svg>
          <div className="ps-4 text-sm font-normal">
            Message sent successfully.
          </div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => setShowToast(false)}
          >
            <span className="sr-only">Close</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}

      <span className="hash-span" id="contact">
        &nbsp;
      </span>
      <span className="hash-span">&nbsp;</span>
      <p className="sm:text-[18px] text-[14px] text-gray-500 uppercase tracking-wider text-center">
        Get in touch
      </p>
      <div className="flex justify-center">
        <section className="bg-gray-100 dark:bg-gray-900 rounded-lg w-[860px]">
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
                  <h3 className="font-semiboldtext-black text-black dark:text-white">
                    Email
                  </h3>
                  <p className="text-black dark:text-white">
                    houstin00@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="https://wa.me/+254727041155"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-white"
              >
                {/* WhatsApp Icon */}
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#25D366"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                    clipRule="evenodd"
                  />
                  <path d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                </svg>

                <span className="sr-only">WhatsApp</span>
              </a>
              <a
                href="https://www.linkedin.com/in/houstin-angwenyi-927a2120b/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 rounded hover:text-gray-900 dark:hover:text-white ms-5"
              >
                {/* LinkedIn Icon */}

                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clipRule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>

                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Houstin0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-white ms-5"
              >
                {/* GitHub Icon */}
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <h3 className="text-black mt-6 dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
        Email Me
        <span className="sm:text-[18px] text-[14px] ml-4 text-gray-500 tracking-wider text-center">
          directly
        </span>
      </h3>

      <div
        className={` flex xl:flex-row flex-col-reverse gap-4 overflow-hidden h-full mb-8 justify-center `}
      >
        <motion.div
          variants={slideIn("right", "tween", 0, 0.75)}
          className="flex-[0.75] bg-black-100  rounded-2xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=" flex flex-col gap-4 p-8 bg-gray-100 dark:bg-gray-900 rounded-lg"
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
              className="bg-tertiary w-[200px] py-2 px-4 rounded-lg outline-none text-black dark:text-white font-bold shadow-md shadow-primary mx-auto block"
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
