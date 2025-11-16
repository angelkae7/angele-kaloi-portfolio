// src/components/IslandNameBar.jsx
export default function IslandNameBar() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-4 md:bottom-6 z-20 flex justify-center">
      <div className="pointer-events-auto island-name-pill">
        <span className="island-name-dot" />
        <span className="island-name-text">Île : Moi</span>
      </div>
    </div>
  );
}
