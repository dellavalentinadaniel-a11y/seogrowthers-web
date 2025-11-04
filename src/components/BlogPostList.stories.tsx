import type { Meta, StoryObj } from '@storybook/react';
import BlogPostList from '../components/BlogPostList';

const meta: Meta<typeof BlogPostList> = {
  title: 'Components/BlogPostList',
  component: BlogPostList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Lista de posts del blog con paginación y filtros.',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'img-alt',
            enabled: true,
          },
          {
            id: 'link-name',
            enabled: true,
          },
        ],
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default state with posts
export const WithPosts: Story = {
  args: {
    posts: [
      {
        id: '1',
        title: 'Cómo crear campañas efectivas en Google Ads',
        description: 'Aprende a crear campañas de Google Ads que conviertan.',
        date: '2024-01-15',
        author: 'Daniel Dellavalle',
        tags: ['marketing', 'google-ads'],
        image: '/imagenes/nextjs_blog_crear_app_ia.jsx',
        slug: 'como-crear-campanas-efectivas-en-google-ads',
      },
      {
        id: '2',
        title: 'Introducción a React',
        description: 'Guía completa para principiantes en React.',
        date: '2024-01-10',
        author: 'Daniel Dellavalle',
        tags: ['react', 'javascript'],
        slug: 'introduccion-a-react',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Lista con posts disponibles.',
      },
    },
  },
};

// Empty state
export const Empty: Story = {
  args: {
    posts: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado vacío sin posts.',
      },
    },
  },
};

// Mobile view
export const MobileView: Story = {
  args: {
    posts: [
      {
        id: '1',
        title: 'Cómo crear campañas efectivas en Google Ads',
        description: 'Aprende a crear campañas de Google Ads que conviertan.',
        date: '2024-01-15',
        author: 'Daniel Dellavalle',
        tags: ['marketing', 'google-ads'],
        image: '/imagenes/nextjs_blog_crear_app_ia.jsx',
        slug: 'como-crear-campanas-efectivas-en-google-ads',
      },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Vista móvil de la lista de posts.',
      },
    },
  },
};
