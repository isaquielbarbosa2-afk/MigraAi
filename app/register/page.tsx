"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleRegister(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess(true);
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-blue-600">
            MigraIA
          </h1>

          <p className="mt-3 text-gray-500">
            Crie a sua conta gratuita
          </p>

        </div>

        {success ? (
          <div className="mt-8 space-y-5 text-center">
            <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
              Conta criada com sucesso! Verifique o seu email para
              confirmar o registo.
            </p>

            <Link
              href="/login"
              className="block w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Ir para o login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleRegister} className="mt-8 space-y-5">

            {error && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </p>
            )}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Nome
              </label>

              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="O seu nome"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

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
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "A criar conta..." : "Criar conta"}
            </button>

          </form>
        )}

        <div className="mt-8 text-center text-sm">

          <p>
            Já tem conta?

            <Link
              href="/login"
              className="ml-2 font-semibold text-blue-600 hover:underline"
            >
              Entrar
            </Link>
          </p>

        </div>

      </div>
    </main>
  );
}
