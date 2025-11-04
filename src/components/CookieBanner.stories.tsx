import type { Meta, StoryObj } from '@storybook/react';
import CookieBanner from '../components/CookieBanner';

const meta: Meta<typeof CookieBanner> = {
  title: 'Components/CookieBanner',
  component: CookieBanner,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Banner de cookies que aparece cuando el usuario no ha dado consentimiento.',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'button-name',
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
  argTypes: {
    // No props for this component
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default state - banner visible
export const Default: Story = {
  parameters: {},
};

// Loading state
export const Loading: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Estado de carga mientras se verifica el consentimiento.',
      },
    },
  },
};

// Error state
export const Error: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Estado de error si hay problemas con localStorage.',
      },
    },
  },
};

// With long text
export const LongText: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Versión con texto más largo para probar responsividad.',
      },
    },
  },
};

// Mobile view
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Vista móvil del banner.',
      },
    },
  },
};

// Dark theme
export const DarkTheme: Story = {
  parameters: {
    themes: {
      default: 'dark',
    },
    docs: {
      description: {
        story: 'Banner en tema oscuro.',
      },
    },
  },
};
