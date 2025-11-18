// src/components/HudTopBar.jsx
export default function HudTopBar() {
  return (
    <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4">
      <div className="pointer-events-auto glass-panel px-4 py-2 text-sm font-medium text-slate-100">
        Angèle Kaloï — Portfolio interactif
      </div>
<p className="mt-1 text-[0.65rem] text-slate-400 text-center">
  Choisis une île pour explorer mes projets.
</p>

      {/* plus de "Île : Moi" ici */}
    </div>
    
  );
}
