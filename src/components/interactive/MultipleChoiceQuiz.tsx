'use client';

import { useMemo, useState } from 'react';

interface QuizOption {
  id: string;
  label: string;
}

interface QuizQuestion {
  id: string;
  prompt: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation?: string;
}

interface MultipleChoiceQuizProps {
  title: string;
  description?: string;
  questions: QuizQuestion[];
  successMessage?: string;
  partialMessage?: (score: number, total: number) => string;
}

const defaultPartialMessage = (score: number, total: number) =>
  `Acertaste ${score} de ${total}. Revisa las respuestas y vuelve a intentarlo para dominar el tema.`;

export function MultipleChoiceQuiz({
  title,
  description,
  questions,
  successMessage = '¡Excelente! Dominaste este reto.',
  partialMessage = defaultPartialMessage,
}: MultipleChoiceQuizProps) {
  const totalQuestions = useMemo(() => questions.length, [questions]);
  const [answers, setAnswers] = useState<Record<string, string | null>>(
    () =>
      questions.reduce<Record<string, string | null>>((acc, question) => {
        acc[question.id] = null;
        return acc;
      }, {}),
  );
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let currentScore = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correctOptionId) {
        currentScore += 1;
      }
    });
    setScore(currentScore);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(
      questions.reduce<Record<string, string | null>>((acc, question) => {
        acc[question.id] = null;
        return acc;
      }, {}),
    );
    setScore(0);
    setSubmitted(false);
  };

  return (
    <div className="not-prose my-12 rounded-2xl border border-card-bg bg-card-bg/80 p-6 text-text-light shadow-lg shadow-black/20 md:p-8">
      <header>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        {description && <p className="mt-2 text-text-muted">{description}</p>}
      </header>

      <form onSubmit={handleSubmit} className="mt-8 space-y-8">
        {questions.map((question) => {
          const selectedOption = answers[question.id];
          return (
            <fieldset key={question.id} className="space-y-4">
              <legend className="text-lg font-semibold text-white">{question.prompt}</legend>
              <div className="space-y-3">
                {question.options.map((option) => {
                  const isCorrect = option.id === question.correctOptionId;
                  const isSelected = selectedOption === option.id;
                  return (
                    <label
                      key={option.id}
                      className={[
                        'flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition',
                        submitted && isCorrect && 'border-emerald-400/70 bg-emerald-500/10 text-emerald-100',
                        submitted && isSelected && !isCorrect && 'border-rose-400/70 bg-rose-500/10 text-rose-100',
                        !submitted && isSelected && 'border-text-accent/50 bg-text-accent/10 text-text-accent',
                        !submitted && !isSelected && 'border-text-muted/30 bg-black/40 text-text-muted hover:border-text-accent/40 hover:text-text-accent',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        value={option.id}
                        checked={isSelected}
                        onChange={() => handleSelect(question.id, option.id)}
                        className="h-4 w-4 border-text-muted/40 bg-dark-bg text-text-accent focus:ring-text-accent"
                      />
                      <span>{option.label}</span>
                    </label>
                  );
                })}
              </div>
              {submitted && question.explanation && (
                <p className="rounded-xl border border-text-muted/20 bg-black/30 p-3 text-xs text-text-muted">
                  {question.explanation}
                </p>
              )}
            </fieldset>
          );
        })}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-text-accent px-4 py-2 text-sm font-semibold text-dark-bg transition hover:bg-text-accent/90"
          >
            Evaluar respuestas
          </button>
          {submitted && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center rounded-lg border border-text-muted/40 px-4 py-2 text-sm font-semibold text-text-muted transition hover:border-text-accent/40 hover:text-text-accent"
            >
              Reiniciar
            </button>
          )}
        </div>
      </form>

      {submitted && (
        <div
          className={[
            'mt-6 rounded-xl border p-4 text-sm',
            score === totalQuestions
              ? 'border-emerald-400/60 bg-emerald-500/10 text-emerald-100'
              : 'border-amber-300/40 bg-amber-400/10 text-amber-100',
          ].join(' ')}
        >
          {score === totalQuestions ? successMessage : partialMessage(score, totalQuestions)}
        </div>
      )}
    </div>
  );
}
