'use client';

import { useState } from 'react';

const quizQuestions = [
  {
    question:
      '¿Cuál es el rol principal de una API en una arquitectura No-Code + AI?',
    options: [
      'Diseñar la interfaz de usuario',
      'Actuar como intermediario entre el frontend y la IA',
      'Almacenar los datos de los usuarios',
    ],
    correctAnswer: 1,
    explanation:
      'La API es el "mesero" que comunica las peticiones de la interfaz con el "cerebro" de la IA.',
  },
  {
    question: 'La "Fórmula Mágica" se define como:',
    options: [
      'INPUT → PROCESO → RESULTADO',
      'PROBLEMA → SOLUCIÓN → MERCADO',
      'INPUT → AI ACTION → OUTPUT',
    ],
    correctAnswer: 2,
    explanation:
      'Esta fórmula define el flujo de datos esencial de nuestra aplicación de IA.',
  },
  {
    question:
      '¿Qué herramienta usamos en este curso para actuar como el "Conector" o "Puente"?',
    options: ['Bubble', 'OpenAI', 'Make'],
    correctAnswer: 2,
    explanation:
      'Make (o Zapier) es la herramienta de automatización que conecta Bubble con OpenAI sin código.',
  },
  {
    question: '¿Por qué es importante definir un problema de nicho específico?',
    options: [
      'Porque es más fácil de programar',
      'Porque las mejores apps resuelven un problema concreto para un usuario específico',
      'Porque requiere menos inversión en marketing',
    ],
    correctAnswer: 1,
    explanation:
      'Las aplicaciones más exitosas son hiper-específicas y resuelven un "dolor" real para un grupo de usuarios definido.',
  },
];

export function CumulativeQuiz() {
  const [answers, setAnswers] = useState<
    Record<number, { selected: number | null; isCorrect: boolean | null }>
  >({});

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    const isCorrect =
      quizQuestions[questionIndex].correctAnswer === optionIndex;
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: { selected: optionIndex, isCorrect },
    }));
  };

  return (
    <div className="not-prose my-12 rounded-2xl border border-card-bg bg-card-bg/80 p-6 text-text-light shadow-lg shadow-black/20 md:p-8">
      <h3 className="text-2xl font-semibold text-white">
        📝 Cuestionario interactivo
      </h3>
      <p className="mt-2 text-text-muted">
        Pon a prueba lo aprendido en los módulos de preparación e ideación.
      </p>

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
                      isSelected &&
                        answerState?.isCorrect &&
                        'border-emerald-400/70 bg-emerald-500/10 text-emerald-100',
                      isSelected &&
                        answerState &&
                        !answerState.isCorrect &&
                        'border-rose-400/70 bg-rose-500/10 text-rose-100',
                      !isSelected &&
                        'border-text-muted/30 bg-black/40 text-text-muted hover:border-text-accent/40 hover:text-text-accent',
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
                  answers[qIndex]?.isCorrect
                    ? 'bg-emerald-500/10 text-emerald-200'
                    : 'bg-rose-500/10 text-rose-200',
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
