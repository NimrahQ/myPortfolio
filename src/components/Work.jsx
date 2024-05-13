import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
const ProjectCard = ({
  // eslint-disable-next-line react/prop-types
  index,
    // eslint-disable-next-line react/prop-types
  name,
    // eslint-disable-next-line react/prop-types
  description,
    // eslint-disable-next-line react/prop-types
  image,
    // eslint-disable-next-line react/prop-types
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full cover rounded-2xl cursor-pointer"
          />
        </div>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img
              onClick={() => window.open(source_code_link, "_blank")}
              src={link}
              alt="link"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
        <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};
const Work = () => {
  return (
    <div>
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work Expertise</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.dev>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following Projects showcase my skills and experience through
          real-world example of my work and My personal Practice set. Each
          Project is briefly described with links to code repositories and live
          demos in it reflect my ability to develop frontEnd with different
          technologies and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Work, "");
