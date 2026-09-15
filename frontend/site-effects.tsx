import { createRoot } from "react-dom/client";

import { Spotlight } from "@/components/ui/spotlight";

function GridPatternSpotlight() {
  return (
    <div className="site-grid-spotlight-canvas" aria-hidden="true">
      <Spotlight className="site-grid-spotlight-glow" size={90} springOptions={{ bounce: 0, damping: 30, stiffness: 180 }} trackViewport />
      <svg className="site-grid-spotlight-pattern" focusable="false">
        <defs>
          <pattern id="site-grid-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M0 12H12M12 12V0M12 12H24M12 12V24" />
            <rect x="10.5" y="10.5" width="3" height="3" rx="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#site-grid-pattern)" />
      </svg>
    </div>
  );
}

const effectRoot = document.getElementById("site-grid-spotlight");
if (effectRoot) createRoot(effectRoot).render(<GridPatternSpotlight />);
