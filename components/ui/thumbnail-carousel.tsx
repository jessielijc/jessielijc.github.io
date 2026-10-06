import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const thumbnailStripRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || photos.length < 2) return;

    const interval = window.setInterval(() => {
      const carousel = carouselRef.current;
      if (dragX.get() === 0 && !carousel?.matches(":hover") && !carousel?.contains(document.activeElement)) {
        setActiveIndex((current) => (current + 1) % photos.length);
      }
    }, AUTO_DELAY);

    return () => window.clearInterval(interval);
  }, [dragX, photos.length, reducedMotion]);

  useEffect(() => {
    const strip = thumbnailStripRef.current;
    const activeThumbnail = strip?.children[activeIndex] as HTMLElement | undefined;
    if (!strip || !activeThumbnail) return;

    const stripRect = strip.getBoundingClientRect();
    const thumbRect = activeThumbnail.getBoundingClientRect();
    strip.scrollTo({
      left: strip.scrollLeft + thumbRect.left - stripRect.left - (strip.clientWidth - thumbRect.width) / 2,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }, [activeIndex, reducedMotion]);

  if (photos.length === 0) return null;

  const showPrevious = () => setActiveIndex((current) => (current - 1 + photos.length) % photos.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % photos.length);

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
      ref={carouselRef}
      className="photo-carousel"
      aria-roledescription="carousel"
      aria-label="Travel photography"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          showPrevious();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          showNext();
        }
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
              animate={{ scale: index === activeIndex ? 1 : 0.96 }}
              transition={reducedMotion ? { duration: 0 } : SPRING}
              aria-hidden={index !== activeIndex}
            >
              {index === activeIndex && <img className="photo-carousel-backdrop" src={photo.src} alt="" aria-hidden="true" draggable={false} />}
              <img className="photo-carousel-image" src={photo.src} alt={photo.alt} loading={index === 0 ? "eager" : "lazy"} draggable={false} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {photos.length > 1 && (
        <div className="photo-carousel-navigation">
          <div ref={thumbnailStripRef} className="photo-carousel-thumbnails" aria-label="Choose a photograph">
            {photos.map((photo, index) => (
              <button
                className={`photo-carousel-thumbnail${index === activeIndex ? " is-active" : ""}`}
                type="button"
                key={photo.src}
                aria-label={`Show photograph ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => setActiveIndex(index)}
              >
                <img src={photo.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
          <div className="photo-carousel-toolbar">
            <span className="photo-carousel-counter">
              {String(activeIndex + 1).padStart(2, "0")} <span>/ {String(photos.length).padStart(2, "0")}</span>
            </span>
            <div className="photo-carousel-progress" aria-hidden="true">
              <span style={{ width: `${((activeIndex + 1) / photos.length) * 100}%` }} />
            </div>
            <div className="photo-carousel-controls">
              <button type="button" onClick={showPrevious} aria-label="Previous photograph">
                ←
              </button>
              <button type="button" onClick={showNext} aria-label="Next photograph">
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
