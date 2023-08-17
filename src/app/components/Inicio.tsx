export function Inicio() {
  return (
    <>
      <div
        id="pageHome"
        className="section flex justify-center items-center flex-col"
      >
        <div className="flex justify-center items-center">
          <h1 className="text-lg">Welcome!</h1>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="mr-2 text-2xl">I am</h2>
          <h2 className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 text-brown-400 cursor-pointer hover:text-brown-300 text-2xl">
            Gustavo
          </h2>
        </div>
      </div>
      <div></div>
    </>
  );
}
