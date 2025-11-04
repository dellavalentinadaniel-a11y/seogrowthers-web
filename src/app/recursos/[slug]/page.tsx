import { fetchResourceBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';
import { compileMDX } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';

// Import all custom components that can be used in MDX files
import InfoCard from '@/components/InfoCard';
import Callout from '@/components/Callout';
import { ToolGrid } from '@/components/mdx/ToolGrid';
import { ToolCard } from '@/components/mdx/ToolCard';
import { StepItem } from '@/components/mdx/StepItem';
import { TipCard } from '@/components/mdx/TipCard';
import InteractiveSeoChecklist from '@/components/InteractiveSeoChecklist';

interface ResourcePageProps {
  params: { slug: string };
}

// This object maps component names (as used in MDX) to the actual imported components.
const components = {
  InfoCard,
  Callout,
  ToolGrid,
  ToolCard,
  StepItem,
  TipCard,
  InteractiveSeoChecklist,
};

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  try {
    const resource = await fetchResourceBySlug(params.slug);
    if (!resource) {
      return { title: "Recurso no encontrado" };
    }
    return { title: resource.title, description: resource.description };
  } catch {
    return { title: "Recurso no encontrado" };
  }
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const resource = await fetchResourceBySlug(params.slug);

  if (!resource) {
    notFound();
  }

  // Path to the MDX file
  const filePath = path.join(process.cwd(), 'content', 'resources', `${params.slug}.mdx`);

  let mdxSource;
  try {
    mdxSource = await fs.promises.readFile(filePath, 'utf-8');
  } catch {
    // If the MDX file doesn't exist, we can show a simpler page or an error.
    // For now, we'll fall back to a simple display.
    return (
        <div className="container mx-auto p-8 text-white">
            <h1 className="text-4xl font-bold mb-8">{resource.title}</h1>
            <p>{resource.description}</p>
            <p className="mt-4"><i>Contenido en construcción.</i></p>
        </div>
    );
  }

  // Compile the MDX source with our custom components
  const { content } = await compileMDX({
    source: mdxSource,
    components: components,
    options: { parseFrontmatter: true },
  });

  // Render the compiled content
  return (
    <main className="flex-grow p-6">
      <div className="container mx-auto max-w-5xl prose prose-invert prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white">
        {content}
      </div>
    </main>
  );
}
