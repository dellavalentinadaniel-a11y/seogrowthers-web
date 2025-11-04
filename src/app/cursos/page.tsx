import Link from 'next/link';
import { getCourses } from '@/lib/courses';

const miniProjects = [
  {
    title: 'Mini-Proyecto: Ecommerce Simple',
    description: 'Construye la base de una tienda online funcional con Next.js.',
    href: '#',
  },
  {
    title: 'Mini-Proyecto: Blog con Astro',
    description: 'Crea un blog estático ultrarrápido y optimizado para SEO.',
    href: '#',
  },
  {
    title: 'Mini-Proyecto: Clon de Linktree',
    description: 'Desarrolla tu propia página de “enlace en bio”.',
    href: '#',
  },
];

export default function CoursesPage() {
  const courses = getCourses();
  const primaryCourseSlug = 'como-crear-app-web-ia-sin-programar';

  return (
    <main className="container mx-auto max-w-7xl px-4 py-16 text-text-light sm:px-6 lg:px-8">
      <header className="mx-auto mb-16 max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-text-muted">Cursos y workshops</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Aprende construyendo proyectos reales
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          Contenido práctico, enfoque en productos y soporte constante para que avances desde la idea hasta el lanzamiento.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {courses.map((course) => {
          const isPrimary = course.slug === primaryCourseSlug;
          const iconColor = course.iconColor ?? 'text-text-accent';

          return (
            <article
              key={course.slug}
              className={[
                'flex h-full flex-col rounded-2xl border bg-card-bg/80 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:shadow-text-accent/10',
                isPrimary ? 'border-text-accent/70' : 'border-card-bg hover:border-text-accent/40',
              ].join(' ')}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border border-text-muted/40 px-3 py-1 text-xs uppercase tracking-widest text-text-muted">
                  {course.level}
                </span>
                {course.icon && (
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-text-muted/30 bg-black/30">
                    <i className={`${course.icon} text-lg ${iconColor}`} />
                  </span>
                )}
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-white">{course.title}</h2>
              <p className="mt-3 text-sm text-text-muted">Instructor: {course.instructor}</p>
              <p className="mt-4 flex-grow text-text-light/80">{course.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-text-muted/40 px-3 py-1 text-xs text-text-muted">
                  {course.duration}
                </span>
                {course.tags?.map((tag) => (
                  <span key={tag} className="rounded-full bg-black/40 px-3 py-1 text-xs text-text-muted">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/cursos/${course.slug}`}
                className={[
                  'mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition',
                  isPrimary
                    ? 'bg-text-accent text-dark-bg hover:bg-text-accent/90'
                    : 'bg-text-accent/20 text-text-accent hover:bg-text-accent/30',
                ].join(' ')}
              >
                Ver curso
              </Link>
            </article>
          );
        })}
      </section>

      <section className="mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Mini-proyectos adicionales</h2>
            <p className="mt-2 text-text-muted">
              Ejercicios cortos para reforzar habilidades específicas y practicar stacks distintos.
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {miniProjects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-2xl border border-card-bg bg-card-bg/80 p-6 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-text-accent/40"
            >
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-3 flex-grow text-sm text-text-muted">{project.description}</p>
              <a
                href={project.href}
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-text-accent/50 px-4 py-2 text-sm font-semibold text-text-accent transition hover:bg-text-accent/10"
              >
                Explorar
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
