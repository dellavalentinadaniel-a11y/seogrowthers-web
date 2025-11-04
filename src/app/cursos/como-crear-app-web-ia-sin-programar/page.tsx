import Link from 'next/link';

const courseSlug = 'como-crear-app-web-ia-sin-programar';

const learningOutcomes = [
  {
    icon: 'fas fa-project-diagram',
    title: 'Mentalidad de integrador',
    description:
      'Tu enfoque estará en conectar plataformas y diseñar procesos eficientes, no en escribir código desde cero.',
  },
  {
    icon: 'fas fa-dollar-sign',
    title: 'Costo de APIs',
    description:
      'Aprende a estimar y optimizar costos para que tu proyecto escale de forma sostenible.',
  },
  {
    icon: 'fas fa-drafting-compass',
    title: 'Diseño funcional',
    description:
      'Construye interfaces simples y orientadas a resolver un problema real para tus usuarios.',
  },
  {
    icon: 'fas fa-brain',
    title: 'Ingeniería de prompts',
    description:
      'Domina la estructura de prompts profesionales para obtener respuestas consistentes de la IA.',
  },
];

const requiredTools = [
  {
    icon: 'fas fa-mouse-pointer',
    color: 'text-emerald-300',
    label: (
      <>
        Constructor web No-Code:{' '}
        <Link
          href="https://bubble.io"
          className="font-semibold text-white hover:text-text-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bubble
        </Link>{' '}
        o{' '}
        <Link
          href="https://webflow.com"
          className="font-semibold text-white hover:text-text-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          Webflow
        </Link>
      </>
    ),
  },
  {
    icon: 'fas fa-robot',
    color: 'text-purple-300',
    label: (
      <>
        Plataforma de IA:{' '}
        <Link
          href="https://openai.com"
          className="font-semibold text-white hover:text-text-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenAI
        </Link>{' '}
        o{' '}
        <Link
          href="https://ai.google"
          className="font-semibold text-white hover:text-text-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google AI
        </Link>
      </>
    ),
  },
  {
    icon: 'fas fa-link',
    color: 'text-amber-300',
    label: (
      <>
        Conector de automatizaciones:{' '}
        <Link
          href="https://www.make.com"
          className="font-semibold text-white hover:text-text-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          Make
        </Link>{' '}
        o{' '}
        <Link
          href="https://zapier.com"
          className="font-semibold text-white hover:text-text-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zapier
        </Link>
      </>
    ),
  },
];

const modules = [
  {
    title: 'MÓDULO 0: PREPARACIÓN',
    lessons: [
      '0.1: Bienvenida y Revolución',
      '0.2: Cuestionario Interactivo',
      '0.3: Kit de Herramientas',
    ],
  },
  {
    title: 'MÓDULO 1: LA IDEA',
    lessons: ['1.1: Encontrar un Problema', '1.2: La Fórmula Mágica'],
  },
  {
    title: 'MÓDULO 2: LA ARQUITECTURA',
    lessons: ['2.1: La API Key'],
  },
  {
    title: 'MÓDULO 3: EL CEREBRO',
    lessons: ['3.1: Prompt Profesional'],
  },
  {
    title: 'MÓDULO 4: LA CONSTRUCCIÓN',
    lessons: [
      '4.1: Configurando Make',
      '4.2: Diseñando en Bubble',
      '4.3: La Conexión Final',
    ],
  },
  {
    title: 'MÓDULO 5: LANZAMIENTO',
    lessons: ['5.1: Lanzamiento y Futuro'],
  },
];

export default function CourseLandingPage() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-16 text-text-light sm:px-6 lg:px-8">
      <header className="mx-auto mb-16 max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
          Cómo crear una app web{' '}
          <span className="bg-gradient-to-r from-text-accent via-sky-400 to-purple-400 bg-clip-text text-transparent">
            con IA sin programar
          </span>
        </h1>
        <p className="mt-6 text-lg text-text-muted md:text-xl">
          Diseña una interfaz sencilla, conecta servicios punteros de IA y lanza
          un producto funcional usando herramientas No-Code.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
        <section className="space-y-10 lg:col-span-2">
          <article className="rounded-2xl border border-card-bg bg-card-bg/80 p-8 shadow-lg shadow-black/20">
            <h2 className="text-2xl font-semibold text-white">
              ¿Qué aprenderás en este curso?
            </h2>
            <p className="mt-4 text-text-muted">
              Creado para emprendedores y perfiles creativos que quieren lanzar
              productos basados en IA sin adentrarse en código complejo. Te
              guiaremos paso a paso para que conectes herramientas visuales con
              APIs potentes.
            </p>
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {learningOutcomes.map(item => (
                <li
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-text-muted/20 bg-black/30 p-5"
                >
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-text-accent/20 text-text-accent">
                    <i className={`${item.icon} text-sm`} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-card-bg bg-card-bg/80 p-8 shadow-lg shadow-black/20">
            <h2 className="text-2xl font-semibold text-white">
              Herramientas que necesitarás
            </h2>
            <p className="mt-4 text-text-muted">
              No necesitas experiencia previa en desarrollo. Solo asegúrate de
              contar con estas cuentas gratuitas antes de comenzar.
            </p>
            <ul className="mt-6 space-y-4">
              {requiredTools.map(tool => (
                <li
                  key={tool.icon}
                  className="flex items-start gap-3 rounded-xl border border-text-muted/20 bg-black/30 p-4"
                >
                  <i className={`${tool.icon} mt-1 text-lg ${tool.color}`} />
                  <span className="text-sm text-text-light/80">
                    {tool.label}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-card-bg bg-card-bg/80 p-6 shadow-lg shadow-black/20">
            <h2 className="text-xl font-semibold text-white">Mapa del curso</h2>
            <ul className="mt-6 space-y-5">
              {modules.map(module => (
                <li
                  key={module.title}
                  className="rounded-xl border border-text-muted/20 bg-black/20 p-4"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                    {module.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-text-light/80">
                    {module.lessons.map(lesson => (
                      <li key={lesson}>• {lesson}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <Link
              href={`/cursos/${courseSlug}/leccion/1`}
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-text-accent px-4 py-3 text-lg font-semibold text-dark-bg transition hover:bg-text-accent/90"
            >
              Empezar el curso
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
