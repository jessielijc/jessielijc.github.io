import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type VolunteerPhoto = {
  title: string;
  src: string;
  alt: string;
};

export function VolunteerArchive({ photos }: { photos: VolunteerPhoto[] }) {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const isOpen = active !== null;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft") setActive((current) => (current === null ? null : (current - 1 + photos.length) % photos.length));
      if (event.key === "ArrowRight") setActive((current) => (current === null ? null : (current + 1) % photos.length));
      if (event.key === "Tab") {
        const controls = document.querySelectorAll<HTMLButtonElement>(".volunteer-lightbox button");
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      openerRef.current?.focus();
    };
  }, [isOpen, photos.length]);

  if (photos.length === 0) return null;

  const open = (index: number, button: HTMLButtonElement) => {
    openerRef.current = button;
    setActive(index);
  };

  return (
    <>
      <div className="volunteer-archive" aria-label="Volunteer photo archive">
        {photos.map((photo, index) => (
          <button
            className="volunteer-archive-frame"
            key={photo.src}
            type="button"
            onClick={(event) => open(index, event.currentTarget)}
            aria-label={`View frame ${index + 1}: ${photo.title}`}
          >
            <span className="volunteer-archive-image">
              <img src={photo.src} alt="" loading="lazy" />
            </span>
            <span className="volunteer-archive-caption">
              <span>
                {String(index + 1).padStart(2, "0")} / {photo.title}
              </span>
              <span aria-hidden="true">↗</span>
            </span>
          </button>
        ))}
      </div>
      {active !== null &&
        createPortal(
          <div className="volunteer-lightbox" role="dialog" aria-modal="true" aria-label="Volunteer photograph" onClick={() => setActive(null)}>
            <div className="volunteer-lightbox-inner" onClick={(event) => event.stopPropagation()}>
              <div className="volunteer-lightbox-top">
                <span>
                  FIELD NOTES / {String(active + 1).padStart(2, "0")} OF {String(photos.length).padStart(2, "0")}
                </span>
                <button ref={closeRef} type="button" onClick={() => setActive(null)} aria-label="Close photograph">
                  CLOSE ×
                </button>
              </div>
              <img src={photos[active].src} alt={photos[active].alt} />
              <div className="volunteer-lightbox-bottom">
                <p>{photos[active].title}</p>
                <div>
                  <button
                    type="button"
                    onClick={() => setActive((active - 1 + photos.length) % photos.length)}
                    aria-label="Previous volunteer photograph"
                  >
                    ←
                  </button>
                  <button type="button" onClick={() => setActive((active + 1) % photos.length)} aria-label="Next volunteer photograph">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
