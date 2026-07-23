import { motion } from "motion/react";

import {
  BriefcaseBusiness,
  Code2,
  Rocket,
} from "lucide-react";

import spotifyLogo from "../../assets/companies/spotify.png";
import santanderLogo from "../../assets/companies/santander.png";
import bradescoLogo from "../../assets/companies/bradesco.png";
import cvcLogo from "../../assets/companies/cvc.png";
import xgrowLogo from "../../assets/companies/xgrow.png";
import toroLogo from "../../assets/companies/toro.png";

import SectionHeading from "../ui/SectionHeading";

const opportunities = [
  {
    icon: Code2,
    title: "Projetos práticos",
    description:
      "Experiências que demonstram habilidades além dos certificados.",
    accent: "#35E657",
    glow: "rgba(53, 230, 87, 0.18)",
  },
  {
    icon: Rocket,
    title: "Evolução profissional",
    description:
      "Preparação para transformar conhecimento em oportunidades reais.",
    accent: "#A855F7",
    glow: "rgba(168, 85, 247, 0.18)",
  },
  {
    icon: BriefcaseBusiness,
    title: "Conexão com o mercado",
    description:
      "Orientação para currículo, entrevistas e posicionamento profissional.",
    accent: "#38BDF8",
    glow: "rgba(56, 189, 248, 0.18)",
  },
];

const companies = [
  {
    name: "Spotify",
    logo: spotifyLogo,
    accent: "#1ED760",
    glow: "rgba(30, 215, 96, 0.18)",
  },
  {
    name: "Santander",
    logo: santanderLogo,
    accent: "#EC0000",
    glow: "rgba(236, 0, 0, 0.18)",
  },
  {
    name: "Bradesco",
    logo: bradescoLogo,
    accent: "#CC092F",
    glow: "rgba(204, 9, 47, 0.18)",
  },
  {
    name: "CVC",
    logo: cvcLogo,
    accent: "#FFCC00",
    glow: "rgba(255, 204, 0, 0.18)",
  },
  {
    name: "xGrow",
    logo: xgrowLogo,
    accent: "#35E657",
    glow: "rgba(53, 230, 87, 0.18)",
  },
  {
    name: "Toro",
    logo: toroLogo,
    accent: "#FFFFFF",
    glow: "rgba(255, 255, 255, 0.15)",
  },
];

function CompanyCard({ company }) {
  return (
    <motion.div
      role="listitem"
      whileHover={{
        y: -6,
        borderColor: company.accent,
        boxShadow: `0 0 30px ${company.glow}`,
        transition: {
          duration: 0.25,
          delay: 0,
          ease: "easeOut",
        },
      }}
      style={{
        borderColor: "rgba(255, 255, 255, 0.10)",
      }}
      className="
        group
        relative
        flex
        h-[104px]
        w-[230px]
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        border
        bg-[#07112D]
        px-7
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-[2px]
          origin-center
          scale-x-0
          opacity-0
          transition-all
          duration-300
          group-hover:scale-x-100
          group-hover:opacity-100
        "
        style={{
          backgroundColor: company.accent,
          boxShadow: `0 0 18px ${company.accent}`,
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          boxShadow: `inset 0 0 35px ${company.glow}`,
        }}
      />

      <img
        src={company.logo}
        alt={`Logo da ${company.name}`}
        loading="lazy"
        decoding="async"
        className="
          relative
          z-10
          max-h-11
          max-w-[155px]
          object-contain
          opacity-100
          transition-transform
          duration-300
          group-hover:scale-105
        "
      />
    </motion.div>
  );
}

function Companies() {
  return (
    <section
      id="empresas"
      aria-label="Oportunidades e empresas"
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
        lg:py-28
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-56
          top-1/3
          h-[480px]
          w-[480px]
          rounded-full
          bg-[#35E657]/5
          blur-[150px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-56
          bottom-0
          h-[480px]
          w-[480px]
          rounded-full
          bg-[#68009B]/10
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Oportunidades"
          title="Preparação conectada ao mercado."
          description="Projetos, orientação profissional e prática para aproximar talentos das oportunidades em tecnologia."
        />

        <div
          className="
            mt-14
            grid
            gap-4
            md:grid-cols-3
          "
        >
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;

            return (
              <motion.article
                key={opportunity.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                whileHover={{
                  y: -5,
                  borderColor: opportunity.accent,
                  boxShadow: `0 0 28px ${opportunity.glow}`,
                  transition: {
                    duration: 0.25,
                    delay: 0,
                    ease: "easeOut",
                  },
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  borderColor: "rgba(255, 255, 255, 0.10)",
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  bg-white/[0.025]
                  p-6
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    bg-white/[0.04]
                  "
                  style={{
                    color: opportunity.accent,
                    borderColor: `${opportunity.accent}55`,
                    boxShadow: `inset 0 0 18px ${opportunity.glow}`,
                  }}
                >
                  <Icon aria-hidden="true" size={20} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {opportunity.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {opportunity.description}
                </p>

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-[2px]
                    origin-left
                    scale-x-0
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                  style={{
                    backgroundColor: opportunity.accent,
                    boxShadow: `0 0 18px ${opportunity.accent}`,
                  }}
                />
              </motion.article>
            );
          })}
        </div>

        <div className="mt-16">
          <div
            className="
              flex
              flex-col
              gap-2
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
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
                Presença no mercado
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                Alunos DevClub em grandes empresas.
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-400">
              Empresas que já contrataram talentos formados pelo DevClub.
            </p>
          </div>

          <div
            className="
              relative
              mt-7
              overflow-hidden
              py-3
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                z-10
                w-16
                bg-gradient-to-r
                from-[#020D29]
                to-transparent
                sm:w-28
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                z-10
                w-16
                bg-gradient-to-l
                from-[#020D29]
                to-transparent
                sm:w-28
              "
            />

            <motion.div
              role="list"
              className="flex w-max"
              initial={{
                x: "0%",
              }}
              animate={{
                x: "-50%",
              }}
              transition={{
                duration: 26,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {[0, 1].map((groupIndex) => (
                <div
                  key={groupIndex}
                  aria-hidden={groupIndex === 1}
                  className="
                    flex
                    shrink-0
                    gap-4
                    pr-4
                  "
                >
                  {companies.map((company) => (
                    <CompanyCard
                      key={`${groupIndex}-${company.name}`}
                      company={company}
                    />
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Companies;