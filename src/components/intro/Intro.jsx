import { motion } from "motion/react";

import LogoAnimation from "./LogoAnimation";
import GreenCurtain from "./GreenCurtain";

function Intro({
  phase,
  onStart,
  onPixelsFinished,
  onCurtainCovered,
  onFinish,
}) {
  const isIdle = phase === "idle";
  const hasStarted = !isIdle;
  const isFalling = phase === "falling";
  const curtainIsActive =
    phase === "covering" || phase === "revealing";

  function handleStart() {
    if (isIdle) {
      onStart();
    }
  }

  return (
    <section
      aria-label="Introdução DevClub"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Fundo principal */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[#000A23]"
        initial={false}
        animate={{
          opacity: phase === "revealing" ? 0 : 1,
        }}
        transition={{ duration: 0 }}
      />

      {/* Brilho do fundo */}
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-[radial-gradient(circle_at_top,_rgba(124,42,232,0.2),_transparent_45%)]
        "
        initial={false}
        animate={{
          opacity: hasStarted ? 0 : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Logo animada */}
      <motion.div
        className="
          absolute
          left-1/2
          z-20
          flex
          -translate-x-1/2
          -translate-y-1/2
          flex-col
          items-center
        "
        initial={false}
        animate={{
          top: hasStarted ? "40%" : "28%",
          scale: isFalling ? 1.15 : 1,
          opacity: curtainIsActive ? 0 : 1,
        }}
        transition={{
          top: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          },
          scale: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          },
          opacity: {
            duration: 0.15,
          },
        }}
      >
        <LogoAnimation
          phase={phase}
          onFallComplete={onPixelsFinished}
        />

        <motion.p
          className="mt-4 text-2xl font-bold text-white"
          initial={false}
          animate={{
            opacity: hasStarted ? 0 : 1,
            y: hasStarted ? 12 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          DevClub
        </motion.p>
      </motion.div>

      {/* Conteúdo inicial */}
      <motion.div
        className="
          absolute
          inset-x-0
          top-[58%]
          z-20
          flex
          flex-col
          items-center
          px-6
          text-center
        "
        initial={false}
        animate={{
          opacity: hasStarted ? 0 : 1,
          y: hasStarted ? 35 : 0,
        }}
        transition={{
          duration: 0.35,
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
          disabled={hasStarted}
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
            hasStarted
              ? undefined
              : {
                  scale: 1.05,
                }
          }
          whileTap={
            hasStarted
              ? undefined
              : {
                  scale: 0.96,
                }
          }
        >
          Começar minha jornada
        </motion.button>
      </motion.div>

      <GreenCurtain
        phase={phase}
        onCovered={onCurtainCovered}
        onFinish={onFinish}
      />
    </section>
  );
}

export default Intro;