import {
  fadeInUpLarge,
  LinkContainerVariants,
  LinkItemVariants,
} from "../../constants/motionVarients";
import type { SkillCategory } from "../../types/SkillType";
import { motion } from "motion/react";

const ExpericenceCard = ({ Skills }: { Skills: SkillCategory[] }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {Skills.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUpLarge}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <h3 className="text-lg font-semibold text-center mb-8 text-foreground">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={LinkContainerVariants}
                  transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                  className="flex items-start gap-2"
                  key={skill.name}
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.05 }}
                    variants={LinkItemVariants}
                    className="mb-2"
                  >
                    <div className="flex items-center gap-2">
                      <skill.icon size={24} />
                      <p className="font-medium text-foreground text-sm">
                        {skill.name}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-xs text-center">
                      {skill.level}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ExpericenceCard;
