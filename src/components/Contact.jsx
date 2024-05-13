import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { styles } from "../style";
import EarthCanvas from "./canvas/EarthCanvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const Contact = () => {
  return (
    <div className=" xl:flex-row flex-col-reverse flex items-center justify-center gap-10 overflow-hidden h-screen">
      <motion.div className=" bg-[#101c44] p-10 rounded-2xl">
        <p className="">GET IN TOUCH</p>
        <h3 className="text-[37px] font-bold mb-10">Contact</h3>
        <div className="space-y-7">
          <p>Phone:03012484514</p>
          <p>Email: nimra.naeem1121@gmail.com</p>
          <p>
            LinkedIn:
            <a href="https://www.linkedin.com/in/nimra-qureshi-4a0a49218/">
              Nimrah Qureshi
            </a>
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-[800px] md:h-[550px] h-[350px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
