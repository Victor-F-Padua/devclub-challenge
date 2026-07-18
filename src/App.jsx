import { useState } from "react";

import Intro from "./components/intro/Intro";
import Hero from "./components/hero/Hero";

function App() {
  const [phase, setPhase] = useState("idle");

  return (
    <>
      {/* O Home já existe atrás da Intro */}
      <Hero />

      {phase !== "finished" && (
        <Intro
          phase={phase}
          onStart={() => setPhase("falling")}
          onPixelsFinished={() => setPhase("covering")}
          onCurtainCovered={() => setPhase("revealing")}
          onFinish={() => setPhase("finished")}
        />
      )}
    </>
  );
}

export default App;