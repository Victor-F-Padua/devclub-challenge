import SectionHeading from "../ui/SectionHeading";

const mentors = [
  {
    name: "Fernanda Costa",
    area: "Consultura de Carreira",
  },
  {
    name: "Marina Costa",
    area: "Front-end e experiência do usuário",
  },
  {
    name: "Lucas Almeida",
    area: "Carreira e mercado de tecnologia",
  },
];

function Tutors() {
  return (
    <section
      id="mentores"
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
          eyebrow="Mentores"
          title="Aprenda com quem vive o mercado."
          description="Profissionais de diferentes áreas orientam o desenvolvimento técnico e profissional."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {mentors.map((mentor) => (
            <article
              key={mentor.name}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                text-center
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  rounded-full
                  bg-[#68009B]/30
                  text-3xl
                  font-bold
                  text-white
                "
              >
                {mentor.name
                  .split(" ")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {mentor.name}
              </h3>

              <p className="mt-2 text-slate-400">
                {mentor.area}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tutors;