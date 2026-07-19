import SectionHeading from "../ui/SectionHeading";

const projects = [
  {
    title: "Dashboard financeiro",
    technologies: "React • JavaScript • API",
  },
  {
    title: "Plataforma de pedidos",
    technologies: "React • Node.js • Banco de dados",
  },
  {
    title: "Gerenciador de tarefas",
    technologies: "TypeScript • React • Tailwind",
  },
];

function Students() {
  return (
    <section
      id="projetos"
      className="
        scroll-mt-24
        border-t
        border-white/5
        bg-[#000A23]
        px-6
        py-24
        lg:px-8
      "
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projetos"
          title="Resultados que podem ser apresentados."
          description="Projetos ajudam o aluno a consolidar o aprendizado e demonstrar suas habilidades."
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
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#07112D]
              "
            >
              <div
                className="
                  flex
                  aspect-video
                  items-center
                  justify-center
                  bg-gradient-to-br
                  from-[#68009B]/30
                  to-[#35E657]/10
                "
              >
                <span className="text-5xl font-bold text-white/10">
                  0{index + 1}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-slate-400">
                  {project.technologies}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Students;