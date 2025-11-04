import Link from 'next/link';
import type { BlogPostSummary } from '@/lib/blog-posts';
import type { Course } from '@/lib/courses';
import type { Resource } from '@/lib/resources';

interface RecommendedContentProps {
  currentTags: string[];
  currentSlug: string;
  allPosts: BlogPostSummary[];
  allCourses: Omit<Course, 'content'>[];
  allResources: Resource[];
}

type TaggedItem = {
  slug: string;
  tags: string[];
};

const findRelatedItem = <T extends TaggedItem>(
  items: T[],
  currentTags: string[],
  currentSlug: string
) =>
  items.find(
    item =>
      item.slug !== currentSlug &&
      item.tags.some(tag => currentTags.includes(tag))
  );

export default function RecommendedContent({
  currentTags,
  currentSlug,
  allPosts,
  allCourses,
  allResources,
}: RecommendedContentProps) {
  if (currentTags.length === 0) {
    return null;
  }

  const relatedArticle = findRelatedItem(allPosts, currentTags, currentSlug);
  const relatedCourse = findRelatedItem(allCourses, currentTags, currentSlug);
  const relatedResource = findRelatedItem(
    allResources,
    currentTags,
    currentSlug
  );

  if (!relatedArticle && !relatedCourse && !relatedResource) {
    return null;
  }

  return (
    <section className="mt-12 rounded-2xl border border-card-bg bg-card-bg/80 p-6 shadow-lg shadow-black/20">
      <h2 className="text-lg font-semibold text-white">
        Contenido recomendado
      </h2>
      <p className="mt-1 text-sm text-text-muted">
        Profundiza en temas relacionados con este artículo.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {relatedArticle && (
          <Link
            href={`/blog/${relatedArticle.slug}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-text-accent/40 bg-text-accent/10 px-4 py-2 text-sm font-semibold text-text-accent transition hover:bg-text-accent/20"
          >
            <i className="fas fa-file-alt" aria-hidden />
            Artículo recomendado
          </Link>
        )}
        {relatedCourse && (
          <Link
            href={`/cursos/${relatedCourse.slug}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 transition hover:bg-purple-500/20"
          >
            <i className="fas fa-graduation-cap" aria-hidden />
            Curso recomendado
          </Link>
        )}
        {relatedResource && (
          <Link
            href={`/recursos/${relatedResource.slug}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/20"
          >
            <i className="fas fa-toolbox" aria-hidden />
            Recurso recomendado
          </Link>
        )}
      </div>
    </section>
  );
}
