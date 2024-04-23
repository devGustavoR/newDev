'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { slideInFromLeft } from '../../../utils/motion'
import logoLight from '../assets/logoLight.png'

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="flex justify-between items-center fixed z-[100] bg-gray-900 font-alt  w-[100%]"
      >
        <motion.a
          variants={slideInFromLeft(7)}
          href="https://github.com/devGustavoR"
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <Image src={logoLight} width={100} height={100} alt="devGustavoR" />
        </motion.a>

        <div className="flex justify-center items-center max-lg:hidden">
          <ul className="flex justify-center gap-9 items-center mr-4">
            <li>
              <Link
                href="#Sobre"
                className="font-display hover:text-brown-250 flex justify-center items-center"
                scroll={true}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="#Habilidades"
                className="font-display hover:text-brown-250"
                scroll={true}
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                href="#Qualificacoes"
                className="font-display hover:text-brown-250"
                scroll={true}
              >
                Qualificações
              </Link>
            </li>
            <li>
              <Link
                href="#Contatos"
                className="font-display hover:text-brown-250"
                scroll={true}
              >
                Contatos
              </Link>
            </li>
          </ul>
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
          {/*  */}
          <div className="flex justify-center items-center mt-[25%]">
            <ul className="flex justify-center gap-9 items-center flex-col">
              <li>
                <Link
                  href="#Sobre"
                  className="font-display hover:text-blue-800 text-gray-600 text-xl"
                  scroll={true}
                  onClick={handleNav}
                >
                  Sobre
                </Link>
              </li>

              <li>
                <Link
                  href="#Habilidades"
                  className="font-display hover:text-blue-800 text-gray-600 text-xl"
                  scroll={true}
                  onClick={handleNav}
                >
                  Habilidades
                </Link>
              </li>

              <li>
                <Link
                  href="#Qualificacoes"
                  className="font-display hover:text-blue-800 text-gray-600 text-xl"
                  scroll={true}
                  onClick={handleNav}
                >
                  Qualificações
                </Link>
              </li>

              <li>
                <Link
                  href="#Contatos"
                  className="font-display hover:text-blue-800 text-gray-600 text-xl"
                  scroll={true}
                  onClick={handleNav}
                >
                  Contatos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  )
}
