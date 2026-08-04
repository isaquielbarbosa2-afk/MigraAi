"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/dashboard");
  }

  async function handleOAuth(provider: "google" | "azure") {
    setError("");

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) setError(error.message);
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-blue-600">
            MigraIA
          </h1>

          <p className="mt-3 text-gray-500">
            Entre na sua conta
          </p>

        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@exemplo.com"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Palavra-passe
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "A entrar..." : "Entrar"}
          </button>

          <button
            type="button"
            onClick={() => handleOAuth("google")}
            className="w-full rounded-xl border py-3 font-semibold hover:bg-slate-100"
          >
            Continuar com Google
          </button>

          <button
            type="button"
            onClick={() => handleOAuth("azure")}
            className="w-full rounded-xl border py-3 font-semibold hover:bg-slate-100"
          >
            Continuar com Microsoft
          </button>

        </form>

        <div className="mt-8 text-center text-sm">

          <a href="#" className="text-blue-600 hover:underline">
            Esqueceu-se da palavra-passe?
          </a>

          <p className="mt-4">
            Ainda não tem conta?

            <Link
              href="/register"
              className="ml-2 font-semibold text-blue-600 hover:underline"
            >
              Criar conta
            </Link>

          </p>

        </div>

      </div>
    </main>
  );
}