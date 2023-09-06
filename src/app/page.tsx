import { Contatos } from './components/Contatos'
import { Habilidades } from './components/Habilidades'
import { Inicio } from './components/Inicio'
import { NavBar } from './components/NavBar'
import { Qualificacoes } from './components/Qualificacoes'
import { Sobre } from './components/Sobre'
import { Violino } from './components/Violino'

export default function Home() {
  return (
    <>
      <NavBar />
      <Inicio />
      <Sobre />
      <Violino />
      <Habilidades />
      <Qualificacoes />
      <Contatos />
      {/* {/* <ScrollToTop /> */}
    </>
  )
}
