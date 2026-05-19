import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-950 text-slate-100 px-6 text-center gap-4">
          <p className="text-4xl" aria-hidden="true">🌊</p>
          <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
            Une vague inattendue a perturbé l'archipel.<br />
            Rechargez la page pour retrouver les îles.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium transition-colors duration-150"
          >
            Recharger
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
