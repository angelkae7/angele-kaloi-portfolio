import { useEffect, useState } from "react";

const FULL_TEXT =
  "Je suis Angèle Kaloï, développeuse web & créatrice d'expériences interactives…";

export default function IslandMeBubble({ onClick }) {
  const [phase, setPhase] = useState("dots"); // "dots" | "typing" | "done"
  const [displayed, setDisplayed] = useState("");
  const [dots, setDots] = useState(".");

  // Animation des trois petits points
  useEffect(() => {
    if (phase !== "dots") return;

    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length === 3 ? "." : prev + "."));
    }, 350);

    const timeout = setTimeout(() => {
      setPhase("typing");
      setDots("");
    }, 900);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(timeout);
    };
  }, [phase]);

  // Animation typing
  useEffect(() => {
    if (phase !== "typing") return;

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setDisplayed(FULL_TEXT.slice(0, index));
      if (index >= FULL_TEXT.length) {
        clearInterval(interval);
        setPhase("done");
      }
    }, 25);

    return () => clearInterval(interval);
  }, [phase]);

  // Fix 8 — click during animation skips to done; click when done opens overlay
  const handleClick = () => {
    if (phase !== "done") {
      setDisplayed(FULL_TEXT);
      setPhase("done");
    } else {
      onClick();
    }
  };

  const textToShow = phase === "dots" ? dots : displayed || "";

  return (
    <div className="pointer-events-none absolute inset-x-0 top-32 md:top-40 flex justify-center z-20 px-4">
      <button
        type="button"
        onClick={handleClick}
        className="pointer-events-auto message-bubble"
      >
        <p className="message-bubble-label">Île centrale — Présentation</p>

        <p className="message-bubble-text">
          {textToShow}
          {phase === "done" && (
            <span className="message-bubble-cta">
              {" "}
              Cliquer pour en savoir plus
            </span>
          )}
        </p>
      </button>
    </div>
  );
}
