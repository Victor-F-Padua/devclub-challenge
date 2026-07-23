import { motion } from "motion/react";

import {
  ArrowUpRight,
  MessageCircleMore,
  Quote,
  UsersRound,
  Video,
} from "lucide-react";

import SectionHeading from "../ui/SectionHeading";

const communityBenefits = [
  {
    icon: Video,
    title: "Mentorias ao vivo",
    description:
      "Encontros para esclarecer dúvidas e acelerar a evolução.",
    accent: "#35E657",
  },
  {
    icon: MessageCircleMore,
    title: "Suporte humano",
    description:
      "Orientação para continuar avançando diante dos bloqueios.",
    accent: "#A855F7",
  },
  {
    icon: UsersRound,
    title: "Comunidade ativa",
    description:
      "Um ambiente para compartilhar projetos e experiências.",
    accent: "#38BDF8",
  },
];

const testimonials = [
  {
    quote:
      "Eu assistia às aulas, mas só comecei a evoluir de verdade quando passei a construir projetos.",
    name: "Lucas M.",
    role: "Aluno de Front-end",
    journey: "Evolução pela prática",
    accent: "#35E657",
    glow: "rgba(53, 230, 87, 0.2)",
  },
  {
    quote:
      "A comunidade me ajudou a não abandonar os estudos quando encontrei as primeiras dificuldades.",
    name: "Amanda R.",
    role: "Aluna Full Stack",
    journey: "Constância e apoio",
    accent: "#A855F7",
    glow: "rgba(168, 85, 247, 0.2)",
  },
  {
    quote:
      "Meu portfólio deixou de ser uma lista de exercícios e começou a mostrar soluções completas.",
    name: "Gabriel S.",
    role: "Desenvolvedor iniciante",
    journey: "Projetos com propósito",
    accent: "#38BDF8",
    glow: "rgba(56, 189, 248, 0.2)",
  },
];

const communityUrl = "https://stars.devclub.com.br/";

function Testimonials() {
  return (
    <section
      id="comunidade"
      aria-label="Comunidade e depoimentos"
      className="
        relative
        scroll-mt-24
        overflow-hidden
        border-t
        border-white/5
        bg-[#020D29]
        px-6
        py-24
        lg:px-8
        lg:py-32
      "
    >
      {/* Luz decorativa roxa */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-48
          top-1/3
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#68009B]/10
          blur-[150px]
        "
      />

      {/* Luz decorativa verde */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-52
          bottom-0
          h-[460px]
          w-[460px]
          rounded-full
          bg-[#35E657]/5
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Comunidade"
          title="Histórias construídas com código e constância."
          description="Pessoas com trajetórias diferentes, unidas pela decisão de aprender, construir projetos e buscar novas oportunidades."
        />

        {/* Benefícios da comunidade */}
        <div
          className="
            mt-14
            grid
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/[0.025]
            md:grid-cols-3
          "
        >
          {communityBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isNotLast =
              index !== communityBenefits.length - 1;

            return (
              <motion.article
                key={benefit.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  flex
                  items-start
                  gap-4
                  p-6
                  ${
                    isNotLast
                      ? "border-b border-white/10 md:border-b-0 md:border-r"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    bg-white/[0.04]
                  "
                  style={{
                    color: benefit.accent,
                    borderColor: `${benefit.accent}50`,
                    boxShadow: `inset 0 0 16px ${benefit.accent}20`,
                  }}
                >
                  <Icon aria-hidden="true" size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Depoimentos */}
        <div
          className="
            mt-16
            grid
            items-stretch
            gap-6
            lg:grid-cols-3
          "
        >
          {testimonials.map((testimonial, index) => {
            const testimonialNumber = String(index + 1).padStart(
              2,
              "0",
            );

            const isMiddleTestimonial = index === 1;

            return (
              <div
                key={testimonial.name}
                className={`
                  h-full
                  ${isMiddleTestimonial ? "lg:-translate-y-4" : ""}
                `}
              >
                <motion.blockquote
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  whileHover={{
                    y: -8,
                    borderColor: testimonial.accent,
                    boxShadow: `0 0 34px ${testimonial.glow}`,
                    transition: {
                      duration: 0.28,
                      delay: 0,
                      ease: "easeOut",
                    },
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.10)",
                  }}
                  className="
                    group
                    relative
                    flex
                    h-full
                    min-h-[310px]
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    bg-[#07112D]
                    p-7
                    sm:p-8
                  "
                >
                  {/* Linha colorida */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      top-0
                      h-[3px]
                      opacity-80
                      transition-all
                      duration-300
                      group-hover:h-[4px]
                      group-hover:opacity-100
                    "
                    style={{
                      backgroundColor: testimonial.accent,
                      boxShadow: `0 0 18px ${testimonial.accent}`,
                    }}
                  />

                  {/* Brilho interno */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      opacity-20
                      transition-opacity
                      duration-500
                      group-hover:opacity-50
                    "
                    style={{
                      boxShadow: `inset 0 0 55px ${testimonial.glow}`,
                    }}
                  />

                  <div className="relative z-10">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        bg-white/[0.035]
                      "
                      style={{
                        color: testimonial.accent,
                        borderColor: `${testimonial.accent}50`,
                      }}
                    >
                      <Quote aria-hidden="true" size={20} />
                    </div>

                    <p
                      className="
                        mt-6
                        text-lg
                        leading-8
                        text-slate-200
                      "
                    >
                      “{testimonial.quote}”
                    </p>
                  </div>

                  <footer
                    className="
                      relative
                      z-10
                      mt-auto
                      border-t
                      border-white/10
                      pt-6
                    "
                  >
                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                      "
                      style={{
                        color: testimonial.accent,
                      }}
                    >
                      {testimonial.journey}
                    </p>

                    <div
                      className="
                        mt-3
                        flex
                        items-center
                        justify-between
                        gap-4
                      "
                    >
                      <div>
                        <p className="font-semibold text-white">
                          {testimonial.name}
                        </p>

                        <p className="mt-1 text-sm text-slate-400">
                          {testimonial.role}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="
                          font-mono
                          text-sm
                          font-semibold
                          text-white/20
                        "
                      >
                        {testimonialNumber}
                      </span>
                    </div>
                  </footer>
                </motion.blockquote>
              </div>
            );
          })}
        </div>

        {/* Link externo */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-center
            gap-4
            text-center
          "
        >
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            Conheça outras trajetórias de pessoas que decidiram transformar
            estudo em prática e construir uma nova história.
          </p>

          <a
            href={communityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-[#35E657]/30
              bg-[#35E657]/5
              px-7
              py-3.5
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#35E657]
              hover:bg-[#35E657]/10
              hover:text-[#35E657]
              hover:shadow-[0_0_28px_rgba(53,230,87,0.16)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#35E657]
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#020D29]
            "
          >
            Conheça mais histórias

            <ArrowUpRight
              aria-hidden="true"
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;