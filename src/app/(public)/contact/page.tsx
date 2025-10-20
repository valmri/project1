const ContactPage = () => {
  return (
    <section className="mx-auto max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Contact & Réservation</h1>
        <p className="opacity-90">Une question, une table à réserver ? Écris‑nous.</p>
      </div>

      <div id="reservation" className="grid sm:grid-cols-2 gap-6">
        <form className="space-y-3 rounded-xl border border-white/10 p-4 bg-white/5">
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm opacity-80">Nom</label>
            <input id="name" className="rounded-md bg-white/10 border border-white/15 px-3 py-2 outline-none focus:border-cyan-300" />
          </div>
          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm opacity-80">Email</label>
            <input id="email" type="email" className="rounded-md bg-white/10 border border-white/15 px-3 py-2 outline-none focus:border-cyan-300" />
          </div>
          <div className="grid gap-1">
            <label htmlFor="people" className="text-sm opacity-80">Nombre de personnes</label>
            <input id="people" type="number" min={1} className="rounded-md bg-white/10 border border-white/15 px-3 py-2 outline-none focus:border-cyan-300" />
          </div>
          <button type="button" className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black px-5 py-2.5 font-medium hover:opacity-90">
            Demander une table
          </button>
        </form>

        <div className="rounded-xl border border-white/10 p-4 bg-white/5 space-y-2">
          <div className="font-medium">Infos</div>
          <p className="opacity-80">12 Rue des Fleurs, 75000 Paris</p>
          <p className="opacity-80">Lun–Ven: 12:00–14:30 / 19:00–22:30</p>
          <p className="opacity-80">Sam–Dim: 11:30–15:00 / 19:00–23:00</p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
