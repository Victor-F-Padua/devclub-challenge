import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import SectionHeading from "../ui/SectionHeading";

const students = [
  {
    initials: "AB",
    name: "Ana Beatriz",
    journey: "Formação Full Stack",
    progress: "4 meses de evolução",
    quote:
      "Começou pelos fundamentos e hoje desenvolve interfaces conectadas a APIs.",
    project: {
      category: "Dashboard financeiro",
      title: "FinanceFlow",
      description:
        "Uma plataforma para acompanhar receitas, despesas e objetivos financeiros em tempo real.",
      technologies: [
        "React",
        "TypeScript",
        "API",
      ],
    },
  },
  {
    initials: "JP",
    name: "João Pedro",
    journey: "Formação Full Stack",
    progress: "3 meses de evolução",
    quote:
      "Transformou os primeiros exercícios em uma aplicação completa de pedidos.",
    project: {
      category: "Plataforma de pedidos",
      title: "Pedido Rápido",
      description:
        "Sistema para gerenciar produtos, pedidos e o acompanhamento das entregas.",
      technologies: [
        "React",
        "Node.js",
        "Database",
      ],
    },
  },
  {
    initials: "CR",
    name: "Camila Rocha",
    journey: "Especialização React",
    progress: "5 meses de evolução",
    quote:
      "Aprendeu a organizar componentes e criou uma experiência totalmente responsiva.",
    project: {
      category: "Gerenciador de tarefas",
      title: "FocusBoard",
      description:
        "Uma aplicação para organizar projetos, prioridades e atividades do dia.",
      technologies: [
        "React",
        "Tailwind",
        "JavaScript",
      ],
    },
  },
];

function ProjectPreview({
  project,
  index,
}) {
  return (
    <div
      className="
        relative
        aspect-[4/3]
        overflow-hidden
        border-b
        border-white/10
        bg-gradient-to-br
        from-[#68009B]/25
        via-[#101A3D]
        to-[#35E657]/10
        p-6
      "
    >
      <div
        aria-hidden="true"
        className="
          absolute
          -right-16
          -top-16
          h-48
          w-48
          rounded-full
          bg-[#35E657]/10
          blur-[70px]
        "
      />

      <div
        className="
          relative
          h-full
          overflow-hidden
          rounded-xl
          border
          border-white/10
          bg-[#050D24]/90
          shadow-2xl
        "
      >
        <div
          className="
            flex
            h-9
            items-center
            gap-1.5
            border-b
            border-white/10
            px-3
          "
        >
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-[#35E657]/70" />

          <span
            className="
              ml-auto
              font-mono
              text-[10px]
              text-slate-500
            "
          >
            projeto-0{index + 1}
          </span>
        </div>

        <div className="grid h-[calc(100%-36px)] grid-cols-[64px_1fr]">
          <div
            className="
              border-r
              border-white/10
              p-3
            "
          >
            <div className="h-2 rounded-full bg-white/10" />
            <div className="mt-3 h-2 rounded-full bg-white/5" />
            <div className="mt-3 h-2 rounded-full bg-white/5" />
          </div>

          <div className="p-4">
            <div className="h-3 w-1/3 rounded-full bg-[#35E657]/40" />

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div
                className="
                  h-16
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.04]
                "
              />

              <div
                className="
                  h-16
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.04]
                "
              />
            </div>

            <div
              className="
                mt-3
                h-14
                rounded-lg
                border
                border-white/10
                bg-white/[0.025]
              "
            />
          </div>
        </div>
      </div>

      <span
        className="
          absolute
          bottom-8
          right-8
          text-5xl
          font-bold
          text-white/[0.04]
        "
      >
        0{index + 1}
      </span>
    </div>
  );
}

function Students() {
  return (
    <section
      id="alunos"
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
            lg:grid-cols-3
          "
        >
          {students.map(
            (student, index) => (
              <motion.article
                key={student.name}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#07112D]
                "
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
                  y: -6,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectPreview
                  project={student.project}
                  index={index}
                />

                <div className="p-6">
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
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

                    <ArrowUpRight
                      className="
                        mt-1
                        text-white/25
                        transition
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-[#35E657]
                      "
                      size={22}
                    />
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

                  <div className="mt-5 flex flex-wrap gap-2">
                    {student.project.technologies.map(
                      (technology) => (
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
                      ),
                    )}
                  </div>

                  <div
                    className="
                      mt-7
                      border-t
                      border-white/10
                      pt-6
                    "
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#35E657]/25
                          bg-[#35E657]/5
                          font-semibold
                          text-[#35E657]
                        "
                      >
                        {student.initials}
                      </div>

                      <div>
                        <p className="font-semibold text-white">
                          {student.name}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          {student.journey} · {student.progress}
                        </p>
                      </div>
                    </div>

                    <p
                      className="
                        mt-5
                        text-sm
                        leading-6
                        text-slate-400
                      "
                    >
                      “{student.quote}”
                    </p>
                  </div>
                </div>
              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Students;