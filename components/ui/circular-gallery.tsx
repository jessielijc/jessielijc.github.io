import { useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export type CircularGalleryItem = {
  title: string;
  src: string;
  alt: string;
};

type CircularGalleryProps = {
  items: CircularGalleryItem[];
};

export function CircularGallery({ items }: CircularGalleryProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const anglePerItem = items.length > 0 ? 360 / items.length : 0;

  const rotateBy = useCallback((degrees: number) => {
    rotationRef.current += degrees;
    if (ringRef.current) ringRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion || !isVisible || isPaused || items.length < 2) return;

    let frame = 0;
    let previousTime = 0;
    const animate = (time: number) => {
      if (previousTime) rotateBy(Math.min(time - previousTime, 50) * 0.004);
      previousTime = time;
      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [isPaused, isVisible, items.length, reducedMotion, rotateBy]);

  if (items.length === 0) return null;

  return (
    <div
      className="circular-gallery"
      role="region"
      aria-label="Volunteer photo gallery"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div
        ref={stageRef}
        className="circular-gallery-stage"
        onWheel={(event) => {
          if (!reducedMotion) rotateBy(Math.max(-15, Math.min(15, event.deltaY * 0.05)));
        }}
      >
        <div ref={ringRef} className="circular-gallery-ring">
          {items.map((item, index) => (
            <div
              className="circular-gallery-card"
              role="group"
              aria-label={item.title}
              key={item.src}
              style={{ transform: `rotateY(${index * anglePerItem}deg) translateZ(var(--circular-gallery-radius))` }}
            >
              <img src={item.src} alt={item.alt} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
              <div className="circular-gallery-caption">
                <p className="circular-gallery-title">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="circular-gallery-controls" aria-label="Volunteer gallery controls">
        <button type="button" aria-label="Previous volunteer photo" onClick={() => rotateBy(anglePerItem)}>
          <span aria-hidden="true">←</span> Previous
        </button>
        <button type="button" aria-label="Next volunteer photo" onClick={() => rotateBy(-anglePerItem)}>
          Next <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
