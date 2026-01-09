import { Award, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};
const About = () => {
  return (
    <>
      <section id="about" className="px-20 h-screen">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px", amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-xs opacity-50 font-medium">Get To Know More</p>
            <h2 className="text-3xl font-bold">About Me</h2>
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* About Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px", amount: 0.3 }}
            variants={fadeInLeft}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3"
          >
            <div className="rounded-2xl overflow-hidden shadow-[0px_1px_1px_rgba(0,0,0,0.05),0px_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0px_2px_3px_rgba(0,0,0,0.04)]">
              <img
                src={"/profile.jpeg"}
                alt="About John Doe"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <div className="w-full lg:w-2/3">
            {/* Info Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px", amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
            >
              {/* Experience Card */}
              <div className="bg-card rounded-2xl p-6 text-center shadow-card border border-border hover:shadow-[0px_1px_1px_rgba(0,0,0,0.05),0px_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0px_2px_3px_rgba(0,0,0,0.04)] transition-shadow duration-300">
                <Award className="w-8 h-8 mx-auto mb-3 text-foreground" />
                <h3 className="font-semibold text-foreground mb-1">
                  Experience
                </h3>
                <p className="text-muted-foreground text-sm">3+ years</p>
                <p className="text-muted-foreground text-sm">
                  Frontend Development
                </p>
              </div>

              {/* Education Card */}
              <div className="bg-card rounded-2xl p-6 text-center shadow-card border border-border hover:shadow-card-hover transition-shadow duration-300">
                <GraduationCap className="w-8 h-8 mx-auto mb-3 text-foreground" />
                <h3 className="font-semibold text-foreground mb-1">
                  Education
                </h3>
                <p className="text-muted-foreground text-sm">
                  B.Sc. Bachelors Degree
                </p>
                <p className="text-muted-foreground text-sm">
                  M.Sc. Masters Degree
                </p>
              </div>
            </motion.div>

            {/* Bio Text */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px", amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed"
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Slit, illo
              quis reprehenderit et laboriosam, rem, dolore eum quod voluptate
              exercitationem nostis, nihil esse debitis maxime facere minus sint
              delectus vult in eos quo officia explicabo dolenti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupt quibem, sed
              leeste eso misgraeort! Nulla, niquod a quel
            </motion.p>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default About;
