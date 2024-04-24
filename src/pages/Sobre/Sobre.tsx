// import myPicture from '../assets/myPicture.jpg'
'use client'

import { useState } from 'react'

import { Bandeira } from './components/Bandeira'
import { MudaIdioma } from './components/MudaIdioma'
import { TextAboutMe } from './components/textAboutMe'

export function Sobre() {
  const [bandeira, setBandeira] = useState(false)

  const handleBandeira = () => {
    setBandeira(!bandeira)
  }

  return (
    <>
      <section id="Sobre" className="section">
        <div className="flex flex-col items-center justify-center ">
          <p className="absolute mb-4 mr-[25%] text-center font-sans text-xl font-extralight text-brown-250">
            About me
          </p>
          <h1 className="absolute mb-4 mr-[15.5%] mt-12 text-center font-sans text-2xl font-black uppercase ">
            Welcome to my job
          </h1>
          <h1 className="relative left-2 font-sans text-9xl font-black uppercase text-gray-400 opacity-10 max-lg:text-center">
            About me
          </h1>
        </div>

        <div className="mt-8 flex items-center justify-center max-lg:flex-col">
          <div className="flex w-[50%] items-center justify-center">
            <p>Imagem</p>
          </div>

          <div className="ml-6 mr-6 w-[50%]">
            <div className="flex">
              <h1 className="mr-4 text-lg font-semibold">
                I`m Gustavo Ribeiro
              </h1>
              <div
                className="flex cursor-pointer items-center"
                onClick={handleBandeira}
              >
                <Bandeira bandeira={bandeira} />
                <MudaIdioma bandeira={bandeira} />
              </div>
            </div>
            <p className="mt-[-8px] text-base font-light text-brown-250">
              Front-end Developer
            </p>
            <TextAboutMe bandeira={bandeira} />
          </div>
        </div>
      </section>
    </>
  )
}
