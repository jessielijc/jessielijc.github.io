"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useTransform, useReducedMotion, type SpringOptions } from "framer-motion";
import { cn } from "@/lib/utils";
type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
  trackViewport?: boolean;
};
export function Spotlight({ className, size = 280, springOptions = { bounce: 0 }, trackViewport = false }: SpotlightProps) {
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
      const box = trackViewport ? { left: 0, top: 0 } : parent.getBoundingClientRect();
      x.set(event.clientX - box.left);
      y.set(event.clientY - box.top);
      setHovered(true);
    };
    const leave = () => setHovered(false);
    const target: HTMLElement | Window = trackViewport ? window : parent;
    target.addEventListener("pointermove", move as EventListener);
    target.addEventListener("pointerleave", leave);
    if (trackViewport) window.addEventListener("blur", leave);
    return () => {
      target.removeEventListener("pointermove", move as EventListener);
      target.removeEventListener("pointerleave", leave);
      if (trackViewport) window.removeEventListener("blur", leave);
    };
  }, [x, y, reducedMotion, trackViewport]);
  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={cn("scene-spotlight pointer-events-none absolute rounded-full", className)}
      style={{ width: size, height: size, left, top, opacity: hovered && !reducedMotion ? 1 : 0 }}
    />
  );
}
