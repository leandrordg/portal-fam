import Image from "next/image";
import SidebarLink from "./sidebarLink";

const sidebarLinks = [
  { name: "Início", href: "/portal" },
  { name: "Login", href: "/portal/login" },
  { name: "Cadastro", href: "/portal/cadastro" },
  { name: "Acervo Digital", href: "/portal/acervo" },
  { name: "Biblioteca", href: "/portal/biblioteca" },
  { name: "Atividade Complementar", href: "/portal/atividade" },
  { name: "Calendário de Provas", href: "/portal/calendario-provas" },
  { name: "E-mail institucional", href: "/portal/institucional" },
  { name: "Emissão de Boletos", href: "/portal/emissao-boletos" },
  { name: "Estacionamento", href: "/portal/estacionamento" },
  { name: "Eventos", href: "/portal/eventos" },
  { name: "Faltas", href: "/portal/faltas" },
  { name: "Notas", href: "/portal/notas" },
  { name: "Gabaritos", href: "/portal/gabaritos" },
  { name: "Horários", href: "/portal/horarios" },
  { name: "Plano de Ensino", href: "/portal/plano-ensino" },
  { name: "Requerimentos", href: "/portal/requerimentos" },
  { name: "Tutoriais", href: "/portal/tutoriais" },
];

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col flex-1 max-w-[350px] sticky top-20">
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
          <SidebarLink key={link.href} href={link.href} name={link.name} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
