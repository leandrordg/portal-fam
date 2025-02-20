import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import {
  LogInIcon,
  LogOutIcon,
  PhoneIcon,
  SettingsIcon,
  UserRoundIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export async function AuthMenu() {
  const user = await currentUser();

  if (!user) {
    return (
      <SignInButton mode="modal">
        <Button>
          fazer login <LogInIcon />
        </Button>
      </SignInButton>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <UserRoundIcon />
          <span className="sr-only">Menu de usuário</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="px-2.5 py-1.5">
          <p className="text-sm font-medium tracking-tight">{user.fullName}</p>
          <p className="text-xs text-muted-foreground">
            {user.primaryEmailAddress?.emailAddress}
          </p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/account">
            <UserRoundIcon />
            Minha conta
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/account/settings">
            <SettingsIcon />
            Configurações
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/support">
            <PhoneIcon />
            Suporte
          </Link>
        </DropdownMenuItem>
        <SignOutButton>
          <DropdownMenuItem>
            <LogOutIcon /> Desconectar
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
