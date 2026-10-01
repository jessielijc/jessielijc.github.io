"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  children: string;
  secondaryText?: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function TypingAnimation({ children, secondaryText = "", className, delay = 200, duration = 85 }: TypingAnimationProps) {
  const fullText = secondaryText ? `${children} ${secondaryText}` : children;
  const [visibleCharacters, setVisibleCharacters] = useState(() => {
    if (typeof window === "undefined") return fullText.length;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? fullText.length : 0;
  });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleCharacters(fullText.length);
      return;
    }

    setVisibleCharacters(0);
    let current = 0;
    let timer: number;

    const typeNext = () => {
      current += 1;
      setVisibleCharacters(current);
      if (current < fullText.length) timer = window.setTimeout(typeNext, duration);
    };

    timer = window.setTimeout(typeNext, delay);
    return () => window.clearTimeout(timer);
  }, [delay, duration, fullText]);

  const primaryVisible = children.slice(0, Math.min(visibleCharacters, children.length));
  const secondaryStarted = Boolean(secondaryText) && visibleCharacters > children.length;
  const secondaryVisible = secondaryStarted ? secondaryText.slice(0, visibleCharacters - children.length - 1) : "";
  const complete = visibleCharacters >= fullText.length;

  return (
    <h2 className={cn("about-typing-title", className)} aria-label={fullText}>
      <span className="about-typing-primary" aria-hidden="true">
        {primaryVisible}
      </span>
      {secondaryStarted && (
        <span className="about-typing-secondary" aria-hidden="true">
          {secondaryVisible}
          {!complete && <span className="about-typing-cursor" />}
          {complete && (
            <svg className="about-greeting-sparkles" viewBox="0 0 32 28" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M11 2 13.5 10.5 22 13l-8.5 2.5L11 24l-2.5-8.5L0 13l8.5-2.5L11 2Z" />
              <path d="m26 2 1.15 3.85L31 7l-3.85 1.15L26 12l-1.15-3.85L21 7l3.85-1.15L26 2Z" />
            </svg>
          )}
        </span>
      )}
      {!secondaryStarted && !complete && <span className="about-typing-cursor" aria-hidden="true" />}
    </h2>
  );
}
