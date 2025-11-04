'use client';

import { useState, useEffect } from 'react';

interface SocialShareButtonsProps {
  title: string;
}

export default function SocialShareButtons({ title }: SocialShareButtonsProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    // Se ejecuta solo en el cliente, donde window está disponible
    setCurrentUrl(window.location.href);
  }, []);

  if (!currentUrl) {
    return null; // No renderizar nada hasta que la URL esté disponible
  }

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="my-12 rounded-2xl border border-card-bg bg-black/30 p-6 text-center shadow-inner shadow-black/20">
      <h3 className="text-lg font-semibold text-white">
        Comparte este artículo
      </h3>
      <p className="mt-1 text-sm text-text-muted">
        Llévalo a tus redes o comparte el enlace directo.
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-text-muted">
        <a
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-text-accent"
          aria-label="Compartir en Facebook"
        >
          <i className="fab fa-facebook-f fa-2x" />
        </a>
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-text-accent"
          aria-label="Compartir en Twitter"
        >
          <i className="fab fa-twitter fa-2x" />
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-text-accent"
          aria-label="Compartir en LinkedIn"
        >
          <i className="fab fa-linkedin-in fa-2x" />
        </a>
        <a
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-text-accent"
          aria-label="Compartir en WhatsApp"
        >
          <i className="fab fa-whatsapp fa-2x" />
        </a>
        <button
          onClick={handleCopyLink}
          className="transition hover:text-text-accent"
          aria-label="Copiar enlace"
        >
          <i className="fas fa-link fa-2x" />
        </button>
      </div>
      {copySuccess && (
        <p className="mt-3 text-sm text-emerald-300">¡Enlace copiado!</p>
      )}
    </div>
  );
}
