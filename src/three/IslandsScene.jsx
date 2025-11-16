import IslandMesh from "./IslandMesh.jsx";

export default function IslandsScene({ onMeIslandClick }) {
  return (
    <>
      <fog attach="fog" args={["#020617", 15, 60]} />

      <IslandMesh
        position={[0, 0, 0]}
        baseColor="#f97316"
        grassColor="#22c55e"
        accentColor="#e5e7eb"
        onClick={onMeIslandClick}
      />
    </>
  );
}
