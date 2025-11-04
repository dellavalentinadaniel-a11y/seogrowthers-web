import fs from 'fs';
import path from 'path';
import { ReactElement } from 'react';
import { compileMDX } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import remarkSlug from 'remark-slug';

import InfoCard from '@/components/InfoCard';
import Callout from '@/components/Callout';
import Image from 'next/image';
import Link from 'next/link';
import { ToolGrid } from '@/components/mdx/ToolGrid';
import { ToolCard } from '@/components/mdx/ToolCard';

export type BlogPostFrontmatter = {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  image?: string;
} & Record<string, unknown>;

export type BlogPostSummary = BlogPostFrontmatter & { slug: string };

export interface BlogPostWithContent {
  slug: string;
  frontmatter: BlogPostFrontmatter;
  content: ReactElement;
}

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getBlogPosts(): BlogPostSummary[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPosts = fileNames
    .filter((fileName) => /\.mdx?$/.test(fileName))
    .map<BlogPostSummary>((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...(data as BlogPostFrontmatter),
      };
    });

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostWithContent> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Blog post with slug "${slug}" not found.`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content: mdxContent } = matter(fileContents);

  const { content } = await compileMDX<BlogPostFrontmatter>({
    source: mdxContent,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkSlug],
      },
    },
    components: {
      Image,
      Link,
      InfoCard,
      Callout,
      ToolGrid,
      ToolCard,
    },
  });

  return {
    slug,
    frontmatter: data as BlogPostFrontmatter,
    content,
  };
}
