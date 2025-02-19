import Image from "next/image";
import Link from "next/link";

import { AuthMenu } from "@/components/auth-menu";

export async function Header() {
  return (
    <header className="border-b">
      <div className="flex items-center gap-4 max-w-7xl mx-auto p-4 md:px-8">
        <Link href="/">
          <div className="relative size-8 rounded-lg overflow-clip">
            <Image
              src="/images/logo-square.png"
              alt="Faculdade de Americana"
              className="object-cover bg-muted"
              fill
            />
          </div>
        </Link>

        <div className="flex items-center gap-4 ml-auto">
          <AuthMenu />
        </div>
      </div>
    </header>
  );
}
