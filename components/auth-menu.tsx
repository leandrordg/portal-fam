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
        <DropdownMenuItem>
          <UserRoundIcon />
          Minha conta
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon />
          Configurações
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <PhoneIcon />
          Suporte
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
