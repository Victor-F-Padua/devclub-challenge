import { motion } from "motion/react";

import financeFlowImage from "../../assets/projects/finance-flow.png";
import pedidoRapidoImage from "../../assets/projects/pedido-rapido.png";
import focusBoardImage from "../../assets/projects/focus-board.png";

import anaBeatrizPhoto from "../../assets/students/ana-beatriz.png";
import joaoPedroPhoto from "../../assets/students/joao-pedro.png";
import lucasRochaPhoto from "../../assets/students/lucas-rocha.png";

import SectionHeading from "../ui/SectionHeading";

const students = [
  {
    name: "Ana Beatriz",
    photo: anaBeatrizPhoto,
    journey: "DataClub",
    progress: "4 meses de evolução",
    quote:
      "Começou pelos fundamentos e hoje transforma dados em interfaces claras e úteis.",
    project: {
      category: "Dashboard financeiro",
      title: "FinanceFlow",
      description:
        "Uma plataforma para acompanhar receitas, despesas e objetivos financeiros em tempo real.",
      technologies: ["React", "TypeScript", "API"],
      image: financeFlowImage,
      accent: "#35E657",
      glow: "rgba(53, 230, 87, 0.18)",
    },
  },
  {
    name: "João Pedro",
    photo: joaoPedroPhoto,
    journey: "DevClub Full Stack",
    progress: "3 meses de evolução",
    quote:
      "Transformou os primeiros exercícios em uma aplicação completa de pedidos.",
    project: {
      category: "Plataforma de pedidos",
      title: "Pedido Rápido",
      description:
        "Sistema para gerenciar produtos, pedidos e acompanhar o andamento das entregas.",
      technologies: ["React", "Node.js", "Database"],
      image: pedidoRapidoImage,
      accent: "#A855F7",
      glow: "rgba(168, 85, 247, 0.18)",
    },
  },
  {
    name: "Lucas Rocha",
    photo: lucasRochaPhoto,
    journey: "DevClub Front-end",
    progress: "5 meses de evolução",
    quote:
      "Aprendeu a organizar componentes e criou uma experiência totalmente responsiva.",
    project: {
      category: "Gerenciador de tarefas",
      title: "FocusBoard",
      description:
        "Uma aplicação para organizar projetos, prioridades e atividades do dia.",
      technologies: ["React", "Tailwind", "JavaScript"],
      image: focusBoardImage,
      accent: "#38BDF8",
      glow: "rgba(56, 189, 248, 0.17)",
    },
  },
];

function ProjectPreview({ project, index }) {
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <div
      className="
        relative
        aspect-[4/3]
        overflow-hidden
        border-b
        border-white/10
        bg-[#050D24]
      "
    >
      <img
        src={project.image}
        alt={`Interface ilustrativa do projeto ${project.title}`}
        loading="lazy"
        decoding="async"
        className="
          h-full
          w-full
          object-contain
          object-center
          transition-[filter]
          duration-500
          group-hover:brightness-110
        "
      />

      <span
        aria-hidden="true"
        className="
          absolute
          bottom-4
          right-5
          font-mono
          text-sm
          font-semibold
          text-white/30
        "
      >
        {projectNumber}
      </span>
    </div>
  );
}

function Students() {
  return (
    <section
      id="alunos"
      aria-label="Alunos e projetos"
      className="
        relative
        scroll-mt-24
        overflow-hidden
        bg-[#000A23]
        px-6
        py-24
        lg:px-8
        lg:py-32
      "
    >
      {/* Brilho decorativo */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-52
          top-1/3
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#68009B]/10
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Alunos e projetos"
          title="A evolução aparece no que você constrói."
          description="Cada projeto representa uma nova habilidade dominada, um problema resolvido e mais um passo em direção ao mercado."
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
          {students.map((student, index) => {
            const isLastStudent = index === students.length - 1;

            return (
              <motion.article
                key={student.name}
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
                  y: -7,
                  borderColor: student.project.accent,
                  boxShadow: `0 0 34px ${student.project.glow}`,
                  transition: {
                    duration: 0.28,
                    delay: 0,
                    ease: "easeOut",
                  },
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  borderColor: "rgba(255, 255, 255, 0.10)",
                  boxShadow: `0 0 18px ${student.project.glow}`,
                }}
                className={`
                  group
                  flex
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  bg-[#07112D]
                  transition-colors
                  duration-300
                  ${
                    isLastStudent
                      ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[610px] xl:col-span-1 xl:max-w-none"
                      : ""
                  }
                `}
              >
                <ProjectPreview
                  project={student.project}
                  index={index}
                />

                <div className="flex flex-1 flex-col p-6">
                  {/* Informações do projeto */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-[#35E657]
                        "
                      >
                        {student.project.category}
                      </p>

                      <h3
                        className="
                          mt-2
                          text-2xl
                          font-semibold
                          text-white
                        "
                      >
                        {student.project.title}
                      </h3>
                    </div>
                  </div>

                  <p
                    className="
                      mt-4
                      min-h-[84px]
                      leading-7
                      text-slate-400
                    "
                  >
                    {student.project.description}
                  </p>

                  {/* Tecnologias */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {student.project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.035]
                          px-3
                          py-1.5
                          text-xs
                          text-slate-300
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Informações do aluno */}
                  <div className="mt-auto pt-7">
                    <div
                      className="
                        min-h-[160px]
                        border-t
                        border-white/10
                        pt-6
                      "
                    >
                      <div className="flex min-h-14 items-center gap-4">
                        <div
                          className="
                            h-14
                            w-14
                            shrink-0
                            overflow-hidden
                            rounded-full
                            border
                            border-[#35E657]/30
                            bg-[#35E657]/5
                            shadow-[0_0_20px_rgba(53,230,87,0.08)]
                          "
                        >
                          <img
                            src={student.photo}
                            alt={`Foto ilustrativa de ${student.name}`}
                            loading="lazy"
                            decoding="async"
                            className="
                              h-full
                              w-full
                              object-cover
                              object-top
                              transition
                              duration-500
                              group-hover:scale-105
                            "
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="font-semibold text-white">
                            {student.name}
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            {student.journey}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-600">
                            {student.progress}
                          </p>
                        </div>
                      </div>

                      <p
                        className="
                          mt-5
                          min-h-12
                          text-sm
                          leading-6
                          text-slate-400
                        "
                      >
                        “{student.quote}”
                      </p>
                    </div>
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

export default Students;