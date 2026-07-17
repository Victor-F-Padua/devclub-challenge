import { useState } from "react";
import Intro from "./components/intro/Intro";
import Hero from "./components/hero/Hero";

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      <main>
        <Hero />
      </main>

      {!introFinished && (
        <Intro onFinish={() => setIntroFinished(true)} />
      )}
    </>
  );
}

export default App;