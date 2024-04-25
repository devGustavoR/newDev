'use client'
import { CircularProgress } from '@nextui-org/react'

export function Habilidades() {
  return (
    <div id="Habilidades" className="section">
      <div className="mb-4 flex flex-col items-center justify-center">
        <h1 className="absolute  mt-6 text-center font-sans text-2xl font-black">
          Skills
        </h1>
        <h1 className="relative left-2 font-sans text-9xl font-black text-gray-400 opacity-10">
          Skills
        </h1>
      </div>

      <div className="items-center justify-center pb-0">
        <CircularProgress
          classNames={{
            svg: 'w-16 h-16 drop-shadow-md',
            indicator: 'stroke-brown-250',
            track: 'stroke-white/5',
            value: 'text-xl font-normal text-brown-250',
          }}
          value={85}
          strokeWidth={2}
          showValueLabel={false}
        />
      </div>
      {/* <Circle
        percent={85}
        strokeWidth={7}
        strokeColor="#B76E2D"
        className="h-16 w-16"
      />
      <FaHtml5 className="absolute mb-6 h-8 w-8" /> */}
    </div>
  )
}
