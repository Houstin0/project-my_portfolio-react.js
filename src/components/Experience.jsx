import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { color, motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { staggerContainer } from "../utils/motion";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#362F78",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #362F78" }}
      dateClassName="text-black dark:text-white font-black"
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-gray-400 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

<ul className="mt-5 list-disc ml-5 space-y-2">
  {experience.points.map((point, index) => (
    <li
      key={`experience-point-${index}`}
      className="text-white-100 text-[14px] pl-1 tracking-wider"
    >
      {point.includes("visit my") ? (
        <a 
          href={experience.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline"
        >
          {point}
        </a>
      ) : (
        point
      )}
    </li>
  ))}
</ul>

    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="md:px-8 max-w-7xl mx-auto relative z-0"
    >
      <span className="hash-span" id="work">
        &nbsp;
      </span>
      <span className="hash-span">
        &nbsp;
      </span>

      <>
        <div>
          <p className="sm:text-[18px] text-[14px] text-black dark:text-white uppercase tracking-wider text-center">
            What I have done so far
          </p>
          <h2 className="text-black dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
            Work Experience
          </h2>
        </div>

        <div className="mt-8 flex flex-col">
          <VerticalTimeline lineColor={"#362F78"}>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </motion.section>
  );
};

export default Experience;
