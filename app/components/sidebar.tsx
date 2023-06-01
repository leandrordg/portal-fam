import Image from "next/image";
import Link from "next/link";

const sidebarLinks = [
  { nome: "Início", href: "/" },
  { nome: "Login", href: "/login" },
  { nome: "Cadastro", href: "/cadastro" },
  { nome: "Acervo Digital", href: "/acervo" },
  { nome: "Biblioteca", href: "/biblioteca" },
  { nome: "Atividade Complementar", href: "/atividade" },
  { nome: "Calendário de Provas", href: "/calendario" },
  { nome: "E-mail institucional", href: "/institucional" },
  { nome: "Emissão de Boletos", href: "/boletos" },
  { nome: "Estacionamento", href: "/estacionamento" },
  { nome: "Eventos", href: "/eventos" },
  { nome: "Faltas", href: "/faltas" },
  { nome: "Notas", href: "/notas" },
  { nome: "Gabaritos", href: "/gabaritos" },
  { nome: "Horários", href: "/horarios" },
  { nome: "Plano de Ensino", href: "/plano-ensino" },
  { nome: "Requerimentos", href: "/requerimentos" },
  { nome: "Tutoriais", href: "/tutoriais" },
];

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col flex-1">
      <div className="flex flex-col text-center items-center gap-4 p-4">
        <Image
          src="/eu.jpg"
          alt="Eu"
          width={1920}
          height={1080}
          className="min-w-[64px] min-h-[64px] w-16 h-16 object-cover rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-lg">Leandro Rodrigues Bertalhia</span>

          <span className="text-gray-500 text-sm">
            Turma: <span className="text-black">57-01-A</span>
          </span>
          <span className="text-gray-500 text-sm">
            Localização: <span className="text-black">Sala 71 - Bloco 2</span>
          </span>
        </div>
      </div>

      <nav className="my-4 flex flex-col w-full">
        {sidebarLinks.map((link) => (
          <Link href={link.href} key={link.href} className="sidebarLink">
            {link.nome}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
