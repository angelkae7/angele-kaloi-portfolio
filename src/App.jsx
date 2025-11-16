import { useState } from "react";
import LandingScreen from "./components/LandingScreen.jsx";
import Layout from "./components/Layout.jsx";

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  if (!hasEntered) {
    return <LandingScreen onEnter={() => setHasEntered(true)} />;
  }

  return <Layout />;
}
