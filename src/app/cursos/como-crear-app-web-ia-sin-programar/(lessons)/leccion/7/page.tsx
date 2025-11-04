import { getLessonContent } from '@/lib/courses';
import { PromptLab } from '@/components/interactive/PromptLab';
import { MultipleChoiceQuiz } from '@/components/interactive/MultipleChoiceQuiz';
import { LessonNavigation } from '@/components/LessonNavigation';
import { notFound } from 'next/navigation';

const courseSlug = 'como-crear-app-web-ia-sin-programar';
const lessonId = '7';

const quizQuestions = [
  {
    id: 'q1',
    prompt: '1. La instrucción “Actúa como un chef con 3 estrellas Michelin” corresponde al pilar de...',
    options: [
      { id: 'a', label: 'Rol' },
      { id: 'b', label: 'Contexto' },
      { id: 'c', label: 'Formato' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'q2',
    prompt: '2. ¿Por qué es importante el pilar “Formato”?',
    options: [
      { id: 'a', label: 'Para que la IA sepa en qué idioma responder.' },
      { id: 'b', label: 'Para garantizar que la respuesta sea creativa.' },
      { id: 'c', label: 'Para recibir una respuesta estructurada y fácil de procesar para nuestra app.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'q3',
    prompt: '3. En nuestro prompt para “TweetSpark”, la parte “[TEMA_DEL_USUARIO]” es una variable dentro del pilar de...',
    options: [
      { id: 'a', label: 'Contexto' },
      { id: 'b', label: 'Instrucción' },
      { id: 'c', label: 'Rol' },
    ],
    correctOptionId: 'b',
  },
];

export default async function Lesson7Page() {
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
      <PromptLab />
      <MultipleChoiceQuiz
        title="Prueba rápida: domina el arte del prompt"
        description="Verifica que entendiste cómo funciona cada pilar de la fórmula."
        questions={quizQuestions}
        successMessage="¡Perfecto! Tu prompt maestro está listo para pasar al siguiente módulo."
      />
      <LessonNavigation
        courseSlug={courseSlug}
        prevLessonId={prevLesson}
        nextLessonId={nextLesson}
        nextLabel="Ir al módulo 4"
      />
    </>
  );
}
