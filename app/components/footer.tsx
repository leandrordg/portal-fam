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

import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-[#0E2E7C]">
			<div className="max-w-7xl mx-auto py-10 md:p-4 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{/* 1 coluna */}
				<div className="flex items-center justify-center">
					{/* Fam Logo */}
					<Link href="https://fam.br">
						<Image
							src="/fam.svg"
							alt="Fam Logo"
							width={1920}
							height={1080}
							className="max-w-[150px] md:max-w-[200px] w-full invert"
						/>
					</Link>
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
					<div className="flex flex-col gap-1 max-w-[220px]">
						<span>
							Av. Joaquim Boer, 733 Jardim Luciene, 13477-360 Americana, SP
						</span>
					</div>
				</div>

				{/* 4 coluna */}
				<div className="flex flex-col gap-2 items-center ">
					<span className="text-white text-lg">
						Nos siga nas redes sociais!
					</span>
					<div className="flex gap-4 text-white">
						<Link
							className="hover:text-[#c5c5c5]"
							target="_blank"
							href={"https://www.linkedin.com/school/famamericana/"}
						>
							<FaLinkedinIn size={32} />
						</Link>

						<Link
							className="hover:text-[#cccccc]"
							target="_blank"
							href={"https://www.instagram.com/famamericana/"}
						>
							<FiInstagram size={32} />
						</Link>

						<Link
							className="hover:text-[#cccccc]"
							target="_blank"
							href={"https://www.facebook.com/famamericana/"}
						>
							<FaFacebookF size={32} />
						</Link>

						<Link
							className="hover:text-[#cccccc]"
							target="_blank"
							href={"https://www.youtube.com/user/famamericana"}
						>
							<FaYoutube size={32} />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
