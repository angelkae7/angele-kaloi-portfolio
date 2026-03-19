// src/App.jsx (exemple)
import { useState } from "react";
import LandingScreen from "./components/LandingScreen.jsx";
import Layout from "./components/Layout.jsx";
import { SoundProvider } from "./sound/SoundProvider.jsx";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <SoundProvider>
      {entered ? (
        <Layout />
      ) : (
        <LandingScreen onEnter={() => setEntered(true)} />
      )}
    </SoundProvider>
  );
}
