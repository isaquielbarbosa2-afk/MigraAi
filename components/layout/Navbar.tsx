import Logo from "../ui/Logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="font-medium text-slate-600 hover:text-blue-600">
            Início
          </Link>

          <Link href="#" className="font-medium text-slate-600 hover:text-blue-600">
            Serviços
          </Link>

          <Link href="#" className="font-medium text-slate-600 hover:text-blue-600">
            Marketplace
          </Link>

          <Link href="#" className="font-medium text-slate-600 hover:text-blue-600">
            Preços
          </Link>
        </nav>

        <div className="flex items-center gap-3">

          <Link
            href="/login"
            className="rounded-xl px-5 py-3 font-semibold text-slate-700 hover:bg-slate-100"
          >
            Entrar
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Começar Gratuitamente
          </Link>

        </div>

      </div>
    </header>
  );
}