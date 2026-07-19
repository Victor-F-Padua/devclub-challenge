import { useState } from "react";

import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

import About from "./components/about/About";
import Courses from "./components/courses/Courses";
import Students from "./components/students/Students";
import Companies from "./components/companies/Companies";
import Tutors from "./components/tutors/Tutors";
import Testimonials from "./components/testimonials/Testimonials";
import Cta from "./components/cta/Cta";
import Footer from "./components/footer/Footer";

function App() {
  const [phase, setPhase] = useState("idle");

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Courses />
        <Students />
        <Companies />
        <Tutors />
        <Testimonials />
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