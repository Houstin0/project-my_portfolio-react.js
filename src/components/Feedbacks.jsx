import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-indigo-800 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-black dark:text-white font-black text-[48px]">&quot;</p>

    <div className="mt-1">
      <p className="text-black dark:text-white tracking-wider text-[18px]">
        {testimonial}
      </p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-black dark:text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-black dark:text-white text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-8 px-3 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
    >
      <span className="hash-span" id="">
        &nbsp;
      </span>

      <div className={`mt-12  rounded-[20px]`}>
        <div className="bg-gray-300 dark:bg-gray-950 rounded-2xl sm:px-8 px-3 sm:py-16 py-10 min-h-[300px]">
          <motion.div>
            <p className="sm:text-[18px] text-[14px] text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              What others say
            </p>
            <h2 className="text-black dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              Testimonials.
            </h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 sm:px-16 px-2 flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Feedbacks;
