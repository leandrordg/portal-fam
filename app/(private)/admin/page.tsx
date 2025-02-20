import { Suspense } from "react";

import { HydrateClient, trpc } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";

import { AdminPageClient } from "./client";

export default async function AdminPage() {
  void trpc.hello.prefetch({ text: "Leandro" });

  return (
    <HydrateClient>
      <Suspense fallback="Loading...">
        <ErrorBoundary fallback="Ocorreu algum erro!">
          <AdminPageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
