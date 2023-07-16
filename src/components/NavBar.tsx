export function NavBar() {
  return (
    <>
      <header
        className="
      w-full bottom-0 left-0 z-100 max-w-screen-md mr-1.5 ml-1.5
      md: top-0 flex-initial "
      >
        <nav className="max-w-screen-lg flex items-center space-x-4 h-8">
          <a href="" className="max-w-[20px]">
            Logo
          </a>

          <div
            className="md:fixed bottom-[-100%] left-0 
          w-full pt-8 pr-1.5 pl-1.5 pb-10 shadow-3xl 
          rounded-large"
          >
            <ul
              className="flex flex-row-reverse 
            space-x-4 space-x-reverse gap-3"
            >
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Sobre</a>
              </li>
              <li>
                <a href="">Habilidades</a>
              </li>
              <li>
                <a href="">Qualificações</a>
              </li>
              <li>
                <a href="">Contatos</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
