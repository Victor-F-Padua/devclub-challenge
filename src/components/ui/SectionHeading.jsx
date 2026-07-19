function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        className="
          text-sm
          font-semibold
          uppercase
          tracking-[0.2em]
          text-[#35E657]
        "
      >
        {eyebrow}
      </p>

      <h2
        className="
          mt-4
          text-3xl
          font-bold
          tracking-tight
          text-white
          md:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mx-auto
          mt-5
          max-w-2xl
          leading-7
          text-slate-400
        "
      >
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;