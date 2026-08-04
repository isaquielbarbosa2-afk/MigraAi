"use client";

import { Bell } from "lucide-react";

export default function ChatHeader() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          MigraIA
        </h1>

        <p className="text-slate-500">
          Especialista em imigração para Portugal 🇵🇹
        </p>
      </div>

      <button className="rounded-2xl border border-slate-200 p-3 transition hover:bg-slate-100">
        <Bell size={22} />
      </button>
    </header>
  );
}