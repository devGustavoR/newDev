import { Inicio } from '@/pages/Inicio/Inicio'
import { Sobre } from '@/pages/Sobre/Sobre'
import { MarcaDev } from './components/MarcaDev'
import { NavBar } from './components/NavBar'
import { RedesSociais } from './components/RedesSociais'

export default function Home() {
  return (
    <>
      <NavBar />
      <RedesSociais />
      <MarcaDev />
      <Inicio />
      <Sobre />
      {/* <Habilidades /> */}
      {/* <Violino /> */}
      {/* 
      
      <Qualificacoes />
      <Contatos /> */}
      {/* {/* <ScrollToTop /> */}
    </>
  )
}
