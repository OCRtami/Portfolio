import { cn } from "../utilities/metheoUtil";

import React, { useCallback } from "react";
 
export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);

  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect fixed top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_5px_4px_#ffffff10,0_0_2px_2px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:fixed before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: -5,
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() * 2 + "s",
            animationDuration: Math.floor(Math.random() * 10 + 5) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
