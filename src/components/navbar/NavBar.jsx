import devClubLogo from "../../assets/images/devclub-logo.jpg";

const navigationLinks = [
  {
    label: "Início",
    href: "#inicio",
  },
  {
    label: "Jornada",
    href: "#jornada",
  },
  {
    label: "Cursos",
    href: "#cursos",
  },
  {
    label: "Projetos",
    href: "#projetos",
  },
  {
    label: "Mentores",
    href: "#mentores",
  },
];

function Navbar() {
  return (
    <header
      className="
    fixed
    inset-x-0
    top-0
    z-30
    border-b
    border-white/5
    bg-[#000A23]/75
    backdrop-blur-xl
  "
    >
      <nav
        className="
          mx-auto
          flex
          h-24
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-8
        "
        aria-label="Navegação principal"
      >
        <a href="#inicio" aria-label="Ir para o início">
          <img
            src={devClubLogo}
            alt="DevClub"
            className="h-9 w-auto object-contain"
          />
        </a>

        <div className="hidden items-center gap-4 min-[900px]:flex xl:gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                text-sm
                font-medium
                text-slate-300
                transition-colors
                duration-200
                hover:text-white
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#cursos"
          className="
            rounded-full
            border
            border-[#35E657]/40
            bg-[#35E657]
            px-5
            py-2.5
            text-xs xl:text-sm
            font-semibold
            text-[#000A23]
            transition
            duration-200
            hover:-translate-y-0.5
            hover:shadow-[0_0_25px_rgba(53,230,87,0.3)]
          "
        >
          Começar
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
