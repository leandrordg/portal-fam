import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FAM | Portal do Aluno",
  description:
    "Acesse o portal para visualizar todas as informações sobre o seu curso",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <body className={`${inter.className}`}>
          <NextTopLoader color="#0E2E7C" showSpinner={false} />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
