function Cta() {
  return (
    <section
      id="comecar"
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
      <div
        className="
          mx-auto
          max-w-5xl
          rounded-3xl
          border
          border-[#35E657]/20
          bg-[#35E657]/5
          px-6
          py-16
          text-center
          md:px-12
        "
      >
        <p
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#35E657]
          "
        >
          Comece agora
        </p>

        <h2
          className="
            mx-auto
            mt-5
            max-w-3xl
            text-3xl
            font-bold
            text-white
            md:text-5xl
          "
        >
          Seu próximo commit pode mudar sua jornada.
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            leading-7
            text-slate-400
          "
        >
          Aprenda, pratique e transforme conhecimento em projetos que
          aproximam você das suas primeiras oportunidades.
        </p>

        <a
          href="#cursos"
          className="
            mt-9
            inline-flex
            rounded-full
            bg-[#35E657]
            px-8
            py-3.5
            font-semibold
            text-[#000A23]
            transition
            hover:-translate-y-1
          "
        >
          Começar minha jornada
        </a>
      </div>
    </section>
  );
}

export default Cta;