import { getLessonContent } from '@/lib/courses';
import { MultipleChoiceQuiz } from '@/components/interactive/MultipleChoiceQuiz';
import { LessonNavigation } from '@/components/LessonNavigation';
import { notFound } from 'next/navigation';

const courseSlug = 'como-crear-app-web-ia-sin-programar';
const lessonId = '6';

const quizQuestions = [
  {
    id: 'q1',
    prompt: '1. ¿Cuál es la mejor manera de pensar en tu API Key?',
    options: [
      { id: 'a', label: 'Como un nombre de usuario que se puede compartir.' },
      { id: 'b', label: 'Como una credencial secreta y personal para acceder a la IA.' },
      { id: 'c', label: 'Como el mensaje que envías a la IA para que lo procese.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'q2',
    prompt: '2. ¿Qué es lo más importante que debes hacer con tu API Key?',
    options: [
      { id: 'a', label: 'Publicarla para que otros puedan usarla.' },
      { id: 'b', label: 'Compartirla con amigos para que la prueben.' },
      { id: 'c', label: 'Mantenerla privada y guardarla en un lugar seguro.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'q3',
    prompt: '3. ¿Cuántas veces puedes ver la API Key completa tras crearla en OpenAI?',
    options: [
      { id: 'a', label: 'Una sola vez, justo después de crearla.' },
      { id: 'b', label: 'Siempre que lo necesites, desde el panel.' },
      { id: 'c', label: 'OpenAI te la envía por correo cada vez.' },
    ],
    correctOptionId: 'a',
  },
];

export default async function Lesson6Page() {
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
        title="Prueba rápida: asegura tu conocimiento"
        description="Confirma que tienes claros los conceptos clave sobre tu nueva API Key."
        questions={quizQuestions}
        successMessage="¡Excelente! Estás listo para usar tu llave con seguridad."
      />
      <LessonNavigation
        courseSlug={courseSlug}
        prevLessonId={prevLesson}
        nextLessonId={nextLesson}
        nextLabel="Ir al módulo 3"
      />
    </>
  );
}
