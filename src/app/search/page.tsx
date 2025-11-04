import { fetchBlogPosts, fetchCourses } from "@/lib/api";
import Link from "next/link";

interface SearchPageProps {
  searchParams: { q?: string };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = (searchParams.q ?? '').trim();

  if (!query) {
    return (
      <section className="container mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-6 text-center text-text-light">
        <h1 className="text-4xl font-bold text-white">¿Qué estás buscando?</h1>
        <p className="mt-4 text-lg text-text-muted">
          Escribe un término en la barra superior para descubrir artículos, guías y cursos relacionados.
        </p>
      </section>
    );
  }

  const [allPosts, allCourses] = await Promise.all([
    fetchBlogPosts(),
    fetchCourses(),
  ]);

  const lowerCaseQuery = query.toLowerCase();

  const filteredPosts = allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerCaseQuery) ||
      post.description.toLowerCase().includes(lowerCaseQuery)
  );

  const filteredCourses = allCourses.filter(
    (course) =>
      course.title.toLowerCase().includes(lowerCaseQuery) ||
      course.description.toLowerCase().includes(lowerCaseQuery)
  );

  const hasResults = filteredPosts.length > 0 || filteredCourses.length > 0;

  return (
    <main className="container mx-auto max-w-5xl px-6 py-16 text-text-light">
      <header className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-text-muted">Resultados de búsqueda</p>
        <h1 className="mt-3 text-4xl font-bold text-white">
          Coincidencias para <span className="text-text-accent">“{query}”</span>
        </h1>
        {!hasResults && (
          <p className="mt-4 text-text-muted">
            No encontramos coincidencias. Ajusta el término o prueba con un sinónimo.
          </p>
        )}
      </header>

      {hasResults && (
        <div className="space-y-12">
          {filteredPosts.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold text-white">Artículos del blog</h2>
              <div className="mt-6 grid gap-4">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group rounded-xl border border-card-bg bg-card-bg/80 p-6 transition hover:border-text-accent/60 hover:bg-card-bg"
                  >
                    <h3 className="text-xl font-semibold text-white group-hover:text-text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted line-clamp-2">{post.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {filteredCourses.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold text-white">Cursos</h2>
              <div className="mt-6 grid gap-4">
                {filteredCourses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/cursos/${course.slug}`}
                    className="group rounded-xl border border-card-bg bg-card-bg/80 p-6 transition hover:border-text-accent/60 hover:bg-card-bg"
                  >
                    <h3 className="text-xl font-semibold text-white group-hover:text-text-accent">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted line-clamp-2">{course.description}</p>
                    <span className="mt-3 inline-flex items-center rounded-full border border-text-muted/40 px-3 py-1 text-xs font-medium text-text-muted">
                      Nivel: {course.level}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </main>
  );
}
