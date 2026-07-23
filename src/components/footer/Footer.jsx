import { ExternalLink, Terminal } from "lucide-react";

const navigation = [
  {
    label: "Início",
    href: "#inicio",
  },
  {
    label: "Jornada",
    href: "#jornada",
  },
  {
    label: "Formações",
    href: "#formacoes",
  },
  {
    label: "Alunos",
    href: "#alunos",
  },
  {
    label: "Mentores",
    href: "#mentores",
  },
  {
    label: "Oportunidades",
    href: "#empresas",
  },
  {
    label: "Comunidade",
    href: "#comunidade",
  },
];

const officialUrl = "https://www.devclub.com.br/";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Rodapé do site"
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-[#000719]
        px-6
        pb-8
        pt-14
        lg:px-8
      "
    >
      {/* Linha superior */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#35E657]/70
          to-transparent
        "
      />

      <div className="mx-auto max-w-7xl">
        <div
          className="
            grid
            gap-12
            md:grid-cols-2
            lg:grid-cols-[1.4fr_1fr_1fr]
          "
        >
          {/* Marca */}
          <div>
            <a
              href="#inicio"
              aria-label="DevClub — voltar ao início"
              className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#35E657]
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[#000719]
              "
            >
              <div
                aria-hidden="true"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#35E657]/30
                  bg-[#35E657]/10
                  text-[#35E657]
                  shadow-[0_0_22px_rgba(53,230,87,0.1)]
                "
              >
                <Terminal size={21} />
              </div>

              <div>
                <p className="font-semibold text-white">DevClub</p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Tecnologia, prática e evolução.
                </p>
              </div>
            </a>

            <p
              className="
                mt-6
                max-w-md
                text-sm
                leading-6
                text-slate-500
              "
            >
              Uma experiência institucional criada para apresentar formações,
              projetos, mentores e histórias de pessoas que decidiram
              transformar aprendizado em prática.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.17em]
                text-slate-300
              "
            >
              Navegação
            </p>

            <nav
              aria-label="Navegação do rodapé"
              className="
                mt-5
                grid
                grid-cols-2
                gap-x-6
                gap-y-3
              "
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="
                    rounded-sm
                    text-sm
                    text-slate-500
                    transition-colors
                    duration-300
                    hover:text-[#35E657]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#35E657]
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#000719]
                  "
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Site oficial */}
          <div>
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.17em]
                text-slate-300
              "
            >
              DevClub oficial
            </p>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Consulte informações, formações e condições diretamente na página
              oficial.
            </p>

            <a
              href={officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-sm
                text-sm
                font-semibold
                text-white
                transition-colors
                duration-300
                hover:text-[#35E657]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#35E657]
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[#000719]
              "
            >
              Acessar site oficial

              <ExternalLink
                aria-hidden="true"
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>
        </div>

        <div
          className="
            mt-12
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-7
            text-xs
            text-slate-600
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>© {currentYear} DevClub — Projeto demonstrativo.</p>

          <p className="max-w-xl sm:text-right">
            Desenvolvido para o desafio DevClub. Esta página não substitui nem
            representa o site oficial da marca.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;