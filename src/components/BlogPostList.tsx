import Image from 'next/image';
import Link from 'next/link';
import type { BlogPostSummary } from '@/lib/blog-posts';

interface BlogPostListProps {
  posts: BlogPostSummary[];
}

export default function BlogPostList({ posts }: BlogPostListProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group flex h-full flex-col rounded-2xl border border-card-bg bg-card-bg/80 text-text-light shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:shadow-text-accent/10"
        >
          {post.image ? (
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="flex h-48 w-full items-center justify-center bg-black/30 text-sm text-text-muted">
              Imagen no disponible
            </div>
          )}
          <div className="flex flex-grow flex-col gap-3 px-6 py-5">
            <div className="text-sm text-text-muted">
              {post.date} · {post.author}
            </div>
            <h2 className="text-xl font-semibold text-white group-hover:text-text-accent">
              {post.title}
            </h2>
            <p className="flex-grow text-sm text-text-muted line-clamp-3">{post.description}</p>
            <div className="flex flex-wrap gap-2 pt-3">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-black/40 px-3 py-1 text-xs text-text-muted">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
