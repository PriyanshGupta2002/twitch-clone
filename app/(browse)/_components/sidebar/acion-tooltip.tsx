import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React, { FC } from "react";

interface ActionToolTipProps {
  readonly children: React.ReactNode;
  content: string;
  asChild?: boolean;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
}
const ActionToolTip: FC<ActionToolTipProps> = ({
  children,
  content,
  align,
  asChild,
  side,
}) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
        <TooltipContent
          side={side || "top"}
          align={align || "center"}
          className="text-black bg-white"
        >
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ActionToolTip;
