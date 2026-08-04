"use client";

const questions = [
  "Como obter o meu NIF?",
  "Como marcar atendimento na AIMA?",
  "Como pedir o NISS?",
  "Como funciona o IRS em Portugal?",
];

export default function SuggestedQuestions() {
  return (
    <div>
      <h2 className="mb-5 text-xl font-bold text-slate-900">
        Sugestões
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {questions.map((question) => (
          <button
            key={question}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:border-blue-500 hover:shadow-md"
          >
            <p className="font-medium text-slate-700">
              {question}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}