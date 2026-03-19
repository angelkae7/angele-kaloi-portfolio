// src/components/ContactDock.jsx
import * as Tooltip from "@radix-ui/react-tooltip";

const BASE =
  "w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center " +
  "bg-[rgba(15,23,42,0.96)] border border-[rgba(148,163,184,0.7)] " +
  "text-xs md:text-sm text-slate-300 " +
  "shadow-[0_8px_24px_rgba(15,23,42,0.85)] " +
  "hover:scale-110 hover:-translate-y-0.5 transition-all duration-200";

const LINKS = [
  {
    href: "https://github.com/angelkae7",
    label: "Voir mon GitHub",
    text: "GH",
    hover: "hover:bg-slate-700/60 hover:border-slate-300/80 hover:text-white",
  },
  {
    href: "https://www.linkedin.com/in/angele-kaloi",
    label: "Voir mon LinkedIn",
    text: "in",
    hover: "hover:bg-sky-500/20 hover:border-sky-400/80 hover:text-sky-200",
  },
  {
    href: "mailto:angelekaloi@gmail.com",
    label: "M'écrire un mail",
    text: "@",
    hover: "hover:bg-emerald-500/20 hover:border-emerald-400/70 hover:text-emerald-200",
  },
];

export default function ContactDock() {
  return (
    <Tooltip.Provider delayDuration={400}>
      <div className="pointer-events-none fixed bottom-4 right-3 md:right-6 md:bottom-6 z-20">
        <div className="pointer-events-auto flex flex-col md:flex-row items-end md:items-center gap-2">
          {LINKS.map(({ href, label, text, hover }) => (
            <Tooltip.Root key={label}>
              <Tooltip.Trigger asChild>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${BASE} ${hover}`}
                  aria-label={label}
                >
                  {text}
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="tooltip-content"
                  side="left"
                  sideOffset={8}
                >
                  {label}
                  <Tooltip.Arrow className="fill-[rgba(15,23,42,0.97)]" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          ))}
        </div>
      </div>
    </Tooltip.Provider>
  );
}
