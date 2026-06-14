import { useEffect, useRef } from "react";
import { initFluid } from "../lib/fluid";

/** Fixed full-viewport ambient ASCII-fluid canvas, plus a readability dim. */
export function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const cleanup = initFluid(canvasRef.current);
    return cleanup;
  }, []);

  return (
    <>
      <canvas className="ambient-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="bg-dim" aria-hidden="true" />
    </>
  );
}
