"use client";

import { useEffect, useState } from "react";
import { domAnimation, LazyMotion, m, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

interface TextLoopProps {
  staticText?: string;
  text?: string;
  className?: string;
  startDelay?: number;
  typingSpeed?: number;
  staticTextClassName?: string;
  rotatingTextClassName?: string;
  backgroundClassName?: string;
  cursorClassName?: string;
}

export default function TextLoop({
  staticText = "Hi, I'm",
  text = "Jessie",
  className,
  startDelay = 450,
  typingSpeed = 145,
  staticTextClassName,
  rotatingTextClassName,
  backgroundClassName,
  cursorClassName,
}: TextLoopProps) {
  const reduceMotion = useReducedMotion();
  const [visibleCharacters, setVisibleCharacters] = useState(reduceMotion ? text.length : 0);

  useEffect(() => {
    if (reduceMotion) {
      setVisibleCharacters(text.length);
      return;
    }

    setVisibleCharacters(0);
    let typingTimer: number | undefined;
    const startTimer = window.setTimeout(() => {
      typingTimer = window.setInterval(() => {
        setVisibleCharacters((current) => {
          if (current >= text.length) {
            if (typingTimer) window.clearInterval(typingTimer);
            return text.length;
          }
          return current + 1;
        });
      }, typingSpeed);
    }, startDelay);

    return () => {
      window.clearTimeout(startTimer);
      if (typingTimer) window.clearInterval(typingTimer);
    };
  }, [reduceMotion, startDelay, text, typingSpeed]);

  const isComplete = visibleCharacters >= text.length;

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={cn("flex w-fit flex-row items-center justify-start text-4xl font-medium tracking-tight md:text-7xl", className)}
        role="heading"
        aria-level={2}
        aria-label={`${staticText} ${text}`}
      >
        <span className={cn("mr-3 whitespace-nowrap", staticTextClassName)} aria-hidden="true">
          {staticText}
        </span>
        <div className="relative flex items-center" aria-hidden="true">
          <div className="relative overflow-hidden whitespace-nowrap">
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-r from-transparent via-purple-200/30 to-purple-200 dark:from-transparent dark:via-violet-950/30 dark:to-violet-950/60",
                backgroundClassName
              )}
            />
            <span
              className={cn(
                "relative bg-gradient-to-r from-violet-400 to-violet-800 bg-clip-text pr-1 text-transparent dark:from-violet-400 dark:to-violet-600",
                rotatingTextClassName
              )}
            >
              {text.slice(0, visibleCharacters)}
            </span>
          </div>
          <m.div
            className={cn("h-[1.10em] w-[3px] bg-violet-500 sm:h-[1em] md:w-[4px]", cursorClassName)}
            animate={{ opacity: isComplete ? 0 : [1, 0.35] }}
            transition={{ duration: isComplete ? 0.35 : 0.65, repeat: isComplete ? 0 : Infinity, repeatType: "reverse" }}
          />
        </div>
      </div>
    </LazyMotion>
  );
}
