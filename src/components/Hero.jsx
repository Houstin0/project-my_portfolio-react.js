import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
            <div className="relative inset-0 top-[90px] sm:top-[60px] w-full sm:w-3/4  text-center">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-600 font-extrabold text-black dark:text-white lg:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px]">
          Turning Ideas into Reality with Code
        </h2>
      </div>
      <div className="absolute inset-0 top-[120px] sm:top-[140px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-indigo-900" />
          <div className="w-1 sm:h-80 h-40 indigo-gradient" />
        </div>
        <div className="w-full sm:w-1/2 mt-7">
        <h1 className="font-bold text-black dark:text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[88px] mt-2">
            Hi I&apos;m Houstin,
          </h1>
          <p className="text-black dark:text-white font-medium lg:text-[28px] sm:text-[24px] xs:text-[20px] text-[16px] lg:leading-[36px] mt-2">
          a software engineer focused on delivering high-quality solutions in website development.Explore my portfolio and get in touch.
            {/* With a strong foundation in various frontend and backend
            programming languages and frameworks, I collaborate closely with
            clients to create dynamic, responsive, efficient, scalable, and user-friendly
            websites that solve real-world problems and meet business needs. */}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:bottom-0 sm:right-10 sm:left-auto sm:transform-none w-[56vw] sm:w-[26vw]">
        <img src="/my pic.png" alt="Houstin" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
