"use client";

import { Bot, FileText, Map, BadgeHelp } from "lucide-react";

const suggestions = [
  {
    icon: BadgeHelp,
    title: "Como obter o NIF?",
  },
  {
    icon: FileText,
    title: "Analisar um documento",
  },
  {
    icon: Map,
    title: "Criar o meu Roadmap",
  },
  {
    icon: Bot,
    title: "Falar com a MigraIA",
  },
];

export default function EmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl">
        <Bot size={38} />
      </div>

      <h1 className="text-5xl font-bold text-slate-900">
        Bem-vindo à MigraIA
      </h1>

      <p className="mt-4 max-w-2xl text-center text-lg text-slate-500">
        O seu assistente inteligente para imigração em Portugal.
      </p>

      <div className="mt-14 grid w-full max-w-5xl gap-5 md:grid-cols-2">
        {suggestions.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                <Icon className="text-blue-600" size={26} />
              </div>

              <h2 className="text-xl font-semibold">
                {item.title}
              </h2>
            </button>
          );
        })}
      </div>
    </div>
  );
}