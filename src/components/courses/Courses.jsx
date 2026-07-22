import { useRef, useState } from "react";

import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  ChartNoAxesColumnIncreasing,
  Database,
  MoveRight,
  Sparkles,
} from "lucide-react";

import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

import { motion } from "motion/react";

import SectionHeading from "../ui/SectionHeading";

const courses = [
  {
    number: "01",
    category: "Formação principal",
    title: "DevClub Full Stack",
    description:
      "Uma jornada completa para desenvolver aplicações modernas, do front-end ao back-end.",
    details: "HTML • CSS • JavaScript • React • Node.js • Banco de dados",
    variant: "fullstack",

    // Adicione a URL oficial quando encontrar:
    href: null,
  },
  {
    number: "02",
    category: "Complemento Pro",
    title: "IA Club",
    description:
      "Inteligência artificial aplicada à produtividade, criação e automação.",
    details: "IA • Prompts • Agentes • Automação",
    variant: "ai",
    href: null,
  },
  {
    number: "03",
    category: "Complemento Pro",
    title: "DataClub",
    description:
      "Análise e visualização de dados para transformar informações em decisões.",
    details: "Dados • Dashboards • Análise",
    variant: "data",
    href: null,
  },
  {
    number: "04",
    category: "Formação",
    title: "DevClub Front-end",
    description:
      "Fundamentos e ferramentas para construir interfaces modernas, responsivas e bem estruturadas.",
    details: "HTML • CSS • JavaScript",
    variant: "frontend",

    // Adicione a URL oficial quando encontrar:
    href: null,
  },
];

const fullStackTechnologies = [
  {
    name: "HTML",
    Icon: SiHtml5,
    color: "#E34F26",
    border: "rgba(227, 79, 38, 0.3)",
    glow: "rgba(227, 79, 38, 0.16)",
    glowStrong: "rgba(227, 79, 38, 0.48)",
    delay: 0,
  },
  {
    name: "CSS",
    Icon: SiCss,
    color: "#A855F7",
    border: "rgba(168, 85, 247, 0.3)",
    glow: "rgba(168, 85, 247, 0.16)",
    glowStrong: "rgba(168, 85, 247, 0.48)",
    delay: 0.2,
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    color: "#F7DF1E",
    border: "rgba(247, 223, 30, 0.28)",
    glow: "rgba(247, 223, 30, 0.14)",
    glowStrong: "rgba(247, 223, 30, 0.44)",
    delay: 0.4,
  },
  {
    name: "React",
    Icon: SiReact,
    color: "#61DAFB",
    border: "rgba(97, 218, 251, 0.3)",
    glow: "rgba(97, 218, 251, 0.16)",
    glowStrong: "rgba(97, 218, 251, 0.48)",
    delay: 0.15,
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    color: "#5FA04E",
    border: "rgba(95, 160, 78, 0.32)",
    glow: "rgba(95, 160, 78, 0.17)",
    glowStrong: "rgba(95, 160, 78, 0.5)",
    delay: 0.35,
  },
  {
    name: "Banco de dados",
    Icon: Database,
    color: "#A78BFA",
    border: "rgba(167, 139, 250, 0.3)",
    glow: "rgba(167, 139, 250, 0.16)",
    glowStrong: "rgba(167, 139, 250, 0.48)",
    delay: 0.55,
  },
];

const frontendTechnologies = fullStackTechnologies.slice(0, 3);

