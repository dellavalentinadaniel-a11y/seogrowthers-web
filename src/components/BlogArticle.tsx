'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { BlogPostSummary, BlogPostWithContent } from '@/lib/blog-posts';
import type { Resource } from '@/lib/resources';
import type { Course } from '@/lib/courses';
import RecommendedContent from './RecommendedContent';
import SuggestedArticles from './SuggestedArticles';
import SocialShareButtons from './SocialShareButtons';

type BlogArticleProps = {
  post: BlogPostWithContent;
  allPosts: BlogPostSummary[];
  allCourses: Omit<Course, 'content'>[];
  allResources: Resource[];
};

type TocItem = {
  id: string;
  text: string;
  level: number;
};

const HEADING_SELECTOR = 'article h2, article h3';

export default function BlogArticle({
  post,
  allPosts,
  allCourses,
  allResources,
}: BlogArticleProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocItems, setTocItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const headingNodes = Array.from(
      document.querySelectorAll<HTMLElement>(HEADING_SELECTOR)
    );
    const mapped = headingNodes
      .filter(node => node.id)
      .map<TocItem>(node => ({
        id: node.id,
        text: node.textContent ?? '',
        level: Number(node.tagName.replace('H', '')),
      }));
    setTocItems(mapped);
  }, [post.slug]);

  const articleSummary: BlogPostSummary = {
    slug: post.slug,
    ...post.frontmatter,
  };

  return (
    <div className="bg-dark-bg text-text-light">
      <div className="sticky top-0 z-20 h-1 w-full bg-card-bg">
        <div
          className="h-full bg-text-accent transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <main className="container mx-auto max-w-5xl px-6 py-16">
        <article className="rounded-2xl border border-card-bg bg-card-bg/80 p-8 shadow-lg shadow-black/20 md:p-12">
          <header className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-text-muted">
              Blog
            </p>
            <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
              {post.frontmatter.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-text-muted">
              <span>{post.frontmatter.date}</span>
              <span
                className="h-1 w-1 rounded-full bg-text-muted/60"
                aria-hidden
              />
              <span>{post.frontmatter.author}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.frontmatter.tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full border border-text-muted/30 px-3 py-1 text-xs text-text-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {tocItems.length > 0 && (
            <nav
              aria-label="Contenido del artículo"
              className="mb-12 rounded-xl border border-text-muted/20 bg-black/30 p-6"
            >
              <h2 className="text-lg font-semibold text-white">Contenido</h2>
              <ol className="mt-4 space-y-2 text-sm text-text-muted">
                {tocItems.map(item => (
                  <li
                    key={item.id}
                    style={{
                      marginLeft: `${Math.max(0, item.level - 2) * 1.5}rem`,
                    }}
                  >
                    <a href={`#${item.id}`} className="hover:text-text-accent">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="prose prose-invert prose-headings:text-white prose-a:text-text-accent prose-blockquote:border-text-accent/40 max-w-none">
            {post.content}
          </div>

          <SocialShareButtons title={post.frontmatter.title} />
        </article>

        <RecommendedContent
          currentTags={post.frontmatter.tags}
          currentSlug={post.slug}
          allPosts={allPosts}
          allCourses={allCourses}
          allResources={allResources}
        />

        <SuggestedArticles currentPost={articleSummary} allPosts={allPosts} />

        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-lg border border-text-muted/40 px-4 py-2 text-sm font-semibold text-text-muted transition hover:border-text-accent/40 hover:text-text-accent"
          >
            &larr; Volver al blog
          </Link>
        </div>
      </main>
    </div>
  );
}
