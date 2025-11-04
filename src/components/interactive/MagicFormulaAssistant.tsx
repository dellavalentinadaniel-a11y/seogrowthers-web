'use client'

import { useState } from 'react'

export function MagicFormulaAssistant() {
  const [userInput, setUserInput] = useState({
    problema: '',
    input: '',
    accion: '',
    output: '',
  })
  const [isGenerated, setIsGenerated] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUserInput(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerated(true)
  }

  const handleCopy = () => {
    const plainText = [
      '*** Resumen de tu proyecto "TweetSpark"',
      `** Problema: ${userInput.problema || 'No definido'}`,
      `** INPUT: ${userInput.input || 'No definido'}`,
      `** AI ACTION: ${userInput.accion || 'No definido'}`,
      `** OUTPUT: ${userInput.output || 'No definido'}`,
    ].join('\n');
    navigator.clipboard.writeText(plainText);
    alert('¡Resumen copiado al portapapeles!');
  }

  return (
    <div className="not-prose my-12 rounded-2xl border border-card-bg bg-card-bg/80 p-6 text-text-light shadow-lg shadow-black/20 md:p-8">
      <h3 className="text-2xl font-semibold text-white">✍️ Asistente interactivo: la fórmula mágica</h3>
      <p className="mt-2 text-text-muted">
        Define el flujo INPUT → AI ACTION → OUTPUT para tu app “TweetSpark” y genera un brief listo para compartir.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="problema" className="mb-2 block text-lg font-semibold text-white">
            1. El problema y el usuario
          </label>
          <textarea
            id="problema"
            name="problema"
            rows={3}
            className="w-full rounded-xl border border-text-muted/30 bg-black/30 p-3 text-sm text-text-light focus:border-text-accent focus:outline-none focus:ring-2 focus:ring-text-accent/40"
            placeholder="Ej: Los creadores de contenido se quedan sin ideas para tweets atractivos sobre un tema."
            value={userInput.problema}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="input" className="mb-2 block text-lg font-semibold text-white">
            2. INPUT (la entrada del usuario)
          </label>
          <textarea
            id="input"
            name="input"
            rows={3}
            className="w-full rounded-xl border border-text-muted/30 bg-black/30 p-3 text-sm text-text-light focus:border-text-accent focus:outline-none focus:ring-2 focus:ring-text-accent/40"
            placeholder="Ej: El usuario ingresará un tema general, como 'Inteligencia Artificial'."
            value={userInput.input}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="accion" className="mb-2 block text-lg font-semibold text-white">
            3. AI ACTION (la instrucción a la IA)
          </label>
          <textarea
            id="accion"
            name="accion"
            rows={3}
            className="w-full rounded-xl border border-text-muted/30 bg-black/30 p-3 text-sm text-text-light focus:border-text-accent focus:outline-none focus:ring-2 focus:ring-text-accent/40"
            placeholder="Ej: La IA generará 5 ideas de tweets basadas en el tema, con diferentes ángulos (polémico, curioso, etc.)."
            value={userInput.accion}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="output" className="mb-2 block text-lg font-semibold text-white">
            4. OUTPUT (el resultado para el usuario)
          </label>
          <textarea
            id="output"
            name="output"
            rows={3}
            className="w-full rounded-xl border border-text-muted/30 bg-black/30 p-3 text-sm text-text-light focus:border-text-accent focus:outline-none focus:ring-2 focus:ring-text-accent/40"
            placeholder="Ej: Una lista de 5 textos de tweets, listos para copiar y pegar."
            value={userInput.output}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-text-accent px-6 py-3 text-lg font-semibold text-dark-bg transition hover:bg-text-accent/90"
          >
            Generar brief del proyecto
          </button>
        </div>
      </form>

      {isGenerated && (
        <div className="mt-8 space-y-4 rounded-2xl border border-text-accent/40 bg-black/30 p-6 shadow-inner shadow-text-accent/10">
          <h3 className="text-2xl font-semibold text-text-accent">Resumen de tu proyecto “TweetSpark”</h3>
          <div className="space-y-4 text-sm text-text-light/90">
            <div>
              <h4 className="font-semibold text-white">Problema a resolver</h4>
              <p className="mt-1 text-text-muted">{userInput.problema || 'No definido'}</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Input (lo que entrega el usuario)</h4>
              <p className="mt-1 text-text-muted">{userInput.input || 'No definido'}</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">AI Action (instrucción para la IA)</h4>
              <p className="mt-1 text-text-muted">{userInput.accion || 'No definido'}</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Output (resultado entregado)</h4>
              <p className="mt-1 text-text-muted">{userInput.output || 'No definido'}</p>
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500/80 px-4 py-2 text-sm font-semibold text-dark-bg transition hover:bg-emerald-400"
          >
            Copiar resumen
          </button>
        </div>
      )}
    </div>
  )
}
