import { AiFillCaretUp } from "react-icons/ai";

const isBrowser = () => typeof window !== "undefined";

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

interface ScrollToOptions {
  left?: number;
  top?: number;
  behavior?: "auto" | "smooth";
}

export function ScrollToTop() {
  return (
    <button className="absolute bottom-0 p-10" onClick={scrollToTop}>
      <AiFillCaretUp />
    </button>
  );
}
