import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function CameraRig() {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 8, 14));
  const lookAtPos = useRef(new THREE.Vector3(0, 0, 0));
  const hasInit = useRef(false);

  useEffect(() => {
    // Position de départ (loin, pour simuler l'arrivée dans l'univers)
    camera.position.set(0, 20, 40);
    camera.lookAt(0, 0, 0);
    hasInit.current = true;
  }, [camera]);

  useFrame((_, delta) => {
    if (!hasInit.current) return;

    // Interpolation douce vers la position cible
    camera.position.lerp(targetPos.current, 1.2 * delta);
    camera.lookAt(lookAtPos.current);
  });

  return null;
}
