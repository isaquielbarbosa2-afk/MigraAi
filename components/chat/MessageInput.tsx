"use client";

import { Send, Paperclip } from "lucide-react";

interface MessageInputProps {
  question: string;
  setQuestion: (value: string) => void;
  sendMessage: () => void;
}

export default function MessageInput({
  question,
  setQuestion,
  sendMessage,
}: MessageInputProps) {
  return (
    <div className="border-t border-slate-200 bg-white p-6">
      <div className="mx-auto flex max-w-5xl items-center gap-3 rounded-2xl border border-slate-300 bg-white px-4 py-3 shadow-sm">
        <button className="rounded-xl p-2 transition hover:bg-slate-100">
          <Paperclip size={22} />
        </button>

        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Pergunte qualquer coisa sobre imigração em Portugal..."
          className="flex-1 bg-transparent text-lg outline-none"
        />

        <button
          onClick={sendMessage}
          className="rounded-xl bg-blue-600 p-3 text-white transition hover:bg-blue-700"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}