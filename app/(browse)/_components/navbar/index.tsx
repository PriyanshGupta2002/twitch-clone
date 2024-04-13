import React from "react";
import { Logo } from "./Logo";
import Search from "./search";
import Actions from "./actions";

const Navbar = () => {
  return (
    <div className="fixed top-0 h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm w-full">
      <Logo />
      <Search />
      <Actions />
    </div>
  );
};

export default Navbar;
