import type { ReactNode } from 'react';

interface StepItemProps {
  stepNumber: number;
  title: string;
  children: ReactNode;
}

export function StepItem({ stepNumber, title, children }: StepItemProps) {
  return (
    <div className="rounded-2xl border border-card-bg bg-black/30 p-6">
      <h3 className="flex items-center gap-3 text-xl font-semibold text-white">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-text-accent text-sm font-bold text-dark-bg">
          {stepNumber}
        </span>
        {title}
      </h3>
      <div className="mt-3 space-y-3 text-sm text-text-muted">{children}</div>
    </div>
  );
}
