"use client";

import { trpc } from "@/trpc/client";

import { CoursesList } from "@/components/courses-list";

export function AdminPageClient() {
  const [data] = trpc.hello.useSuspenseQuery({ text: "Leandro" });

  return (
    <main className="max-w-7xl mx-auto py-16 px-4 lg:px-8 space-y-8">
      <section>
        <h3 className="md:text-lg font-medium">Administrador</h3>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-balance">
          Bem vindo, {data.greeting}!
        </h1>
      </section>

      <section>
        <CoursesList />
      </section>
    </main>
  );
}
