'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import eu from '../assets/eu.png'

export function Inicio2() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        id="pageHome"
        className="section flex justify-center items-center flex-col"
      >
        {/* Adicione o seu memoji aqui */}
<<<<<<< HEAD:src/app/components/Inicio2.tsx
        <div className=" flex justify-center itens-center mb-4">
          <Image
            className="shadow-2xl shadow-cyan-500/50"
            src={eu}
            width={155}
            height={155}
          />
=======
        <div className="rounded-full p-5 flex justify-center itens-center mb-3">
          <Image src={eu} width={250} height={250} atl="Meu memoji - eu" />
>>>>>>> c95bd6420c3683f3a951db514b3e0e812504c5d4:src/app/components/Inicio.tsx
        </div>
        {/* Elabore o fundo do seu site */}

        <motion.div
          initial={{ rotate: '0deg' } as any}
          animate={{ rotate: '5deg' } as any}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute bg-gray-500 rounded-full right-[22.5rem] p-7 bottom-[13.5rem]"
        >
          <p className="text-2xl">🔥</p>
        </motion.div>
        {/* Profile */}
        <div className="flex justify-center items-center flex-col font-sans font-semibold">
          <h2 className="mr-2 text-4xl font-extrabold">Hello, I'm </h2>
          <TypeAnimation
            sequence={[
              'Gustavo',
              1000,
              'Front-end Developer',
              1000,
              'Mobile Developer',
              1000,
              'Violint',
              1000,
              'Gamer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 text-blue-800 cursor-pointer hover:text-blue-800 text-3xl font-bold"
          />
        </div>

        {/* Scroll Animation */}
        <div className="absolute xs:bottom-10 -bottom-30 w-full flex justify-center items-center">
          <a href="#sobre">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-600 flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-gray-300 mb-1"
              />
            </div>
          </a>
        </div>
      </motion.div>
    </>
  )
}
