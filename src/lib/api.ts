import { getBlogPostBySlug, getBlogPosts } from "./blog-posts";
import { Resource, getResources, getResourceBySlug } from "./resources";
import { Course, getCourses, getCourseBySlug } from "./courses";
import type { BlogPostSummary, BlogPostWithContent } from "./blog-posts";

// Simula una llamada a la API con un pequeño retraso
const simulateApiCall = <T>(data: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 300); // Retraso de 300ms para simular una llamada de red
  });
};

// --- Funciones del Blog (Actualizadas para MDX) ---
export async function fetchBlogPosts(): Promise<BlogPostSummary[]> {
  return getBlogPosts();
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPostWithContent> {
  return getBlogPostBySlug(slug);
}

// Funciones para simular la API de Recursos
export async function fetchResources(): Promise<Resource[]> {
  return simulateApiCall(getResources());
}

export async function fetchResourceBySlug(slug: string): Promise<Resource | undefined> {
  return simulateApiCall(getResourceBySlug(slug));
}

// Funciones para simular la API de Cursos
export async function fetchCourses(): Promise<Omit<Course, 'content'>[]> {
  return Promise.resolve(getCourses());
}

export async function fetchCourseBySlug(slug: string): Promise<Course> {
  return await getCourseBySlug(slug);
}
