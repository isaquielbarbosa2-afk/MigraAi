"use client";

import { Bot, FileText, Map, Users } from "lucide-react";

const cards = [
  {
    icon: Bot,
    title: "Falar com a IA",
    description: "Tire dúvidas sobre imigração em segundos.",
    color: "bg-blue-600",
  },
  {
    icon: FileText,
    title: "Documentos",
    description: "Analise documentos automaticamente.",
    color: "bg-emerald-600",
  },
  {
    icon: Map,
    title: "Roadmap",
    description: "Veja os próximos passos da sua integração.",
    color: "bg-orange-500",
  },
  {
    icon: Users,
    title: "Marketplace",
    description: "Encontre profissionais especializados.",
    color: "bg-violet-600",
  },
];

export default function Welcome() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          👋 Bem-vindo, José
        </h1>

        <p className="mt-2 text-lg text-slate-500">
          O que pretende fazer hoje?
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <button
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white ${card.color}`}
              >
                <Icon size={26} />
              </div>

              <h3 className="text-xl font-bold">
                {card.title}
              </h3>

              <p className="mt-2 text-slate-500">
                {card.description}
              </p>
            </button>
          );
        })}

      </div>

    </div>
  );
}