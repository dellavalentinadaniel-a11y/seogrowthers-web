import type { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-card-bg bg-card-bg/80 p-6 shadow-lg shadow-black/20">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="mt-2 text-sm text-text-muted">{children}</p>
    </div>
  );
}
