/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { Services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary  rounded-2xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h2 className="text-white text-[20px] font-bold text-center">
            {title}
          </h2>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <div className="">
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.dev>
      <motion.dev
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4  text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Solution-driven FrontEnd adept at contributing to highly
        collaborative work environment, finding solutions and determining
        customer satisfaction. Proven experience developing consumer-focused
        websites using HTML, CSS, and JavaScript. Built products for desktop
        and mobile app users over [Number]+ years, meeting highest standards for
        web design, user experience, best practices and speed. Designed and
        developed web applications across multiple APIs, third-party
        integrations and databases.
      </motion.dev>
      <div className="mt-20 flex flex-wrap gap-10">
        {Services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
