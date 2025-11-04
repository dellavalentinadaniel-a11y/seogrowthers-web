import { getLessonContent } from '@/lib/courses';
import { MultipleChoiceQuiz } from '@/components/interactive/MultipleChoiceQuiz';
import { LessonNavigation } from '@/components/LessonNavigation';
import { notFound } from 'next/navigation';

const courseSlug = 'como-crear-app-web-ia-sin-programar';
const lessonId = '11';

const quizQuestions = [
  {
    id: 'q1',
    prompt: '1. El objetivo principal de hacer un “test de amigos” es...',
    options: [
      { id: 'a', label: 'Comprobar si la API de OpenAI funciona.' },
      { id: 'b', label: 'Presumir de la aplicación con conocidos.' },
      { id: 'c', label: 'Evaluar si la interfaz es intuitiva para un nuevo usuario.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'q2',
    prompt: '2. Para que tu aplicación funcione 24/7, ¿qué debes hacer en Make?',
    options: [
      { id: 'a', label: 'Dejar el escenario en modo “Run once”.' },
      { id: 'b', label: 'Activar el interruptor principal del escenario a “ON”.' },
      { id: 'c', label: 'Borrar el webhook cuando termine la prueba.' },
    ],
    correctOptionId: 'b',
  },
];

export default async function Lesson11Page() {
  const lesson = await getLessonContent(courseSlug, lessonId);

  if (!lesson) {
    notFound();
  }

  const currentLesson = Number(lessonId);
  const prevLesson = currentLesson - 1;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
      <MultipleChoiceQuiz
        title="Prueba rápida: mentalidad de producto"
        description="Confirma que tienes claros los pasos finales antes de lanzar tu MVP."
        questions={quizQuestions}
        successMessage="¡Increíble! Cerraste el curso con mentalidad de crecimiento."
      />
      <LessonNavigation courseSlug={courseSlug} prevLessonId={prevLesson} nextLessonId={null} nextLabel="Ver cursos" />
    </>
  );
}
