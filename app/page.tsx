import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ChevronRightIcon, LogInIcon } from "lucide-react";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto p-4 lg:p-8 space-y-8">
      <section>
        <h3 className="text-lg font-medium">Portal do Aluno</h3>
        <h1 className="text-4xl font-bold tracking-tighter">
          Faculdade de Americana
        </h1>
        <p className="text-muted-foreground mt-4">
          Acesse o portal do aluno para visualizar todas as informações sobre a
          sua graduação.
        </p>
      </section>

      <section className="flex flex-col md:flex-row md:items-center gap-4">
        <Button variant="outline" asChild>
          <Link href="/acessar">
            Acessar <LogInIcon />
          </Link>
        </Button>

        <Button variant="link" asChild>
          <Link href="/noticias">
            Ver notícias <ChevronRightIcon />
          </Link>
        </Button>
      </section>
    </main>
  );
}
