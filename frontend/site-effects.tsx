// A quiet, watercolor-like cursor ripple shared by every Jekyll page.
const effectRoot = document.getElementById("site-grid-spotlight");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const coarsePointer = window.matchMedia("(pointer: coarse)");

if (effectRoot && !reduceMotion.matches && !coarsePointer.matches) {
  const canvas = document.createElement("canvas");
  canvas.className = "site-glow-cursor";
  canvas.setAttribute("aria-hidden", "true");
  effectRoot.replaceChildren(canvas);

  const context = canvas.getContext("2d", { alpha: true });

  if (context) {
    type Ripple = { x: number; y: number; born: number; emphasis: number };
    const ripples: Ripple[] = [];
    const pointer = { x: 0, y: 0 };
    const halo = { x: 0, y: 0 };
    let rgb = "143, 121, 165";
    let frame = 0;
    let lastMove = 0;
    let lastRipple = 0;
    let hasPointer = false;

    const updateColor = () => {
      rgb = getComputedStyle(document.documentElement).getPropertyValue("--site-ripple-rgb").trim() || "143, 121, 165";
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.round(window.innerWidth * ratio);
      canvas.height = Math.round(window.innerHeight * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const render = (time: number) => {
      frame = 0;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      if (document.hidden) {
        ripples.length = 0;
        hasPointer = false;
        return;
      }

      for (let index = ripples.length - 1; index >= 0; index--) {
        const ripple = ripples[index];
        const progress = Math.min(1, (time - ripple.born) / 840);
        if (progress >= 1) {
          ripples.splice(index, 1);
          continue;
        }

        const radius = 18 + progress * 49;
        const fade = Math.pow(1 - progress, 1.6) * ripple.emphasis;
        const wash = context.createRadialGradient(ripple.x, ripple.y, 0, ripple.x, ripple.y, radius);
        wash.addColorStop(0, `rgba(${rgb}, ${0.065 * fade})`);
        wash.addColorStop(0.65, `rgba(${rgb}, ${0.025 * fade})`);
        wash.addColorStop(1, `rgba(${rgb}, 0)`);
        context.fillStyle = wash;
        context.beginPath();
        context.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2);
        context.fill();

        context.beginPath();
        context.arc(ripple.x, ripple.y, radius * 0.78, 0, Math.PI * 2);
        context.strokeStyle = `rgba(${rgb}, ${0.15 * fade})`;
        context.lineWidth = 1.1;
        context.stroke();
      }

      const idle = Math.max(0, time - lastMove - 420);
      const haloOpacity = Math.max(0, 1 - idle / 330);
      if (hasPointer && haloOpacity > 0) {
        halo.x += (pointer.x - halo.x) * 0.3;
        halo.y += (pointer.y - halo.y) * 0.3;
        const glow = context.createRadialGradient(halo.x, halo.y, 0, halo.x, halo.y, 39);
        glow.addColorStop(0, `rgba(${rgb}, ${0.11 * haloOpacity})`);
        glow.addColorStop(0.5, `rgba(${rgb}, ${0.045 * haloOpacity})`);
        glow.addColorStop(1, `rgba(${rgb}, 0)`);
        context.fillStyle = glow;
        context.beginPath();
        context.arc(halo.x, halo.y, 39, 0, Math.PI * 2);
        context.fill();
      }

      if (ripples.length || haloOpacity > 0) frame = window.requestAnimationFrame(render);
      else hasPointer = false;
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const addRipple = (x: number, y: number, emphasis = 1) => {
      ripples.push({ x, y, born: performance.now(), emphasis });
      if (ripples.length > 6) ripples.shift();
      lastRipple = performance.now();
      schedule();
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      lastMove = performance.now();

      if (!hasPointer) {
        halo.x = pointer.x;
        halo.y = pointer.y;
        hasPointer = true;
      }

      const newest = ripples[ripples.length - 1];
      if (!newest || (Math.hypot(pointer.x - newest.x, pointer.y - newest.y) > 42 && lastMove - lastRipple > 65)) {
        addRipple(pointer.x, pointer.y);
      }
      schedule();
    };

    const hide = () => {
      lastMove = performance.now() - 420;
      schedule();
    };

    updateColor();
    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    document.addEventListener("visibilitychange", hide);
    new MutationObserver(updateColor).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
  }
}
