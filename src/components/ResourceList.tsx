'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Resource } from '@/lib/resources';

interface ResourceListProps {
  resources: Resource[];
}

const typeMap: Record<
  Resource['type'],
  { icon: string; accentClass: string; badgeClass: string }
> = {
  template: {
    icon: 'fas fa-file-alt',
    accentClass: 'text-sky-300',
    badgeClass: 'bg-sky-900/60 text-sky-200',
  },
  snippet: {
    icon: 'fas fa-code',
    accentClass: 'text-emerald-300',
    badgeClass: 'bg-emerald-900/60 text-emerald-200',
  },
  tool: {
    icon: 'fas fa-search-dollar',
    accentClass: 'text-amber-300',
    badgeClass: 'bg-amber-900/60 text-amber-200',
  },
  download: {
    icon: 'fas fa-file-download',
    accentClass: 'text-rose-300',
    badgeClass: 'bg-rose-900/60 text-rose-200',
  },
  guide: {
    icon: 'fas fa-book',
    accentClass: 'text-purple-300',
    badgeClass: 'bg-purple-900/60 text-purple-200',
  },
};

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');

export default function ResourceList({ resources }: ResourceListProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = useMemo(() => {
    const categories = Array.from(new Set(resources.map((item) => item.category)));
    return [
      { id: 'all', label: 'Todos' },
      ...categories.map((category) => ({ id: toSlug(category), label: category })),
    ];
  }, [resources]);

  const filteredResources = useMemo(() => {
    if (activeFilter === 'all') {
      return resources;
    }
    return resources.filter((resource) => toSlug(resource.category) === activeFilter);
  }, [activeFilter, resources]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? 'border-text-accent bg-text-accent/10 text-text-accent'
                  : 'border-text-muted/40 text-text-muted hover:border-text-muted hover:text-text-light'
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div id="resources-grid" className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredResources.map((resource) => {
          const typeInfo = typeMap[resource.type];
          return (
            <Link
              href={resource.url}
              key={resource.id}
              className="flex h-full flex-col rounded-2xl border border-card-bg bg-card-bg/80 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-text-accent/60 hover:shadow-text-accent/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-wide ${typeInfo.accentClass}`}>
                    {resource.type}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">{resource.title}</h3>
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${typeInfo.badgeClass}`}>
                  <i className={`${typeInfo.icon} text-lg`} />
                </div>
              </div>
              <p className="my-4 flex-grow text-sm text-text-muted">{resource.description}</p>
              <div className="flex flex-wrap gap-2">
                {resource.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-black/40 px-2.5 py-1 text-xs text-text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
