import type { Meta, StoryObj } from '@storybook/react';
import CourseDetail from '../components/CourseDetail';

const meta: Meta<typeof CourseDetail> = {
  title: 'Components/CourseDetail',
  component: CourseDetail,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Vista detallada de un curso con lecciones y progreso.',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'heading-order',
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

// Default course view
export const Default: Story = {
  args: {
    course: {
      id: '1',
      slug: 'desarrollo-web-desde-cero',
      title: 'Desarrollo Web desde Cero',
      description:
        'Aprende desarrollo web completo desde HTML hasta frameworks modernos.',
      duration: '8 semanas',
      level: 'Básico',
      instructor: 'Daniel Dellavalle',
      content: '<p>Contenido del curso...</p>',
      tags: ['html', 'css', 'javascript'],
      icon: '💻',
      iconColor: '#3b82f6',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Vista por defecto del curso.',
      },
    },
  },
};

// Course in progress
export const InProgress: Story = {
  args: {
    course: {
      id: '1',
      slug: 'desarrollo-web-desde-cero',
      title: 'Desarrollo Web desde Cero',
      description:
        'Aprende desarrollo web completo desde HTML hasta frameworks modernos.',
      duration: '8 semanas',
      level: 'Básico',
      instructor: 'Daniel Dellavalle',
      content: '<p>Contenido del curso...</p>',
      tags: ['html', 'css', 'javascript'],
      icon: '💻',
      iconColor: '#3b82f6',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Curso con progreso parcial.',
      },
    },
  },
};

// Completed course
export const Completed: Story = {
  args: {
    course: {
      id: '1',
      slug: 'desarrollo-web-desde-cero',
      title: 'Desarrollo Web desde Cero',
      description:
        'Aprende desarrollo web completo desde HTML hasta frameworks modernos.',
      duration: '8 semanas',
      level: 'Básico',
      instructor: 'Daniel Dellavalle',
      content: '<p>Contenido del curso...</p>',
      tags: ['html', 'css', 'javascript'],
      icon: '💻',
      iconColor: '#3b82f6',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Curso completado.',
      },
    },
  },
};

// Mobile view
export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Vista móvil del detalle del curso.',
      },
    },
  },
};
