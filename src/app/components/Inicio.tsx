'use client'

export function Inicio() {
  return (
    <>
      <div
        id="pageHome"
        className="section flex justify-center items-center flex-col"
      >
        {/* Adicione o seu memoji aqui */}
        {/* Elabore o fundo do seu site */}
        <div className="flex justify-center items-center flex-col">
          <h2 className="mr-2 text-2xl">Hello, I'm</h2>
          <h2 className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 text-blue-800 cursor-pointer hover:text-blue-800 text-2xl">
            Gustavo
          </h2>
        </div>
        <div className="mt-2 p-4 rounded bg-blue-800 hover:bg-blue-700 cursor-pointer">
          <p>devgustavor@gmail.com</p>
          {/* Troque a fonte desse texto */}
          {/* Adicione o icone de copiar */}
        </div>
      </div>
    </>
  )
}
