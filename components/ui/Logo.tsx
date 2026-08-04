import { Globe } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600">
        <Globe className="h-6 w-6 text-white" />
      </div>

      <div>
        <h1 className="text-2xl font-bold">
          Migra<span className="text-blue-600">IA</span>
        </h1>

        <p className="text-xs text-slate-500">
          Assistente Inteligente
        </p>
      </div>
    </div>
  );
}