import { GiViolin } from "react-icons/gi";

export function Violino() {
  return (
    <section className="flex items-center ml-2 mb-2 fixed">
      <GiViolin className="w-16 h-16" />
      <div className="relative flex justify-between h-3 gap-1 origin-bottom">
        <span className="w-2 h-7 bg-brown-50 rounded content-[' '] animate-bounce origin-bottom"></span>
        <span className="w-2 h-7 bg-brown-50 rounded content-[' '] animate-bounce origin-bottom"></span>
        <span className="w-2 h-7 bg-brown-50 rounded content-[' '] animate-bounce origin-bottom"></span>
      </div>
    </section>
  );
}
