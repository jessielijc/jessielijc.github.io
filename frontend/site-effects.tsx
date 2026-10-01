// A lightweight, canvas-drawn version of React Bits' Glow Cursor trail.
// The site is Jekyll-rendered, so this island can run without mounting React.
const effectRoot = document.getElementById("site-grid-spotlight");
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const pointerPreference = window.matchMedia("(pointer: coarse)");

if (effectRoot && !motionPreference.matches && !pointerPreference.matches) {
  const canvas = document.createElement("canvas");
  canvas.className = "site-glow-cursor";
  canvas.setAttribute("aria-hidden", "true");
  effectRoot.replaceChildren(canvas);

  const context = canvas.getContext("2d", { alpha: true });

  if (context) {
    const pointCount = 25;
    const points: Array<{ x: number; y: number }> = [];
    const target = { x: 0, y: 0 };
    let frame = 0;
    let lastMove = 0;
    let headColor = "#b509ac";
    let tailColor = "#e8a0e1";

    const updateColors = () => {
      const themeColor = getComputedStyle(document.documentElement).getPropertyValue("--global-theme-color").trim();
      headColor = themeColor || "#b509ac";
      tailColor = document.documentElement.dataset.theme === "dark" ? "#8fdded" : "#e8a0e1";
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.round(window.innerWidth * ratio);
      canvas.height = Math.round(window.innerHeight * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (time: number) => {
      frame = 0;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const idle = Math.max(0, time - lastMove - 650);
      const opacity = Math.max(0, 1 - idle / 420);
      if (opacity === 0 || document.hidden) {
        points.length = 0;
        return;
      }

      const previousHead = { ...points[0] };
      points[0].x += (target.x - points[0].x) * 0.32;
      points[0].y += (target.y - points[0].y) * 0.32;

      for (let index = points.length - 1; index > 1; index--) {
        points[index] = points[index - 1];
      }
      points[1] = previousHead;

      context.lineCap = "round";
      context.lineJoin = "round";

      for (let index = points.length - 1; index > 0; index--) {
        const progress = 1 - index / pointCount;
        const start = points[index];
        const end = points[index - 1];
        const strength = Math.pow(progress, 1.4) * opacity;
        if (Math.hypot(end.x - start.x, end.y - start.y) < 0.05) continue;

        context.strokeStyle = progress > 0.55 ? headColor : tailColor;
        context.globalAlpha = strength * 0.24;
        context.lineWidth = 11 + progress * 11;
        context.shadowColor = context.strokeStyle;
        context.shadowBlur = 15;
        context.beginPath();
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.stroke();

        context.globalAlpha = strength * 0.82;
        context.lineWidth = 0.8 + progress * 4.2;
        context.shadowBlur = 7;
        context.beginPath();
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.stroke();
      }

      context.shadowBlur = 0;
      context.globalAlpha = opacity;
      const head = context.createRadialGradient(points[0].x, points[0].y, 0, points[0].x, points[0].y, 16);
      head.addColorStop(0, "rgba(255, 255, 255, 0.92)");
      head.addColorStop(0.18, headColor);
      head.addColorStop(1, "transparent");
      context.fillStyle = head;
      context.beginPath();
      context.arc(points[0].x, points[0].y, 16, 0, Math.PI * 2);
      context.fill();
      context.globalAlpha = 1;

      frame = window.requestAnimationFrame(draw);
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      target.x = event.clientX;
      target.y = event.clientY;
      lastMove = performance.now();

      if (!points.length) {
        for (let index = 0; index < pointCount; index++) points.push({ ...target });
      }
      if (!frame) frame = window.requestAnimationFrame(draw);
    };

    const hide = () => {
      lastMove = performance.now() - 650;
      if (!frame && points.length) frame = window.requestAnimationFrame(draw);
    };

    updateColors();
    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    document.addEventListener("visibilitychange", hide);
    new MutationObserver(updateColors).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
  }
}
