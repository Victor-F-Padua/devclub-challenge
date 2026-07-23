import { useEffect, useState } from "react";

import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import CodeStream from "./components/code-stream/CodeStream";
import About from "./components/about/About";
import Courses from "./components/courses/Courses";
import Students from "./components/students/Students";
import Tutors from "./components/tutors/Tutors";
import Companies from "./components/companies/Companies";
import Testimonials from "./components/testimonials/Testimonials";
import Cta from "./components/cta/Cta";
import Footer from "./components/footer/Footer";
import SectionTransition from "./components/ui/SectionTransition";

function App() {
  const [phase, setPhase] = useState("idle");

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const introIsActive = phase !== "finished";

    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = html.style.overflow;
    const previousTouchAction = body.style.touchAction;

    if (phase === "idle") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }

    if (introIsActive) {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
      body.style.touchAction = "none";
    } else {
      body.style.overflow = "";
      html.style.overflow = "";
      body.style.touchAction = "";
    }

    return () => {
      body.style.overflow = previousBodyOverflow;
      html.style.overflow = previousHtmlOverflow;
      body.style.touchAction = previousTouchAction;
    };
  }, [phase]);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CodeStream />
        <About />

        <SectionTransition text="// aprender → construir → evoluir" />

        <Courses />
        <Students />

        <SectionTransition text="// projeto → feedback → oportunidade" />

        <Tutors />
        <Companies />
        <Testimonials />

        <SectionTransition
          text={'git commit -m "começar uma nova jornada"'}
        />

        <Cta />
      </main>

      <Footer />

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