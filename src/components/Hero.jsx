import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-4 overflow-hidden bg-gradient-to-r from-gray-200 to-tertiary dark:from-black  dark:to-tertiary">
      <div className="absolute inset-0 top-[40px] sm:top-[90px] pl-2 sm:pl-0 max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-indigo-900" />
          <div className="w-1 sm:h-80 h-40 indigo-gradient" />
        </div>
        <div className="w-full sm:w-1/2 mt-7">
          <h1 className="font-bold text-black dark:text-white lg:text-[60px] sm:text-[45px] xs:text-[35px] text-[30px] lg:leading-[66px] mt-2">
            Hi I&apos;m Houstin,
          </h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-black font-bold dark:from-indigo-500 dark:to-white">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Frontend Developer",
                1000,
                "Software Developer",
                1000,
                "Backend Developer",
                1000,
                "Web Designer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
          <p className="text-black dark:text-white font-medium lg:text-[28px] sm:text-[24px] xs:text-[20px] text-[16px] lg:leading-[36px] mt-2">
            focused on delivering high-quality websites and solutions in web
            development. Passionate about coding, problem-solving, and advancing
            skills in software development. Enjoy my portfolio and get in touch.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com/Houstin0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 dark:bg-gray-700 p-2 rounded-full flex justify-center items-center hover:bg-gray-600 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/houstin-angwenyi-927a2120b/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 dark:bg-blue-800 p-2 rounded-lg flex justify-center items-center hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clipRule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:bottom-0 sm:right-10 sm:left-auto sm:transform-none w-[56vw] sm:w-[26vw]">
        <motion.img
          src="/my pic.png"
          alt="Houstin"
          className="w-full"
          whileHover={{ scale: 1.1 }}
        />
      </div>
    </section>
  );
};

export default Hero;
