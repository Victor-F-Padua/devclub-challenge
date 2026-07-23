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
        items-center
        overflow-hidden
        bg-[#000A23]
        px-6
        pb-16
        pt-32
        lg:min-h-[78svh]
        lg:px-8
      "
    >
      {/* Brilho verde */}
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

      {/* Brilho roxo */}
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
          max-w-[1400px]
          items-center
          gap-14
          lg:grid-cols-[0.95fr_1.05fr]
          xl:gap-20
        "
      >
        {/* Conteúdo */}
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
            <CodeXml aria-hidden="true" size={16} />
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
              lg:text-6xl
              xl:text-7xl
            "
          >
            Do primeiro código à primeira{" "}
            <span className="text-[#35E657]">
              oportunidade.
            </span>
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
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#35E657]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#000A23]
              "
            >
              Explorar a jornada
              <ArrowRight aria-hidden="true" size={18} />
            </a>

            <a
              href="#formacoes"
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
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#35E657]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#000A23]
              "
            >
              Conhecer as formações
            </a>
          </div>
        </div>

        {/* Painel de vídeo */}
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-2xl
            lg:max-w-none
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-8
              rounded-[32px]
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
              bg-[#050914]
              shadow-[0_35px_110px_rgba(0,0,0,0.5)]
              transition-all
              duration-500
              hover:border-[#35E657]/30
              hover:shadow-[0_35px_120px_rgba(53,230,87,0.08)]
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                z-20
                h-[2px]
                bg-gradient-to-r
                from-transparent
                via-[#35E657]/80
                to-transparent
              "
            />

            <video
              aria-hidden="true"
              className="
                block
                aspect-video
                w-full
                bg-[#050914]
                object-cover
              "
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
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
                from-[#000A23]/25
                via-transparent
                to-transparent
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-16
                bg-gradient-to-b
                from-white/[0.025]
                to-transparent
              "
            />
          </div>

          {/* Status */}
          <div
            className="
              absolute
              -bottom-5
              left-6
              hidden
              rounded-xl
              border
              border-[#35E657]/25
              bg-[#07112D]/95
              px-5
              py-4
              shadow-[0_18px_50px_rgba(0,0,0,0.4)]
              backdrop-blur-xl
              sm:block
            "
          >
            <p className="text-xs text-slate-400">
              Status do projeto
            </p>

            <div className="mt-1.5 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#35E657]
                    opacity-40
                    motion-reduce:animate-none
                  "
                />

                <span
                  aria-hidden="true"
                  className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[#35E657]
                  "
                />
              </span>

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