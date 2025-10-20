import Link from "next/link";

const LayoutPublic = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/50 border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Nova
            </span>
            <span className="opacity-70"> Bistro</span>
          </Link>
          <div className="flex items-center gap-5 text-sm">
            <Link href="/" className="hover:text-cyan-300 transition-colors">
              Accueil
            </Link>
            <Link
              href="/about"
              className="hover:text-cyan-300 transition-colors"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="hover:text-cyan-300 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact#reservation"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black px-4 py-2 font-medium hover:opacity-90 transition-opacity"
            >
              Réserver
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-10">
        {children}
      </main>
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm grid gap-4 sm:grid-cols-3">
          <div>
            <div className="text-base font-semibold">Horaires</div>
            <p className="opacity-80">Lun–Ven: 12:00–14:30 / 19:00–22:30</p>
            <p className="opacity-80">Sam–Dim: 11:30–15:00 / 19:00–23:00</p>
          </div>
          <div>
            <div className="text-base font-semibold">Adresse</div>
            <p className="opacity-80">12 Rue des Fleurs, 75000 Paris</p>
          </div>
          <div>
            <div className="text-base font-semibold">Suivez-nous</div>
            <div className="flex gap-3 opacity-90">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-cyan-300"
              >
                Instagram
              </a>
              <a href="#" aria-label="TikTok" className="hover:text-cyan-300">
                TikTok
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-cyan-300">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LayoutPublic;
