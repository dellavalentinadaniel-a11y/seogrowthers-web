import type { ReactNode } from 'react';

interface TipCardProps {
  icon: string;
  title: string;
  children: ReactNode;
}

export function TipCard({ icon, title, children }: TipCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-card-bg bg-black/30 p-6">
      <i className={`${icon} text-xl text-text-accent`} aria-hidden />
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="mt-1 text-sm text-text-muted">{children}</p>
      </div>
    </div>
  );
}
