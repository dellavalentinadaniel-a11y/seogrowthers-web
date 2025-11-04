'use client';

import { useState } from 'react';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar';

const navigation = [
  { href: '/blog', label: 'Blog' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/cursos', label: 'Cursos' },
  { href: '/comunidad', label: 'Comunidad' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-card-bg bg-dark-bg/95 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-white">
          SEOGROWTHERS
        </Link>

        <div className="hidden flex-1 justify-center md:flex">
          <SearchBar />
        </div>

        <button
          type="button"
          className="md:hidden text-text-light"
          aria-label="Abrir menú"
          onClick={() => setOpen(prev => !prev)}
        >
          <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-xl`} />
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-text-muted">
            {navigation.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {open && (
        <nav className="md:hidden border-t border-card-bg bg-dark-bg/95 px-6 pb-6">
          <div className="mt-4">
            <SearchBar />
          </div>
          <ul className="mt-6 space-y-3 text-sm text-text-muted">
            {navigation.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 transition hover:bg-card-bg/80 hover:text-text-accent"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
