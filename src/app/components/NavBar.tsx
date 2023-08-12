import Image from "next/image";
import logoLight from "../assets/logoLight.png";

export function NavBar() {
  return (
    <>
      <nav className="flex justify-between gap-1 p-3">
        <a href="https://github.com/devGustavoR" target="_blank">
          <Image src={logoLight} width={80} height={80} alt="devGustavoR" />
        </a>

        <div>
          <ul className="flex justify-between gap-12">
            <li>
              <a href="" className="font-mono">
                Home
              </a>
            </li>
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Habilidades</a>
            </li>
            <li>
              <a href="">Qualificações</a>
            </li>
            <li>
              <a href="">Contatos</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
