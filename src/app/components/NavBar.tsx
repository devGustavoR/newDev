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
        className="font-alt fixed z-[100] flex w-[100%] items-center justify-between  bg-gray-900"
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

        <div className="flex items-center justify-center max-lg:hidden">
          <ul className="mr-4 flex items-center justify-center gap-9">
            <li>
              <Link
                href="#Sobre"
                className="font-display flex items-center justify-center hover:text-brown-250"
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
                href="#Projetos"
                className="font-display hover:text-brown-250"
                scroll={true}
              >
                Projetos
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
              : 'mr-3 hidden cursor-pointer flex-col max-lg:flex'
          }
          onClick={handleNav}
        >
          <i className="h-1 w-7 rounded-sm bg-white"></i>
          <i className="mt-1 h-1 w-7 rounded-sm bg-white"></i>
          <i className="mt-1 h-1 w-7 rounded-sm bg-white"></i>
        </div>

        <div
          className={
            menuOpen
              ? 'fixed right-0 top-0 hidden h-screen w-[100%] bg-gray-50 p-10 duration-500 ease-in max-lg:flex max-lg:flex-col'
              : 'fixed right-[-100%] top-0 p-10 duration-500 ease-in'
          }
        >
          <div
            className="max-lg:ml-[100%] max-lg:flex max-lg:flex-col"
            onClick={handleNav}
          >
            <i className="h-1 w-8 rotate-45 rounded bg-gray-600 max-lg:cursor-pointer"></i>
            <i className="h-1 w-8 -translate-y-1 -rotate-45 rounded bg-gray-600 max-lg:cursor-pointer"></i>
          </div>
          {/*  */}
          <div className="mt-[25%] flex items-center justify-center">
            <ul className="flex flex-col items-center justify-center gap-9">
              <li>
                <Link
                  href="#Sobre"
                  className="font-display text-xl text-gray-600 hover:text-blue-800"
                  scroll={true}
                  onClick={handleNav}
                >
                  Sobre
                </Link>
              </li>

              <li>
                <Link
                  href="#Habilidades"
                  className="font-display text-xl text-gray-600 hover:text-blue-800"
                  scroll={true}
                  onClick={handleNav}
                >
                  Habilidades
                </Link>
              </li>

              <li>
                <Link
                  href="#Qualificacoes"
                  className="font-display text-xl text-gray-600 hover:text-blue-800"
                  scroll={true}
                  onClick={handleNav}
                >
                  Qualificações
                </Link>
              </li>
              <li>
                <Link
                  href="#Projetos"
                  className="font-display hover:text-brown-250"
                  scroll={true}
                >
                  Projetos
                </Link>
              </li>

              <li>
                <Link
                  href="#Contatos"
                  className="font-display text-xl text-gray-600 hover:text-blue-800"
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
