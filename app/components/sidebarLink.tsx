"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  name: string;
  href: string;
}

const SidebarLink = ({ name, href }: SidebarLinkProps) => {
  const pathname = usePathname();

  if (pathname === href)
    return (
      <Link
        href={href}
        key={href}
        className="px-4 py-2 transition bg-[#0E2E7C] text-white hover:bg-[#173fa5]"
      >
        {name}
      </Link>
    );

  return (
    <Link
      href={href}
      key={href}
      className="px-4 py-2 hover:bg-neutral-100 transition"
    >
      {name}
    </Link>
  );
};

export default SidebarLink;
