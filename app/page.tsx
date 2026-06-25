export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-6xl font-bold text-blue-600">
          MigraIA
        </h1>

        <p className="text-2xl mt-6 text-gray-700">
          Menos burocracia. Mais futuro.
        </p>

        <p className="mt-8 text-lg text-gray-600 max-w-2xl">
          A primeira assistente inteligente para ajudar imigrantes
          em Portugal com NIF, NISS, AIMA, IRS, residência,
          trabalho e integração.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
            Começar Agora
          </button>

          <button className="border border-gray-300 px-6 py-3 rounded-xl">
            Falar com a IA
          </button>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl">
            <h3 className="font-bold text-xl">
              NIF e NISS
            </h3>

            <p className="mt-3 text-gray-600">
              Saiba exatamente como obter os seus documentos.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-bold text-xl">
              Residência
            </h3>

            <p className="mt-3 text-gray-600">
              Informações claras sobre AIMA e processos de residência.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-bold text-xl">
              Profissionais
            </h3>

            <p className="mt-3 text-gray-600">
              Encontre advogados, contabilistas e consultores.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}