"use client";

interface MessageProps {
  role: string;
  content: string;
}

export default function Message({ role, content }: MessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-3xl rounded-2xl px-5 py-4 shadow-sm ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-white text-slate-800 border border-slate-200"
        }`}
      >
        <p className="whitespace-pre-wrap leading-7">
          {content}
        </p>
      </div>
    </div>
  );
}