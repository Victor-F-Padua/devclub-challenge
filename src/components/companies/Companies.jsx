import SectionHeading from "../ui/SectionHeading";

const companies = [
  "Nexa Labs",
  "Orbit Code",
  "Lumina Tech",
  "Pixel Forge",
  "CloudWay",
  "CodeFlow",
];

function Companies() {
  return (
    <section
      id="empresas"
      className="
        scroll-mt-24
        border-t
        border-white/5
        bg-[#020D29]
        px-6
        py-20
        lg:px-8
      "
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Oportunidades"
          title="Preparação conectada ao mercado."
          description="Marcas demonstrativas usadas para representar possíveis empresas do ecossistema de tecnologia."
        />

        <div
          className="
            mt-14
            grid
            grid-cols-2
            gap-4
            md:grid-cols-3
            lg:grid-cols-6
          "
        >
          {companies.map((company) => (
            <div
              key={company}
              className="
                flex
                min-h-24
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                px-4
                text-center
                font-semibold
                text-slate-300
              "
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;