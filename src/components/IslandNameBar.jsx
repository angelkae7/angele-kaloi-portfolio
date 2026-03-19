// src/components/IslandNameBar.jsx
export default function IslandNameBar({ label }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-6 md:bottom-8 z-30 flex justify-center">
      <div className="pointer-events-auto island-name-pill">
        <span className="island-name-dot" />
        <span className="island-name-text">{label}</span>
      </div>
    </div>
  );
}
