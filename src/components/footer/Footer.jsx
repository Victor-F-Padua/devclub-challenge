function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        bg-[#000719]
        px-6
        py-10
        lg:px-8
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-5
          text-center
          md:flex-row
          md:items-center
          md:justify-between
          md:text-left
        "
      >
        <div>
          <p className="font-bold text-white">
            DevClub
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Código muda carreiras. Consistência muda destinos.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          Projeto demonstrativo desenvolvido para o desafio DevClub.
        </p>
      </div>
    </footer>
  );
}

export default Footer;