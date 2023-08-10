import { Contatos } from "./components/Contatos";
import { Habilidades } from "./components/Habilidades";
import { NavBar } from "./components/NavBar";
import { Qualificacoes } from "./components/Qualificacoes";
import { Sobre } from "./components/Sobre";

export default function Home() {
  return (
    <>
      <Habilidades />
      <NavBar />
      <Sobre />
      <Qualificacoes />
      <Contatos />
    </>
  );
}
