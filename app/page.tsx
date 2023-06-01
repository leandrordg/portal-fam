import Image from "next/image";
import Link from "next/link";
import Footer from "./components/footer";
import Header from "./components/header";

const Home = () => {
  return (
    <section className="flex flex-col">
      <div className="bg-white">
        <div className="flex items-center min-h-[60vh] md:items-start justify-center flex-col w-full p-4 max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-700">Fazer login</h1>
          <p className="text-sm text-center text-gray-500">
            Preencha os campos abaixo para obter acesso ao portal!
          </p>

          <form className="flex flex-col w-full mt-10 gap-4">
            <input
              type="text"
              placeholder="Digite seu CPF"
              className="p-2 border rounded-md outline-none"
            />
            <input
              type="password"
              placeholder="Sua senha"
              className="p-2 border rounded-md outline-none"
            />

            <Link
              href={"/portal"}
              className="text-sm p-2 bg-[#FFDE2B] rounded-md text-center"
            >
              Entrar
            </Link>

            <Link
              href="/redefinir"
              className="text-blue-600 text-sm text-center md:text-left"
            >
              Esqueci minha senha
            </Link>
          </form>
        </div>
      </div>

      <div className="bg-gray-50/50">
        <div className="flex flex-col w-full max-w-4xl mx-auto items-center md:items-start p-4 py-10">
          <h2 className="text-2xl font-semibold text-gray-700">Avisos</h2>
          <p className="text-gray-500 text-sm text-center">
            Fique ligado para os avisos recentes por aqui!
          </p>

          <div className="flex flex-col gap-8 mt-8">
            <Image
              src="https://www.famportal.com.br/fam/3rd/htmled/ltools/uploads/primeiro_acesso.png"
              alt="Aviso 1"
              width={1920}
              height={1080}
              className="p-2 shadow rounded-xl bg-neutral-200"
            />
            <Image
              src="https://www.famportal.com.br/fam/3rd/htmled/ltools/uploads/banner_qrcode.jpg"
              alt="Aviso 1"
              width={1920}
              height={1080}
              className="p-2 shadow rounded-xl bg-neutral-200"
            />
            <Image
              src="https://www.famportal.com.br/fam/3rd/htmled/ltools/uploads/comunicado_cfa.png"
              alt="Aviso 1"
              width={1920}
              height={1080}
              className="p-2 shadow rounded-xl bg-neutral-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
