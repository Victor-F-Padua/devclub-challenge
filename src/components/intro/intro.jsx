import { useState } from "react";
import { motion } from "motion/react";

import LogoAnimation from "./LogoAnimation";

function Intro({ onFinish }) {
  const [phase, setPhase] = useState("idle");

  const shouldBuild = phase !== "idle";
  const isExiting = phase === "exiting";

  function handleStart() {
    if (phase !== "idle") {
      return;
    }

    setPhase("building");
  }

  function handleBuildComplete() {
    if (phase === "building") {
      setPhase("exiting");
    }
  }

  function handleIntroAnimationComplete() {
    if (phase === "exiting") {
      onFinish();
    }
  }

  return (
    <motion.section
      className="fixed inset-0 z-50 overflow-hidden bg-[#000A23]"
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: isExiting ? 0 : 1,
      }}
      transition={{
        duration: isExiting ? 0.45 : 0,
        ease: "easeInOut",
      }}
      onAnimationComplete={handleIntroAnimationComplete}
    >
      {/* Brilho do fundo */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,_rgba(105,0,155,0.22),_transparent_46%)]
        "
      />

      {/* Logo */}
      <motion.div
        className="absolute z-10 flex flex-col items-center"
        style={{
          left: "50%",
        }}
        initial={{
          top: "28%",
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          top: shouldBuild ? "22%" : "28%",
          x: "-50%",
          y: "-50%",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <LogoAnimation
          phase={phase}
          onBuildComplete={handleBuildComplete}
        />

        <motion.p
          className="mt-4 text-2xl font-bold text-white"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            shouldBuild
              ? {
                  opacity: 0,
                  y: 12,
                }
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          transition={{
            duration: 0.35,
            delay: shouldBuild ? 0 : 0.2,
          }}
        >
          DevClub
        </motion.p>
      </motion.div>

      {/* Conteúdo */}
      <motion.div
        className="
          absolute
          inset-x-0
          top-[58%]
          z-10
          flex
          flex-col
          items-center
          px-6
          text-center
        "
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={
          shouldBuild
            ? {
                opacity: 0,
                y: 30,
              }
            : {
                opacity: 1,
                y: 0,
              }
        }
        transition={{
          duration: shouldBuild ? 0.3 : 0.7,
          delay: shouldBuild ? 0 : 0.25,
          ease: "easeOut",
        }}
      >
        <h1 className="text-3xl font-bold text-white md:text-5xl">
          Sua jornada começa aqui
        </h1>

        <p className="mt-4 max-w-xl text-base text-slate-300 md:text-lg">
          Aprenda, construa projetos e transforme código em oportunidade.
        </p>

        <motion.button
          type="button"
          onClick={handleStart}
          disabled={shouldBuild}
          className="
            mt-8
            rounded-full
            bg-[#3AD153]
            px-8
            py-3
            font-semibold
            text-[#000A23]
            disabled:cursor-default
          "
          whileHover={
            shouldBuild
              ? undefined
              : {
                  scale: 1.05,
                }
          }
          whileTap={
            shouldBuild
              ? undefined
              : {
                  scale: 0.96,
                }
          }
        >
          Começar minha jornada
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

export default Intro;
