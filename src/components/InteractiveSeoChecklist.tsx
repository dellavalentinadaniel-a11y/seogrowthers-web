'use client';

import { useEffect, useMemo, useState } from 'react';

interface ChecklistItem {
  id: string;
  label: string;
  details: string;
}

interface ChecklistSection {
  id: string;
  title: string;
  items: ChecklistItem[];
}

interface PriorityCard {
  id: string;
  title: string;
  accentClass: string;
  borderClass: string;
  items: string[];
}

const STORAGE_KEY = 'seoChecklistProgress';

const checklistData: ChecklistSection[] = [
  {
    id: 'tech-audit',
    title: '🔍 1. Auditoría Técnica - Verificación',
    items: [
      {
        id: 'tech-https',
        label: 'HTTPS activado',
        details:
          'Verificación: Ver candado verde en navegador. Acción: Redireccionar HTTP → HTTPS.',
      },
      {
        id: 'tech-www',
        label: 'WWW vs non-WWW',
        details:
          'Verificación: Acceder con/sin www. Acción: Elegir canonical y redireccionar.',
      },
      {
        id: 'tech-robots',
        label: 'Robots.txt verificado',
        details:
          'Verificación: sitio.com/robots.txt. Acción: Permitir CSS/JS, bloquear páginas privadas.',
      },
      {
        id: 'tech-sitemap',
        label: 'Sitemap.xml enviado',
        details:
          'Verificación: sitio.com/sitemap.xml. Acción: Enviar a Search Console.',
      },
      {
        id: 'tech-404',
        label: 'Páginas 404 identificadas',
        details:
          'Verificación: Search Console > Cobertura. Acción: Redireccionar 301 o crear contenido.',
      },
      {
        id: 'tech-5xx',
        label: 'Errores de servidor (5xx)',
        details:
          'Verificación: Search Console > Cobertura. Acción: Revisar logs del servidor y corregir.',
      },
    ],
  },
  {
    id: 'performance',
    title: '⚡ 2. Velocidad y Rendimiento',
    items: [
      {
        id: 'perf-lcp',
        label: 'LCP (Largest Contentful Paint) < 2.5s',
        details:
          'Verificación: PageSpeed Insights. Acción: Optimizar imágenes, usar CDN, mejorar respuesta del servidor.',
      },
      {
        id: 'perf-fid',
        label: 'FID (First Input Delay) < 100ms',
        details:
          'Verificación: PageSpeed Insights. Acción: Reducir el impacto de código de terceros, minimizar el trabajo del hilo principal.',
      },
      {
        id: 'perf-cls',
        label: 'CLS (Cumulative Layout Shift) < 0.1',
        details:
          'Verificación: PageSpeed Insights. Acción: Definir dimensiones de imágenes/videos y evitar inserciones inesperadas.',
      },
      {
        id: 'perf-images',
        label: 'Compresión de imágenes',
        details:
          'Verificación: PageSpeed Insights > Oportunidades. Acción: Usar WebP y optimizar con TinyPNG u otra herramienta.',
      },
      {
        id: 'perf-minify',
        label: 'Minificación de código',
        details:
          'Verificación: PageSpeed Insights. Acción: Minificar CSS, JS y HTML para reducir tamaño.',
      },
      {
        id: 'perf-cache',
        label: 'Uso de caché de navegador',
        details:
          'Verificación: PageSpeed Insights. Acción: Configurar cabeceras Cache-Control o Expires.',
      },
    ],
  },
  {
    id: 'on-page',
    title: '📄 3. SEO On-Page',
    items: [
      {
        id: 'onpage-title',
        label: 'Títulos optimizados y únicos',
        details:
          'Verificación: Screaming Frog/SEMrush. Acción: Usar palabra clave principal (50-60 caracteres).',
      },
      {
        id: 'onpage-meta',
        label: 'Meta descripciones atractivas',
        details:
          'Verificación: Screaming Frog/SEMrush. Acción: Redactar descripciones con call to action (150-160 caracteres).',
      },
      {
        id: 'onpage-headings',
        label: 'Jerarquía de encabezados',
        details:
          'Verificación: Revisión manual. Acción: Un H1 por página y estructura lógica con H2/H3.',
      },
      {
        id: 'onpage-alt',
        label: 'Atributos ALT en imágenes',
        details:
          'Verificación: Screaming Frog. Acción: Añadir texto descriptivo a imágenes relevantes.',
      },
      {
        id: 'onpage-internal',
        label: 'Enlaces internos relevantes',
        details:
          'Verificación: Screaming Frog > Visualizaciones. Acción: Conectar contenidos relacionados con anchor text descriptivo.',
      },
    ],
  },
  {
    id: 'content',
    title: '📝 4. Contenido y Duplicidad',
    items: [
      {
        id: 'content-duplicate',
        label: 'Sin contenido duplicado interno',
        details:
          'Verificación: Siteliner o Screaming Frog. Acción: Reescribir, consolidar o usar canónicas.',
      },
      {
        id: 'content-canonical',
        label: 'Etiquetas canónicas correctas',
        details:
          'Verificación: Search Console. Acción: Garantizar que variantes apunten a la URL principal.',
      },
      {
        id: 'content-keywords',
        label: 'Sin canibalización de keywords',
        details:
          'Verificación: Ahrefs/SEMrush. Acción: Unificar o reorientar la intención de búsqueda.',
      },
      {
        id: 'content-quality',
        label: 'Contenido profundo y actualizado',
        details:
          'Verificación: Análisis manual + Analytics. Acción: Ampliar o mejorar piezas con baja retención.',
      },
    ],
  },
  {
    id: 'mobile',
    title: '📱 5. Usabilidad Móvil',
    items: [
      {
        id: 'mobile-friendly',
        label: 'Pasa la prueba Mobile-Friendly',
        details:
          'Verificación: Herramienta Mobile-Friendly Test de Google. Acción: Corregir los problemas detectados.',
      },
      {
        id: 'mobile-viewport',
        label: 'Viewport meta tag configurado',
        details:
          'Verificación: Revisar código fuente. Acción: Incluir `<meta name="viewport" content="width=device-width, initial-scale=1">`.',
      },
      {
        id: 'mobile-interstitials',
        label: 'Sin intersticiales intrusivos',
        details:
          'Verificación: Prueba en dispositivos móviles. Acción: Eliminar pop-ups que cubran contenido clave en la carga.',
      },
    ],
  },
  {
    id: 'authority',
    title: '🔗 6. Link Building y Autoridad',
    items: [
      {
        id: 'authority-backlinks',
        label: 'Análisis de backlinks',
        details:
          'Verificación: Ahrefs/SEMrush. Acción: Identificar enlaces tóxicos y oportunidades de calidad.',
      },
      {
        id: 'authority-internal',
        label: 'Estrategia de enlaces internos',
        details:
          'Verificación: Auditoría on-page. Acción: Mantener arquitectura lógica y enlaces contextuales.',
      },
      {
        id: 'authority-broken',
        label: 'Enlaces rotos corregidos',
        details:
          'Verificación: Screaming Frog. Acción: Redireccionar o actualizar enlaces 404.',
      },
    ],
  },
  {
    id: 'structured-data',
    title: '📊 7. Datos Estructurados (Schema)',
    items: [
      {
        id: 'schema-implementation',
        label: 'Schema relevante implementado',
        details:
          'Verificación: Inspeccionar código. Acción: Añadir marcado para Artículos, Productos, FAQ, etc.',
      },
      {
        id: 'schema-validation',
        label: 'Schema validado sin errores',
        details:
          'Verificación: Rich Results Test. Acción: Corregir advertencias antes de publicar.',
      },
    ],
  },
];

