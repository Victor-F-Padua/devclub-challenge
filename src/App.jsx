import {
  useEffect,
  useState,
} from "react";

import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import CodeStream from "./components/code-stream/CodeStream";

import About from "./components/about/About";
import Students from "./components/students/Students";
import Companies from "./components/companies/Companies";
import Tutors from "./components/tutors/Tutors";
import Courses from "./components/courses/Courses";
import Testimonials from "./components/testimonials/Testimonials";
import Cta from "./components/cta/Cta";
import Footer from "./components/footer/Footer";

function App() {
  const [phase, setPhase] =
    useState("idle");

  useEffect(() => {
    const body = document.body;
    const html =
      document.documentElement;

    const introIsActive =
      phase !== "finished";

    if (phase === "idle") {
      window.scrollTo(0, 0);
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
      body.style.overflow = "";
      html.style.overflow = "";
      body.style.touchAction = "";
    };
  }, [phase]);

  return (
    <>
      <Navbar />


<main>
  <Hero />
  <CodeStream />
  <About />
  <Courses />
  <Students />
  <Tutors />
  <Companies />
  <Testimonials />
  <Cta />
</main>


      <Footer />

      {phase !== "finished" && (
        <Intro
          phase={phase}
          onStart={() =>
            setPhase("falling")
          }
          onPixelsFinished={() =>
            setPhase("covering")
          }
          onCurtainCovered={() =>
            setPhase("revealing")
          }
          onFinish={() =>
            setPhase("finished")
          }
        />
      )}
    </>
  );
}

export default App;