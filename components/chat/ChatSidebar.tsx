"use client";

import { MessageSquarePlus } from "lucide-react";

const chats = [
  "Como obter o NIF",
  "Renovar Título de Residência",
  "IRS 2026",
  "Marcação na AIMA",
];

export default function ChatSidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="border-b p-6">
        <h1 className="text-3xl font-bold text-blue-600">
          MigraIA
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Assistente Inteligente
        </p>
      </div>

      {/* Nova conversa */}
      <div className="p-5">
        <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
          <MessageSquarePlus size={20} />
          Nova Conversa
        </button>
      </div>

      {/* Histórico */}
      <div className="flex-1 space-y-2 overflow-y-auto px-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Conversas Recentes
        </p>

        {chats.map((chat) => (
          <button
            key={chat}
            className="w-full rounded-xl px-4 py-3 text-left text-slate-700 transition hover:bg-slate-100"
          >
            {chat}
          </button>
        ))}
      </div>

      {/* Rodapé */}
      <div className="border-t p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            J
          </div>

          <div>
            <p className="font-semibold">
              José Pereira
            </p>

            <p className="text-sm text-slate-500">
              Plano Gratuito
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}