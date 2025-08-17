import { ArrowUp, Linkedin, Github, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show footer when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="z-50">
      {/* Desktop & Tablet Floating Footer */}
      <div
        className={`hidden md:flex fixed bottom-6 left-1/2 transform -translate-x-1/2 
                    border border-border shadow-lg rounded-full px-6 py-3 
                    items-center gap-6 backdrop-blur-md bg-card/70
                    transition-all duration-500 ease-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  `}
      >
        <a
          href="https://www.linkedin.com/in/pranav-chamoli-08a335269/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://github.com/PranavChamoli06"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
        >
          <Github size={18} />
        </a>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:rotate-12 ml-auto"
        >
          <ArrowUp size={20} />
        </a>
      </div>

      {/* Mobile Bottom Bar */}
      <div
        className={`md:hidden fixed bottom-0 left-0 w-full py-3 
                    flex justify-center items-center gap-8 border-t border-border 
                    bg-card/80 backdrop-blur-md
                    transition-transform duration-500 ease-out
                    ${isVisible ? "translate-y-0" : "translate-y-full"}
                  `}
      >
        <a
          href="https://www.linkedin.com/in/pranav-chamoli-08a335269/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/PranavChamoli06"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
        >
          <Github size={20} />
        </a>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:rotate-12"
        >
          <ArrowUp size={22} />
        </a>
      </div>
    </div>
  );
};