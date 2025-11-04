import { getLessonContent } from '@/lib/courses';
import { notFound } from 'next/navigation';
import { MultipleChoiceQuiz } from '@/components/interactive/MultipleChoiceQuiz';
import { LessonNavigation } from '@/components/LessonNavigation';

const courseSlug = 'como-crear-app-web-ia-sin-programar';
const lessonId = '4';

const quizQuestions = [
  {
    id: 'q1',
    prompt:
      '1. ¿Cuál de las siguientes afirmaciones representa mejor el enfoque del “Rayo Láser”?',
    options: [
      {
        id: 'a',
        label: 'Crear una app con la mayor cantidad de funciones posibles.',
      },
      {
        id: 'b',
        label:
          'Resolver un problema muy específico para un nicho bien definido.',
      },
      {
        id: 'c',
        label: 'Intentar que la app sirva para todo tipo de empresas.',
      },
    ],
    correctOptionId: 'b',
    explanation:
      'Un rayo láser se enfoca en un problema puntual y un público concreto.',
  },
  {
    id: 'q2',
    prompt: '2. “Ana, una manager de marketing...”, es un ejemplo de:',
    options: [
      { id: 'a', label: 'Un punto de dolor (Pain Point).' },
      { id: 'b', label: 'Un nicho de mercado.' },
      { id: 'c', label: 'Una user persona.' },
    ],
    correctOptionId: 'c',
    explanation:
      'Describir a Ana con detalle corresponde a definir una user persona.',
  },
  {
    id: 'q3',
    prompt:
      '3. ¿Cuál de los siguientes “puntos de dolor” es el más específico y accionable?',
    options: [
      { id: 'a', label: 'La gente necesita ayuda con sus finanzas.' },
      {
        id: 'b',
        label:
          'Dueños de cafeterías independientes pierden tiempo creando textos para redes cada día.',
      },
      {
        id: 'c',
        label: 'Las empresas pequeñas no saben cómo hacer marketing.',
      },
    ],
    correctOptionId: 'b',
    explanation:
      'Describe un contexto concreto, un público definido y una frecuencia clara del problema.',
  },
];

export default async function Lesson4Page() {
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
      <MultipleChoiceQuiz
        title="Prueba rápida: afianza tu conocimiento"
        description="Selecciona la respuesta correcta en cada caso para validar que dominas el arte de encontrar problemas."
        questions={quizQuestions}
        successMessage="¡Perfecto! Comprendes cómo enfocar tu propuesta hacia un problema específico."
      />
      <LessonNavigation
        courseSlug={courseSlug}
        prevLessonId={prevLesson}
        nextLessonId={nextLesson}
      />
    </>
  );
}
