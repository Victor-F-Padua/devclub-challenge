import { motion } from "motion/react";

const codeSnippets = [
  "<h1>Eu sou programador</h1>",
  'const jornada = "em progresso";',
  'git commit -m "evolução constante"',
  '<DevClub futuro="em construção" />',
  "function aprender() { return praticar(); }",
  "const oportunidade = criarProjeto();",
  "npm run build",
  'console.log("próximo nível");',
];

function MarqueeRow({
  reverse = false,
  highlighted = false,
  duration = 24,
}) {

  const horizontalMovement = reverse
    ? ["-50%", "0%"]
    : ["0%", "-50%"];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max will-change-transform"
        initial={false}
        animate={{ x: horizontalMovement }}
        transition={{ 
                duration,
                ease: "linear",
                repeat: Infinity,
              }}
      >
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            className="
              flex
              shrink-0
              items-center
              gap-14
              pr-14
              md:gap-20
              md:pr-20
            "
          >
            {codeSnippets.map((snippet) => (
              <span
                key={`${groupIndex}-${snippet}`}
                className={`
                  whitespace-nowrap
                  font-mono
                  text-xs
                  md:text-sm
                  ${
                    highlighted
                      ? "font-medium text-[#35E657]/90"
                      : "text-slate-400/25"
                  }
                `}
              >
                {snippet}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function CodeStream() {
  return (
    <section
      aria-hidden="true"
      className="
        relative
        overflow-hidden
        bg-[#000A23]
        py-6
        md:py-7
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-24
          w-2/3
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#35E657]/5
          blur-[70px]
        "
      />

      <div
        className="relative space-y-3"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <MarqueeRow reverse duration={34} />

        <MarqueeRow highlighted duration={25} />

        <MarqueeRow reverse duration={38} />
      </div>
    </section>
  );
}

export default CodeStream;