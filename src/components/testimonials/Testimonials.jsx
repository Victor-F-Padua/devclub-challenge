import SectionHeading from "../ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Eu assistia às aulas, mas só comecei a evoluir de verdade quando passei a construir projetos.",
    name: "Lucas M.",
    role: "Aluno de Front-end",
  },
  {
    quote:
      "A comunidade me ajudou a não abandonar os estudos quando encontrei as primeiras dificuldades.",
    name: "Amanda R.",
    role: "Aluna Full Stack",
  },
  {
    quote:
      "Meu portfólio deixou de ser uma lista de exercícios e começou a mostrar soluções completas.",
    name: "Gabriel S.",
    role: "Desenvolvedor iniciante",
  },
];

const communityUrl = "https://stars.devclub.com.br/";

function Testimonials() {
  return (
    <section
      id="comunidade"
      className="
        relative
        scroll-mt-24
        overflow-hidden
        bg-[#020D29]
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
          -left-48
          top-1/3
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#68009B]/10
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Comunidade"
          title="Histórias construídas com código e constância."
          description="Pessoas com diferentes trajetórias, unidas pela decisão de aprender, construir projetos e buscar novas oportunidades."
        />

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="
                flex
                min-h-[280px]
                flex-col
                rounded-2xl
                border
                border-white/10
                bg-[#07112D]
                p-8
              "
            >
              <span
                aria-hidden="true"
                className="
                  text-5xl
                  font-bold
                  leading-none
                  text-[#35E657]/30
                "
              >
                “
              </span>

              <p className="mt-4 text-lg leading-8 text-slate-200">
                {testimonial.quote}
              </p>

              <footer
                className="
                  mt-auto
                  border-t
                  border-white/10
                  pt-6
                "
              >
                <p className="font-semibold text-white">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {testimonial.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Fora do map: aparece somente uma vez */}
        <div className="mt-12 flex justify-center">
          <a
            href={communityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
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
              transition
              duration-300
              hover:-translate-y-1
              hover:border-[#35E657]
              hover:bg-[#35E657]/10
              hover:text-[#35E657]
            "
          >
            Conheça mais histórias
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;