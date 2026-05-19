import { useState } from "react";
import LandingScreen from "./components/LandingScreen.jsx";
import Layout from "./components/Layout.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { SoundProvider } from "./sound/SoundProvider.jsx";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <ErrorBoundary>
      <SoundProvider>
        {entered ? (
          <Layout />
        ) : (
          <LandingScreen onEnter={() => setEntered(true)} />
        )}
      </SoundProvider>
    </ErrorBoundary>
  );
}
