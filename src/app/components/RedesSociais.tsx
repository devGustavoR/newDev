import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'

export function RedesSociais() {
  return (
    <div className="flex justify-center items-center flex-col fixed top-[85%] ml-7 max-lg:hidden">
      <Link href="https://github.com/devGustavoR">
        <AiFillGithub className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-brown-250 duration-300 w-6 h-6 mb-3 " />
      </Link>
      <Link href="https://www.linkedin.com/in/devgustavor/">
        <AiFillLinkedin className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-brown-250 duration-300 w-6 h-6 mb-3" />
      </Link>
      <Link href="https://www.instagram.com/g_ribeir_/">
        <BsInstagram className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-brown-250 duration-300 w-6 h-6 mb-3" />
      </Link>
      <Link href="https://www.instagram.com/g_ribeir_/">
        <FaTwitter className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-brown-250 duration-300 w-6 h-6 mb-3" />
      </Link>
    </div>
  )
}
