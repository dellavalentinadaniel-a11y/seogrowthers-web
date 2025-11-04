import { getLessonContent } from '@/lib/courses';
import { MultipleChoiceQuiz } from '@/components/interactive/MultipleChoiceQuiz';
import { LessonNavigation } from '@/components/LessonNavigation';
import { notFound } from 'next/navigation';

const courseSlug = 'como-crear-app-web-ia-sin-programar';
const lessonId = '10';

const quizQuestions = [
  {
    id: 'q1',
    prompt: '1. ¿Qué plugin de Bubble es esencial para comunicarnos con nuestro webhook de Make?',
    options: [
      { id: 'a', label: 'API Connector' },
      { id: 'b', label: 'HTML Viewer' },
      { id: 'c', label: 'Database Connector' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'q2',
    prompt: '2. En Bubble, una secuencia de acciones que se inicia por un evento (como un clic) se llama...',
    options: [
      { id: 'a', label: 'Element' },
      { id: 'b', label: 'Custom State' },
      { id: 'c', label: 'Workflow' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'q3',
    prompt: '3. Para mostrar la respuesta de IA que recibimos de Make, utilizamos...',
    options: [
      { id: 'a', label: '"Set state" para almacenar temporalmente la respuesta y desplegarla.' },
      { id: 'b', label: '"User login" para autenticar la respuesta.' },
      { id: 'c', label: '"Refresh page" para recargar toda la página.' },
    ],
    correctOptionId: 'a',
  },
];

export default async function Lesson10Page() {
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
        title="Prueba rápida: conexión Bubble ↔ Make"
        description="Comprueba que puedes conectar la interfaz con el flujo de automatización."
        questions={quizQuestions}
        successMessage="¡Integración completa! Estamos listos para la conexión final."
      />
      <LessonNavigation courseSlug={courseSlug} prevLessonId={prevLesson} nextLessonId={nextLesson} />
    </>
  );
}
