import { getLessonContent } from '@/lib/courses';
import { notFound } from 'next/navigation';
import { LessonNavigation } from '@/components/LessonNavigation';

const courseSlug = 'como-crear-app-web-ia-sin-programar';

export default async function LessonPage({ params }: { params: { lesson_id: string } }) {
  const lesson = await getLessonContent(courseSlug, params.lesson_id);

  if (!lesson) {
    notFound();
  }

  const currentLesson = parseInt(params.lesson_id, 10);
  const prevLesson = currentLesson > 1 ? currentLesson - 1 : null;
  const nextLesson = currentLesson < lesson.totalLessons ? currentLesson + 1 : null;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: lesson.content }} />

      <LessonNavigation courseSlug={courseSlug} prevLessonId={prevLesson} nextLessonId={nextLesson} />
    </>
  );
}

// Genera las páginas de las lecciones en tiempo de build para mejorar el rendimiento
export async function generateStaticParams() {
    // El curso ahora tiene 11 lecciones en total
    const lessons = Array.from({ length: 11 }, (_, i) => String(i + 1));
   
    return lessons.map((lesson_id) => ({
      lesson_id,
    }));
}
