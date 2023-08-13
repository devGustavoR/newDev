import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

export function RedesSociais() {
  return (
    <div className="flex flex-col justify-center items-center top-[78%] p-3 fixed">
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
  );
}
