import { getLessonContent } from '@/lib/courses';
import { MultipleChoiceQuiz } from '@/components/interactive/MultipleChoiceQuiz';
import { LessonNavigation } from '@/components/LessonNavigation';
import { notFound } from 'next/navigation';

const courseSlug = 'como-crear-app-web-ia-sin-programar';
const lessonId = '9';

const quizQuestions = [
  {
    id: 'q1',
    prompt: '1. ¿Qué elemento de Bubble usaremos para permitir que el usuario seleccione el tono del tweet?',
    options: [
      { id: 'a', label: 'Button' },
      { id: 'b', label: 'Dropdown' },
      { id: 'c', label: 'Input' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'q2',
    prompt: '2. ¿Qué elemento iniciará nuestro workflow principal?',
    options: [
      { id: 'a', label: 'El elemento de texto que muestra los resultados.' },
      { id: 'b', label: 'El botón “Generar Tweets ✨”.' },
      { id: 'c', label: 'El campo de entrada del usuario.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'q3',
    prompt: '3. ¿Por qué usamos un layout de tipo “column” en la página?',
    options: [
      { id: 'a', label: 'Para organizar los elementos en columna y facilitar el diseño responsive.' },
      { id: 'b', label: 'Para que todos los elementos tengan el mismo color.' },
      { id: 'c', label: 'Para que la página cargue más rápido.' },
    ],
    correctOptionId: 'a',
  },
];

export default async function Lesson9Page() {
  const lesson = await getLessonContent(courseSlug, lessonId);

  if (!lesson) {
    notFound();
  }

  const currentLesson = Number(lessonId);
  const prevLesson = currentLesson - 1;
  const nextLesson = currentLesson + 1 <= lesson.totalLessons ? currentLesson + 1 : null;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
      <MultipleChoiceQuiz
        title="Prueba rápida: diseño en Bubble"
        description="Valida que recuerdas la estructura de interfaz que construiremos."
        questions={quizQuestions}
        successMessage="¡Interfaz lista! Continuemos conectando la lógica."
      />
      <LessonNavigation courseSlug={courseSlug} prevLessonId={prevLesson} nextLessonId={nextLesson} />
    </>
  );
}
