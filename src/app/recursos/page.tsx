import { fetchResources } from "@/lib/api"; // Importar la función de API simulada
import ResourceList from "@/components/ResourceList";

export default async function RecursosPage() {
  const resources = await fetchResources();

  return (
    <main className="container mx-auto max-w-7xl px-4 py-16 text-text-light sm:px-6 lg:px-8">
      <header className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-text-muted">Recursos</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Herramientas seleccionadas para impulsar tus proyectos
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          Descarga plantillas, consulta guías estratégicas y accede a utilidades que te ayudan a ejecutar más rápido.
        </p>
      </header>

      <ResourceList resources={resources} />
    </main>
  );
}
