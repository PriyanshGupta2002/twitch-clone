"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import React, { useEffect } from "react";
import ActionToolTip from "./acion-tooltip";
import { useWindowSize } from "usehooks-ts";

const Toggle = () => {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);

  const { width = 0, height = 0 } = useWindowSize();

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {collapsed && (
        <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
          <ActionToolTip content={label} asChild side="right">
            <Button className="h-auto p-2" variant={"ghost"} onClick={onExpand}>
              <ArrowRightFromLine className="h-4 w-4" />
            </Button>
          </ActionToolTip>
        </div>
      )}
      {!collapsed && (
        <div className="pb-3 pl-6 mb-2 flex items-center w-full">
          <p className="font-semibold text-primary">For You</p>
          <ActionToolTip content={label} asChild side="right">
            <Button
              className="h-auto p-2 ml-auto"
              variant={"ghost"}
              size={"icon"}
              onClick={onCollapse}
            >
              <ArrowLeftFromLine className="h-4 w-4" />
            </Button>
          </ActionToolTip>
        </div>
      )}
    </>
  );
};
export default Toggle;
