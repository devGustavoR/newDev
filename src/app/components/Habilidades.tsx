import Image from 'next/image'
import react from '../assets/Skills/react.svg'

export function Habilidades() {
  return (
    <div id="Habilidades" className="section">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-2xl font-sans absolute left-[47%] mt-6 text-center font-black">
          Skills
        </h1>
        <h1 className="text-9xl left-2 font-sans relative text-gray-500 font-black opacity-10">
          Skills
        </h1>
      </div>
      <div className="flex justify-center items-center p-16 flex-col border-2 border-brown-500 shadow-lg shadow-brown-500/50 rounded-lg">
        <h2 className="leading-relaxed font-bold uppercase	">Frontend</h2>
        <div className="mt-3 flex justify-center items-center p-2 border-2 border-brown-300 rounded-lg ">
          <Image src={react} width={50} height={50} alt="react" />
          <p>React</p>
        </div>
      </div>
    </div>
  )
}
