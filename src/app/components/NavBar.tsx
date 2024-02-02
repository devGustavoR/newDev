'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import logoLight from '../assets/logoLight.png'

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <nav className="flex justify-between items-center fixed z-[100] bg-gray-900 font-alt shadow-md shadow-brown-50/5  w-[100%]">
        <a
          href="https://github.com/devGustavoR"
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <Image src={logoLight} width={80} height={80} alt="devGustavoR" />
        </a>

        <div className="flex justify-center items-center max-lg:hidden">
          <ul className="flex justify-center gap-9 items-center">
            <li>
              <Link
                href="#Sobre"
                className="font-display hover:text-brown-400 flex justify-center items-center"
                scroll={true}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="#Habilidades"
                className="font-display hover:text-brown-400"
                scroll={true}
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                href="#Qualificacoes"
                className="font-display hover:text-brown-400"
                scroll={true}
              >
                Qualificações
              </Link>
            </li>
            <li>
              <Link
                href="#Contatos"
                className="font-display hover:text-brown-400"
                scroll={true}
              >
                Contatos
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center gap-4  pr-3 max-lg:hidden">
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

        {/* Menu */}
        <div
          className={
            menuOpen
              ? 'max-lg:hidden'
              : 'flex-col mr-3 hidden max-lg:flex cursor-pointer'
          }
          onClick={handleNav}
        >
          <i className="bg-white w-7 h-1 rounded-sm"></i>
          <i className="bg-white w-7 h-1 rounded-sm mt-1"></i>
          <i className="bg-white w-7 h-1 rounded-sm mt-1"></i>
        </div>

        <div
          className={
            menuOpen
              ? 'fixed right-0 top-0 w-[100%] hidden h-screen bg-gray-50 p-10 ease-in duration-500 max-lg:flex max-lg:flex-col'
              : 'fixed right-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div
            className="max-lg:flex max-lg:flex-col max-lg:ml-[100%]"
            onClick={handleNav}
          >
            <i className="bg-gray-600 w-8 h-1 rounded rotate-45 max-lg:cursor-pointer"></i>
            <i className="bg-gray-600 w-8 h-1 rounded -rotate-45 -translate-y-1 max-lg:cursor-pointer"></i>
          </div>
          <div className="flex justify-center items-center mt-[25%]">
            <ul className="flex justify-center gap-9 items-center flex-col">
              <li>
                <Link
                  href="#Sobre"
                  className="font-display hover:text-brown-400 text-gray-600 text-xl"
                  scroll={true}
                  onClick={handleNav}
                >
                  Sobre
                </Link>
              </li>

              <li>
                <Link
                  href="#Habilidades"
                  className="font-display hover:text-brown-400 text-gray-600 text-xl"
                  scroll={true}
                  onClick={handleNav}
                >
                  Habilidades
                </Link>
              </li>

              <li>
                <Link
                  href="#Qualificacoes"
                  className="font-display hover:text-brown-400 text-gray-600 text-xl"
                  scroll={true}
                  onClick={handleNav}
                >
                  Qualificações
                </Link>
              </li>

              <li>
                <Link
                  href="#Contatos"
                  className="font-display hover:text-brown-400 text-gray-600 text-xl"
                  scroll={true}
                  onClick={handleNav}
                >
                  Contatos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
