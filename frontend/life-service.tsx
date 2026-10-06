import { createRoot } from "react-dom/client";
import { CircularGallery, type CircularGalleryItem } from "@/components/ui/circular-gallery";
import { ThumbnailCarousel, type CarouselPhoto } from "@/components/ui/thumbnail-carousel";

const volunteerPhotos: CircularGalleryItem[] = [
  { title: "First-Aid Outreach", src: "/assets/img/volunteer-photo-placeholder.svg", alt: "Placeholder for first-aid outreach photos" },
  { title: "Training Sessions", src: "/assets/img/volunteer-photo-placeholder.svg", alt: "Placeholder for first-aid training photos" },
  { title: "Campus Response", src: "/assets/img/volunteer-photo-placeholder.svg", alt: "Placeholder for campus response photos" },
  { title: "Community Events", src: "/assets/img/volunteer-photo-placeholder.svg", alt: "Placeholder for community event photos" },
  { title: "Rescue Instruction", src: "/assets/img/volunteer-photo-placeholder.svg", alt: "Placeholder for rescue instruction photos" },
];

const photos: CarouselPhoto[] = [
  { src: "/assets/img/photography-01.jpg", alt: "Riverfront skyline and boats" },
  { src: "/assets/img/photography-02.jpg", alt: "A street lined with colorful shop signs" },
  { src: "/assets/img/photography-03.jpg", alt: "White heritage building with colorful shutters" },
  { src: "/assets/img/photography-04.jpg", alt: "Indoor waterfall beneath a glass ceiling" },
  { src: "/assets/img/photography-05.jpg", alt: "Waterfront skyline at night" },
  { src: "/assets/img/photography-06.jpg", alt: "Daytime view across a city riverfront" },
  { src: "/assets/img/photography-07.jpg", alt: "A warmly lit street at dusk" },
  { src: "/assets/img/photography-08.jpg", alt: "People on a beach at sunset" },
  { src: "/assets/img/photography-09.jpg", alt: "Sunlight on the sea near a wooded island" },
  { src: "/assets/img/photography-10.jpg", alt: "A tram crossing a busy street" },
  { src: "/assets/img/photography-11.jpg", alt: "Decorative castle turret against the sky" },
  { src: "/assets/img/photography-12.jpg", alt: "A city street beneath a blue high-rise" },
  { src: "/assets/img/photography-13.jpg", alt: "Clouds above a wooded coastal mountain" },
  { src: "/assets/img/photography-14.jpg", alt: "Cable cars crossing a bay" },
  { src: "/assets/img/photography-15.jpg", alt: "Neon signs along a street at night" },
  { src: "/assets/img/photography-16.jpg", alt: "Night skyline beyond a beach" },
  { src: "/assets/img/photography-17.jpg", alt: "Roses in front of a traditional building" },
  { src: "/assets/img/photography-18.jpg", alt: "Red bougainvillea on a sunlit wall" },
  { src: "/assets/img/photography-19.jpg", alt: "A garden lake surrounded by trees" },
];

const carouselRoot = document.getElementById("life-photo-carousel");
if (carouselRoot) createRoot(carouselRoot).render(<ThumbnailCarousel photos={photos} />);

const volunteerGalleryRoot = document.getElementById("volunteer-photo-gallery");
if (volunteerGalleryRoot) createRoot(volunteerGalleryRoot).render(<CircularGallery items={volunteerPhotos} />);
