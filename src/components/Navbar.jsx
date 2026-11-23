
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pressing Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[9999]",
        "border-b transition-all duration-300",
        isScrolled
          ? "bg-black/90 border-white/10 py-3"
          : "bg-black/50 border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-5 md:px-8 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          onClick={() => setIsMenuOpen(false)}
          className="relative z-[60] text-xl md:text-2xl font-semibold tracking-tight"
          aria-label="Pranav Portfolio - Home"
        >
          <span className="text-[#F5F5F7]">
            Pranav
          </span>
          <span className="text-[#0071E3]">
            {" "}Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "relative text-sm font-medium",
                "text-white/75",
                "hover:text-[#0071E3]",
                "transition-colors duration-300",
                "focus-visible:outline-none",
                "focus-visible:text-[#0071E3]"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={cn(
            "relative z-[60] md:hidden",
            "flex items-center justify-center",
            "w-10 h-10 rounded-full",
            "text-white hover:text-[#0071E3]",
            "hover:bg-white/5 transition-all duration-300"
          )}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <X size={23} strokeWidth={1.8} />
          ) : (
            <Menu size={23} strokeWidth={1.8} />
          )}
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          id="mobile-navigation"
          className={cn(
            "fixed inset-0 z-50 md:hidden",
            "bg-black",
            "flex flex-col items-center justify-center",
            "transition-all duration-300",
            isMenuOpen
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          )}
          aria-hidden={!isMenuOpen}
        >
          <div className="flex flex-col items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  transitionDelay: isMenuOpen
                    ? `${index * 50}ms`
                    : "0ms",
                }}
                className={cn(
                  "text-2xl font-medium tracking-tight",
                  "text-white/80 hover:text-[#0071E3]",
                  "transition-all duration-300",
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          <p className="absolute bottom-10 text-xs text-white/30 tracking-widest">
            PRANAV CHAMOLI
          </p>
        </div>
      </div>
    </nav>
  );
};
