'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-xs">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar artículos y cursos..."
        className="w-full rounded-full border border-text-muted/20 bg-black/30 px-4 py-2 text-sm text-text-light placeholder-text-muted focus:border-text-accent focus:outline-none focus:ring-2 focus:ring-text-accent/40"
      />
      <button
        type="submit"
        aria-label="Buscar"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-text-muted transition hover:text-text-accent"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
    </form>
  );
}
