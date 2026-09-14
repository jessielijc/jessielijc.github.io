import TextLoop from "@/components/ui/text-loop";

export default function TextLoopDemo() {
  return (
    <TextLoop
      staticText="Hi, I'm"
      rotatingTexts={["Jessie", "a Roboticist", "a Researcher"]}
      interval={2600}
      className="about-text-loop"
      rotatingTextClassName="about-rotating-text"
      backgroundClassName="about-loop-highlight"
      cursorClassName="about-loop-cursor"
    />
  );
}
