import Link from "next/link";

import { ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default async function HomePage() {
  return (
    <main className="max-w-7xl mx-auto py-16 px-4 lg:px-8 space-y-8">
      <section>
        <h3 className="md:text-lg font-medium">Portal do Aluno</h3>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-balance">
          Faculdade de Americana
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mt-4">
          Acesse o portal do aluno para visualizar todas as informações sobre a
          sua graduação.
        </p>
      </section>

      <section className="flex flex-col md:flex-row md:items-center gap-4">
        <Button variant="outline" asChild>
          <Link href="/dashboard">
            acessar o portal <ChevronRightIcon />
          </Link>
        </Button>

        <Button variant="link" asChild>
          <Link href="/news">
            ver notícias <ChevronRightIcon />
          </Link>
        </Button>
      </section>
    </main>
  );
}
