"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatHeader from "@/components/chat/ChatHeader";
import Message from "@/components/chat/Message";
import MessageInput from "@/components/chat/MessageInput";
import EmptyState from "@/components/chat/EmptyState";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default function ChatPage() {
  return (
    <Suspense fallback={null}>
      <ChatPageContent />
    </Suspense>
  );
}

function ChatPageContent() {
  const params = useSearchParams();

  const initialQuestion = params.get("q") || "";

  const [messages, setMessages] = useState<ChatMessage[]>(
    initialQuestion
      ? [
          {
            role: "user",
            content: initialQuestion,
          },
          {
            role: "assistant",
            content:
              "Olá! Ainda estou em desenvolvimento. Em breve estarei ligada à OpenAI e responderei automaticamente.",
          },
        ]
      : []
  );

  const [question, setQuestion] = useState("");

  function sendMessage() {
    if (!question.trim()) return;

    setMessages((old) => [
      ...old,
      {
        role: "user",
        content: question,
      },
      {
        role: "assistant",
        content:
          "Esta é uma resposta simulada. Em breve será substituída pela OpenAI.",
      },
    ]);

    setQuestion("");
  }

  return (
    <main className="flex h-screen bg-slate-100">
      <ChatSidebar />

      <section className="flex flex-1 flex-col">
        <ChatHeader />

        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 p-8">
              {messages.map((message, index) => (
                <Message
                  key={index}
                  role={message.role}
                  content={message.content}
                />
              ))}
            </div>
          )}
        </div>

        <MessageInput
          question={question}
          setQuestion={setQuestion}
          sendMessage={sendMessage}
        />
      </section>
    </main>
  );
}