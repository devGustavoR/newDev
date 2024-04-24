import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'

export function RedesSociais() {
  return (
    <div className="fixed top-[85%] ml-7 flex flex-col items-center justify-center max-lg:hidden">
      <Link href="https://github.com/devGustavoR">
        <AiFillGithub className="mb-3 h-6 w-6 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-brown-250 " />
      </Link>
      <Link href="https://www.linkedin.com/in/devgustavor/">
        <AiFillLinkedin className="mb-3 h-6 w-6 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-brown-250" />
      </Link>
      <Link href="https://www.instagram.com/g_ribeir_/">
        <BsInstagram className="mb-3 h-6 w-6 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-brown-250" />
      </Link>
      <Link href="https://www.instagram.com/g_ribeir_/">
        <FaTwitter className="mb-3 h-6 w-6 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-brown-250" />
      </Link>
    </div>
  )
}
