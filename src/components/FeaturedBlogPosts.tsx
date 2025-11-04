import Image from 'next/image';
import Link from 'next/link';
import type { BlogPostSummary } from '@/lib/blog-posts';

interface FeaturedBlogPostsProps {
  posts: BlogPostSummary[];
}

export default function FeaturedBlogPosts({ posts }: FeaturedBlogPostsProps) {
  return (
    <section className="bg-dark-bg py-16 text-text-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white md:text-5xl">
          Últimos artículos del blog
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-text-muted">
          Historias reales, frameworks accionables y aprendizajes listos para
          aplicar en tus proyectos digitales.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-card-bg bg-card-bg/80 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:shadow-text-accent/10"
            >
              {post.image ? (
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex h-48 w-full items-center justify-center bg-black/40 text-sm text-text-muted">
                  Imagen no disponible
                </div>
              )}
              <div className="flex flex-grow flex-col gap-3 px-6 py-5">
                <div className="text-xs uppercase tracking-[0.2em] text-text-muted">
                  {post.date}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-text-accent">
                  {post.title}
                </h3>
                <p className="flex-grow text-sm text-text-muted line-clamp-3">
                  {post.description}
                </p>
                <span className="text-sm font-semibold text-text-accent">
                  Leer más →
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border border-text-accent/40 bg-text-accent/10 px-6 py-3 text-sm font-semibold text-text-accent transition hover:bg-text-accent/20"
          >
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  );
}
