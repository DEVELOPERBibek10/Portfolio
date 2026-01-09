import { navLinks } from "../../constants/navLinks";

import { Button } from "../ui/button";
import { CircleArrowUp, Code2, Moon } from "lucide-react";

interface NavbarProps {
  isScrolled: boolean;
  activeId: string;
}

const Navbar = ({ isScrolled, activeId }: NavbarProps) => {
  console.log(activeId);
  return (
    <nav
      className={`h-18 w-full flex ${
        isScrolled &&
        "bg-white/10 backdrop-blur-lg border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
      } justify-between items-center`}
    >
      <a href="#home" className="mx-10 flex items-center gap-1">
        <span className="text-2xl font-black">Bibek</span>
        <Code2 size={30} color="red" />
      </a>

      <ul
        className={`w-fit ${
          !isScrolled &&
          "bg-white/10 backdrop-blur-lg border-b h-14 px-6 mt-3 rounded-full border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.07)]"
        } flex ml-32 items-center justify-center gap-4`}
      >
        {navLinks.map((link) => (
          <li
            key={link.path}
            className={`${activeId === link.path ? "font-bold" : "font-light"}`}
          >
            <a href={`#${link.path}`}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="flex gap-3 items-center justify-end mx-20">
        <Button variant={"ghost"} size={"icon"} className="cursor-pointer">
          <Moon size={18} />
        </Button>
        <a
          href="#contact"
          className={
            "rounded-full border text-sm border-gray-800 p-2 flex items-center gap-2"
          }
        >
          Contact me
          <CircleArrowUp size={18} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
