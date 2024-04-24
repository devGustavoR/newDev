import { MdFullscreen } from 'react-icons/md'

export function MarcaDev() {
  return (
    <>
      <div className="bet fixed left-[98%] top-[85%] ml-7 flex flex-col items-center justify-center space-x-4 max-lg:hidden">
        <MdFullscreen className="mb-3 h-6 w-36 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-brown-250" />
      </div>
    </>
  )
}
