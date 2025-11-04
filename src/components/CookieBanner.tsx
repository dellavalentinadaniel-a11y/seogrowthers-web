'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent =
      typeof window !== 'undefined'
        ? localStorage.getItem(STORAGE_KEY)
        : 'true';
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-card-bg bg-card-bg/95 backdrop-blur">
      <div className="container mx-auto flex flex-col gap-4 px-6 py-5 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
        <p>
          Usamos cookies para mejorar tu experiencia. Consulta nuestra{' '}
          <Link
            href="/politica-de-cookies"
            className="text-text-accent hover:underline"
          >
            política de cookies
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={handleAccept}
          className="inline-flex items-center justify-center rounded-lg bg-text-accent px-4 py-2 text-sm font-semibold text-dark-bg transition hover:bg-text-accent/90"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
