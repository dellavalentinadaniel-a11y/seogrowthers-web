export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: 'template' | 'snippet' | 'tool' | 'download' | 'guide';
  category: string;
  url: string; // URL para descarga o enlace externo
  tags: string[];
}

export const resources: Resource[] = [
  {
    id: 'res2',
    slug: 'snippet-react-form',
    title: 'Snippet de Formulario React con Validación',
    description: 'Código reutilizable para crear formularios React con validación básica.',
    type: 'snippet',
    category: 'Programación',
    url: '#', // Placeholder URL
    tags: ['React', 'Snippet', 'Frontend', 'JavaScript'],
  },
  {
    id: 'res6',
    slug: 'guia-herramientas-palabras-clave',
    title: 'Guía Definitiva de Herramientas para Palabras Clave',
    description: 'Domina el arte del Keyword Research con las mejores herramientas y un proceso paso a paso.',
    type: 'guide',
    category: 'SEO',
    url: '/recursos/guia-herramientas-palabras-clave',
    tags: ['SEO', 'Herramienta', 'Palabras Clave', 'Guía'],
  },
  {
    id: 'res4',
    slug: 'guia-nextjs-seo',
    title: 'Guía Definitiva de SEO para Next.js',
    description: 'PDF descargable con las mejores prácticas de SEO para aplicaciones Next.js.',
    type: 'download',
    category: 'Programación',
    url: '#', // Placeholder URL
    tags: ['Next.js', 'SEO', 'Guía', 'PDF'],
  },
  {
    id: 'res5',
    slug: 'checklist-auditoria-seo',
    title: 'Checklist Interactivo de Auditoría SEO',
    description: 'Una guía detallada y accionable para llevar tu sitio web al siguiente nivel.',
    type: 'tool',
    category: 'SEO',
    url: '/recursos/checklist-auditoria-seo',
    tags: ['SEO', 'Checklist', 'Auditoría', 'Herramienta'],
  },
];

export function getResources(): Resource[] {
  return resources;
}

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find(resource => resource.slug === slug);
}
