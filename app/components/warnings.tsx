import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";

const Warnings = () => {
  return (
    <div className="flex-1 hidden xl:flex">
      <div className="flex flex-col gap-4 p-4">
        <h2 className="text-lg font-semibold text-gray-600">Avisos</h2>

        <div className="flex items-center w-full gap-4 p-4 bg-red-100 text-red-500 border border-red-200 rounded-xl relative">
          <FaTimes size={30} className="absolute -top-3 -left-3 bg-red-500 p-2 text-white rounded-full" />

          <div className="flex flex-col">
            <span>Você possui documentos necessários pendentes!</span>

            <div className="text-sm">
              <Link href="/portal/acervo" className="font-semibold">
                Clique aqui
              </Link>{" "}
              <span>para enviar os documentos pendentes agora.</span>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full gap-4 p-4 bg-neutral-100 text-gray-500 border rounded-xl relative">
          <IoMdInformationCircle
            size={36}
            className="absolute -top-4 -left-4"
          />

          <div className="flex flex-col">
            <span>Você possui documentos pendentes!</span>

            <div className="text-sm">
              <Link href="/portal/acervo" className="font-semibold">
                Clique aqui
              </Link>{" "}
              <span>para enviar os documentos pendentes.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warnings;
