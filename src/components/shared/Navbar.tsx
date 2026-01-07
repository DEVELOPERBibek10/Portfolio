import { navLinks } from "../../constants/navLinks";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { CircleArrowUp, Moon } from "lucide-react";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  console.log(isScrolled);
  return (
    <nav
      className={`h-14 w-full flex ${
        isScrolled &&
        "bg-white/10 backdrop-blur-lg border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
      } justify-between items-center`}
    >
      <div className="mx-10">
        <span className="text-3xl font-black">Bibek</span>
        <span className="text-3xl font-bold text-red-500">.</span>
      </div>

      <ul
        className={`w-fit ${
          !isScrolled &&
          "bg-white/10 backdrop-blur-lg border-b h-14 px-6 mt-5 rounded-full border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.07)]"
        } flex ml-14 items-center justify-center gap-4`}
      >
        {navLinks.map((link) => (
          <li className="text-base">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-[14px]"
                  : "font-light text-[14px]"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex gap-3 items-center justify-end mx-20">
        <Button variant={"ghost"} size={"icon"} className="cursor-pointer">
          <Moon size={18} />
        </Button>
        <NavLink
          to="/contact-me"
          className={
            "rounded-full border text-sm border-gray-800 p-2 flex items-center gap-2"
          }
        >
          Contact me
          <CircleArrowUp size={18} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
