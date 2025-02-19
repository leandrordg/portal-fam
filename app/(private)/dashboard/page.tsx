import { notFound } from "next/navigation";

import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) return notFound();

  return (
    <main className="max-w-7xl mx-auto py-16 px-4 lg:px-8 space-y-8">
      <section>
        <h3 className="md:text-lg font-medium">Dashboard</h3>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-balance">
          Olá, {user.fullName}
        </h1>
      </section>
    </main>
  );
}
