import { getLessonContent } from '@/lib/courses';
import { CumulativeQuiz } from '@/components/interactive/CumulativeQuiz';
import { notFound } from 'next/navigation';
import { LessonNavigation } from '@/components/LessonNavigation';

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
      <CumulativeQuiz />

      <LessonNavigation courseSlug={courseSlug} prevLessonId={prevLesson} nextLessonId={nextLesson} />
    </>
  );
}
