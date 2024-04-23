'use client'
import { TypeAnimation } from 'react-type-animation'

export function Inicio() {
  return (
    <div id="Home" className="section">
      <div className="flex justify-center items-center flex-col">
        <p className="mr-72 font-extralight">I am</p>
        <h1 className="text-7xl font-black uppercase ">Gustavo</h1>

        <TypeAnimation
          sequence={[
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
          className="ml-64 transition ease-in-out delay-100  text-brown-250 text-lg mt-[-5px] font-extralight"
        />
      </div>
    </div>
  )
}
