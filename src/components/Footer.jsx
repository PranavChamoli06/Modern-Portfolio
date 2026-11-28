
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";

export const Footer = () => {
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

  return (
    <footer className="
      relative border-t border-white/[0.08]
      bg-black/40
      px-6 pt-12 pb-32
    ">
      <div className="
        mx-auto flex max-w-6xl
        flex-col items-center gap-7
      ">

        {/* Brand */}
        <a
          href="#hero"
          className="
            text-2xl font-semibold
            tracking-tight text-[#F5F5F7]
          "
        >
          Pranav<span className="text-[#0071E3]">.</span>
        </a>

        {/* Social Links */}
        <div className="flex items-center gap-4">
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
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/[0.05]
                  text-white/60
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-white/25
                  hover:bg-white/[0.12]
                  hover:text-[#2997FF]
                  hover:-translate-y-1
                "
              >
                <Icon size={19} />
              </a>
            );
          })}
        </div>

        {/* Back to Top */}
        <a
          href="#hero"
          className="
            flex items-center gap-2
            text-sm text-white/45
            transition-colors duration-300
            hover:text-[#2997FF]
          "
        >
          Back to top
          <ArrowUp size={15} />
        </a>

        {/* Copyright */}
        <div className="
          h-px w-full max-w-md
          bg-gradient-to-r
          from-transparent via-white/15 to-transparent
        " />

        <p className="text-center text-xs text-white/35">
          © {new Date().getFullYear()} Pranav Chamoli.
          All rights reserved.
        </p>

      </div>
    </footer>
  );
};
