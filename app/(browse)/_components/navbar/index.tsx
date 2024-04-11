import React from "react";
import { Logo } from "./Logo";

const Navbar = () => {
  return (
    <div className="fixed top-0 h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm w-full">
      <Logo />
    </div>
  );
};

export default Navbar;
