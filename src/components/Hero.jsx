import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
            {/* <div className="relative inset-0 top-[90px] sm:top-[60px] w-full sm:w-3/4  text-center">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-600 font-extrabold lg:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px]">
          Turning Ideas into Reality with Code
        </h2>
      </div> */}
      <div className="absolute inset-0 top-[60px] sm:top-[140px] pl-2 sm:pl-0 max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-indigo-900" />
          <div className="w-1 sm:h-80 h-40 indigo-gradient" />
        </div>
        <div className="w-full sm:w-1/2 mt-7">
        <h1 className="font-bold text-black dark:text-white lg:text-[60px] sm:text-[45px] xs:text-[35px] text-[30px] lg:leading-[66px] mt-2">
  Hi I&apos;m Houstin,
</h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700  to-purple-600 font-bold">
  <TypeAnimation
    sequence={[
      'Software Engineer',
      1000,
      'Frontend Developer',
      1000,
      'Software Developer',
      1000,
      'Backend Developer',
      1000,
      'Web Designer',
      1000
    ]}
    wrapper="span"
    speed={20}
    style={{ fontSize: '2em', display: 'inline-block' }}
    repeat={Infinity}
  />
</div>

          <p className="text-black dark:text-white font-medium lg:text-[28px] sm:text-[24px] xs:text-[20px] text-[16px] lg:leading-[36px] mt-2">
          focused on delivering high-quality websites and solutions in web development.Explore my portfolio and get in touch.
            {/* With a strong foundation in various frontend and backend
            programming languages and frameworks, I collaborate closely with
            clients to create dynamic, responsive, efficient, scalable, and user-friendly
            websites that solve real-world problems and meet business needs. */}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:bottom-0 sm:right-10 sm:left-auto sm:transform-none w-[56vw] sm:w-[26vw]">
        <motion.img src="/my pic.png" alt="Houstin" className="w-full" whileHover={{ scale: 1.1 }} />
      

      </div>
    </section>
  );
};

export default Hero;
