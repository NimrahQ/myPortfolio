/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { motion } from "framer-motion";
import { styles } from "../style";
import { experiences } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Point } from "@react-three/drei";
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1d1d", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #ffff" }}
    icon={
      <div>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold"> {experience?.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);
const Experience = () => {
  return (
    <div>
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText}>The Things I have Done</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.dev>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
