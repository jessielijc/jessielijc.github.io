import { createRoot } from "react-dom/client";
import { ThumbnailCarousel, type CarouselPhoto } from "@/components/ui/thumbnail-carousel";

// Temporary local images. Replace this list with Jessie's photographs when ready.
const previewPhotos: CarouselPhoto[] = [
  { src: "/assets/img/1.jpg", alt: "Preview landscape of a winding mountain road" },
  { src: "/assets/img/4.jpg", alt: "Preview landscape of an ocean sunset" },
  { src: "/assets/img/6.jpg", alt: "Preview landscape of hot-air balloons at sunset" },
];

const carouselRoot = document.getElementById("life-photo-carousel");
if (carouselRoot) createRoot(carouselRoot).render(<ThumbnailCarousel photos={previewPhotos} />);