function TechnologyIcon({ technology, compact = false }) {
  const { name, Icon, color, border, glow, glowStrong, delay } = technology;

  return (
    <motion.div
      aria-label={name}
      title={name}
      animate={{
        y: [0, -7, 0],
      }}
      whileHover={{
        y: -10,
        scale: 1.1,
        borderColor: color,
        boxShadow: `0 0 34px ${glowStrong}`,
      }}
      transition={{
        y: {
          duration: 3.2,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: {
          duration: 0.25,
        },
        boxShadow: {
          duration: 0.25,
        },
        borderColor: {
          duration: 0.25,
        },
      }}
      style={{
        borderColor: border,
        boxShadow: `0 0 20px ${glow}`,
      }}
      className={`
        group/technology
        relative
        flex
        items-center
        justify-center
        rounded-2xl
        border
        bg-[#07142F]/90
        backdrop-blur-sm
        transition-colors
        duration-300
        hover:bg-[#0A1938]
        ${compact ? "h-14 w-14" : "h-[62px] w-[62px]"}
      `}
    >
      <Icon
        size={compact ? 24 : 27}
        style={{
          color,
          filter: `drop-shadow(0 0 5px ${glowStrong})`,
        }}
        className="
          transition
          duration-300
          group-hover/technology:scale-110
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          -bottom-7
          left-1/2
          z-20
          -translate-x-1/2
          whitespace-nowrap
          rounded-md
          border
          border-white/10
          bg-[#020A1D]
          px-2
          py-1
          text-[9px]
          font-medium
          text-slate-300
          opacity-0
          shadow-xl
          transition
          duration-200
          group-hover/technology:opacity-100
        "
      >
        {name}
      </span>
    </motion.div>
  );
}

function FullStackVisual() {
  return (
    <div
      aria-hidden="true"
      className="
        relative
        mt-auto
        grid
        min-h-[162px]
        grid-cols-3
        place-items-center
        gap-x-3
        gap-y-6
        px-1
        pt-7
      "
    >
      {fullStackTechnologies.map((technology) => (
        <TechnologyIcon key={technology.name} technology={technology} compact />
      ))}
    </div>
  );
}

function FrontendVisual() {
  return (
    <div
      aria-hidden="true"
      className="
        relative
        mt-auto
        flex
        min-h-[145px]
        items-center
        justify-center
        gap-5
        pt-7
      "
    >
      {frontendTechnologies.map((technology) => (
        <TechnologyIcon key={technology.name} technology={technology} />
      ))}
    </div>
  );
}

function AiVisual() {
  return (
    <div
      aria-hidden="true"
      className="
        relative
        mt-auto
        flex
        min-h-[145px]
        items-center
        justify-center
        pt-7
      "
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 2, 0, -2, 0],
        }}
        whileHover={{
          scale: 1.1,
        }}
        transition={{
          y: {
            duration: 3.4,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: 0.25,
          },
        }}
        className="
          relative
          z-10
          flex
          h-[70px]
          w-[70px]
          items-center
          justify-center
          rounded-2xl
          border
          border-[#35E657]/25
          bg-[#35E657]/5
          text-[#35E657]
          shadow-[0_0_24px_rgba(53,230,87,0.08)]
          transition
          duration-300
          hover:border-[#35E657]/70
          hover:bg-[#35E657]/10
          hover:shadow-[0_0_36px_rgba(53,230,87,0.3)]
        "
      >
        <BrainCircuit size={31} />
      </motion.div>

      <motion.div
        animate={{
          x: [-4, 4, -4],
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-7
          left-[18%]
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-[#07142F]
          text-[#35E657]/80
        "
      >
        <Bot size={19} />
      </motion.div>

      <motion.div
        animate={{
          x: [4, -4, 4],
          y: [0, -7, 0],
        }}
        transition={{
          duration: 3.6,
          delay: 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-8
          right-[18%]
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-[#07142F]
          text-[#35E657]/80
        "
      >
        <Sparkles size={18} />
      </motion.div>

      <motion.span
        animate={{
          y: [0, -8, 0],
          opacity: [0.25, 1, 0.25],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[31%]
          top-11
          h-1.5
          w-1.5
          rounded-full
          bg-[#35E657]
          shadow-[0_0_12px_rgba(53,230,87,0.9)]
        "
      />

      <motion.span
        animate={{
          y: [0, -7, 0],
          opacity: [0.2, 0.9, 0.2],
        }}
        transition={{
          duration: 3,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[30%]
          top-14
          h-2
          w-2
          rounded-full
          bg-[#35E657]/70
          shadow-[0_0_12px_rgba(53,230,87,0.7)]
        "
      />
    </div>
  );
}

function DataVisual() {
  const bars = [
    { height: 34, delay: 0 },
    { height: 52, delay: 0.15 },
    { height: 43, delay: 0.3 },
    { height: 64, delay: 0.45 },
  ];

  return (
    <div
      aria-hidden="true"
      className="
        relative
        mt-auto
        flex
        min-h-[145px]
        items-end
        justify-center
        gap-3
        pb-5
        pt-7
      "
    >
      {/* Escondido em celulares pequenos */}
      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-6
          left-[10%]
          hidden
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          border
          border-[#35E657]/30
          bg-[#07142F]
          text-[#35E657]
          shadow-[0_0_20px_rgba(53,230,87,0.14)]
          transition
          duration-300
          hover:border-[#35E657]/70
          hover:shadow-[0_0_30px_rgba(53,230,87,0.35)]
          sm:flex
        "
      >
        <Database size={21} />
      </motion.div>

      {/* Gráfico permanece visível em todas as telas */}
      {bars.map((bar, index) => (
        <motion.span
          key={index}
          animate={{
            y: [0, -6, 0],
            scaleY: [0.84, 1, 0.9, 1],
          }}
          whileHover={{
            scaleY: 1.12,
          }}
          transition={{
            duration: 3,
            delay: bar.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            height: `${bar.height}px`,
            transformOrigin: "bottom",
          }}
          className="
            w-6
            rounded-t-md
            bg-[#35E657]/75
            shadow-[0_0_20px_rgba(53,230,87,0.18)]
            transition
            duration-300
            hover:bg-[#35E657]
            hover:shadow-[0_0_28px_rgba(53,230,87,0.42)]
          "
        />
      ))}

      {/* Escondido em celulares pequenos */}
      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 3.3,
          delay: 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-8
          right-[10%]
          hidden
          text-slate-500
          transition
          duration-300
          hover:text-[#35E657]
          hover:drop-shadow-[0_0_8px_rgba(53,230,87,0.7)]
          sm:block
        "
      >
        <ChartNoAxesColumnIncreasing size={24} />
      </motion.div>
    </div>
  );
}

function CourseVisual({ variant }) {
  if (variant === "fullstack") {
    return <FullStackVisual />;
  }

  if (variant === "ai") {
    return <AiVisual />;
  }

  if (variant === "data") {
    return <DataVisual />;
  }

  return <FrontendVisual />;
}

function CourseLink({ href }) {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        mt-5
        inline-flex
        items-center
        gap-2
        self-start
        text-sm
        font-semibold
        text-white
        transition
        duration-300
        hover:text-[#35E657]
      "
    >
      Conhecer formação
      <ArrowUpRight size={16} />
    </a>
  );
}

function CourseCard({ course, index, className = "" }) {
  return (
    <motion.article
      data-course-card
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group
        relative
        flex
        min-h-[350px]
        flex-col
        overflow-hidden
        rounded-[26px]
        border
        border-white/10
        bg-[#07112D]
        p-6
        shadow-[0_0_0_rgba(53,230,87,0)]
        transition-[flex-grow,transform,box-shadow,border-color,background-color]
        duration-500
        ease-out
        hover:border-[#35E657]/35
        hover:bg-[#081633]
        hover:shadow-[0_0_42px_rgba(53,230,87,0.12)]
        md:p-7
        ${className}
      `}
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-[#35E657]/0
          blur-[75px]
          transition
          duration-500
          group-hover:bg-[#35E657]/10
        "
      />

      <div className="relative z-10 flex h-full flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#35E657]
            "
          >
            {course.category}
          </p>

          <span
            className="
              font-mono
              text-xs
              text-white/15
              transition
              duration-500
              group-hover:text-[#35E657]/50
            "
          >
            {course.number}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-semibold leading-tight text-white">
          {course.title}
        </h3>

        <p className="mt-4 text-sm leading-6 text-slate-400">
          {course.description}
        </p>

        <p className="mt-3 text-[11px] leading-5 text-slate-600">
          {course.details}
        </p>

        <CourseVisual variant={course.variant} />

        <CourseLink href={course.href} />
      </div>
    </motion.article>
  );
}

function Courses() {
  const mobileTrackRef = useRef(null);
  const [activeCourse, setActiveCourse] = useState(0);

  function handleMobileScroll() {
    const track = mobileTrackRef.current;

    if (!track) {
      return;
    }

    const firstCard = track.querySelector("[data-course-card]");

    if (!firstCard) {
      return;
    }

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 16;
    const cardWidth = firstCard.getBoundingClientRect().width + gap;

    const nextIndex = Math.round(track.scrollLeft / cardWidth);

    setActiveCourse(Math.max(0, Math.min(nextIndex, courses.length - 1)));
  }

  return (
    <section
      id="cursos"
      className="
        relative
        scroll-mt-24
        overflow-hidden
        border-t
        border-white/5
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
          left-1/2
          top-20
          h-[380px]
          w-[520px]
          -translate-x-1/2
          rounded-full
          bg-[#68009B]/8
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Ecossistema DevClub"
          title="Da base da programação às novas tecnologias."
          description="Formações e complementos para desenvolver habilidades, construir projetos e acompanhar as mudanças do mercado."
        />

        {/* Indicação visível somente no celular */}
        <div
          className="
            mt-10
            flex
            items-center
            justify-end
            gap-2
            text-xs
            font-medium
            text-slate-400
            md:hidden
          "
        >
          <span>Deslize para explorar</span>

          <motion.div
            animate={{
              x: [0, 7, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <MoveRight size={18} className="text-[#35E657]" />
          </motion.div>
        </div>

        {/* Celular */}
        <div
          ref={mobileTrackRef}
          onScroll={handleMobileScroll}
          className="
    -mx-6
    mt-4
    flex
    snap-x
    snap-mandatory
    gap-4
    overflow-x-auto
    scroll-smooth
    px-[7%]
    scroll-px-[7%]
    pb-6
    md:hidden
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
  "
        >
          {courses.map((course, index) => (
            <CourseCard
              key={course.title}
              course={course}
              index={index}
              className="shrink-0 basis-[86%] snap-center"
            />
          ))}
        </div>

        {/* Indicadores do carrossel */}
        <div
          className="
            mt-1
            flex
            items-center
            justify-center
            gap-2
            md:hidden
          "
        >
          {courses.map((course, index) => (
            <span
              key={course.title}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  index === activeCourse
                    ? "w-7 bg-[#35E657]"
                    : "w-1.5 bg-white/15"
                }
              `}
            />
          ))}
        </div>

        {/* Tablet e notebook */}
        <div
          className="
            mt-16
            hidden
            gap-5
            md:grid
            md:grid-cols-2
            xl:hidden
          "
        >
          {courses.map((course, index) => (
            <CourseCard
              key={course.title}
              course={course}
              index={index}
              className="hover:-translate-y-1.5"
            />
          ))}
        </div>

        {/* Desktop grande */}
        <div className="mt-16 hidden gap-4 xl:flex">
          {courses.map((course, index) => (
            <CourseCard
              key={course.title}
              course={course}
              index={index}
              className="
                min-w-0
                basis-0
                flex-[1_1_0%]
                hover:z-10
                hover:flex-[1.4_1_0%]
                hover:-translate-y-2
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
