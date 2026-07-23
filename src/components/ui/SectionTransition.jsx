import { motion } from "motion/react";

function SectionTransition({ text }) {
  return (
    <div
      aria-hidden="true"
      className="
        relative
        overflow-hidden
        bg-[#000A23]
        px-6
        py-5
        lg:px-8
      "
    >
      <div
        className="
          relative
          mx-auto
          h-10
          max-w-7xl
        "
      >
        {/* Linha */}
        <div
          className="
            absolute
            inset-x-0
            top-1/2
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/15
            to-transparent
          "
        />

        {/* Ponto percorrendo a linha */}
        <motion.span
          className="
            absolute
            top-1/2
            z-10
            h-2
            w-2
            -translate-y-1/2
            rounded-full
            bg-[#35E657]
            shadow-[0_0_16px_#35E657]
          "
          animate={{
            left: ["2%", "98%"],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

        {/* Texto central */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            z-20
            -translate-x-1/2
            -translate-y-1/2
            bg-[#000A23]
            px-4
          "
        >
          <p
            className="
              whitespace-nowrap
              font-mono
              text-[10px]
              tracking-[0.16em]
              text-slate-500
              sm:text-xs
            "
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionTransition;