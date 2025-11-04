import { LessonNavigation } from '@/components/LessonNavigation';

const courseSlug = 'como-crear-app-web-ia-sin-programar';
const nextLesson = '2';

const paths = [
  {
    title: 'El camino antiguo',
    subtitle: 'Complejo y costoso',
    accent: 'text-rose-300',
    items: [
      'Aprender un lenguaje complejo como Python.',
      'Dominar librerías de machine learning.',
      'Montar y mantener servidores propios.',
      'Programar frontend y backend por separado.',
      'Integrarlo todo sin que se rompa en producción.',
    ],
    icon: '❌',
  },
  {
    title: 'El camino moderno',
    subtitle: 'Visual e intuitivo',
    accent: 'text-emerald-300',
    items: [
      'Diseñar la interfaz con herramientas visuales.',
      '“Alquilar” el cerebro de IA de proveedores líderes.',
      'Conectar servicios mediante APIs y automatizaciones.',
    ],
    icon: '✅',
  },
];

const conceptCards = [
  {
    heading: 'Concepto clave #1: La API, tu mesero personal',
    color: 'text-sky-300',
    body: `Piensa en tu aplicación como ese cliente que desea algo específico. La API toma tu petición,
    habla con la IA y regresa con el plato listo, sin que tengas que entrar a la cocina tecnológica.`,
    diagram: [
      { emoji: '📱', title: 'Tu app', caption: 'Realiza la petición' },
      { emoji: '🤵', title: 'La API', caption: 'Transporta la orden' },
      { emoji: '🍳', title: 'La IA', caption: 'Prepara la respuesta' },
    ],
  },
  {
    heading: 'Concepto clave #2: Mentalidad de integrador',
    color: 'text-purple-300',
    body: `No fabricaremos todas las piezas, sino que combinaremos las mejores del mercado para resolver un problema real.
    Tu valor está en saber qué conectar y cómo hacerlo.`,
    quote:
      'Un programador crea ladrillos. Un integrador construye castillos con ellos.',
  },
  {
    heading: 'Concepto clave #3: Escalabilidad de costos',
    color: 'text-emerald-300',
    body: `Experimenta sin barreras económicas. Pagarás cuando tu solución tenga tracción, lo cual es el mejor problema posible.`,
    checklist: [
      '<strong>Herramientas no-code:</strong> Planes gratuitos con capacidad suficiente para prototipar.',
      '<strong>Uso de IA:</strong> Créditos iniciales que permiten iterar cientos de veces.',
    ],
  },
];

export default function CustomLesson1Page() {
  return (
    <div className="not-prose space-y-16">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          <span className="bg-gradient-to-r from-text-accent via-sky-400 to-purple-400 bg-clip-text text-transparent">
            Bienvenido a bordo:
          </span>
          <br />
          Estás a punto de construir el futuro
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-text-muted md:text-xl">
          Estamos viviendo un cambio de paradigma. Hoy puedes crear tecnología
          potente sin escribir código tradicional. Tu ventaja estará en saber
          elegir y orquestar las herramientas adecuadas.
        </p>
      </header>

      <section>
        <h2 className="text-center text-3xl font-bold text-white">
          El cambio de juego
        </h2>
        <p className="mt-4 text-center text-text-muted">
          Compara el proceso de desarrollo de una app tradicional con el enfoque
          que adoptaremos durante el curso.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {paths.map(path => (
            <article
              key={path.title}
              className="flex h-full flex-col rounded-2xl border border-card-bg bg-card-bg/80 p-6 shadow-lg shadow-black/20"
            >
              <h3 className="text-xl font-semibold text-white">
                {path.icon} {path.title}{' '}
                <span
                  className={`ml-2 text-sm uppercase tracking-wide ${path.accent}`}
                >
                  ({path.subtitle})
                </span>
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-text-muted">
                {path.items.map(item => (
                  <li key={item}>
                    {path.icon} {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        {conceptCards.map(card => (
          <article
            key={card.heading}
            className="rounded-2xl border border-card-bg bg-card-bg/80 p-8 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-text-accent/10"
          >
            <h3 className={`text-2xl font-semibold text-white ${card.color}`}>
              {card.heading}
            </h3>
            <p className="mt-4 text-text-muted">{card.body}</p>

            {card.diagram && (
              <div className="mt-6 flex flex-col items-stretch gap-4 rounded-xl border border-text-muted/20 bg-black/30 p-4 text-center sm:flex-row sm:items-center sm:justify-between">
                {card.diagram.map(step => (
                  <div key={step.title} className="flex-1">
                    <span className="text-3xl">{step.emoji}</span>
                    <p className="mt-2 font-semibold text-white">
                      {step.title}
                    </p>
                    <p className="text-xs text-text-muted">{step.caption}</p>
                  </div>
                ))}
              </div>
            )}

            {card.quote && (
              <blockquote className="mt-6 border-l-4 border-purple-400/60 pl-6 text-sm italic text-text-muted">
                {card.quote}
              </blockquote>
            )}

            {card.checklist && (
              <ul
                className="mt-6 space-y-2 text-sm text-text-muted"
                dangerouslySetInnerHTML={{
                  __html: `<li>${card.checklist.join('</li><li>')}</li>`,
                }}
              />
            )}
          </article>
        ))}
      </section>

      <LessonNavigation
        courseSlug={courseSlug}
        prevLessonId={null}
        nextLessonId={Number(nextLesson)}
        nextLabel="Ir a la lección 0.2"
      />
    </div>
  );
}
