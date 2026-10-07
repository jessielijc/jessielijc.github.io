import { createRoot } from "react-dom/client";
import { CircularGallery, type CircularGalleryItem } from "@/components/ui/circular-gallery";
import { ThumbnailCarousel, type CarouselPhoto } from "@/components/ui/thumbnail-carousel";

const volunteerPhotos: CircularGalleryItem[] = [
  {
    title: "Campus response team",
    src: "/assets/img/volunteering-02.jpg",
    alt: "Student Red Cross volunteers in red vests pose beside their response tent",
  },
  {
    title: "Community outreach",
    src: "/assets/img/volunteering-03.jpg",
    alt: "Red Cross volunteers and medical staff gather at an outdoor outreach event",
  },
  { title: "CPR training", src: "/assets/img/volunteering-04.jpg", alt: "Two volunteers demonstrate CPR with a training manikin in a lecture hall" },
  {
    title: "Red Cross team training",
    src: "/assets/img/volunteering-05.jpg",
    alt: "SUSTech Red Cross students stand with their banner after a training session",
  },
  { title: "SUSTech Red Cross", src: "/assets/img/volunteering-06.jpg", alt: "SUSTech Red Cross student members gather on the campus stairs" },
  { title: "Emergency education", src: "/assets/img/volunteering-07.jpg", alt: "A volunteer presents emergency response information to an audience" },
  {
    title: "Student volunteer forum",
    src: "/assets/img/volunteering-08.jpg",
    alt: "Participants gather in a lecture hall for a Red Cross student forum",
  },
  {
    title: "Campus volunteer gathering",
    src: "/assets/img/volunteering-09.jpg",
    alt: "A large group of SUSTech Red Cross volunteers pose together on campus",
  },
  { title: "First-aid outreach", src: "/assets/img/volunteering-11.jpg", alt: "Volunteers share first-aid information at an outdoor campus booth" },
  { title: "World Red Cross Day", src: "/assets/img/volunteering-14.jpg", alt: "Red Cross volunteers and students celebrate at an outdoor event" },
  {
    title: "First-aid demonstration booth",
    src: "/assets/img/volunteering-15.jpg",
    alt: "Students visit a first-aid demonstration booth on campus",
  },
  {
    title: "Red Cross Day volunteers",
    src: "/assets/img/volunteering-16.jpg",
    alt: "Student volunteers pose in front of a World Red Cross Day display",
  },
  {
    title: "Red Cross Day gathering",
    src: "/assets/img/volunteering-17.jpg",
    alt: "Red Cross volunteers and students gather for a group photo outdoors",
  },
  {
    title: "Stretcher preparation",
    src: "/assets/img/volunteering-18.jpg",
    alt: "First-aid volunteers prepare an orange stretcher for a response exercise",
  },
  {
    title: "Emergency response drill",
    src: "/assets/img/volunteering-19.jpg",
    alt: "First-aid volunteers carry a stretcher during an outdoor drill",
  },
];

const photos: CarouselPhoto[] = [
  { src: "/assets/img/photography-08.jpg", alt: "People on a beach at sunset" },
  { src: "/assets/img/photography-09.jpg", alt: "Sunlight on the sea near a wooded island" },
  { src: "/assets/img/photography-01.jpg", alt: "Riverfront skyline and boats" },
  { src: "/assets/img/photography-02.jpg", alt: "A street lined with colorful shop signs" },
  { src: "/assets/img/photography-03.jpg", alt: "White heritage building with colorful shutters" },
  { src: "/assets/img/photography-04.jpg", alt: "Indoor waterfall beneath a glass ceiling" },
  { src: "/assets/img/photography-05.jpg", alt: "Waterfront skyline at night" },
  { src: "/assets/img/photography-06.jpg", alt: "Daytime view across a city riverfront" },
  { src: "/assets/img/photography-07.jpg", alt: "A warmly lit street at dusk" },
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
