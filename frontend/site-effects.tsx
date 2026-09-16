const effectRoot = document.getElementById("site-grid-spotlight");

if (effectRoot) {
  effectRoot.innerHTML = `
    <div class="site-grid-spotlight-canvas" aria-hidden="true">
      <div class="site-grid-spotlight-glow" aria-hidden="true"></div>
      <svg class="site-grid-spotlight-pattern" focusable="false" aria-hidden="true">
        <defs>
          <pattern id="site-grid-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M0 12H12M12 12V0M12 12H24M12 12V24"></path>
            <rect x="10.5" y="10.5" width="3" height="3" rx="1"></rect>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#site-grid-pattern)"></rect>
      </svg>
    </div>
  `;

  const glow = effectRoot.querySelector<HTMLElement>(".site-grid-spotlight-glow");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches;

  if (glow && !reduceMotion) {
    const radius = 45;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let animationFrame = 0;
    let visible = false;

    const render = () => {
      currentX += (targetX - currentX) * 0.24;
      currentY += (targetY - currentY) * 0.24;
      glow.style.transform = `translate3d(${currentX - radius}px, ${currentY - radius}px, 0)`;

      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        animationFrame = window.requestAnimationFrame(render);
      } else {
        animationFrame = 0;
      }
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      targetX = event.clientX;
      targetY = event.clientY;

      if (!visible) {
        currentX = targetX;
        currentY = targetY;
        visible = true;
        glow.style.opacity = "1";
      }

      if (!animationFrame) animationFrame = window.requestAnimationFrame(render);
    };

    const hide = () => {
      visible = false;
      glow.style.opacity = "0";
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
  }
}
