import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { technologies } from "../constants";
import { staggerContainer } from "../utils/motion";
import { fadeIn, textVariant } from "../utils/motion";

const TechnologyCard = ({ index, name, icon }) => (
  <Tilt className="xs:w-[90px] w-[90px] sm:w-[90px] ">
    <motion.div variants={fadeIn("left", "spring", index * 0.5, 0.75)}>
      <div className="flex justify-center items-center flex-col p-2">
        <img src={icon} alt={name} className="w-16 h-16 object-contain" />
        <h3 className="text-black dark:text-white text-[12px] font-bold text-center mt-1">
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-8 px-3 max-w-7xl mx-auto relative z-0"
    >
      <span className="hash-span" id="about">
        &nbsp;
      </span>
      <span className="hash-span">&nbsp;</span>

      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-gray-500 uppercase tracking-wider">
          Transforming Ideas into Innovative Solutions, One Line of Code at a
          Time.
        </p>
        <h2 className="text-black dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          About Me
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <p className="mt-2 text-black dark:text-white text-[17px] leading-[30px]">
            I&apos;m Houstin Angwenyi, a skilled software developer with
            experience in frontend and backend development. My journey began at
            Moringa School, where I acquired a solid foundation a strong
            foundation in front-end development with NextJS, React, JavaScript,
            TypeScript, Node.js, HTML and styling with CSS, Tailwind CSS, and
            Bootstrap.
          </p>
          <p className="mt-1 text-black dark:text-white text-[17px] leading-[30px]">
            And in back-end development, I excel in Python programming with
            frameworks like Django, Flask, FastAPI, utilizing SQL for database
            interactions. I&apos;m a quick learner and collaborate closely with
            clients to create efficient, scalable, and user-friendly solutions
            that solve real-world problems.
          </p>
          <p className="mt-1 mb-4 text-black dark:text-white text-[17px] leading-[30px]">
            I am fueled by a commitment to clean code, delivering outstanding
            user experiences, keeping up with industry trends, and a hunger for
            expanding my knowledge. I am actively pursuing work opportunities to
            apply my knowledge and contribute to cutting-edge projects. If
            you&apos;re seeking innovative web solutions to take your business
            to the next level, get in touch to develop a web solution that
            enhances user experience and boosts your business performance.
          </p>
          <a
            href="/resume_houstin.pdf"
            className="text-white bg-gradient-to-r from-purple-500 to-tertiary hover:bg-gradient-to-l font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 my-4 animate-bounce"
          >
            View My Resume
          </a>
        </div>

        <div className="flex-1 flex flex-col items-center ">
          <h3 className="text-black dark:text-white font-bold text-3xl my-1 animate-bounce">
            My Skills
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-6 gap-1 max-h-[200px]">
            {technologies.map((service, index) => (
              <TechnologyCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
