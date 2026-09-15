import TextLoop from "@/components/ui/text-loop";

export default function TextLoopDemo() {
  return (
    <TextLoop
      staticText="Hi, I'm"
      text="Jessie"
      startDelay={450}
      typingSpeed={145}
      className="about-text-loop"
      rotatingTextClassName="about-rotating-text"
      backgroundClassName="about-loop-highlight"
      cursorClassName="about-loop-cursor"
    />
  );
}
