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
  const galleryRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const anglePerItem = items.length > 0 ? 360 / items.length : 0;

  const rotateBy = useCallback((degrees: number) => {
    rotationRef.current += degrees;
    if (ringRef.current) {
      ringRef.current.classList.remove("is-snapping");
      ringRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
    }
  }, []);

  const stepBy = useCallback(
    (steps: number) => {
      if (items.length < 2) return;
      rotationRef.current = (Math.round(rotationRef.current / anglePerItem) + steps) * anglePerItem;
      if (ringRef.current) {
        ringRef.current.classList.add("is-snapping");
        ringRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
      }
    },
    [anglePerItem, items.length]
  );

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery || items.length < 2) return;

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey) return;
      event.preventDefault();
      const multiplier =
        event.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 : event.deltaMode === WheelEvent.DOM_DELTA_PAGE ? gallery.clientHeight : 1;
      rotateBy(Math.max(-15, Math.min(15, event.deltaY * multiplier * 0.05)));
    };

    gallery.addEventListener("wheel", onWheel, { passive: false });
    return () => gallery.removeEventListener("wheel", onWheel);
  }, [items.length, rotateBy]);

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
      ref={galleryRef}
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
      <div ref={stageRef} className="circular-gallery-stage">
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
        <button type="button" aria-label="Previous volunteer photo" onClick={() => stepBy(1)}>
          <span aria-hidden="true">←</span> Previous
        </button>
        <button type="button" aria-label="Next volunteer photo" onClick={() => stepBy(-1)}>
          Next <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
