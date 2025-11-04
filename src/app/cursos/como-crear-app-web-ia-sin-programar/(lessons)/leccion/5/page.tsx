import { getLessonContent } from '@/lib/courses';
import { MagicFormulaAssistant } from '@/components/interactive/MagicFormulaAssistant';
import { MultipleChoiceQuiz } from '@/components/interactive/MultipleChoiceQuiz';
import { LessonNavigation } from '@/components/LessonNavigation';
import { notFound } from 'next/navigation';

const courseSlug = 'como-crear-app-web-ia-sin-programar';
const lessonId = '5';

const quizQuestions = [
  {
    id: 'q1',
    prompt:
      '1. ¿Cuál de las siguientes descripciones representa mejor la acción de la IA (AI ACTION)?',
    options: [
      {
        id: 'a',
        label: '“El usuario ingresa una frase base y selecciona un tono”.',
      },
      {
        id: 'b',
        label: '“Generar 3 variaciones de tweets optimizados para engagement”.',
      },
      {
        id: 'c',
        label: '“Mostrar una lista con los tweets listos para copiar y pegar”.',
      },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'q2',
    prompt: '2. ¿Qué salida (OUTPUT) está mejor definida para un primer MVP?',
    options: [
      {
        id: 'a',
        label: '“Un tablero con métricas avanzadas y reportes descargables”.',
      },
      {
        id: 'b',
        label: '“Una lista de variaciones de tweets listos para copiar”.',
      },
      {
        id: 'c',
        label: '“Un prompt abierto para pedir cualquier cosa a la IA”.',
      },
    ],
    correctOptionId: 'b',
  },
];

export default async function Lesson5Page() {
  const lesson = await getLessonContent(courseSlug, lessonId);

  if (!lesson) {
    notFound();
  }

  const currentLesson = Number(lessonId);
  const prevLesson = currentLesson - 1;
  const nextLesson =
    currentLesson + 1 <= lesson.totalLessons ? currentLesson + 1 : null;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
      <MagicFormulaAssistant />
      <MultipleChoiceQuiz
        title="Refuerza tu fórmula mágica"
        description="Valida que identificas correctamente cada parte del flujo INPUT → AI ACTION → OUTPUT."
        questions={quizQuestions}
        successMessage="¡Excelente! Tu fórmula está lista para dar el siguiente paso."
      />
      <LessonNavigation
        courseSlug={courseSlug}
        prevLessonId={prevLesson}
        nextLessonId={nextLesson}
        nextLabel="Ir al módulo 2"
      />
    </>
  );
}
