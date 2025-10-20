import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="grid gap-6 md:grid-cols-2 items-center">
        <div className="space-y-5">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            <span className="block">Cuisine créative,</span>
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              vibes modernes
            </span>
          </h1>
          <p className="text-base/7 opacity-90 max-w-prose">
            Nova Bistro mêle produits locaux, options végé et un esprit
            chaleureux. Viens pour les bowls, reste pour les desserts.
          </p>
          <div className="flex gap-3">
            <Link
              href="/contact#reservation"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black px-5 py-2.5 font-medium hover:opacity-90"
            >
              Réserver
            </Link>
            <Link
              href="#menu"
              className="rounded-full border border-white/20 px-5 py-2.5 font-medium hover:border-cyan-300 hover:text-cyan-300"
            >
              Voir le menu
            </Link>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-white/10" aria-hidden />
      </section>

      {/* Highlights */}
      <section className="grid sm:grid-cols-3 gap-4" id="menu">
        {["Bowls signatures", "Cocktails & mocktails", "Brunch le week‑end"].map((t) => (
          <div
            key={t}
            className="rounded-xl p-4 border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <div className="text-lg font-semibold mb-1">{t}</div>
            <p className="text-sm opacity-80">Fraîcheur, fun et couleurs dans l’assiette.</p>
          </div>
        ))}
      </section>

      {/* Gallery placeholder */}
      <section className="grid sm:grid-cols-3 gap-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0"
          />
        ))}
      </section>
    </div>
  );
}
