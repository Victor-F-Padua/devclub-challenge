import { ArrowRight, CodeXml } from "lucide-react";


import heroVideo from "../../assets/video/display-vscode.mp4";

function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        flex
        min-h-screen
        lg:min-h-[78svh]
        items-center
        overflow-hidden
        bg-[#000A23]
        px-6
        pb-14
        pt-32
        lg:px-8
      "
    >
      {/* Brilhos do fundo */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-10%]
          top-[15%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#35E657]/10
          blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-8%]
          top-[5%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-purple-700/20
          blur-[150px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-16
          lg:grid-cols-[1.05fr_0.95fr]
        "
      >
        {/* Conteúdo esquerdo */}
        <div>
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#35E657]/20
              bg-[#35E657]/5
              px-4
              py-2
              text-sm
              font-medium
              text-[#35E657]
            "
          >
            <CodeXml size={16} />
            Aprendizado que vira projeto
          </div>

          <h1
            className="
              max-w-3xl
              text-4xl
              font-bold
              leading-[1.08]
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-7xl
            "
          >
            Do primeiro código à primeira{" "}
            <span className="text-[#35E657]">oportunidade.</span>
          </h1>

          <p
            className="
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-slate-300
              sm:text-lg
            "
          >
            No DevClub, aprendizado não é só conteúdo. É direção, prática,
            mentoria e construção de oportunidades.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#jornada"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#35E657]
                px-7
                py-3.5
                font-semibold
                text-[#000A23]
                transition
                duration-200
                hover:-translate-y-1
                hover:shadow-[0_0_30px_rgba(53,230,87,0.28)]
              "
            >
              Explorar a jornada
              <ArrowRight size={18} />
            </a>

            <a
              href="#cursos"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/5
                px-7
                py-3.5
                font-semibold
                text-white
                backdrop-blur-sm
                transition
                duration-200
                hover:border-white/30
                hover:bg-white/10
              "
            >
              Conhecer os cursos
            </a>
          </div>
        </div>

        {/* Painel visual */}
        <div className="relative mx-auto w-full max-w-2xl">
          <div
            aria-hidden="true"
            className="
              absolute
              inset-10
              rounded-full
              bg-purple-600/25
              blur-[100px]
            "
          />

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#07112D]
              shadow-[0_30px_100px_rgba(0,0,0,0.45)]
            "
          >
            {/* Barra superior do editor */}
            <div
              className="
                flex
                h-12
                items-center
                justify-between
                border-b
                border-white/10
                bg-white/[0.03]
                px-4
              "
            >
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="text-xs text-slate-400">DevClubProject.jsx</span>

              <div className="w-14" />
            </div>

            <div className="relative aspect-video overflow-hidden">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Código sendo escrito em um editor"
              >
                <source src={heroVideo} type="video/mp4" />
                Seu navegador não suporta vídeos HTML.
              </video>

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#000A23]/35
                  via-transparent
                  to-transparent
                "
              />
            </div>
          </div>

          {/* Elemento decorativo */}
          <div
            className="
              absolute
              -bottom-5
              -left-5
              hidden
              rounded-xl
              border
              border-[#35E657]/25
              bg-[#07112D]/90
              px-5
              py-4
              shadow-xl
              backdrop-blur-md
              sm:block
            "
          >
            <p className="text-xs text-slate-400">Status do projeto</p>

            <div className="mt-1 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#35E657]" />

              <span className="text-sm font-semibold text-white">
                Construindo o futuro
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
