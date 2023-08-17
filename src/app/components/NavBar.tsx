import Image from "next/image";
import Link from "next/link";
import logoLight from "../assets/logoLight.png";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

export function NavBar() {
  return (
    <>
      {/* Falta só fazer a parte Mobile do NavBar */}
      <nav className="flex justify-between items-center fixed gap-[544px] z-[100] bg-gray-900">
        <a href="https://github.com/devGustavoR" target="_blank">
          <Image src={logoLight} width={80} height={80} alt="devGustavoR" />
        </a>

        <div className="flex justify-center items-center">
          <ul className="flex justify-center gap-9 items-center">
            {/* <li>
              <Link href="#" className="hover:text-brown-400">
                Home
              </Link>
            </li> */}
            <li>
              <Link
                href="#Sobre"
                className="hover:text-brown-400 font-alt"
                scroll={true}
              >
                ABOUT ME
              </Link>
            </li>
            <li>
              <Link
                href="#Habilidades"
                className="hover:text-brown-400"
                scroll={true}
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                href="#Qualificacoes"
                className="hover:text-brown-400"
                scroll={true}
              >
                QUALIFICATIONS
              </Link>
            </li>
            <li>
              <Link
                href="#Contatos"
                className="hover:text-brown-400"
                scroll={true}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center gap-4  pr-3 ">
          <Link href="https://github.com/devGustavoR">
            <AiFillGithub className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-brown-400 duration-300 w-6 h-6 mb-3 " />
          </Link>
          <Link href="https://www.linkedin.com/in/devgustavor/">
            <AiFillLinkedin className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-brown-400 duration-300 w-6 h-6 mb-3" />
          </Link>
          <Link href="https://www.instagram.com/g_ribeir_/">
            <BsInstagram className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-brown-400 duration-300 w-6 h-6 mb-3" />
          </Link>
        </div>
      </nav>
    </>
  );
}
