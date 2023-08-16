import Image from "next/image";
import myPicture from "../assets/myPicture.jpg";

export function Sobre() {
  return (
    <section id="Sobre" className="section">
      {/*   Lado esqeurdo */}
      <div className="px-28 py-16">
        <div className="w-[300px] h-[350px] bg-gray-500 ml-2 absolute rounded-2xl"></div>
        <Image
          className="ml-2 relative top-10 left-10 rounded-2xl"
          src={myPicture}
          width={850}
          height={850}
          alt="My Picture"
        />
      </div>

      {/* Lado Direito */}
      <div className="flex flex-col p-16">
        {/*   */}
        <div className="mb-5 flex flex-col ">
          <h2 className="justify-items-end text-xl left-2">who am i</h2>
          <div>
            <div className="w-32 h-5  bg-brown-300 absolute mt-5 rounded-md opacity-40"></div>
            <h1 className="font-bold text-5xl tracking-normal font-alt relative">
              HELLO
            </h1>
          </div>
        </div>

        <div>
          <p className="text-justify font-sans">
            Sou um Desenvolvedor Front-end com experiência em criação de
            interfaces atraentes e interativas para web. Minha paixão por
            programação começou quando descobri a habilidade de dar vida a
            ideias criativas por meio de códigos. Hoje, estou em constante busca
            por aprimoramento técnico para poder desenvolver projetos completos
            e complexos, atuando também como desenvolvedor full-stack.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
