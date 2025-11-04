import { getLessonContent } from '@/lib/courses';
import { MultipleChoiceQuiz } from '@/components/interactive/MultipleChoiceQuiz';
import { LessonNavigation } from '@/components/LessonNavigation';
import { notFound } from 'next/navigation';

const courseSlug = 'como-crear-app-web-ia-sin-programar';
const lessonId = '8';

const quizQuestions = [
  {
    id: 'q1',
    prompt: '1. En nuestro escenario de Make, ¿cuál es la función principal del primer módulo “Webhook”?',
    options: [
      { id: 'a', label: 'Enviar un email de notificación.' },
      { id: 'b', label: 'Esperar y recibir los datos que envía nuestra app de Bubble.' },
      { id: 'c', label: 'Generar la respuesta de la IA.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'q2',
    prompt: '2. ¿En qué parte del módulo de OpenAI pegamos la “Instrucción Maestra”?',
    options: [
      { id: 'a', label: 'En el campo “Model”.' },
      { id: 'b', label: 'En el campo “Prompt”.' },
      { id: 'c', label: 'En el campo “Temperature”.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'q3',
    prompt: '3. ¿Por qué es seguro usar nuestra API Key de OpenAI dentro de Make?',
    options: [
      { id: 'a', label: 'Porque Make almacena la API Key encriptada y no se expone en nuestra web.' },
      { id: 'b', label: 'Porque la API Key expira después de cada uso.' },
      { id: 'c', label: 'Porque Make no necesita la API Key para funcionar.' },
    ],
    correctOptionId: 'a',
  },
];

export default async function Lesson8Page() {
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
        title="Prueba rápida: flujo de automatización"
        description="Comprueba que entendiste cómo conectar Bubble, Make y OpenAI."
        questions={quizQuestions}
        successMessage="¡Conector listo! Puedes avanzar a la siguiente integración."
      />
      <LessonNavigation courseSlug={courseSlug} prevLessonId={prevLesson} nextLessonId={nextLesson} />
    </>
  );
}
