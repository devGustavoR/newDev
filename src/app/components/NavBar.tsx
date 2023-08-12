import Image from "next/image";
import Link from "next/link";
import logoLight from "../assets/logoLight.png";

export function NavBar() {
  return (
    <>
      {/* Falta só fazer a parte Mobile do NavBar */}
      <nav className="flex justify-between gap-1">
        <a href="https://github.com/devGustavoR" target="_blank">
          <Image src={logoLight} width={80} height={80} alt="devGustavoR" />
        </a>

        <div>
          <ul className="flex justify-center gap-12 items-center pt-5 pr-5">
            <li>
              <Link href="#" className="hover:text-brown-400">
                Home
              </Link>
            </li>
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
              <a href="" className="hover:text-brown-400">
                Habilidades
              </a>
            </li>
            <li>
              <a href="" className="hover:text-brown-400">
                Qualificações
              </a>
            </li>
            <li>
              <a href="" className="hover:text-brown-400">
                Contatos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
