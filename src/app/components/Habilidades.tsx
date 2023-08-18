import {
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaJava,
  FaPhp,
  FaReact,
} from 'react-icons/fa'
import {
  SiAdobexd,
  SiCoursera,
  SiCplusplus,
  SiCsharp,
  SiFirebase,
  SiJavascript,
  SiMysql,
} from 'react-icons/si'

export function Habilidades() {
  return (
    <div id="Habilidades" className="section">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-2xl font-sans absolute left-[47%] mt-6 text-center font-black">
          Skills
        </h1>
        <h1 className="text-9xl left-2 font-sans relative text-gray-500 font-black opacity-10">
          Skills
        </h1>
      </div>
      <div className="grid justify-center items-center p-5 grid-cols-2 gap-4">
        {/* Frontend */}
        <div className="flex justify-center items-center p-16 flex-col border-2 border-brown-500 shadow-lg shadow-brown-300/50 rounded-lg ">
          <h2 className="leading-relaxed font-bold uppercase	">
            Frontend Development
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="mt-3 flex justify-center items-center p-2 border-2 border-brown-300 rounded-lg hover:shadow-md hover:shadow-blue-500 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
              <FaReact className="w-9 h-9 text-blue-500 mr-3 font-alt" />
              <p>React</p>
            </div>
            <div className="mt-3 flex justify-center items-center p-2 border-2 border-brown-300 rounded-lg hover:shadow-md hover:shadow-orange-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
              <FaHtml5 className="w-9 h-9 text-orange-600 mr-3 font-alt" />
              <p>HTML</p>
            </div>
            <div className="mt-3 flex justify-center items-center p-2 border-2 border-brown-300 rounded-lg hover:shadow-md hover:shadow-blue-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
              <FaCss3Alt className="w-9 h-9 text-blue-700 mr-3 font-alt" />
              <p>CSS</p>
            </div>
            <div className="mt-3 flex justify-center items-center p-2 border-2 border-brown-300 rounded-lg hover:shadow-md hover:shadow-yellow-1000 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
              <SiJavascript className="w-9 h-9 text-yellow-1000 mr-3 font-alt" />
              <p>JavaScript</p>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="flex justify-center items-center p-16 flex-col border-2 border-brown-500 shadow-lg shadow-brown-300/50 rounded-lg ml-3">
          <h2 className="leading-relaxed font-bold uppercase	">
            Backend Development
          </h2>
          <div className="grid grid-cols-3 gap-4 justify-center items-center">
            <div className="mt-3 flex justify-center items-center p-2 border-2 border-brown-300 rounded-lg hover:shadow-md hover:shadow-blue-300 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
              <FaPhp className="w-9 h-9 text-blue-300 mr-3 font-alt" />
              <p>PHP</p>
            </div>
            <div className="mt-3 flex justify-center items-center p-2 border-2 border-brown-300 rounded-lg hover:shadow-md hover:shadow-blue-500 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
              <SiMysql className="w-9 h-9 text-blue-500 mr-3 font-alt" />
              <p>MySql</p>
            </div>
            <div className="mt-3 flex justify-center items-center p-2 border-2 border-brown-300 rounded-lg hover:shadow-md hover:shadow-blue-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
              <FaJava className="w-9 h-9 text-blue-700 mr-3 font-alt" />
              <p>Java</p>
            </div>
            <div className="mt-3 flex justify-center items-center p-2 border-2 border-brown-300 rounded-lg hover:shadow-md hover:shadow-yellow-1100 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
              <SiFirebase className="w-9 h-9 text-yellow-1100 mr-3 font-alt" />
              <p>Firebase</p>
            </div>
          </div>
        </div>

        {/* UX/UI */}
        <div className="flex justify-center items-center p-16 flex-col border-2 border-brown-500 shadow-lg shadow-brown-500/50 rounded-lg ml-3">
          <h2 className="leading-relaxed font-bold uppercase	">UX/UI</h2>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="mt-3 flex justify-center items-center p-2 border-2 border-brown-300 rounded-lg hover:shadow-md hover:shadow-brown-50 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
              <FaFigma className="w-9 h-9 mr-3 font-alt" />
              <p>Figma</p>
            </div>
            <div className="mt-3 flex justify-center items-center p-2 border-2 border-brown-300 rounded-lg hover:shadow-md hover:shadow-purple-1000 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
              <SiAdobexd className="w-9 h-9 text-purple-1000 mr-3 font-alt" />
              <p>XD</p>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex justify-center items-center p-16 flex-col border-2 border-brown-500 shadow-lg shadow-brown-500/50 rounded-lg ml-3">
          <h2 className="leading-relaxed font-bold uppercase	">
            Mobile App Development
          </h2>
          <div className="flex justify-center items-center">
            <div className="mt-3 flex justify-center items-center p-2 border-2 border-brown-300 rounded-lg hover:shadow-md hover:shadow-blue-500 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
              <FaReact className="w-9 h-9 text-blue-500 mr-3 font-alt" />
              <p>React Native</p>
            </div>
          </div>
        </div>

        {/* Others */}
        <div className="flex justify-center items-center p-16 flex-col border-2 border-brown-500 shadow-lg shadow-brown-500/50 rounded-lg ml-3">
          <h2 className="leading-relaxed font-bold uppercase">Others</h2>
          <div className="grid grid-cols-3 gap-4 justify-center items-center">
            <div className="mt-3 flex justify-center items-center p-2 border-2 border-brown-300 rounded-lg hover:shadow-md hover:shadow-blue-200 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
              <SiCoursera className="w-9 h-9 text-blue-200 mr-3 font-alt" />
              <p>C</p>
            </div>
            <div className="mt-3 flex justify-center items-center p-2 border-2 border-brown-300 rounded-lg hover:shadow-md hover:shadow-red-100 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
              <SiCplusplus className="w-9 h-9 text-red-100 mr-3 font-alt" />
              <p>C++</p>
            </div>
            <div className="mt-3 flex justify-center items-center p-2 border-2 border-brown-300 rounded-lg hover:shadow-md hover:shadow-purple-1100 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
              <SiCsharp className="w-9 h-9 text-purple-1100 mr-3 font-alt" />
              <p>C#</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
