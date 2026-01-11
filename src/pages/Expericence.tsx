import ExpericenceCard from "../components/shared/ExpericenceCard";
import { SkillCategories } from "../constants/Skills";
import { motion } from "motion/react";
const Expericence = () => {
  return (
    <section id="experience" className=" bg-secondary/30 py-24 mt-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs opacity-50 font-medium">Explore My</p>
          <h2 className="text-3xl font-bold">Experience</h2>
        </motion.div>
        <ExpericenceCard Skills={SkillCategories} />
      </div>
    </section>
  );
};

export default Expericence;
