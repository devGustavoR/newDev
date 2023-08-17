import Image from 'next/image'
import myPicture from '../assets/myPicture.jpg'

export function Sobre() {
  return (
    <>
      <section id="Sobre" className="section">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-xl font-sans absolute left-[47%] text-center ">
            About me
          </h1>
          <h1 className="text-9xl left-2 font-sans relative text-gray-500 font-black opacity-10">
            About
          </h1>
        </div>
        <div className="flex justify-center items-center">
          {/*   Lado esquerdo */}
          <div className="px-28 py-16">
            <div className="w-[300px] h-[400px] bg-gray-500 ml-2 absolute rounded"></div>
            <Image
              className="ml-2 relative top-10 left-10 rounded"
              src={myPicture}
              width={1200}
              height={1200}
              alt="My Picture"
            />
          </div>

          {/* Lado Direito */}
          <div className="flex flex-col p-16">
            {/*   */}
            <div className="mb-5 flex items-center">
              <h2 className="justify-items-end text-xl">My name is</h2>
              <div className="left-2">
                <div className="w-16 h-3  bg-brown-300 absolute mt-[14px] rounded-md opacity-40"></div>
                <h1 className="font-bold text-xl tracking-normal font-alt relative left-2">
                  Gustavo
                </h1>
              </div>
            </div>

            <div>
              <p className="text-justify font-sans mb-4 tracking-wide	">
                Sou um Desenvolvedor Front-end apaixonado pela arte de criar
                interfaces web atraentes e interativas. Minha jornada na
                programação começou quando percebi a capacidade de dar vida a
                ideias criativas por meio do código. A busca incessante por
                aprimoramento técnico me levou a evoluir para um Desenvolvedor
                Full-stack. Hoje, minha missão é unir a estética visual à
                funcionalidade sólida, criando projetos completos que
                proporcionem experiências digitais verdadeiramente memoráveis.{' '}
              </p>
              <p className="text-justify font-sans tracking-wide">
                Comecei como Desenvolvedor Front-end, onde descobri minha paixão
                por transformar conceitos em interfaces web envolventes. Essa
                paixão me motivou a expandir minhas habilidades e me tornar um
                Desenvolvedor Full-stack versátil. Atualmente, estou
                comprometido em harmonizar a criatividade do design com a
                solidez do desenvolvimento, criando projetos abrangentes que
                deixam uma marca duradoura por meio de experiências digitais
                excepcionais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
