import { Contatos } from "./components/Contatos";
import { Habilidades } from "./components/Habilidades";
import { Inicio } from "./components/Inicio";
import { NavBar } from "./components/NavBar";
import { Qualificacoes } from "./components/Qualificacoes";
import { RedesSociais } from "./components/RedesSociais";
import { Sobre } from "./components/Sobre";

export default function Home() {
  return (
    <>
      <NavBar />
      <Inicio />
      <Sobre />
      <RedesSociais />
      <Habilidades />
      <Qualificacoes />
      <Contatos />
    </>
  );
}
