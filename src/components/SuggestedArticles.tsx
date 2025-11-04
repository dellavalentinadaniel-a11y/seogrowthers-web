import Link from 'next/link';
import type { BlogPostSummary } from '@/lib/blog-posts';

interface SuggestedArticlesProps {
  currentPost: BlogPostSummary;
  allPosts: BlogPostSummary[];
  limit?: number;
}

const DEFAULT_LIMIT = 3;

export default function SuggestedArticles({
  currentPost,
  allPosts,
  limit = DEFAULT_LIMIT,
}: SuggestedArticlesProps) {
  const candidates = allPosts.filter(post => post.slug !== currentPost.slug);

  const related = candidates.filter(post =>
    post.tags.some(tag => currentPost.tags.includes(tag))
  );

  const suggestions =
    related.length >= limit
      ? related
      : [...related, ...candidates]
          .filter((post, index, array) => {
            const firstIndex = array.findIndex(item => item.slug === post.slug);
            return firstIndex === index;
          })
          .slice(0, limit);

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 rounded-2xl border border-card-bg bg-card-bg/80 p-6 shadow-lg shadow-black/20">
      <h2 className="text-2xl font-semibold text-white text-center">
        También te puede interesar
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {suggestions.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex h-full flex-col rounded-xl border border-text-muted/20 bg-black/30 p-5 transition hover:border-text-accent/40"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-text-accent">
              {post.title}
            </h3>
            <p className="mt-3 flex-grow text-sm text-text-muted line-clamp-3">
              {post.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map(tag => (
                <span
                  key={tag}
                  className="rounded-full bg-black/40 px-2 py-1 text-xs text-text-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
