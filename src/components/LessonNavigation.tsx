import Link from 'next/link';

interface LessonNavigationProps {
  courseSlug: string;
  prevLessonId?: number | null;
  nextLessonId?: number | null;
  nextLabel?: string;
}

export function LessonNavigation({ courseSlug, prevLessonId, nextLessonId, nextLabel = 'Siguiente lección' }: LessonNavigationProps) {
  return (
    <div className="not-prose mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {prevLessonId && prevLessonId > 0 ? (
        <Link
          href={`/cursos/${courseSlug}/leccion/${prevLessonId}`}
          className="inline-flex items-center justify-center rounded-lg border border-text-muted/40 px-4 py-2 text-sm font-semibold text-text-muted transition hover:border-text-accent/40 hover:text-text-accent"
        >
          &larr; Lección anterior
        </Link>
      ) : (
        <span className="inline-flex h-10 items-center text-sm text-text-muted/60">Inicio del curso</span>
      )}

      {nextLessonId ? (
        <Link
          href={`/cursos/${courseSlug}/leccion/${nextLessonId}`}
          className="inline-flex items-center justify-center rounded-lg bg-text-accent px-4 py-2 text-sm font-semibold text-dark-bg transition hover:bg-text-accent/90"
        >
          {nextLabel} &rarr;
        </Link>
      ) : (
        <Link
          href={`/cursos`}
          className="inline-flex items-center justify-center rounded-lg bg-emerald-500/80 px-4 py-2 text-sm font-semibold text-dark-bg transition hover:bg-emerald-400"
        >
          Finalizar curso
        </Link>
      )}
    </div>
  );
}
