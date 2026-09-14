import { createRoot } from "react-dom/client";
import { SplineSceneBasic } from "@/components/ui/demo";
import TextLoopDemo from "@/components/ui/text-loop-demo";
import "./styles.css";

const sceneRoot = document.getElementById("about-spline");
if (sceneRoot) createRoot(sceneRoot).render(<SplineSceneBasic />);

const titleRoot = document.getElementById("about-title-loop");
if (titleRoot) createRoot(titleRoot).render(<TextLoopDemo />);
