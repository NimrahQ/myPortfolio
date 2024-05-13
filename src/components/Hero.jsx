import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="relative h-screen w-full mx-auto">
      <div
        className={`${styles.paddingX} flex flex-row items-start gap-5 absolute inset-0 top-[120px] max-w-7xl mx-auto`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h2 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]"> Nimrah </span>
          </h2>
          <p className={`${styles.heroSubText} mt-5 text-white-100`}>
            A FrontEnd Developer <br className="sm:block hidden" /> and create
            3D visuals
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-[1.4rem] bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 mb-1 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
