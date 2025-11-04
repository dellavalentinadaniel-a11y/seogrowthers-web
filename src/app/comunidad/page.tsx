import ComingSoonOverlay from '@/components/ComingSoonOverlay';

const communityHighlights = [
  {
    title: 'Foros especializados',
    description: 'Debates moderados, resolución de dudas y feedback directo de la comunidad.',
    icon: 'fas fa-comments',
  },
  {
    title: 'Proyectos colaborativos',
    description: 'Encuentra equipo para lanzar MVPs o únete a iniciativas en marcha.',
    icon: 'fas fa-project-diagram',
  },
  {
    title: 'Mentorías en vivo',
    description: 'Sesiones mensuales con especialistas en SEO, producto y desarrollo.',
    icon: 'fas fa-chalkboard-teacher',
  },
  {
    title: 'Recursos exclusivos',
    description: 'Plantillas, checklists y flujos de trabajo compartidos por la comunidad.',
    icon: 'fas fa-toolbox',
  },
];

export default function ComunidadPage() {
  return (
    <main className="relative min-h-[80vh] bg-dark-bg text-text-light">
      <ComingSoonOverlay />

      <section className="pointer-events-none blur-sm">
        <div className="container mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">Nuestra comunidad</h1>
          <p className="mt-4 text-lg text-text-muted md:text-xl">
            Un punto de encuentro para makers, marketers y developers que crean productos con impacto.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {communityHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-card-bg bg-card-bg/80 p-6 text-left shadow-lg shadow-black/20"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-text-accent/10 text-text-accent">
                  <i className={`${item.icon}`} aria-hidden />
                </span>
                <h2 className="mt-4 text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-sm text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-card-bg bg-card-bg/80 p-8 text-center shadow-lg shadow-black/20">
            <h2 className="text-3xl font-bold text-white">Sé de los primeros en acceder</h2>
            <p className="mt-3 text-text-muted">
              Anúnciate para recibir novedades, ventajas de fundadores y acceso anticipado a los espacios de colaboración.
            </p>
            <div className="mt-6 inline-flex rounded-full border border-text-accent/50 bg-text-accent/10 px-6 py-3 text-sm font-semibold text-text-accent">
              Lista de espera disponible muy pronto
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
