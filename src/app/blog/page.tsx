import BlogPostList from '@/components/BlogPostList';
import { getBlogPosts } from '@/lib/blog-posts';

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="bg-dark-bg text-text-light">
      <section className="container mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-text-muted">
            Blog
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
            Ideas accionables para crecer en digital
          </h1>
          <p className="mt-4 text-lg text-text-muted">
            SEO técnico, marketing de producto y desarrollo web: descubre
            nuestros últimos análisis y guías prácticas.
          </p>
        </header>

        {posts.length > 0 ? (
          <div className="mt-12">
            <BlogPostList posts={posts} />
          </div>
        ) : (
          <p className="mt-12 text-center text-text-muted">
            Estamos preparando nuevos artículos. Vuelve pronto para descubrir
            las novedades.
          </p>
        )}
      </section>
    </main>
  );
}
