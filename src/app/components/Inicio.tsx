'use client'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export function Inicio() {
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
        {/* Elabore o fundo do seu site */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, repeatType: 'loop' }}
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
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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
