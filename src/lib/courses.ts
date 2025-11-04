import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// La interfaz define la estructura de datos de un curso
export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  instructor: string;
  content: string; // Contendrá el HTML renderizado
  tags: string[];
  icon: string;
  iconColor: string;
}

// Ruta al directorio de contenido de los cursos
const coursesDirectory = path.join(process.cwd(), 'content/courses');

/**
 * Lee y devuelve los metadatos de todos los cursos, sin el contenido principal.
 */
export function getCourses(): Omit<Course, 'content'>[] {
  const fileNames = fs.readdirSync(coursesDirectory);
  const allCoursesData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(coursesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as {
        id: string;
        title: string;
        description: string;
        duration: string;
        level: 'Básico' | 'Intermedio' | 'Avanzado';
        instructor: string;
        tags: string[];
        icon: string;
        iconColor: string;
      }),
    };
  });
  return allCoursesData;
}

/**
 * Obtiene los datos completos de un curso por su slug, incluyendo el contenido
 * renderizado como HTML.
 * @param slug El slug del curso a buscar.
 */
export async function getCourseBySlug(slug: string): Promise<Course> {
  const fullPath = path.join(coursesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  // Convierte el contenido de Markdown a HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    content: contentHtml,
    ...(matterResult.data as {
      id: string;
      title: string;
      description: string;
      duration: string;
      level: 'Básico' | 'Intermedio' | 'Avanzado';
      instructor: string;
      tags: string[];
      icon: string;
      iconColor: string;
    }),
  };
}

/**
 * Obtiene el contenido de una lección específica de un curso.
 * @param slug El slug del curso.
 * @param lessonId El ID (número) de la lección.
 */
export async function getLessonContent(slug: string, lessonId: string) {
  const fullPath = path.join(coursesDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContents);

  // Dividir el contenido por lecciones (usando '---' como separador en el MD)
  const lessons = content
    .split('---')
    .map(s => s.trim())
    .filter(Boolean);

  // El ID de la lección es 1-based, el índice del array es 0-based
  const lessonIndex = parseInt(lessonId, 10) - 1;

  if (lessonIndex < 0 || lessonIndex >= lessons.length) {
    return null;
  }

  const lessonMarkdown = lessons[lessonIndex];

  // Convierte el contenido de la lección de Markdown a HTML
  const processedContent = await remark().use(html).process(lessonMarkdown);
  const contentHtml = processedContent.toString();

  return {
    content: contentHtml,
    totalLessons: lessons.length,
  };
}
