export function NavBar() {
  return (
    <>
      <header
        className="
      w-full bottom-0 left-0 z-[100] max-w-screen-md mr-1.5 ml-1.5
      md:top-0 md:flex-initial md:bottom-auto"
      >
        <nav className="max-w-screen-md  flex justify-between 
        items-center md:gap-x-4 ">
          <a href="" className="max-w-[20px]">
            Logo
          </a>

          <div 
          className=" md:ml-auto
          md:fixed md:p-8 md:pt-6 md:pb-16 md:bottom-[-100%] md:left-0 md:w-full md:border-x-boxShadow-3xl md:gap-x-4">
            <ul className=" max-w-screen-md grid gap-6
            grid-cols-3 md:gap-x-0 sm:flex sm:gap-x-8">
              <li>
                <a href="" className="flex flex-col items-center font-medium text-sm text-brown-50 font-alt">Home</a>
              </li>
              <li>
                <a href="" className="flex flex-col items-center font-medium text-sm text-brown-50 font-alt">Sobre</a>
              </li>
              <li>
                <a href="" className="flex flex-col items-center font-medium text-sm text-brown-50 font-alt">Habilidades</a>
              </li>
              <li>
                <a href="" className="flex flex-col items-center font-medium text-sm text-brown-50 font-alt">Qualificações</a>
              </li>
              <li>
                <a href="" className="flex flex-col items-center font-medium text-sm text-brown-50 font-alt">Projetos</a>
              </li>
              <li>
                <a href="" className="flex flex-col items-center font-medium text-sm text-brown-50 font-alt">Contatos</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
