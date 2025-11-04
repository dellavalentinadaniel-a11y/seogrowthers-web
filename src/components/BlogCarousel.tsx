'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import type { BlogPostSummary } from '@/lib/blog-posts';

interface BlogCarouselProps {
  posts: BlogPostSummary[];
}

export default function BlogCarousel({ posts }: BlogCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="min-w-[280px] flex-1 rounded-2xl border border-card-bg bg-card-bg/80 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-text-accent/40"
            >
              <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                {post.image ? (
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex h-44 w-full items-center justify-center bg-black/40 text-sm text-text-muted">
                    Imagen no disponible
                  </div>
                )}
                <div className="flex flex-grow flex-col gap-3 px-5 py-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-text-muted">
                    {post.date}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                  <p className="flex-grow text-sm text-text-muted line-clamp-3">{post.description}</p>
                  <span className="text-sm font-semibold text-text-accent">Leer más →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-dark-bg to-transparent" />

      <button
        type="button"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-text-muted/20 bg-black/50 p-2 text-text-light transition hover:border-text-accent/40 hover:bg-black/70"
        onClick={scrollPrev}
        aria-label="Artículo anterior"
      >
        <i className="fas fa-chevron-left" />
      </button>
      <button
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-text-muted/20 bg-black/50 p-2 text-text-light transition hover:border-text-accent/40 hover:bg-black/70"
        onClick={scrollNext}
        aria-label="Siguiente artículo"
      >
        <i className="fas fa-chevron-right" />
      </button>
    </div>
  );
}
