# SEOGROWTHERS Web

Sitio construido con Next.js 15 y Tailwind para concentrar artículos, recursos y cursos sobre SEO, marketing y desarrollo de producto. Incluye listados dinámicos de contenido, MDX para los posts del blog y componentes interactivos en la sección de cursos.

## Requisitos

- Node.js 20+
- npm (o pnpm/bun si actualizas los scripts)

## Scripts principales

```bash
npm run dev      # arranca el servidor en modo desarrollo
npm run build    # genera el build de producción
npm run start    # sirve el build generado
npm run lint     # ejecuta eslint con la configuración del proyecto
```

## Estructura destacada

- `src/app` – rutas App Router (blog, cursos, recursos, comunidad, etc.)
- `src/components` – UI reutilizable y widgets interactivos (checklists, quizzes, navegación)
- `src/lib` – utilidades para leer contenido MDX/Markdown (blog, cursos, recursos)
- `content/` – fuentes de contenido (MD/MDX) para blog y cursos

## Contenido MDX

El blog se procesa con `next-mdx-remote`. Para añadir un artículo crea un archivo `.mdx` en `content/blog/` con el frontmatter correspondiente (`id`, `title`, `description`, etc.).

## Estilo y tipografías

Tailwind se extiende con tokens personalizados (`dark-bg`, `card-bg`, `text-accent`, …). Las fuentes se cargan mediante `next/font` (Geist y Geist Mono) desde `src/app/layout.tsx`.

## Linting y formato

Se utiliza ESLint en modo flat config (`eslint.config.mjs`). Para evitar sorpresas, el comando `npm run lint` falla ante cualquier warning.

## CI/CD

El proyecto incluye un pipeline de GitHub Actions que ejecuta:

- **Tests**: Jest con React Testing Library
- **Linting**: ESLint con reglas estrictas
- **Formateo**: Prettier para consistencia de código
- **Build**: Verificación de compilación exitosa
- **Deploy**: Despliegue automático a Vercel en pushes a `main`

### Configuración de Secrets (GitHub)

Para el despliegue automático, configura estos secrets en tu repositorio:

1. Ve a **Settings > Secrets and variables > Actions**
2. Agrega los siguientes secrets:
   - `VERCEL_TOKEN`: Tu token de Vercel (obtenlo en https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID`: ID de tu organización en Vercel
   - `VERCEL_PROJECT_ID`: ID del proyecto en Vercel

### Flujo de trabajo

- **Push/PR a main/develop**: Ejecuta tests, linting y build
- **Push a main**: Despliega automáticamente a producción

## Licencia

Proyecto privado: revisa las condiciones internas antes de compartir código o contenido.
