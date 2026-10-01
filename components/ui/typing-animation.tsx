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
            <span className="about-greeting-sparkles" aria-hidden="true">
              <span>✦</span>
              <span>✧</span>
              <span>✦</span>
            </span>
          )}
        </span>
      )}
      {!secondaryStarted && !complete && <span className="about-typing-cursor" aria-hidden="true" />}
    </h2>
  );
}
