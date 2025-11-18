export default function LandingScreen({ onEnter }) {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-relaxed">
          Bozu së <em>User</em> ! Je te présente mon île
          <br />
          Comme celle d'où je viens, celle-ci n'existe pas seule.
        </h1>
        <p className="text-slate-400 max-w-md mx-auto mb-6">
          Clique pour entrer dans mon univers et découvrir mes îles.
        </p>
        <button
          onClick={onEnter}
          className="mt-2 px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-medium transition shadow-lg"
        >
          Entrer dans l’univers
        </button>
      </div>
    </div>
  );
}
