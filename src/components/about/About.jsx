import { motion } from "motion/react";

const journeySteps = [
  {
    number: "01",
    category: "Fundamentos",
    title: "Aprenda com direção",
    description:
      "Siga uma trilha organizada, domine os fundamentos e entenda como cada tecnologia se conecta dentro de um projeto.",
  },
  {
    number: "02",
    category: "Prática",
    title: "Construa projetos reais",
    description:
      "Saia da teoria e transforme conhecimento em aplicações que resolvem problemas e fortalecem seu portfólio.",
  },
  {
    number: "03",
    category: "Evolução",
    title: "Receba orientação",
    description:
      "Conte com mentores, tutores e uma comunidade preparada para ajudar quando surgirem dúvidas e dificuldades.",
  },
  {
    number: "04",
    category: "Carreira",
    title: "Conquiste oportunidades",
    description:
      "Desenvolva as habilidades técnicas e profissionais necessárias para se aproximar do mercado de programação.",
  },
];

function About() {
  return (
    <section
      id="jornada"
      className="
        relative 
        scroll-mt-24
        overflow-hidden
        bg-[#000A23]
        px-6
        py-28
        py-20
        lg:pt-16
        lg:pb-32
      "
    >
      {/* Brilho decorativo */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-48
          top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#68009B]/15
          blur-[150px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#35E657]/5
          blur-[140px]
        "
      />

      <div
        className="
          relative 
          lg:mt-12
          z-10
          mx-auto
          grid
          max-w-7xl
          gap-16
          lg:grid-cols-[0.82fr_1.18fr]
          lg:gap-24
        "
      >
        {/* Conteúdo esquerdo */}
        <div className="lg:sticky lg:top-36 lg:self-start">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#35E657]
            "
          >
            A jornada DevClub
          </p>

          <h2
            className="
              mt-5
              max-w-xl
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-white
              md:text-5xl
              lg:text-6xl
            "
          >
            Você não precisa descobrir tudo{" "}
            <span className="text-[#35E657]">sozinho.</span>
          </h2>

          <p
            className="
              mt-7
              max-w-lg
              text-base
              leading-8
              text-slate-400
              md:text-lg
            "
          >
            Uma sequência construída para transformar aulas em prática, prática
            em projetos e projetos em oportunidades.
          </p>

          <div
            className="
              mt-10
              flex
              items-end
              gap-5
              border-t
              border-white/10
              pt-8
            "
          >
            <strong
              className="
                text-6xl
                font-bold
                leading-none
                text-white
                md:text-7xl
              "
            >
              04
            </strong>

            <div className="pb-1">
              <p className="font-semibold text-white">etapas conectadas</p>

              <p className="mt-1 text-sm text-slate-500">
                do primeiro código ao mercado
              </p>
            </div>
          </div>
        </div>

        {/* Etapas */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-10
              left-8
              top-10
              hidden
              w-px
              bg-gradient-to-b
              from-[#35E657]/60
              via-[#68009B]/50
              to-transparent
              md:block
            "
          />

          <div className="space-y-5">
            {journeySteps.map((step, index) => (
              <motion.article
                key={step.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-6
                  backdrop-blur-sm
                  md:p-8
                "
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.45,
                }}
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Brilho do hover */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#35E657]/0
                    blur-[70px]
                    transition-colors
                    duration-500
                    group-hover:bg-[#35E657]/10
                  "
                />

                <div
                  className="
                    relative
                    grid
                    gap-6
                    md:grid-cols-[64px_1fr_auto]
                    md:items-center
                  "
                >
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#35E657]/25
                      bg-[#35E657]/5
                      font-bold
                      text-[#35E657]
                      transition
                      duration-300
                      group-hover:border-[#35E657]/60
                      group-hover:bg-[#35E657]/10
                    "
                  >
                    {step.number}
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#35E657]
                      "
                    >
                      {step.category}
                    </p>

                    <h3
                      className="
                        mt-2
                        text-2xl
                        font-semibold
                        text-white
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        max-w-2xl
                        leading-7
                        text-slate-400
                      "
                    >
                      {step.description}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="
                      hidden
                      text-2xl
                      text-white/20
                      transition
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-[#35E657]
                      md:block
                    "
                  >
                    ↗
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
