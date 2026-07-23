import { motion } from "motion/react";

import fernandaCostaImage from "../../assets/mentors/fernanda-costa.jpg";
import rodolfoMoriImage from "../../assets/mentors/rodolfo-mori.png";
import marcioAraujoImage from "../../assets/mentors/marcio-araujo.png";

import SectionHeading from "../ui/SectionHeading";

const mentors = [
  {
    name: "Fernanda Costa",
    area: "Consultoria de carreira",
    description:
      "Orientação para transformar habilidades em posicionamento, confiança e novas oportunidades profissionais.",
    specialties: ["Carreira", "Posicionamento"],
    image: fernandaCostaImage,
    accent: "#A855F7",
    glow: "rgba(168, 85, 247, 0.28)",
    imagePosition: "center top",
    imageScale: 1.02,
    imageShiftY: "0%",
  },
  {
    name: "Rodolfo Mori",
    area: "Programação e mercado",
    description:
      "Uma visão prática sobre desenvolvimento, evolução profissional e os desafios reais da carreira em tecnologia.",
    specialties: ["Programação", "Mercado"],
    image: rodolfoMoriImage,
    accent: "#35E657",
    glow: "rgba(53, 230, 87, 0.28)",
    imagePosition: "center top",
    imageScale: 1.12,
    imageShiftY: "-5%",
  },
  {
    name: "Márcio Araújo",
    area: "Desenvolvimento humano",
    description:
      "Apoio em disciplina, mentalidade e comportamento para manter consistência durante toda a jornada.",
    specialties: ["Mentalidade", "Disciplina"],
    image: marcioAraujoImage,
    accent: "#38BDF8",
    glow: "rgba(56, 189, 248, 0.28)",
    imagePosition: "center top",
    imageScale: 1.03,
    imageShiftY: "-1%",
  },
];

function Tutors() {
  return (
    <section
      id="mentores"
      aria-label="Mentores"
      className="
        relative
        scroll-mt-24
        overflow-hidden
        border-t
        border-white/5
        bg-[#000A23]
        px-6
        py-24
        lg:px-8
        lg:py-32
      "
    >
      {/* Brilho verde */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-60
          top-1/3
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#35E657]/5
          blur-[150px]
        "
      />

      {/* Brilho roxo */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-60
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#68009B]/10
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Mentores"
          title="Aprenda com quem vive o mercado."
          description="Profissionais de diferentes áreas orientam o desenvolvimento técnico, profissional e humano."
        />

        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {mentors.map((mentor, index) => {
            const isLastMentor = index === mentors.length - 1;
            const mentorNumber = String(index + 1).padStart(2, "0");

            return (
              <motion.article
                key={mentor.name}
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
                  borderColor: mentor.accent,
                  boxShadow: `0 0 38px ${mentor.glow}`,
                  transition: {
                    duration: 0.28,
                    delay: 0,
                    ease: "easeOut",
                  },
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  borderColor: "rgba(255, 255, 255, 0.10)",
                }}
                className={`
                  group
                  relative
                  min-h-[610px]
                  overflow-hidden
                  rounded-3xl
                  border
                  bg-[#07112D]
                  sm:min-h-[680px]
                  md:min-h-[560px]
                  xl:min-h-[540px]
                  ${
                    isLastMentor
                      ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[610px] xl:col-span-1 xl:max-w-none"
                      : ""
                  }
                `}
              >
                {/* Imagem */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="
                      h-full
                      w-full
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.025]
                    "
                  >
                    <img
                      src={mentor.image}
                      alt={`Retrato de ${mentor.name}`}
                      loading="lazy"
                      decoding="async"
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                      style={{
                        objectPosition: mentor.imagePosition,
                        transform: `
                          translateY(${mentor.imageShiftY})
                          scale(${mentor.imageScale})
                        `,
                        transformOrigin: "center center",
                      }}
                    />
                  </div>
                </div>

                {/* Sombra geral */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-[#000A23]/5
                    via-[#000A23]/15
                    to-[#020817]
                  "
                />

                {/* Sombra inferior */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-[72%]
                    bg-gradient-to-t
                    from-[#020817]
                    via-[#020817]/90
                    to-transparent
                  "
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
                    group-hover:opacity-60
                  "
                  style={{
                    boxShadow: `inset 0 0 65px ${mentor.glow}`,
                  }}
                />

                {/* Linha superior */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    h-[3px]
                    opacity-70
                    transition-all
                    duration-500
                    group-hover:h-[4px]
                    group-hover:opacity-100
                  "
                  style={{
                    backgroundColor: mentor.accent,
                    boxShadow: `0 0 22px ${mentor.accent}`,
                  }}
                />

                {/* Número */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    right-5
                    top-5
                    font-mono
                    text-sm
                    font-semibold
                    text-white/40
                  "
                >
                  {mentorNumber}
                </span>

                {/* Conteúdo */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    z-10
                    p-6
                    sm:p-7
                  "
                >
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                    "
                    style={{
                      color: mentor.accent,
                    }}
                  >
                    {mentor.area}
                  </p>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-semibold
                      text-white
                      sm:text-3xl
                    "
                  >
                    {mentor.name}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {mentor.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {mentor.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.06]
                          px-3
                          py-1.5
                          text-xs
                          text-slate-200
                          backdrop-blur-md
                        "
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Tutors;