// src/three/CameraRig.jsx
import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function CameraRig({ target }) {
  const { camera } = useThree();

  const targetPos = useRef(new THREE.Vector3(0, 8, 14));   // position caméra
  const lookAtPos = useRef(new THREE.Vector3(0, 1.5, 0));  // point regardé
  const hasInit = useRef(false);

  // position de départ loin au-dessus (arrivée dans l'univers)
  useEffect(() => {
    camera.position.set(0, 35, 60);
    camera.lookAt(0, 1.5, 0);
    hasInit.current = true;
  }, [camera]);

  // quand la cible change (île choisie), on met à jour les refs
  useEffect(() => {
    if (!target) return;
    const [tx, ty, tz] = target.position;
    const [lx, ly, lz] = target.lookAt;

    targetPos.current.set(tx, ty, tz);
    lookAtPos.current.set(lx, ly, lz);
  }, [target]);

  // interpolation douce vers la cible
  useFrame((_, delta) => {
    if (!hasInit.current) return;

    camera.position.lerp(targetPos.current, 1.4 * delta);
    camera.lookAt(lookAtPos.current);
  });

  return null;
}
