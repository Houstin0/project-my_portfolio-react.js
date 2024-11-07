import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github } from "../assets";
import { link } from "../assets";
import { staggerContainer } from "../utils/motion";
import { projects } from "../constants";
import { fadeIn, zoomIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={zoomIn(index * 0.5, 0.75)}>
      <div
        className="bg-tertiary rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative p-2">
          <img
            src={image}
            alt="project_image"
            className="w-full h-[230px] object-fit"
          />

          <div className="absolute bottom-0 right-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-gray-400 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer animate-bounce"
            >
              <img
                src={link}
                alt="source code"
                className="w-1/2 h-1/2 object-contain "
              />
            </div>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-black font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-white font-medium text-[15px]">
            {description}
          </p>
        </div>

        <div className="p-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[15px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="md:px-8 px-4 max-w-7xl mx-auto relative z-0"
    >
      <span className="hash-span" id="projects">
        &nbsp;
      </span>
      <span className="hash-span">
        &nbsp;
      </span>

      <>
        <motion.div>
          <p className="sm:text-[18px] text-[14px] text-gray-500 uppercase tracking-wider">
            My work
          </p>
          <h2 className="text-black dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects
          </h2>
        </motion.div>

        <div className="w-full flex">
          <p className="mt-3 text-black dark:text-white text-[17px] max-w-3xl leading-[30px]">
            The following projects demonstrate my proficiency in various
            technologies, my ability to bring ideas to life and creative
            problem-solving skills through a variety of web applications. Each
            project includes a brief description, the technologies used and
            bouncing links to live deployed versions. These projects highlight
            my ability to build and deploy both Front-end and Back-end
            applications, experiment with different technologies, and
            continually refine my craft.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </>
    </motion.section>
  );
};

export default Works;
