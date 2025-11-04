'use client'

import { useState, useMemo } from 'react'

export function PromptLab() {
  const [promptParts, setPromptParts] = useState({
    rol: '',
    contexto: '',
    instruccion: '',
    formato: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPromptParts(prev => ({ ...prev, [name]: value }))
  }

  const finalPrompt = useMemo(() => {
    const { rol, contexto, instruccion, formato } = promptParts
    // Only include parts that are not empty
    const parts = [
      rol ? `[Rol] ${rol}` : '',
      contexto ? `[Contexto] ${contexto}` : '',
      instruccion ? `[Instrucción] ${instruccion}` : '',
      formato ? `[Formato] ${formato}` : '',
    ]
    return parts.filter(Boolean).join('\n');
  }, [promptParts])

  const handleCopy = () => {
    navigator.clipboard.writeText(finalPrompt);
    alert('¡Prompt Maestro copiado al portapapeles!');
  }

  return (
    <div className="not-prose my-12 rounded-2xl border border-card-bg bg-card-bg/80 p-6 text-text-light shadow-lg shadow-black/20 md:p-8">
      <h3 className="text-2xl font-semibold text-white">🔬 Laboratorio de prompts</h3>
      <p className="mt-2 text-text-muted">Completa los cuatro pilares para construir el prompt maestro de “TweetSpark”.</p>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Input Fields */}
        <div className="space-y-6">
          <div>
            <label htmlFor="rol" className="mb-2 block text-lg font-semibold text-white">1. Rol</label>
            <textarea
              id="rol"
              name="rol"
              rows={3}
              className="w-full rounded-xl border border-text-muted/30 bg-black/30 p-3 text-sm text-text-light focus:border-text-accent focus:outline-none focus:ring-2 focus:ring-text-accent/40"
              placeholder="Ej: Actúa como un experto en Marketing de Contenidos y SEO..."
              value={promptParts.rol}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="contexto" className="mb-2 block text-lg font-semibold text-white">2. Contexto</label>
            <textarea
              id="contexto"
              name="contexto"
              rows={3}
              className="w-full rounded-xl border border-text-muted/30 bg-black/30 p-3 text-sm text-text-light focus:border-text-accent focus:outline-none focus:ring-2 focus:ring-text-accent/40"
              placeholder="Ej: El texto debe estar optimizado para Twitter, limitado a 160 caracteres..."
              value={promptParts.contexto}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="instruccion" className="mb-2 block text-lg font-semibold text-white">3. Instrucción</label>
            <textarea
              id="instruccion"
              name="instruccion"
              rows={3}
              className="w-full rounded-xl border border-text-muted/30 bg-black/30 p-3 text-sm text-text-light focus:border-text-accent focus:outline-none focus:ring-2 focus:ring-text-accent/40"
              placeholder="Ej: Utiliza la información sobre el producto [PRODUCTO] para generar 5 opciones de Tweets..."
              value={promptParts.instruccion}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="formato" className="mb-2 block text-lg font-semibold text-white">4. Formato</label>
            <textarea
              id="formato"
              name="formato"
              rows={3}
              className="w-full rounded-xl border border-text-muted/30 bg-black/30 p-3 text-sm text-text-light focus:border-text-accent focus:outline-none focus:ring-2 focus:ring-text-accent/40"
              placeholder="Ej: Devuélveme solo la mejor opción, sin explicaciones adicionales..."
              value={promptParts.formato}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Real-time Preview */}
        <div className="h-full">
          <label className="mb-2 block text-lg font-semibold text-white">Prompt maestro (vista previa)</label>
          <div className="min-h-[300px] w-full whitespace-pre-wrap rounded-xl border border-text-muted/30 bg-black/40 p-4 font-mono text-sm text-text-light">
            {finalPrompt || <span className="text-text-muted">A medida que completes los campos, el prompt aparecerá aquí…</span>}
          </div>
          {finalPrompt && (
            <button
              onClick={handleCopy}
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-emerald-500/80 px-4 py-2 text-sm font-semibold text-dark-bg transition hover:bg-emerald-400"
            >
              Copiar prompt
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
