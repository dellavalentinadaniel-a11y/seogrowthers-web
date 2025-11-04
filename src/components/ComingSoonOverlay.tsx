const ComingSoonOverlay = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
    <div className="max-w-md rounded-2xl border border-text-accent/40 bg-card-bg/90 p-8 text-center shadow-2xl shadow-text-accent/20">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-text-accent/20 text-text-accent">
        <i className="fas fa-rocket text-2xl" aria-hidden />
      </div>
      <h2 className="mt-6 text-4xl font-extrabold text-white">
        ¡Próximamente!
      </h2>
      <p className="mt-3 text-sm text-text-muted">
        Estamos preparando una comunidad enfocada en proyectos reales, retos
        colaborativos y mentorías en vivo.
      </p>
      <p className="mt-4 text-xs uppercase tracking-[0.4em] text-text-muted">
        Mantente atento a las novedades
      </p>
    </div>
  </div>
);

export default ComingSoonOverlay;
