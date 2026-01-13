import ContactForm from "@/components/shared/ContactForm";
import { fadeInUpLarge } from "@/constants/motionVarients";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="mb-16">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            className="text-center mb-5"
          >
            <p className="text-xs opacity-50 font-medium">Get in touch</p>
            <h2 className="text-3xl font-bold">Contact Me</h2>
          </motion.div>
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={fadeInUpLarge}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
