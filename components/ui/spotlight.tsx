"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useTransform, useReducedMotion, type SpringOptions } from "framer-motion";
import { cn } from "@/lib/utils";
type SpotlightProps = { className?: string; size?: number; springOptions?: SpringOptions };
export function Spotlight({ className, size = 280, springOptions = { bounce: 0 } }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const reducedMotion = useReducedMotion();
  const x = useSpring(0, springOptions),
    y = useSpring(0, springOptions);
  const left = useTransform(x, (value) => value - size / 2);
  const top = useTransform(y, (value) => value - size / 2);
  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent || reducedMotion) return;
    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const box = parent.getBoundingClientRect();
      x.set(event.clientX - box.left);
      y.set(event.clientY - box.top);
      setHovered(true);
    };
    const leave = () => setHovered(false);
    parent.addEventListener("pointermove", move);
    parent.addEventListener("pointerleave", leave);
    return () => {
      parent.removeEventListener("pointermove", move);
      parent.removeEventListener("pointerleave", leave);
    };
  }, [x, y, reducedMotion]);
  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={cn("scene-spotlight pointer-events-none absolute rounded-full", className)}
      style={{ width: size, height: size, left, top, opacity: hovered && !reducedMotion ? 1 : 0 }}
    />
  );
}
