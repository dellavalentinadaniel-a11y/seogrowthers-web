'use client';

import { useState, useMemo } from 'react';

const checklistItems = [
  { id: 'bubble', label: 'Crear cuenta gratuita en Bubble' },
  { id: 'make', label: 'Crear cuenta gratuita en Make' },
  { id: 'openai', label: 'Crear cuenta en la plataforma de OpenAI' },
];

export function PreparationChecklist() {
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({
    bubble: false,
    make: false,
    openai: false,
  });

  const handleCheckboxChange = (id: string) => {
    setCheckedState(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const allChecked = useMemo(() => {
    return Object.values(checkedState).every(Boolean);
  }, [checkedState]);

  return (
    <div className="not-prose my-12 rounded-2xl border border-card-bg bg-card-bg/80 p-6 text-text-light shadow-lg shadow-black/20 md:p-8">
      <h3 className="text-2xl font-semibold text-white">
        ✅ Checklist de preparación
      </h3>
      <p className="mt-2 text-text-muted">
        Marca cada casilla para completar la configuración del kit de
        herramientas y desbloquear el Módulo 1.
      </p>

      <div className="mt-6 space-y-4">
        {checklistItems.map(item => (
          <label
            key={item.id}
            className="flex items-center gap-4 rounded-xl border border-text-muted/30 bg-black/30 p-4 transition hover:border-text-accent/40"
          >
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-text-muted/40 bg-dark-bg text-text-accent focus:ring-text-accent"
              checked={checkedState[item.id] || false}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <span
              className={`text-sm ${checkedState[item.id] ? 'text-text-muted line-through' : 'text-text-light'}`}
            >
              {item.label}
            </span>
          </label>
        ))}
      </div>

      {allChecked && (
        <div className="mt-8 rounded-xl border border-emerald-400/50 bg-emerald-500/10 p-4 text-center text-emerald-200">
          <p className="text-lg font-semibold">
            ¡Excelente! Tu kit de herramientas está listo. Puedes avanzar al
            Módulo 1.
          </p>
        </div>
      )}
    </div>
  );
}
