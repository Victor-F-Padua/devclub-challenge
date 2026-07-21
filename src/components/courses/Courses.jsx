import SectionHeading from "../ui/SectionHeading";

const courses = [
  {
    category: "Formação completa",
    title: "Full Stack",
    description:
      "HTML, CSS, JavaScript, React, Node.js e as ferramentas usadas no mercado.",
    href: "LINK_OFICIAL_DA_FORMACAO",
  },
  {
    category: "Especialização",
    title: "React na prática",
    description:
      "Construa interfaces modernas, responsivas e conectadas a aplicações reais.",
    href: "LINK_OFICIAL_DA_FORMACAO",
  },
  {
    category: "Desenvolvimento profissional",
    title: "Carreira Dev",
    description:
      "Portfólio, GitHub, currículo e preparação para processos seletivos.",
    href: "LINK_OFICIAL_DA_FORMACAO",
  },
];

function Courses() {
  return (
    <section
      id="cursos"
      className="
        scroll-mt-24
        border-t
        border-white/5
        bg-[#020D29]
        px-6
        py-24
        lg:px-8
      "
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Cursos"
          title="Trilhas para transformar estudo em habilidade."
          description="Conteúdos organizados para diferentes etapas da jornada de um desenvolvedor."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="
                flex
                min-h-[300px]
                flex-col
                rounded-2xl
                border
                border-white/10
                bg-[#07112D]
                p-8
              "
            >
              <p className="text-sm font-medium text-[#35E657]">
                {course.category}
              </p>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {course.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {course.description}
              </p>

              <a
                href="#projetos"
                className="
                  mt-auto
                  pt-10
                  font-semibold
                  text-white
                  transition-colors
                  hover:text-[#35E657]
                "
                href={course.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conhecer a trilha →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
