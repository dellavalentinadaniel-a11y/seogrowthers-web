import BlogArticle from '@/components/BlogArticle';
import { getCourses } from '@/lib/courses';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/blog-posts';
import { getResources } from '@/lib/resources';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const { frontmatter } = await getBlogPostBySlug(params.slug);

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        images: frontmatter.image ? [frontmatter.image] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: frontmatter.title,
        description: frontmatter.description,
        images: frontmatter.image ? [frontmatter.image] : [],
      },
    };
  } catch {
    return {
      title: 'Artículo no encontrado',
      description: 'El artículo que buscas no existe o ha sido movido.',
    };
  }
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map(({ slug }) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const allPosts = getBlogPosts();
  const allCourses = getCourses();
  const allResources = getResources();

  return (
    <BlogArticle
      post={post}
      allPosts={allPosts}
      allCourses={allCourses}
      allResources={allResources}
    />
  );
}
