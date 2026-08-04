"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [question, setQuestion] = useState("");

  function handleSearch() {
    if (!question.trim()) {
      router.push("/chat");
      return;
    }

    router.push(`/chat?q=${encodeURIComponent(question)}`);
  }

  const suggestions = [
    "Como tirar o NIF?",
    "Como marcar a AIMA?",
    "Como obter o NISS?",
    "IRS para imigrantes",
  ];

  return (
    <section className="relative z-10 mx-auto -mt-14 max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-blue-100 p-3">
            <Search className="text-blue-600" size={24} />
          </div>

          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            placeholder="Pergunte qualquer coisa... Ex: Como obter o meu NIF?"
            className="flex-1 bg-transparent text-lg outline-none"
          />

          <button
            onClick={handleSearch}
            className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Perguntar
          </button>

        </div>

        <div className="mt-6 flex flex-wrap gap-3">

          {suggestions.map((item) => (
            <button
              key={item}
              onClick={() => {
                setQuestion(item);
                router.push(`/chat?q=${encodeURIComponent(item)}`);
              }}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
            >
              {item}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}