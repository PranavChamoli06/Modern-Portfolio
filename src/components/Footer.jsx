
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pranav-chamoli-08a335269/",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/PranavChamoli06",
      icon: Github,
    },
    {
      label: "Email",
      href: "mailto:pranavchamoli6@gmail.com",
      icon: Mail,
    },
  ];

  const iconClass = `
    flex h-10 w-10 items-center justify-center
    rounded-full
    border border-transparent
    text-white/60
    transition-all duration-300
    hover:border-white/[0.12]
    hover:bg-white/[0.10]
    hover:text-[#0071E3]
    hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]
    active:scale-95
  `;

  return (
    <>
      {/* Floating Social Navigation */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[999]">
        <div
          className={`flex justify-center px-4 pb-[calc(1.25rem+env(safe-area-inset-bottom))] transition-all duration-500 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-20 opacity-0"
          }`}
        >
          <div
                className="
                  pointer-events-auto
                  flex items-center gap-3 md:gap-5
                  rounded-full
                  border border-white/[0.18]
                  bg-white/[0.07]
                  px-4 py-2 md:px-5
                  backdrop-blur-2xl
                  shadow-[0_8px_40px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.12)]
                  ring-1 ring-white/[0.04]
                  "
          >
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={
                    item.label === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    item.label === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={item.label}
                  title={item.label}
                  className={iconClass}
                >
                  <Icon size={19} />
                </a>
              );
            })}

            <div className="h-6 w-px bg-white/10" />

            <a
              href="#hero"
              aria-label="Back to top"
              title="Back to top"
              className={iconClass}
            >
              <ArrowUp size={19} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <footer className="border-t border-white/[0.08] bg-black px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <a
            href="#hero"
            className="text-lg font-semibold tracking-tight text-[#F5F5F7]"
          >
            Pranav<span className="text-[#0071E3]">.</span>
          </a>

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Pranav Chamoli. All rights reserved.
          </p>

          <a
            href="#hero"
            className="text-xs text-white/45 transition-colors hover:text-[#0071E3]"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
};
