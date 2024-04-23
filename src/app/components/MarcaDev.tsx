import { MdFullscreen } from 'react-icons/md'

export function MarcaDev() {
  return (
    <>
      <div className="flex justify-center items-center space-x-4 flex-col fixed top-[85%] left-[98%] ml-7 max-lg:hidden bet">
        <MdFullscreen className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-brown-250 duration-300 w-36 h-6 mb-3" />
      </div>
    </>
  )
}
