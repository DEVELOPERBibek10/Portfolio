import { navLinks } from "../../constants/navLinks";

import { Button } from "../ui/button";
import { CircleArrowUp, Code2, Moon } from "lucide-react";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  return (
    <nav
      className={`h-14 w-full flex ${
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
          "bg-white/10 backdrop-blur-lg border-b h-14 px-6 mt-5 rounded-full border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.07)]"
        } flex ml-14 items-center justify-center gap-4`}
      >
        {navLinks.map((link) => (
          <li className="text-base">
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