const tools = [
  'Google Search Console',
  'Google Analytics',
  'Screaming Frog',
  'PageSpeed Insights',
  'Ahrefs / SEMrush (opcional)',
];

const priorityCards: PriorityCard[] = [
  {
    id: 'critical',
    title: 'CRÍTICO (Hacer hoy)',
    accentClass: 'text-red-400',
    borderClass: 'border-red-500',
    items: [
      'Errores 404 y 5xx',
      'Títulos y meta descripciones',
      'Velocidad en móviles',
      'Indexación en Search Console',
    ],
  },
  {
    id: 'high',
    title: 'ALTA (Esta semana)',
    accentClass: 'text-yellow-400',
    borderClass: 'border-yellow-400',
    items: [
      'Estructura de enlaces internos',
      'Optimización de imágenes',
      'Contenido duplicado',
      'Experiencia móvil',
    ],
  },
  {
    id: 'medium',
    title: 'MEDIA (Este mes)',
    accentClass: 'text-blue-400',
    borderClass: 'border-blue-400',
    items: [
      'Plan editorial',
      'Link building',
      'Rich snippets',
      'Internacionalización',
    ],
  },
];

export default function InteractiveSeoChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    'tech-audit': true,
  });

  const totalItems = useMemo(
    () => checklistData.reduce((acc, section) => acc + section.items.length, 0),
    []
  );

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as string[];
        const restored = parsed.reduce<Record<string, boolean>>((acc, id) => {
          acc[id] = true;
          return acc;
        }, {});
        setCheckedItems(restored);
      }
    } catch (error) {
      console.error('Error loading checklist progress', error);
    }
  }, []);

  useEffect(() => {
    try {
      const checkedIds = Object.entries(checkedItems)
        .filter(([, isChecked]) => isChecked)
        .map(([id]) => id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedIds));
    } catch (error) {
      console.error('Error saving checklist progress', error);
    }
  }, [checkedItems]);

  const completedItems = useMemo(
    () => Object.values(checkedItems).filter(Boolean).length,
    [checkedItems]
  );

  const progress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

  const handleCheckboxChange = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleReset = () => {
    if (
      window.confirm('¿Estás seguro de que quieres resetear todo el checklist?')
    ) {
      setCheckedItems({});
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (error) {
        console.error('Error resetting checklist progress', error);
      }
    }
  };

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          ✅ Checklist Completo de Auditoría SEO
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Una guía accionable para elevar el rendimiento técnico, de contenido y
          autoridad de tu sitio.
        </p>
      </header>

      <div className="sticky top-20 z-40 mb-12 rounded-xl border border-gray-800 bg-gray-900/80 p-6 backdrop-blur">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-sm font-medium text-white">
              Progreso de la Auditoría
            </span>
            <p className="text-2xl font-bold text-green-400">
              {Math.round(progress)}%
            </p>
          </div>
          <button
            onClick={handleReset}
            className="self-start rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:border-gray-500 hover:text-white"
          >
            <i className="fas fa-undo mr-2" />
            Resetear Checklist
          </button>
        </div>
        <div className="mt-4 h-2.5 w-full rounded-full bg-gray-700">
          <div
            className="h-full rounded-full bg-green-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <p className="mt-3 text-sm text-gray-400">
          {completedItems} de {totalItems} elementos completados.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <i className="fas fa-tools text-blue-400" />
          Herramientas Necesarias
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {tools.map(tool => (
            <span
              key={tool}
              className="rounded-full bg-gray-800 px-4 py-1 text-sm font-medium text-gray-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      <div className="space-y-4">
        {checklistData.map(section => {
          const isOpen = !!openSections[section.id];
          return (
            <div
              key={section.id}
              className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition-shadow hover:shadow-lg"
            >
              <button
                type="button"
                onClick={() => toggleSection(section.id)}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-lg font-semibold text-white"
                aria-expanded={isOpen}
              >
                <span>{section.title}</span>
                <i
                  className={`fas fa-chevron-right text-sm transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
                />
              </button>
              {isOpen && (
                <div className="space-y-3 border-t border-gray-800 px-5 py-4">
                  {section.items.map(item => (
                    <label
                      key={item.id}
                      className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-800 bg-gray-950/60 p-4 transition hover:border-blue-500/60"
                    >
                      <input
                        type="checkbox"
                        className="mt-1 h-5 w-5 rounded-md border-gray-700 bg-gray-900 text-green-500 focus:ring-green-500"
                        checked={!!checkedItems[item.id]}
                        onChange={() => handleCheckboxChange(item.id)}
                      />
                      <div>
                        <p className="font-semibold text-white">{item.label}</p>
                        <p className="text-sm text-gray-400">{item.details}</p>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <i className="fas fa-exclamation-triangle text-red-400" />
          Prioridades de Acción
        </h2>
        {priorityCards.map(card => (
          <div
            key={card.id}
            className={`rounded-xl border-l-4 ${card.borderClass} bg-gray-900 p-6 shadow-md`}
          >
            <h3 className={`text-xl font-bold ${card.accentClass}`}>
              {card.title}
            </h3>
            <ul className="mt-3 list-inside list-disc text-sm text-gray-300 space-y-1">
              {card.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
