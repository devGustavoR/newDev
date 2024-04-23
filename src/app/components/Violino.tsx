import { FaMusic } from 'react-icons/fa'

export function Violino() {
  return (
    <section className="flex items-center ml-2 mb-2 fixed top-[85%] left-[97%] flex-col">
      <FaMusic className="w-5 h-5" />
      <div className="relative flex justify-between h-3 gap-1 origin-bottom">
        <span className="w-2 h-5 bg-brown-50 rounded content-[' '] animate-bounce origin-bottom"></span>
        <span className="w-2 h-5 bg-brown-50 rounded content-[' '] animate-bounce origin-bottom"></span>
        <span className="w-2 h-5 bg-brown-50 rounded content-[' '] animate-bounce origin-bottom"></span>
      </div>
    </section>
  )
}
