import { getLessonContent } from '@/lib/courses';
import { PreparationChecklist } from '@/components/interactive/PreparationChecklist';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const courseSlug = 'como-crear-app-web-ia-sin-programar';
const lessonId = '2';

export default async function Lesson2Page() {
  const lesson = await getLessonContent(courseSlug, lessonId);

  if (!lesson) {
    notFound();
  }

  const currentLesson = parseInt(lessonId, 10);
  const prevLesson = currentLesson > 1 ? currentLesson - 1 : null;
  const nextLesson = currentLesson < lesson.totalLessons ? currentLesson + 1 : null;

  return (
    <>
      {/* Render the standard lesson content from Markdown */}
      <div dangerouslySetInnerHTML={{ __html: lesson.content }} />

      {/* Render the special interactive component for this lesson */}
      <PreparationChecklist />

      {/* Render the navigation buttons */}
      <div className="mt-12 flex justify-between items-center">
        {prevLesson ? (
          <Link href={`/cursos/${courseSlug}/leccion/${prevLesson}`} className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors no-underline">
            &larr; Lección Anterior
          </Link>
        ) : (
          <div /> // Placeholder for alignment
        )}
        {nextLesson ? (
          <Link href={`/cursos/${courseSlug}/leccion/${nextLesson}`} className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors no-underline">
            Siguiente Lección &rarr;
          </Link>
        ) : (
           <Link href={`/cursos`} className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors no-underline">
            Finalizar Curso
          </Link>
        )}
      </div>
    </>
  );
}
