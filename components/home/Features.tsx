import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import {
  FileText,
  Briefcase,
  Building2,
  ShieldCheck,
  Scale,
  HeartPulse,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "NIF e NISS",
    description: "Aprenda passo a passo como obter os seus documentos.",
  },
  {
    icon: Building2,
    title: "AIMA",
    description: "Guias completos sobre residência e legalização.",
  },
  {
    icon: Briefcase,
    title: "Trabalho",
    description: "Direitos, contratos e procura de emprego.",
  },
  {
    icon: Scale,
    title: "IRS",
    description: "Entenda as obrigações fiscais em Portugal.",
  },
  {
    icon: HeartPulse,
    title: "Saúde",
    description: "SNS, centros de saúde e acesso a cuidados médicos.",
  },
  {
    icon: ShieldCheck,
    title: "Profissionais",
    description: "Encontre advogados, contabilistas e consultores.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">

        <SectionTitle
          badge="Tudo num só lugar"
          title="Como a MigraIA pode ajudar"
          subtitle="Toda a informação essencial para viver e trabalhar em Portugal."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.title}>
                <Icon className="mb-5 h-10 w-10 text-blue-600" />

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {service.description}
                </p>
              </Card>
            );
          })}

        </div>

      </div>
    </section>
  );
}