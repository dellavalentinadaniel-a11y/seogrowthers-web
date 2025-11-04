'use client'

import { useState } from 'react'

const quizQuestions = [
  {
    question: 'Según el curso, ¿cuál es la mentalidad principal que debe adoptar un creador No-Code + AI?',
    options: ['Mentalidad de Programador', 'Mentalidad de Diseñador', 'Mentalidad de Integrador'],
    correctAnswer: 2,
    explanation: 'Tu trabajo principal es conectar herramientas y servicios existentes, como un integrador.'
  },
  {
    question: '¿Qué es una API, según la analogía usada en el curso?',
    options: ['Un lenguaje de programación', 'Un mesero que comunica tu app con la IA', 'La interfaz visual de la app'],
    correctAnswer: 1,
    explanation: 'La API actúa como un intermediario (mesero) que lleva las peticiones de tu app a la IA y te trae la respuesta.'
  },
  {
    question: '¿Cuál es el rol del "Frontend" en nuestra arquitectura?',
    options: ['Es el cerebro de la IA (ej. OpenAI)', 'Es la herramienta que conecta todo (ej. Make)', 'Es la interfaz que el usuario ve y usa (ej. Bubble)'],
    correctAnswer: 2,
    explanation: 'El Frontend es la "cara" de tu aplicación, donde los usuarios interactúan.'
  }
];

export function SimpleQuiz() {
  const [answers, setAnswers] = useState<Record<number, { selected: number | null; isCorrect: boolean | null }>>({});

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    const isCorrect = quizQuestions[questionIndex].correctAnswer === optionIndex;
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: { selected: optionIndex, isCorrect },
    }));
  };

  return (
    <div className="not-prose my-12 rounded-2xl border border-card-bg bg-card-bg/80 p-6 text-text-light shadow-lg shadow-black/20 md:p-8">
      <h3 className="text-2xl font-semibold text-white">🧠 Cuestionario rápido</h3>
      <p className="mt-2 text-text-muted">Pon a prueba los conceptos clave de la introducción.</p>

      <div className="mt-8 space-y-8">
        {quizQuestions.map((q, qIndex) => (
          <div key={qIndex}>
            <p className="text-lg font-semibold text-white">{q.question}</p>
            <div className="mt-4 space-y-3">
              {q.options.map((option, oIndex) => {
                const answerState = answers[qIndex];
                const isSelected = answerState?.selected === oIndex;
                return (
                  <button
                    key={oIndex}
                    onClick={() => handleAnswer(qIndex, oIndex)}
                    className={[
                      'w-full rounded-xl border px-4 py-3 text-left text-sm transition',
                      isSelected && answerState?.isCorrect && 'border-emerald-400/70 bg-emerald-500/10 text-emerald-100',
                      isSelected && answerState && !answerState.isCorrect && 'border-rose-400/70 bg-rose-500/10 text-rose-100',
                      !isSelected && 'border-text-muted/30 bg-black/40 text-text-muted hover:border-text-accent/40 hover:text-text-accent',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {answers[qIndex]?.isCorrect !== null && (
              <div
                className={[
                  'mt-3 rounded-xl p-3 text-sm',
                  answers[qIndex]?.isCorrect ? 'bg-emerald-500/10 text-emerald-200' : 'bg-rose-500/10 text-rose-200',
                ].join(' ')}
              >
                {q.explanation}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
