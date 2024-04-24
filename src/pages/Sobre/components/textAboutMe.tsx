interface PropsTextAboutMe {
  bandeira: boolean
}

export function TextAboutMe({ bandeira }: PropsTextAboutMe) {
  return (
    <>
      {/* Sobre em Inglês */}
      <p className={bandeira ? 'hidden' : 'mt-3 text-justify'}>
        I am a Front-end Developer with approximately 4 years of experience in
        creating attractive and interactive web interfaces. Every day, I
        dedicate myself to exploring the latest front-end technologies to bring
        designers creative visions to life in the most authentic way possible.
        While I master the use of frameworks, I have a special fondness for
        manual coding, using HTML5, CSS3, and JavaScript to develop my projects.
      </p>
      {/* Sobre em Português */}
      <p className={bandeira ? 'mt-3 text-justify' : 'hidden'}>
        Sou um Desenvolvedor Front-end com cerca de 4 anos de experiência na
        criação de interfaces web atraentes e interativas. Diariamente, me
        dedico a explorar as últimas tecnologias front-end para concretizar as
        visões criativas dos designers da forma mais autêntica possível. Embora
        domine o uso de frameworks, tenho um carinho especial por codificação
        manual, utilizando HTML5, CSS3 e JavaScript para dar vida aos meus
        projetos.
      </p>
      {/* Habilidades Técnicas em Inglês */}
      <h1
        className={
          bandeira ? 'hidden' : 'font-base mt-4 font-bold text-brown-250'
        }
      >
        Technical Skills
      </h1>
      {/* Habilidades Técnicas em Português */}
      <h1
        className={
          bandeira ? 'font-base mt-4 font-bold text-brown-250' : 'hidden'
        }
      >
        Habilidades Técnicas
      </h1>
      {/* Habilidades Técnicas em Inglês */}
      <p className={bandeira ? 'hidden' : 'mt-3 text-justify text-gray-300'}>
        Currently, I am immersed in technologies like NextJS, Tailwind, and
        React Native. Additionally, I am always open and comfortable learning
        new languages and tools, expanding my skill set. In summary, I feel at
        ease with any tool related to JavaScript/TypeScript, HTML, and CSS, and
        I am ready to embrace new technological challenges.
      </p>
      {/* Habilidades Técnicas em Português */}
      <p className={bandeira ? 'mt-3 text-justify text-gray-300' : 'hidden'}>
        Atualmente, estou imerso em tecnologias como NextJS, Tailwind e React
        Native. Além disso, estou sempre aberto e à vontade para aprender novas
        linguagens e ferramentas, ampliando meu conjunto de habilidades. Em
        resumo, sinto-me à vontade com qualquer ferramenta relacionada a
        JavaScript/TypeScript, HTML e CSS, e estou pronto para abraçar novos
        desafios tecnológicos.
      </p>
      {/* Experiência Profissional em Infraestrutura de Redes em Inglês */}
      <h1
        className={
          bandeira ? 'hidden' : 'font-base mt-4 font-bold text-brown-250'
        }
      >
        Professional Experience in Network Infrastructure
      </h1>
      {/* Experiência Profissional em Infraestrutura de Redes em Português */}
      <h1
        className={
          bandeira ? 'font-base mt-4 font-bold text-brown-250' : 'hidden'
        }
      >
        Experiência Profissional em Infraestrutura de Redes
      </h1>
      {/* Experiência Profissional em Infraestrutura de Redes em Inglês */}
      <p className={bandeira ? 'hidden' : 'mt-3 text-justify text-gray-300'}>
        In my role as a technical support specialist in network infrastructure,
        I monitor, diagnose, and resolve network-related issues, ensuring the
        continuous and efficient operation of systems. This experience enriches
        my role as a developer, allowing me to approach challenges
        comprehensively and offer integrated solutions.
      </p>
      {/* Experiência Profissional em Infraestrutura de Redes em Português */}
      <p className={bandeira ? 'mt-3 text-justify text-gray-300' : 'hidden'}>
        No papel de suporte técnico em infraestrutura de redes, monitoro,
        diagnostico e soluciono problemas relacionados à rede, garantindo a
        operação contínua e eficiente dos sistemas. Esta experiência enriquece
        minha atuação como desenvolvedor, permitindo-me enfrentar desafios de
        forma abrangente e oferecer soluções integradas.
      </p>
      {/* Pessoal em Inglês */}
      <h1
        className={
          bandeira ? 'hidden' : 'font-base mt-4 font-bold text-brown-250'
        }
      >
        Personal
      </h1>
      {/* Pessoal em Português */}
      <h1
        className={
          bandeira ? 'font-base mt-4 font-bold text-brown-250' : 'hidden'
        }
      >
        Pessoal
      </h1>
      {/* Pessoal em Inglês */}
      <p className={bandeira ? 'hidden' : 'mt-3 text-justify text-gray-300'}>
        I was born and raised in Salvador, I am Catholic, and I maintain an
        active routine at the gym. I am looking forward to starting martial arts
        training soon. In my leisure time, I am an enthusiast of games,
        especially those most popular in the universe like `Wuors`.
      </p>
      {/* Pessoal em Português */}
      <p className={bandeira ? 'mt-3 text-justify text-gray-300' : 'hidden'}>
        Nasci e cresci em Salvador, sou católico e mantenho uma rotina ativa na
        academia. Estou ansioso para iniciar treinos de luta em breve. Nos
        momentos de lazer, sou um entusiasta de jogos, especialmente os mais
        populares no universo como `Wuors`.
      </p>
    </>
  )
}
