import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants/navLinks";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function MobileNav({ activeId }: { activeId: string }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="block md:hidden">
        <Sheet open={open}>
          <Button onClick={() => setOpen(true)} size={"icon"} variant="ghost">
            <Menu className="size-3/4" />
          </Button>

          <SheetContent>
            <SheetHeader>
              <div className="w-full flex justify-between items-center">
                <SheetTitle className="text-2xl">Menu</SheetTitle>
                <Button
                  onClick={() => setOpen(false)}
                  size={"icon"}
                  variant="ghost"
                >
                  <X className="size-3/4" />
                </Button>
              </div>
            </SheetHeader>
            <ul className="px-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li className="">
                  <a
                    onClick={() => setOpen(false)}
                    href={`#${link.path}`}
                    className={`text-lg ${
                      activeId === link.path ? "font-bold" : "font-light"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
