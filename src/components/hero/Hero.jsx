function Hero() {
  return (
    <main className="relative min-h-screen bg-[#000A23]">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#3AD153]">
            DevClub
          </p>

          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Transforme código em oportunidade
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 md:text-lg">
            Aprenda, construa projetos e acelere sua jornada para o mercado de
            programação.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Hero;