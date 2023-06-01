import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Page = ({ params }: { params: { id: string } }) => {
  const pagina = params.id;

  return (
    <div>
      <div>
        <div className="capitalize flex items-center text-gray-500 mb-2">
          <Link href="/portal">Início</Link>

          <IoIosArrowForward size={20} />

          <span>{pagina.replace('-', ' de ')}</span>
        </div>

        <h2 className="text-2xl font-semibold text-gray-600 capitalize">
          {pagina.replace('-', ' de ')}
        </h2>
      </div>
    </div>
  );
};

export default Page;
