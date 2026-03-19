// src/components/IslandClickHint.jsx
import { useEffect } from "react";

// Bouncing arrow + label that appears when arrows navigate to a new island.
// Auto-dismisses after 3 s or immediately when the user clicks/touches.
export default function IslandClickHint({ onDismiss }) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 3000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div
      className="hint-container pointer-events-none fixed inset-0 z-20 flex flex-col items-center justify-center gap-2"
    >
      <span
        className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-sky-300"
        style={{ textShadow: "0 0 10px rgba(56,189,248,0.9), 0 0 22px rgba(56,189,248,0.5)" }}
      >
        Clique pour explorer
      </span>
      <span
        className="hint-arrow text-xl leading-none text-sky-400"
        style={{ textShadow: "0 0 12px rgba(56,189,248,1), 0 0 26px rgba(56,189,248,0.6)" }}
      >
        ↓
      </span>
    </div>
  );
}
