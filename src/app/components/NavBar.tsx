import Image from "next/image";
import Link from "next/link";
import logoLight from "../assets/logoLight.png";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

export function NavBar() {
  return (
    <>
      {/* Falta só fazer a parte Mobile do NavBar */}
      <nav className="flex justify-between gap-1 justify-center items-center">
        <a href="https://github.com/devGustavoR" target="_blank">
          <Image src={logoLight} width={80} height={80} alt="devGustavoR" />
        </a>

        <div>
          <ul className="flex justify-center gap-9 items-center left-[50%] right-[50%]">
            {/* <li>
              <Link href="#" className="hover:text-brown-400">
                Home
              </Link>
            </li> */}
            <li>
              <Link
                href="#Sobre"
                className="hover:text-brown-400"
                scroll={true}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="#Habilidades"
                className="hover:text-brown-400"
                scroll={true}
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                href="#Qualificacoes"
                className="hover:text-brown-400"
                scroll={true}
              >
                Qualificações
              </Link>
            </li>
            <li>
              <Link
                href="#Contatos"
                className="hover:text-brown-400"
                scroll={true}
              >
                Contatos
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center gap-4  pr-5 ">
          <Link href="https://github.com/devGustavoR">
            <AiFillGithub className="w-6 h-6 mb-3" />
          </Link>
          <Link href="https://www.linkedin.com/in/devgustavor/">
            <AiFillLinkedin className="w-6 h-6 mb-3" />
          </Link>
          <Link href="https://www.instagram.com/g_ribeir_/">
            <BsInstagram className="w-6 h-6 mb-3" />
          </Link>

          <Link href="#">
            <AiFillTwitterCircle className="w-6 h-6 mb-3" />
          </Link>
        </div>
      </nav>
    </>
  );
}
