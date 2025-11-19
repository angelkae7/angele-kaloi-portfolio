// src/components/ContactDock.jsx
export default function ContactDock() {
  return (
    <div className="pointer-events-none fixed bottom-4 right-3 md:right-6 md:bottom-6 z-20">
      <div
        className="
          pointer-events-auto
          flex flex-col md:flex-row
          items-end md:items-center
          gap-2
        "
      >
        {/* GitHub */}
        <a
          href="https://github.com/angelkae7"
          target="_blank"
          rel="noreferrer"
          className="
            w-9 h-9 md:w-10 md:h-10
            rounded-full
            flex items-center justify-center
            bg-[rgba(15,23,42,0.96)]
            border border-[rgba(148,163,184,0.8)]
            text-xs md:text-sm text-slate-100
            shadow-[0_12px_30px_rgba(15,23,42,0.9)]
            hover:bg-[rgba(15,23,42,1)]
            transition
          "
          aria-label="Voir mon GitHub"
        >
          GH
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/angele-kaloi"
          target="_blank"
          rel="noreferrer"
          className="
            w-9 h-9 md:w-10 md:h-10
            rounded-full
            flex items-center justify-center
            bg-[rgba(15,23,42,0.96)]
            border border-[rgba(148,163,184,0.8)]
            text-xs md:text-sm text-slate-100
            shadow-[0_12px_30px_rgba(15,23,42,0.9)]
            hover:bg-[rgba(15,23,42,1)]
            transition
          "
          aria-label="Voir mon LinkedIn"
        >
          in
        </a>

        {/* Email */}
        <a
          href="mailto:angele.kaloi@example.com"
          className="
            w-9 h-9 md:w-10 md:h-10
            rounded-full
            flex items-center justify-center
            bg-[rgba(15,23,42,0.96)]
            border border-[rgba(148,163,184,0.8)]
            text-xs md:text-sm text-slate-100
            shadow-[0_12px_30px_rgba(15,23,42,0.9)]
            hover:bg-[rgba(15,23,42,1)]
            transition
          "
          aria-label="M’écrire un mail"
        >
          @
        </a>
      </div>
    </div>
  );
}
