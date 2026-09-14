"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, domAnimation, LazyMotion, m, useReducedMotion, type Transition } from "motion/react";

import { cn } from "@/lib/utils";

interface TextLoopProps {
  staticText?: string;
  rotatingTexts?: string[];
  className?: string;
  interval?: number;
  transition?: Transition;
  staticTextClassName?: string;
  rotatingTextClassName?: string;
  backgroundClassName?: string;
  cursorClassName?: string;
}

export default function TextLoop({
  staticText = "Design",
  rotatingTexts = ["Limitless", "Timeless", "Flawless"],
  className,
  interval = 3000,
  transition = { duration: 0.8, ease: "easeInOut" },
  staticTextClassName,
  rotatingTextClassName,
  backgroundClassName,
  cursorClassName,
}: TextLoopProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const texts = rotatingTexts.length > 0 ? rotatingTexts : [""];

  useEffect(() => {
    if (reduceMotion || texts.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((previous) => (previous + 1) % texts.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [texts.length, interval, reduceMotion]);

  const currentIndex = index % texts.length;

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={cn("flex w-fit flex-row items-center justify-start text-4xl font-medium tracking-tight md:text-7xl", className)}
        role="heading"
        aria-level={2}
        aria-label={`${staticText} ${texts[currentIndex]}`}
      >
        <span className={cn("mr-3 whitespace-nowrap", staticTextClassName)} aria-hidden="true">
          {staticText}
        </span>
        <div className="relative flex items-center" aria-hidden="true">
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={texts[currentIndex]}
              initial={reduceMotion ? false : { width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={reduceMotion ? undefined : { width: 0, opacity: 0 }}
              transition={transition}
              className="relative overflow-hidden whitespace-nowrap"
            >
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
                {texts[currentIndex]}
              </span>
            </m.div>
          </AnimatePresence>
          <m.div
            className={cn("h-[1.10em] w-[3px] bg-violet-500 sm:h-[1em] md:w-[4px]", cursorClassName)}
            animate={reduceMotion ? { opacity: 0.7 } : { opacity: [1, 0.45] }}
            transition={{ duration: 0.8, repeat: reduceMotion ? 0 : Infinity, repeatType: "reverse" }}
          />
        </div>
      </div>
    </LazyMotion>
  );
}
