const highlights = [
  {
    title: 'Nuestra Misión',
    copy:
      'Empoderar a desarrolladores, emprendedores y entusiastas del marketing digital con herramientas prácticas, contenido accionable y acompañamiento constante para que puedan construir, lanzar y hacer crecer proyectos digitales sostenibles.',
  },
  {
    title: 'Nuestra Visión',
    copy:
      'Convertirnos en la plataforma de referencia para quienes desean dominar la intersección entre desarrollo web y marketing digital, integrando recursos, mini-proyectos y formación continua en un mismo espacio.',
  },
];

const philosophy = [
  {
    label: 'Aprender haciendo',
    detail: 'Diseñamos experiencias centradas en la práctica y en resultados tangibles.',
  },
  {
    label: 'Calidad curada',
    detail: 'Publicamos guías, talleres y recursos revisados y actualizados de forma periódica.',
  },
  {
    label: 'Comunidad',
    detail: 'Fomentamos la colaboración entre perfiles técnicos y estratégicos para acelerar el aprendizaje.',
  },
  {
    label: 'Innovación continua',
    detail: 'Experimentamos con nuevas tecnologías, frameworks y metodologías para mantenernos relevantes.',
  },
];

export default function SobreMiPage() {
  return (
    <main className="container mx-auto max-w-5xl px-6 py-16 text-text-light">
      <header className="text-center mb-12">
        <span className="inline-flex items-center rounded-full border border-text-muted/40 px-4 py-1 text-sm uppercase tracking-widest text-text-muted">
          Sobre nosotros
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
          Construimos en comunidad para crecer en digital
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          SEOGROWTHERS reúne estrategia, tecnología y contenidos educativos para ayudarte a lanzar productos digitales con impacto.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        {highlights.map(({ title, copy }) => (
          <article
            key={title}
            className="rounded-xl border border-card-bg bg-card-bg/80 p-8 shadow-lg shadow-black/20 transition hover:border-text-accent/60 hover:shadow-text-accent/10"
          >
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-4 leading-relaxed text-text-muted">{copy}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-xl border border-card-bg bg-card-bg/80 p-8 shadow-lg shadow-black/20">
        <h2 className="text-3xl font-semibold text-white">Nuestra filosofía</h2>
        <ul className="mt-6 space-y-4">
          {philosophy.map(({ label, detail }) => (
            <li key={label} className="rounded-lg border border-card-bg bg-black/30 p-4">
              <h3 className="text-lg font-semibold text-text-accent">{label}</h3>
              <p className="mt-2 text-text-muted">{detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
