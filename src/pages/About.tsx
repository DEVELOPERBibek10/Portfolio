import {
  fadeInLeft,
  fadeInUp,
  LinkContainerVariants,
  LinkItemVariants,
} from "@/constants/motionVarients";
import { Award, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { FaGitAlt } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiAppwrite, SiPostman } from "react-icons/si";

const About = () => {
  return (
    <>
      <section id="about" className="px-5 md:px-20 pt-6 md:mt-12">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center pb-6"
          >
            <p className="text-xs opacity-50 font-medium">Get To Know More</p>
            <h2 className="text-3xl font-bold">About Me</h2>
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* About Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInLeft}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-100 md:pb-3"
          >
            <div className="rounded-2xl h-60 md:h-full object-top md:object-center overflow-hidden shadow-[0px_1px_1px_rgba(0,0,0,0.05),0px_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0px_2px_3px_rgba(0,0,0,0.04)]">
              <img
                src={"/profile.jpeg"}
                alt="About John Doe"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <div className="w-full lg:w-2/3 my-6">
            {/* Info Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
            >
              {/* Experience Card */}
              <div className="bg-card rounded-2xl p-6 text-center border border-border hover:shadow-[0px_1px_1px_rgba(0,0,0,0.05),0px_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0px_2px_3px_rgba(0,0,0,0.04)] transition-shadow duration-300">
                <Award className="w-8 h-8 mx-auto mb-3 text-foreground" />
                <h3 className="font-semibold text-foreground mb-1">
                  Experience
                </h3>
                <p className="text-muted-foreground text-sm">1+ year</p>
                <p className="text-muted-foreground text-sm">
                  Frontend Development
                </p>
              </div>

              {/* Education Card */}
              <div className="bg-card rounded-2xl p-6 text-center border border-border hover:shadow-[0px_1px_1px_rgba(0,0,0,0.05),0px_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0px_2px_3px_rgba(0,0,0,0.04)] transition-shadow duration-300">
                <GraduationCap className="w-8 h-8 mx-auto mb-3 text-foreground" />
                <h3 className="font-semibold text-foreground mb-1">
                  Education
                </h3>
                <p className="text-muted-foreground text-sm">
                  BIT Bachelors Degree
                </p>
              </div>
            </motion.div>

            {/* Bio Text */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-sm w-full md:text-base leading-relaxed"
            >
              I am a Frontend Developer specializing in the MERN stack, with a
              focus on building robust, logic-driven user experiences. While my
              core expertise lies in crafting performant React interfaces, I
              bring a strong understanding of backend fundamentals—specifically
              in secure authentication systems and API architecture. My goal is
              to bridge the gap between design and infrastructure, ensuring that
              every application I build is as secure and resilient as it is
              visually engaging.
            </motion.p>
            <div className="flex flex-col justify-center gap-3 mt-6">
              <div>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={fadeInLeft}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-medium text-lg"
                >
                  Tools I use
                </motion.p>
                <motion.hr
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={fadeInLeft}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-300 h-1 w-24"
                ></motion.hr>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={LinkContainerVariants}
                className="flex items-center gap-2"
              >
                <motion.div
                  variants={LinkItemVariants}
                  className="w-12 h-12 border-border border-2 flex items-center justify-center rounded-lg"
                >
                  <VscVscode className="size-3/4" />
                </motion.div>
                <motion.div
                  variants={LinkItemVariants}
                  className="w-12 h-12 border-border border-2 flex items-center justify-center rounded-lg"
                >
                  <FaGitAlt className="size-3/4" />
                </motion.div>
                <motion.div
                  variants={LinkItemVariants}
                  className="w-12 h-12 border-border border-2 flex items-center justify-center rounded-lg"
                >
                  <SiAppwrite className="size-3/4" />
                </motion.div>
                <motion.div
                  variants={LinkItemVariants}
                  className="w-12 h-12 border-border border-2 flex items-center justify-center rounded-lg"
                >
                  <SiPostman className="size-3/4" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
