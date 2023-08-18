import Image from 'next/image'
import myPicture from '../assets/myPicture.jpg'

export function Sobre() {
  return (
    <>
      <section id="Sobre" className="section">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-2xl font-sans absolute left-[47%] mt-6 text-center font-black ">
            About me
          </h1>
          <h1 className="text-9xl left-2 font-sans relative text-gray-500 font-black opacity-10 ">
            About
          </h1>
        </div>
        <div className="flex justify-center items-center">
          {/*   Lado esquerdo */}
          <div className="px-28 py-16">
            <div className="w-[373px] h-[480px] border-2 border-gray-500 ml-2 absolute rounded-xl"></div>
            <Image
              className="ml-2 relative top-10 left-10 rounded-xl"
              src={myPicture}
              width={1380}
              height={1380}
              alt="My Picture"
            />
          </div>

          {/* Lado Direito */}
          <div className="flex flex-col p-14">
            {/*   */}
            <div className="mb-5 flex items-center">
              <h2 className="justify-items-end text-xl">My name is</h2>
              <div className="left-2">
                <div className="w-20 h-2  bg-brown-300 absolute mt-[16px] ml-2 rounded-md opacity-20"></div>
                <h1 className="font-bold text-xl tracking-normal font-alt relative left-2	">
                  Gustavo
                </h1>
              </div>
            </div>

            <div className="flex flex-col items-center">
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
                excepcionais.{' '}
              </p>

              <div className="flex justify-center items-center mt-4">
                <div className="flex flex-col items-center justify-center p-2">
                  <div className="border-gray-300 border-solid border rounded-full w-16 h-16 flex justify-center items-center mb-2 ">
                    <h2 className="text-brown-400 text-lg ">3</h2>
                  </div>
                  <p className="text-center leading-relaxed w-64 mr-4">
                    Projetos concluídos no curso de DS
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="border-gray-300 border-solid border rounded-full w-16 h-16 flex justify-center items-center mb-2 ">
                    <h2 className="text-brown-400 text-lg ">2</h2>
                  </div>
                  <p className="text-center leading-relaxed w-64 mr-4">
                    Conclusão do curso de desenvolvimento de sistema
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="border-gray-300 border-solid border rounded-full w-16 h-16 flex justify-center items-center mb-2 ">
                    <h2 className="text-brown-400 text-lg ">4</h2>
                  </div>
                  <p className="text-center leading-relaxed w-64 mr-4">
                    Projetos pessoais concluídos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
