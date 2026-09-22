"use client";

import type { ButtonHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type FlowButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
};

export function FlowButton({ text = "Modern Button", className, type = "button", ...props }: FlowButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "flow-button-react group relative flex cursor-pointer items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-[var(--global-theme-color)] bg-transparent px-8 py-3 text-sm font-semibold text-[var(--global-theme-color)] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:rounded-[12px] hover:border-transparent hover:text-white active:scale-[0.95]",
        className
      )}
      {...props}
    >
      <ArrowRight
        aria-hidden="true"
        className="absolute left-[-25%] z-[9] h-4 w-4 fill-none stroke-current transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:left-4"
      />
      <span className="relative z-[1] -translate-x-3 transition-all duration-[800ms] ease-out group-hover:translate-x-3">{text}</span>
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[var(--global-theme-color)] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-[220px] group-hover:w-[220px] group-hover:opacity-100"
      />
      <ArrowRight
        aria-hidden="true"
        className="absolute right-4 z-[9] h-4 w-4 fill-none stroke-current transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:right-[-25%]"
      />
    </button>
  );
}
