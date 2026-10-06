import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export type CarouselPhoto = {
  src: string;
  alt: string;
};

type ThumbnailCarouselProps = {
  photos: CarouselPhoto[];
};

const AUTO_DELAY = 5000;
const DRAG_BUFFER = 50;
const SPRING = { type: "spring" as const, mass: 3, stiffness: 400, damping: 50 };

export function ThumbnailCarousel({ photos }: ThumbnailCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragX = useMotionValue(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reducedMotion || photos.length < 2) return;

    const interval = window.setInterval(() => {
      if (dragX.get() === 0) {
        setActiveIndex((current) => (current + 1) % photos.length);
      }
    }, AUTO_DELAY);

    return () => window.clearInterval(interval);
  }, [dragX, paused, photos.length, reducedMotion]);

  if (photos.length === 0) return null;

  const onDragEnd = () => {
    const distance = dragX.get();
    if (distance <= -DRAG_BUFFER) {
      setActiveIndex((current) => Math.min(current + 1, photos.length - 1));
    } else if (distance >= DRAG_BUFFER) {
      setActiveIndex((current) => Math.max(current - 1, 0));
    }
    dragX.set(0);
  };

  return (
    <div
      className="photo-carousel"
      aria-roledescription="carousel"
      aria-label="Travel photo preview"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="photo-carousel-viewport">
        <motion.div
          className="photo-carousel-track"
          drag={photos.length > 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.14}
          style={{ x: dragX }}
          animate={{ translateX: `-${activeIndex * 100}%` }}
          transition={reducedMotion ? { duration: 0 } : SPRING}
          onDragEnd={onDragEnd}
        >
          {photos.map((photo, index) => (
            <motion.div
              className="photo-carousel-slide"
              key={photo.src}
              animate={{ scale: index === activeIndex ? 0.96 : 0.86 }}
              transition={reducedMotion ? { duration: 0 } : SPRING}
              aria-hidden={index !== activeIndex}
            >
              <img src={photo.src} alt={photo.alt} loading={index === 0 ? "eager" : "lazy"} draggable={false} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {photos.length > 1 && (
        <div className="photo-carousel-thumbnails" aria-label="Choose a preview image">
          {photos.map((photo, index) => (
            <button
              className={`photo-carousel-thumbnail${index === activeIndex ? " is-active" : ""}`}
              type="button"
              key={photo.src}
              aria-label={`Show preview image ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
            >
              <img src={photo.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
