import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-[#0E2E7C]">
      <div className="max-w-7xl mx-auto p-4 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* 1 coluna */}
        <div className="flex items-center justify-center">
        {/* Fam Logo */}
          <img
            className="max-w-[200px] invert"
            src="/fam.svg"
            alt="Logo da Fam"
          />
        </div>
        
        {/* 2 coluna */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-2 items-start">
            <div className="flex items-start gap-2 text-white">
              <GrMail size={20} />
              <div className="flex flex-col">
                <span>nicom@fam.br</span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-white">
              <FaPhoneAlt size={20} />
              <div className="flex flex-col">
                <span>(19) 3465-8100</span>
                <span>0800 771 2449</span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-white">
              <FaWhatsapp size={20} />
              <span>(19) 99437-9555</span>
            </div>
          </div>
        </div>

      {/* 3 coluna */}
      <div className="flex items-start gap-2 justify-center text-white  ">
        <MdLocationOn size={20} />
        <div className="flex flex-col gap-1">
          <span>Av. Joaquim Boer, 733</span>
          <span>Jardim Luciene, 13477-360</span>
          <span>Americana, SP</span>
        </div>
      </div>
    

      {/* 4 coluna */}
      <div className="flex flex-col gap-2 items-center ">
        <div className="flex gap-6">
          <div className="flex items-center justify-center text-white gap-4">
            <FaLinkedinIn size={30} />
            <FiInstagram size={30} />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center justify-center text-white gap-4">
            <FaFacebookF size={30} />
            <FaYoutube size={30} />
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
