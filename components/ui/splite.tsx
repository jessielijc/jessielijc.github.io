"use client";
import { Component, Suspense, lazy, useState, type ReactNode } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed)
      return (
        <div className="scene-status" role="status">
          <p>The 3D scene is unavailable right now.</p>
          <button type="button" onClick={() => this.setState({ failed: false })}>
            Try again
          </button>
        </div>
      );
    return this.props.children;
  }
}

function Loading() {
  return (
    <div className="scene-status" role="status">
      <span className="loader" aria-hidden="true" />
      <span>Loading interactive scene…</span>
    </div>
  );
}

function Scene({ scene, className }: SplineSceneProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="scene-container" aria-busy={!loaded}>
      {!loaded && <Loading />}
      <Spline scene={scene} className={className} onLoad={() => setLoaded(true)} />
    </div>
  );
}

export function SplineScene(props: SplineSceneProps) {
  return (
    <SceneBoundary>
      <Suspense fallback={<Loading />}>
        <Scene key={props.scene} {...props} />
      </Suspense>
    </SceneBoundary>
  );
}
