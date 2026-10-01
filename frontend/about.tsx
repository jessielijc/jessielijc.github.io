import { createRoot } from "react-dom/client";
import { TypingAnimationDemo } from "@/components/ui/typing-animation-demo";
import "./styles.css";

const sceneRoot = document.getElementById("about-spline");
if (sceneRoot) {
  void import("@/components/ui/demo").then(({ SplineSceneBasic }) => {
    createRoot(sceneRoot).render(<SplineSceneBasic />);
  });
}

const titleRoot = document.getElementById("about-title-loop");
if (titleRoot) createRoot(titleRoot).render(<TypingAnimationDemo />);
