import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import Welcome from "@/components/dashboard/Welcome";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <section className="flex flex-1 flex-col">
        <Header />

        <div className="flex-1 p-8">
          <Welcome />
        </div>
      </section>
    </main>
  );
}