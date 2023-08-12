import { Contatos } from "./components/Contatos";
import { NavBar } from "./components/NavBar";
import { Sobre } from "./components/Sobre";

export default function Home() {
  return (
    <>
      <NavBar />
      <Contatos />
      <Sobre />
    </>
  );
}
