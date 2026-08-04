"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Map,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

const menu = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: MessageSquare,
    title: "Chat IA",
    href: "/chat",
  },
  {
    icon: FileText,
    title: "Documentos",
    href: "/documents",
  },
  {
    icon: Map,
    title: "Roadmap",
    href: "/roadmap",
  },
  {
    icon: Users,
    title: "Marketplace",
    href: "/marketplace",
  },
  {
    icon: Settings,
    title: "Definições",
    href: "/settings",
  },
];

export default function Sidebar() {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="border-b p-6">
        <h1 className="text-3xl font-extrabold text-blue-600">
          MigraIA
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Assistente Inteligente
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-2 p-5">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-4 rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              <Icon size={22} />

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Utilizador */}
      <div className="border-t p-5">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
            J
          </div>

          <div>
            <h3 className="font-semibold">
              José Pereira
            </h3>

            <p className="text-sm text-slate-500">
              Plano Gratuito
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-300 py-3 transition hover:bg-slate-100"
        >
          <LogOut size={20} />
          <span>Terminar Sessão</span>
        </button>
      </div>
    </aside>
  );
}