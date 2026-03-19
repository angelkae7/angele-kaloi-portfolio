// src/three/Fireflies.jsx
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function buildFireflyData(count, radius) {
  const positions = new Float32Array(count * 3);
  const baseY = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const r = radius * (0.4 + Math.random() * 0.6);
    const angle = Math.random() * Math.PI * 2;
    const y = 4 + Math.random() * 8;
    positions[i * 3] = Math.cos(angle) * r;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = Math.sin(angle) * r;
    baseY[i] = y;
  }
  return { positions, baseY };
}

export default function Fireflies({ count = 40, radius = 35 }) {
  const pointsRef = useRef();

  const { positions, baseY } = useMemo(
    () => buildFireflyData(count, radius),
    [count, radius]
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] = baseY[i] + Math.sin(t * 0.6 + i) * 0.4;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.25}
        sizeAttenuation
        color="#38bdf8"
        transparent
        opacity={0.9}
      />
    </points>
  );
}
