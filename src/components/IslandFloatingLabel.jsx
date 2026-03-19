// src/three/IslandFloatingLabel.jsx
import { Html } from "@react-three/drei";

export default function IslandFloatingLabel({ position = [0, 0, 0], label }) {
  return (
    <Html
      position={position}
      center
      distanceFactor={12}
      style={{ pointerEvents: "none" }}
    >
      <div className="island-name-pill">
        <span className="island-name-dot" />
        <span className="island-name-text">{label}</span>
      </div>
    </Html>
  );
}
