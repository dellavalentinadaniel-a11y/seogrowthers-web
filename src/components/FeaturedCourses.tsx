import Link from 'next/link';
import type { Course } from '@/lib/courses';

interface FeaturedCoursesProps {
  courses: Omit<Course, 'content'>[];
}

const levelColors: Record<Course['level'], string> = {
  'Básico': 'bg-emerald-500/15 text-emerald-200',
  'Intermedio': 'bg-amber-500/15 text-amber-200',
  'Avanzado': 'bg-rose-500/15 text-rose-200',
};

export default function FeaturedCourses({ courses }: FeaturedCoursesProps) {
  return (
    <section className="bg-card-bg/40 py-16 text-text-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Cursos destacados
        </h2>
        <p className="mt-2 text-text-muted">
          Diseñados para construir, validar y escalar productos digitales paso a paso.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/cursos/${course.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-card-bg bg-card-bg/80 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-text-accent/40"
            >
              <div className="flex flex-grow flex-col gap-4 p-6">
                <div className="flex items-start justify-between">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${levelColors[course.level]}`}>
                    {course.level}
                  </span>
                  <span className="text-xs text-text-muted">{course.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  {course.icon && (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-text-accent">
                      <i className={`${course.icon} text-lg`} aria-hidden />
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-white group-hover:text-text-accent">
                    {course.title}
                  </h3>
                </div>
                <p className="flex-grow text-sm text-text-muted line-clamp-4">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-black/40 px-3 py-1 text-xs text-text-muted">
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-text-accent">Ver curso →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/cursos"
            className="inline-flex items-center justify-center rounded-full border border-text-accent/40 bg-text-accent/10 px-6 py-3 text-sm font-semibold text-text-accent transition hover:bg-text-accent/20"
          >
            Ver todos los cursos
          </Link>
        </div>
      </div>
    </section>
  );
}
