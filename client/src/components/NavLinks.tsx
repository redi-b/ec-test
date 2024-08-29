import React from "react";
import { Link } from "react-router-dom";

import { FiMenu } from "react-icons/fi";

import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

const links = [
  { name: "Home", path: "" },
  { name: "Collections", path: "" },
  { name: "Custom Order", path: "" },
  { name: "About Us", path: "/about" },
];

export const NavLinks = () => {
  return (
    <div className="items-center justify-between hidden w-full gap-6 px-20 lg:flex xl:gap-12">
      {links.map((link, idx) => (
        <Link key={idx} to={link.path}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export const NavLinksMobile = () => {
  return (
    <div className="flex lg:hidden">
      <Sheet>
        <SheetTrigger className="outline-none">
          <FiMenu size={24} />
        </SheetTrigger>
        <SheetContent className="outline-none bg-bg max-w-80">
          <SheetTitle className="hidden">Menu</SheetTitle>
          <div className="flex flex-col items-end gap-8">
            {links.map((link, idx) => (
              <SheetClose key={idx} asChild>
                <Link to={link.path} className="text-2xl">
                  {link.name}
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
