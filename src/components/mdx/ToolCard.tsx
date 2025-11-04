import type { ReactNode } from 'react';

interface ToolCardProps {
  href: string;
  header: ReactNode;
  children: ReactNode;
}

export function ToolCard({ href, header, children }: ToolCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl border border-card-bg bg-black/30 p-6 transition hover:border-text-accent/40 hover:bg-card-bg/80"
    >
      <div className="text-sm font-semibold text-text-accent">{header}</div>
      <p className="mt-2 text-sm text-text-muted">{children}</p>
    </a>
  );
}
