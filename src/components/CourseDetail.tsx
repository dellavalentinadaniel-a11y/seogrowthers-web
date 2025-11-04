import type { Course } from '@/lib/courses';

interface CourseDetailProps {
  course: Course;
}

export default function CourseDetail({ course }: CourseDetailProps) {
  return (
    <article className="rounded-2xl border border-card-bg bg-card-bg/80 p-8 shadow-lg shadow-black/20 md:p-12">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-white">{course.title}</h1>
        <p className="text-sm text-text-muted">
          Instructor: <span className="font-semibold text-text-light">{course.instructor}</span> · Duración: {course.duration} · Nivel:{' '}
          {course.level}
        </p>
        <p className="text-text-light/80">{course.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {course.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-black/40 px-3 py-1 text-xs text-text-muted">
              {tag}
            </span>
          ))}
        </div>
      </header>
      <section
        className="prose prose-invert prose-headings:text-white prose-strong:text-text-light prose-a:text-text-accent mt-10 max-w-none text-text-light/90"
        dangerouslySetInnerHTML={{ __html: course.content }}
      />
    </article>
  );
}
