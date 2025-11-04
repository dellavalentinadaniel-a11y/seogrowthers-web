import { getLessonContent } from '@/lib/courses';
import { PreparationChecklist } from '@/components/interactive/PreparationChecklist';
import { LessonNavigation } from '@/components/LessonNavigation';
import { notFound } from 'next/navigation';

const courseSlug = 'como-crear-app-web-ia-sin-programar';
const lessonId = '3';

export default async function Lesson3Page() {
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
      <PreparationChecklist />
      <LessonNavigation courseSlug={courseSlug} prevLessonId={prevLesson} nextLessonId={nextLesson} />
    </>
  );
}
