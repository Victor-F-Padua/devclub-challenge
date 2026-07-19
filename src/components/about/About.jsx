import SectionHeading from "../ui/SectionHeading";

const journeySteps = [
  {
    number: "01",
    title: "Aprenda",
    description:
      "Domine os fundamentos com aulas organizadas e uma trilha clara de evolução.",
  },
  {
    number: "02",
    title: "Pratique",
    description:
      "Transforme conhecimento em projetos que resolvem problemas reais.",
  },
  {
    number: "03",
    title: "Receba orientação",
    description:
      "Conte com mentores e uma comunidade que ajudam você a continuar avançando.",
  },
  {
    number: "04",
    title: "Conquiste oportunidades",
    description:
      "Prepare seu portfólio e desenvolva as habilidades procuradas pelo mercado.",
  },
];

function About() {
  return (
    <section
      id="jornada"
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
          eyebrow="A jornada"
          title="Você não precisa aprender sozinho."
          description="Uma sequência clara para sair das primeiras aulas e chegar à construção de projetos completos."
        />

        <div
          className="
            mt-16
            grid
            gap-5
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {journeySteps.map((step) => (
            <article
              key={step.number}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-7
              "
            >
              <span className="text-sm font-bold text-[#35E657]">
                {step.number}
              </span>

              <h3 className="mt-8 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;