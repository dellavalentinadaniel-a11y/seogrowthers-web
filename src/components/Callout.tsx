import type { ReactNode } from 'react';

interface CalloutProps {
  children: ReactNode;
}

export default function Callout({ children }: CalloutProps) {
  return (
    <div className="mt-6 rounded-2xl border border-text-accent/40 bg-text-accent/10 p-6 text-sm text-text-light">
      {children}
    </div>
  );
}
