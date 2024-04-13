"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import React, { FC } from "react";

interface WrapperProps {
  readonly children: React.ReactNode;
}
const Wrapper: FC<WrapperProps> = ({ children }) => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <aside
      className={cn(
        collapsed ? "w-[70px]" : "w-60",
        "fixed left-0 flex flex-col bg-background transition-all  duration-200 ease-linear h-full border-r border-[#2d2e35] z-50"
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
