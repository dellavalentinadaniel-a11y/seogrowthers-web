import { fetchCourseBySlug, fetchCourses } from "@/lib/api"; // Importar funciones de API simuladas
import CourseDetail from "@/components/CourseDetail";
import { notFound } from "next/navigation";

interface CoursePageProps {
  params: { slug: string };
}

// Genera las rutas estáticas para todos los cursos
export async function generateStaticParams() {
  const courses = await fetchCourses(); // Obtener cursos de la API simulada
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CoursePage({ params }: CoursePageProps) { // Hacer el componente asíncrono
  const course = await fetchCourseBySlug(params.slug); // Obtener el curso por slug de la API simulada

  if (!course) {
    notFound(); // Si el curso no existe, mostrar página 404
  }

  return (
    <main className="container mx-auto max-w-5xl px-6 py-16 text-text-light">
      <CourseDetail course={course} />
    </main>
  );
}
