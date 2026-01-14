import { navLinks } from "../../constants/navLinks";

import { motion } from "motion/react";

import { CircleArrowUp, Code2 } from "lucide-react";
import {
  fadeBottom,
  fadeInLeft,
  fadeInRight,
} from "@/constants/motionVarients";
import { MobileNav } from "./MobileNav";

interface NavbarProps {
  isScrolled: boolean;
  activeId: string;
}

const Navbar = ({ isScrolled, activeId }: NavbarProps) => {
  return (
    <nav
      className={`h-18 w-full flex ${
        isScrolled &&
        "bg-white/10 backdrop-blur-lg border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
      } justify-between items-center`}
    >
      <motion.a
        href="#home"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInLeft}
        transition={{ duration: 0.6 }}
        className="mx-5 md:mx-10 flex items-center gap-1"
      >
        <span className="text-2xl font-bold">Bibek</span>
        <Code2 size={30} color="red" />
      </motion.a>

      <motion.ul
        className={`w-fit hidden md:flex ${
          !isScrolled &&
          "bg-white/10 backdrop-blur-lg border-b h-14 px-6 mt-3 rounded-full border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.07)]"
        } flex ml-32 items-center justify-center gap-4`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeBottom}
        transition={{ duration: 0.6 }}
      >
        {navLinks.map((link) => (
          <li
            key={link.path}
            className={`${activeId === link.path ? "font-bold" : "font-light"}`}
          >
            <a href={`#${link.path}`}>{link.label}</a>
          </li>
        ))}
      </motion.ul>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInRight}
        transition={{ duration: 0.6 }}
        className="flex  gap-4 md:gap-3 items-center justify-end mx-6 md:mx-20"
      >
        <a
          href="#contact"
          className={
            "rounded-full hidden border text-sm border-gray-800 p-2 md:flex items-center gap-2"
          }
        >
          Contact me
          <CircleArrowUp size={18} />
        </a>
        <MobileNav activeId={activeId} />
      </motion.div>
    </nav>
  );
};

export default Navbar;
