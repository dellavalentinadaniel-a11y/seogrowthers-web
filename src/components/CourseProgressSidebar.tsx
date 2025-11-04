'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const courseSlug = 'como-crear-app-web-ia-sin-programar';

const modules = [
  {
    title: 'Módulo 0: Preparación',
    lessons: [
      { id: '1', title: '0.1: Bienvenida y Revolución' },
      { id: '2', title: '0.2: Cuestionario Interactivo' },
      { id: '3', title: '0.3: Kit de Herramientas' },
    ],
  },
  {
    title: 'Módulo 1: La Idea',
    lessons: [
      { id: '4', title: '1.1: Encontrar un Problema' },
      { id: '5', title: '1.2: La Fórmula Mágica' },
    ],
  },
  {
    title: 'Módulo 2: La Arquitectura',
    lessons: [{ id: '6', title: '2.1: La API Key' }],
  },
  {
    title: 'Módulo 3: El Cerebro',
    lessons: [{ id: '7', title: '3.1: Prompt Profesional' }],
  },
  {
    title: 'Módulo 4: La Construcción',
    lessons: [
      { id: '8', title: '4.1: Configurando Make' },
      { id: '9', title: '4.2: Diseñando en Bubble' },
      { id: '10', title: '4.3: La Conexión Final' },
    ],
  },
  {
    title: 'Módulo 5: Lanzamiento',
    lessons: [{ id: '11', title: '5.1: ¡Lanzamiento y Futuro!' }],
  },
];

const allLessons = modules.flatMap(m => m.lessons);

export function CourseProgressSidebar() {
  const pathname = usePathname();
  const pathParts = pathname.split('/');
  const currentLessonId = pathParts[pathParts.length - 1];

  const currentLessonIndex = allLessons.findIndex(
    lesson => lesson.id === currentLessonId
  );

  return (
    <aside className="sticky top-8 h-full rounded-2xl border border-card-bg bg-card-bg/80 p-6 text-text-light shadow-lg shadow-black/20">
      <h3 className="text-lg font-semibold text-white">Progreso del curso</h3>
      <p className="mt-1 text-sm text-text-muted">
        Sigue tu avance y retoma exactamente donde lo dejaste.
      </p>
      <nav>
        <ul className="mt-6 space-y-5">
          {modules.map((module, moduleIndex) => (
            <li key={moduleIndex}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                {module.title}
              </h4>
              <ul className="mt-3 space-y-1.5">
                {module.lessons.map(lesson => {
                  const lessonIndex = allLessons.findIndex(
                    l => l.id === lesson.id
                  );
                  const isCompleted =
                    currentLessonIndex > -1 && lessonIndex < currentLessonIndex;
                  const isCurrent = lesson.id === currentLessonId;

                  return (
                    <li key={lesson.id}>
                      <Link
                        href={`/cursos/${courseSlug}/leccion/${lesson.id}`}
                        className={[
                          'flex w-full items-center gap-3 rounded-lg border border-transparent px-3 py-2 text-sm transition',
                          isCurrent &&
                            'border-text-accent/60 bg-text-accent/10 text-text-accent font-semibold',
                          !isCurrent &&
                            isCompleted &&
                            'bg-emerald-500/10 text-emerald-200',
                          !isCurrent &&
                            !isCompleted &&
                            'hover:border-text-muted/40 hover:bg-black/40 text-text-muted',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                      >
                        <span className="flex items-center gap-2">
                          {isCompleted && (
                            <svg
                              className="h-4 w-4 text-emerald-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          )}
                          {lesson.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
