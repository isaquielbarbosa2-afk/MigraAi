"use client";

import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">

      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-slate-500">
          Bem-vindo de volta à MigraIA 👋
        </p>
      </div>

      <div className="flex items-center gap-5">

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">

          <Search
            size={20}
            className="text-slate-400"
          />

          <input
            type="text"
            placeholder="Pesquisar..."
            className="bg-transparent outline-none"
          />

        </div>

        <button className="rounded-2xl border border-slate-200 p-3 transition hover:bg-slate-100">
          <Bell size={22} />
        </button>

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            J
          </div>

          <div>

            <h3 className="font-semibold">
              José Pereira
            </h3>

            <p className="text-sm text-slate-500">
              Utilizador
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}