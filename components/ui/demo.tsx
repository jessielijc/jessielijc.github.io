"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { FlowButton } from "@/components/ui/flow-button";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
const sceneUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export function SplineSceneBasic() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <Card ref={ref} className="robotics-card relative overflow-hidden">
      <Spotlight />
      <div className="robotics-layout">
        <div className="robotics-copy relative z-10 flex flex-col justify-center">
          <p className="about-eyebrow">Robotics · In motion</p>
          <h2 id="robotics-scene-title">
            Intelligence that
            <br />
            meets the real world.
          </h2>
          <p className="robotics-description">Exploring how robots sense, learn, and interact — with people and the world around them.</p>
          <a className="robotics-link" href="#research-interests">
            Explore my research <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="robotics-visual relative" role="group" aria-label="Interactive 3D robot illustration">
          {active ? (
            <SplineScene scene={sceneUrl} className="w-full h-full" />
          ) : (
            <div className="scene-status">
              <p>Explore the interactive 3D scene.</p>
              <FlowButton text="Load 3D scene" onClick={() => setActive(true)} />
            </div>
          )}
          <div className="scene-toolbar">
            <span>
              <MoveUpRight size={13} aria-hidden="true" /> Interactive 3D
            </span>
            {active && <FlowButton text="Pause" className="px-6 py-2 text-xs" onClick={() => setActive(false)} aria-label="Pause 3D scene" />}
          </div>
        </div>
      </div>
    </Card>
  );
}
