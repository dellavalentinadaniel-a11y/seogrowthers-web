import Link from 'next/link';
import type { Course } from '@/lib/courses';

interface CourseListProps {
  courses: Omit<Course, 'content'>[];
}

export default function CourseList({ courses }: CourseListProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {courses.map(course => (
        <article
          key={course.id}
          className="flex h-full flex-col rounded-2xl border border-card-bg bg-card-bg/80 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-text-accent/60 hover:shadow-text-accent/10"
        >
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-2xl font-semibold text-white">
              <Link
                href={`/cursos/${course.slug}`}
                className="hover:text-text-accent"
              >
                {course.title}
              </Link>
            </h2>
          </div>
          <p className="mt-2 text-sm text-text-muted">
            Instructor: {course.instructor}
          </p>
          <p className="mt-3 flex-grow text-text-light/80">
            {course.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-text-muted/40 px-3 py-1 text-xs font-medium text-text-muted">
              {course.level}
            </span>
            <span className="rounded-full border border-text-muted/40 px-3 py-1 text-xs font-medium text-text-muted">
              {course.duration}
            </span>
            {course.tags.map(tag => (
              <span
                key={tag}
                className="rounded-full bg-black/40 px-3 py-1 text-xs text-text-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
          <Link
            href={`/cursos/${course.slug}`}
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-text-accent/20 px-4 py-2 text-sm font-semibold text-text-accent transition hover:bg-text-accent/30"
          >
            Ver curso
          </Link>
        </article>
      ))}
    </div>
  );
}
