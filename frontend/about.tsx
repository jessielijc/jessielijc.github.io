import { createRoot } from "react-dom/client";
import { SplineSceneBasic } from "@/components/ui/demo";
import "./styles.css";
const root = document.getElementById("about-spline");
if (root) createRoot(root).render(<SplineSceneBasic />);
