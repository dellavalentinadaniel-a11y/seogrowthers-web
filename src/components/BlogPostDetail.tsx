import Link from 'next/link';
import type { ReactElement } from 'react';
import type { BlogPostFrontmatter } from '@/lib/blog-posts';
import SocialShareButtons from './SocialShareButtons';

interface SuggestedPost {
  slug: string;
  id: string;
  title: string;
  description: string;
}

interface BlogPostDetailProps {
  frontmatter: BlogPostFrontmatter;
  content: ReactElement;
  suggestedPosts?: SuggestedPost[];
}

export default function BlogPostDetail({
  frontmatter,
  content,
  suggestedPosts = [],
}: BlogPostDetailProps) {
  const { title, date, author, tags } = frontmatter;

  return (
    <div className="bg-dark-bg text-text-light">
      <div className="container mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-text-muted transition hover:text-text-accent"
        >
          <i className="fas fa-arrow-left" aria-hidden />
          Volver al blog
        </Link>

        <article className="mt-6 rounded-2xl border border-card-bg bg-card-bg/80 p-8 shadow-lg shadow-black/20 md:p-12">
          <header className="mb-8">
            <p className="text-sm text-text-muted">
              {date} · {author}
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-white md:text-5xl">
              {title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full bg-black/40 px-3 py-1 text-xs text-text-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          <div className="prose prose-invert prose-headings:text-white prose-a:text-text-accent max-w-none">
            {content}
          </div>

          <div className="mt-8 border-t border-text-muted/20 pt-8">
            <SocialShareButtons title={title} />
          </div>
        </article>

        <aside className="mt-12 rounded-2xl border border-card-bg bg-card-bg/80 p-6 text-center shadow-lg shadow-black/20">
          <h2 className="text-xl font-semibold text-white">
            Lleva tus conocimientos al siguiente nivel
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            Si te gustó este contenido, explora las rutas de aprendizaje y
            cursos enfocados en resultados.
          </p>
          <Link
            href="/cursos"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-text-accent px-4 py-2 text-sm font-semibold text-dark-bg transition hover:bg-text-accent/90"
          >
            Explorar cursos
          </Link>
        </aside>

        {suggestedPosts.length > 0 && (
          <section className="mt-12 rounded-2xl border border-card-bg bg-card-bg/80 p-6 shadow-lg shadow-black/20">
            <h3 className="text-2xl font-semibold text-white">
              También te puede interesar
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {suggestedPosts.map(post => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-text-muted/20 bg-black/30 p-5 transition hover:border-text-accent/40"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-text-accent">
                    {post.title}
                  </h4>
                  <p className="mt-3 text-sm text-text-muted line-clamp-3">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
