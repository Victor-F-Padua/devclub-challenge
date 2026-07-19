import { useState } from "react";

import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

function App() {
  const [phase, setPhase] = useState("idle");

  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>

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