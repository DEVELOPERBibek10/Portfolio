import { ArrowRight, Download } from "lucide-react";
import { motion } from "motion/react";

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const fadeBottom = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Home = () => {
  return (
    <div id="home" className="flex items-center justify-center h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={scaleIn}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=""
          >
            <div className="w-52 h-52 mb-4 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-gray-400 shadow-[0_4px_30px_rgba(0,0,0,0.06)]">
              <img
                src={"/profile.jpeg"}
                alt="Bibek Pyakurel"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-base md:text-lg w-full pl-6 font-medium text-center flex items-center gap-2">
              Hi! I am Bibek Pyakurel
              <img src={"/hand-icon.png"} width={20} height={20} alt="" />
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeBottom}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center gap-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-center">
              Frontend Web Developer
            </h2>
            <div className="flex justify-center items-center gap-3">
              <a
                href="#contact"
                className="w-28 h-10 text-sm md:text-base md:w-36 md:h-11 text-center flex items-center justify-center gap-1 md:gap-2 rounded-full bg-primary text-gray-200"
              >
                Contact me
                <ArrowRight className="size-4 md:size-6" />
              </a>
              <a
                href={"/Resume.pdf"}
                className=" w-28 h-10 text-sm md:text-base md:w-36 md:h-11 text-center flex items-center justify-center gap-2 rounded-full bg-transparent border-2 border-border"
                download
              >
                Resume
                <Download className="size-4 md:size-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
