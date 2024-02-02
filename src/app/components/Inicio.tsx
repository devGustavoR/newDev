'use client'

export function Inicio() {
  return (
    <>
      <div
        id="pageHome"
        className="section flex justify-center items-center flex-col"
      >
        <div className="flex justify-center items-center flex-col">
          <h2 className="mr-2 text-2xl">Hello, I'm</h2>
          <h2 className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 text-brown-400 cursor-pointer hover:text-brown-300 text-2xl">
            Gustavo
          </h2>
        </div>
      </div>
      <div>
        <p>devgustavor@gmail.com</p>
      </div>
    </>
  )
}
