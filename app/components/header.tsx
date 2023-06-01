import Image from "next/image";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-[#0E2E7C] shadow z-50">
      <div className="p-4 flex md:justify-between items-center gap-4 relative">
        {/* Fam Logo */}
        <Link href="https://fam.br">
          <Image
            src="/fam.svg"
            alt="Fam Logo"
            width={1920}
            height={1080}
            className="max-w-[80px] md:max-w-[120px] w-full invert"
          />
        </Link>

        <h1 className="md:text-2xl xl:text-4xl text-white">Portal Acadêmico</h1>

        <div className="flex items-center gap-2 ml-auto md:hidden">
          <IoMenuOutline size={26} color="#fff"/>
          <span className="sr-only">Abrir menu</span>
        </div>

        <Link
          href="/suporte"
          className="flex items-center gap-2 text-white"
        >
          <span className="hidden md:block">Suporte</span>
          <BiSupport size={20} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
