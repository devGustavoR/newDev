import { BiHomeAlt, BiUser } from "react-icons/bi";
import {
  BsBriefcase,
  BsClipboardData,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { Link } from "react-scroll/modules";


export function NavBar() {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w[460px] mx-auto px-5 flex justify-between text-2xl">
          <Link activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={500}
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center text-brown-300 hover:text-brown-400"
          >
            <BiHomeAlt />
          </Link>
          <Link
            activeClass="active" to="/Sobre" spy={true} smooth={true} offset={50} duration={500}
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center text-brown-300 hover:text-brown-400"
          >
            <BiUser />
          </Link>
          <Link
            activeClass="active" to="/Habilidades" spy={true} smooth={true} offset={50} duration={500}
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center text-brown-300 hover:text-brown-400"
          >
            <BsClipboardData />
          </Link>
          <Link
            activeClass="active" to="/Qualificacoes" spy={true} smooth={true} offset={50} duration={500}
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center text-brown-300 hover:text-brown-400"
          >
            <BsBriefcase />
          </Link>
          <Link
            activeClass="active" to="/Contatos" spy={true} smooth={true} offset={50} duration={500}
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center text-brown-300 hover:text-brown-400"
          >
            <BsFillTelephoneFill />
          </Link>
        </div>
      </div>
    </nav>
  );
}
