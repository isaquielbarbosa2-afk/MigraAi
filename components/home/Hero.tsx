import Button from "../ui/Button";
import Card from "../ui/Card";
import { Bot } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 py-24 lg:grid-cols-2">
        {/* ESQUERDA */}
        <div>
          <span className="mb-6 inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            🇵🇹 A IA nº1 para Imigrantes em Portugal
          </span>

          <h1 className="mt-6 text-6xl font-extrabold leading-tight text-slate-900">
            Menos burocracia.
            <br />
            Mais futuro.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
            Tire dúvidas sobre AIMA, NIF, NISS, IRS, nacionalidade,
            saúde, trabalho e integração em Portugal em segundos.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>
              Começar Gratuitamente
            </Button>

            <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold shadow-sm transition hover:bg-slate-100">
              Ver Demonstração
            </button>
          </div>

          <div className="mt-14 flex flex-wrap gap-12">
            <div>
              <h2 className="text-4xl font-bold text-blue-600">
                10.000+
              </h2>

              <p className="text-slate-500">
                Perguntas Respondidas
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-600">
                24/7
              </h2>

              <p className="text-slate-500">
                Assistência
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-600">
                🇵🇹
              </h2>

              <p className="text-slate-500">
                Especializada em Portugal
              </p>
            </div>
          </div>
        </div>

        {/* DIREITA */}
        <div className="flex justify-center">
          <Card>
            <div className="w-[420px]">
              <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Bot size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    MigraIA
                  </h3>

                  <p className="text-sm text-green-600">
                    ● Online
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-100 p-4">
                  👋 Olá! Como posso ajudá-lo hoje?
                </div>

                <div className="ml-auto w-fit max-w-[85%] rounded-2xl bg-blue-600 p-4 text-white">
                  Quero saber como tirar o NIF.
                </div>

                <div className="max-w-[90%] rounded-2xl bg-slate-100 p-4">
                  Claro! Para obter o NIF em Portugal normalmente irá precisar de:
                  <br />
                  <br />
                  • Passaporte ou Cartão de Cidadão
                  <br />
                  • Morada
                  <br />
                  • Representante fiscal (quando aplicável)
                  <br />
                  • Documento de identificação válido
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-3">
                <input
                  type="text"
                  placeholder="Pergunte qualquer coisa..."
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}