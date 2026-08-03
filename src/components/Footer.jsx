import { ArrowUp, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonClass =
    "flex items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-110 active:scale-95";

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[999]">
      {/* Desktop */}
      <div
        className={`hidden md:flex justify-center pb-6 transition-all duration-500 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <div
          className="
            pointer-events-auto
            flex
            items-center
            gap-5
            rounded-full
            border
            border-white/10
            bg-background/60
            backdrop-blur-xl
            px-6
            py-3
            shadow-[0_12px_40px_rgba(0,0,0,0.35)]
          "
        >
          <a
            href="https://www.linkedin.com/in/pranav-chamoli-08a335269/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClass} h-10 w-10`}
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://github.com/PranavChamoli06"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClass} h-10 w-10`}
          >
            <Github size={18} />
          </a>

          <div className="h-6 w-px bg-border" />

          <a
            href="#hero"
            className={`${buttonClass} h-10 w-10`}
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={`md:hidden flex justify-center px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] transition-all duration-500 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-24 opacity-0"
        }`}
      >
        <div
          className="
            pointer-events-auto
            flex
            items-center
            justify-center
            gap-6
            rounded-full
            border
            border-white/10
            bg-background/65
            backdrop-blur-2xl
            px-6
            py-3
            shadow-[0_12px_40px_rgba(0,0,0,0.35)]
          "
        >
          <a
            href="https://www.linkedin.com/in/pranav-chamoli-08a335269/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClass} h-11 w-11`}
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/PranavChamoli06"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClass} h-11 w-11`}
          >
            <Github size={20} />
          </a>

          <a
            href="#hero"
            className={`${buttonClass} h-11 w-11`}
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};