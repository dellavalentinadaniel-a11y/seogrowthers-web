import Link from 'next/link';
import FeaturedBlogPosts from '@/components/FeaturedBlogPosts';
import CourseList from '@/components/CourseList';
import { getBlogPosts } from '@/lib/blog-posts';
import { getCourses } from '@/lib/courses';

export default function HomePage() {
  const posts = getBlogPosts().slice(0, 3);
  const courses = getCourses().slice(0, 3);

  return (
    <div className="bg-dark-bg text-text-light">
      <section className="container mx-auto flex flex-col-reverse items-center gap-10 px-6 py-20 md:flex-row md:py-28">
        <div className="w-full space-y-6 md:w-1/2">
          <span className="inline-flex items-center rounded-full border border-text-accent/40 bg-text-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-text-accent">
            Aprende creando
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            De idea a lanzamiento: productos digitales con SEO, IA y estrategia
          </h1>
          <p className="text-lg text-text-muted">
            Recursos, cursos y proyectos guiados para emprendedores, marketers y developers que quieren validar soluciones reales sin perder tiempo en teoría.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/cursos"
              className="inline-flex items-center justify-center rounded-lg bg-text-accent px-5 py-3 text-sm font-semibold text-dark-bg transition hover:bg-text-accent/90"
            >
              Ver cursos
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg border border-text-accent/40 px-5 py-3 text-sm font-semibold text-text-accent transition hover:bg-text-accent/10"
            >
              Explorar blog
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="rounded-3xl border border-card-bg bg-card-bg/80 p-8 shadow-lg shadow-black/20">
            <h2 className="text-xl font-semibold text-white">Checklist gratuito</h2>
            <p className="mt-2 text-sm text-text-muted">
              Replica el flujo que usamos para auditar proyectos y preparar lanzamientos en menos de una semana.
            </p>
            <Link
              href="/recursos/checklist-auditoria-seo"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-text-accent px-4 py-2 text-sm font-semibold text-dark-bg transition hover:bg-text-accent/90"
            >
              Descargar ahora
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-card-bg bg-card-bg/40 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Cursos recomendados</h2>
          <p className="mt-2 text-text-muted">Aprende con rutas prácticas enfocadas en resultados.</p>
          <div className="mt-8">
            <CourseList courses={courses} />
          </div>
        </div>
      </section>

      <FeaturedBlogPosts posts={posts} />
    </div>
  );
}
