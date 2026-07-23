import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Code2 } from "lucide-react";

const benefits = [
  "Aulas práticas",
  "Projetos para portfólio",
  "Preparação para o mercado",
];

function Cta() {
  return (
    <section
      id="comecar"
      aria-labelledby="cta-title"
      className="
        relative
        scroll-mt-24
        overflow-hidden
        border-t
        border-white/5
        bg-[#000A23]
        px-6
        py-24
        lg:px-8
        lg:py-32
      "
    >
      {/* Luz verde */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-52
          top-1/3
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#35E657]/10
          blur-[160px]
        "
      />

      {/* Luz roxa */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-52
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#68009B]/15
          blur-[160px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 45,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-gradient-to-br
          from-white/[0.07]
          via-[#07112D]
          to-[#040B21]
          px-7
          py-14
          text-center
          shadow-[0_30px_100px_rgba(0,0,0,0.25)]
          sm:px-12
          sm:py-16
          lg:px-20
          lg:py-20
        "
      >
        {/* Grade de fundo */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.06]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255, 255, 255, 0.12) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.12) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "42px 42px",
          }}
        />

        {/* Brilho superior */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-64
            w-64
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#35E657]/15
            blur-[90px]
          "
        />

        <div className="relative z-10">
          <div
            className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-[#35E657]/30
              bg-[#35E657]/10
              text-[#35E657]
              shadow-[0_0_30px_rgba(53,230,87,0.12)]
            "
          >
            <Code2 aria-hidden="true" size={25} />
          </div>

          <p
            className="
              mt-7
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#35E657]
            "
          >
            Seu próximo passo
          </p>

          <h2
            id="cta-title"
            className="
              mx-auto
              mt-4
              max-w-4xl
              text-3xl
              font-semibold
              leading-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Seu próximo commit pode mudar o rumo da sua carreira.
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-400
              sm:text-lg
            "
          >
            Aprenda na prática, construa projetos e evolua com uma comunidade
            preparada para caminhar ao seu lado.
          </p>

          {/* Benefícios */}
          <div
            className="
              mx-auto
              mt-8
              flex
              max-w-3xl
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
              sm:flex-wrap
              sm:gap-x-7
            "
          >
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-slate-300
                "
              >
                <CheckCircle2
                  aria-hidden="true"
                  size={17}
                  className="text-[#35E657]"
                />

                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Botões */}
          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
            "
          >
            <motion.a
              href={null}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                inline-flex
                min-h-14
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#35E657]
                px-8
                font-semibold
                text-[#00150A]
                shadow-[0_0_32px_rgba(53,230,87,0.18)]
                transition-shadow
                duration-300
                hover:shadow-[0_0_42px_rgba(53,230,87,0.3)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#000A23]
                sm:w-auto
              "
            >
              Começar minha jornada

              <ArrowRight
                aria-hidden="true"
                size={19}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.a>

            <a
              href="#formacoes"
              className="
                inline-flex
                min-h-14
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/[0.035]
                px-8
                font-semibold
                text-white
                transition-all
                duration-300
                hover:border-white/30
                hover:bg-white/[0.07]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#35E657]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#000A23]
                sm:w-auto
              "
            >
              Explorar formações
            </a>
          </div>

          <p className="mt-6 text-xs leading-5 text-slate-600">
            O botão principal direciona para o site oficial.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Cta;