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

function Testimonials() {
  return (
    <section
      id="comunidade"
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
          eyebrow="Comunidade"
          title="Evolução construída em conjunto."
          description="Histórias ilustrativas que representam desafios comuns enfrentados por quem está começando."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#07112D]
                p-8
              "
            >
              <p className="text-lg leading-8 text-slate-200">
                “{testimonial.quote}”
              </p>

              <footer className="mt-8">
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
      </div>
    </section>
  );
}

export default Testimonials;