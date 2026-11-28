
import { useEffect, useRef, useState } from "react";
import {
  House,
  UserRound,
  Code2,
  BriefcaseBusiness,
  FolderGit2,
  Mail,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero", icon: House },
  { name: "About", href: "#about", icon: UserRound },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isExpanded, setIsExpanded] = useState(false);

  const collapseTimer = useRef(null);
  const ticking = useRef(false);

  // Clear previous collapse timer
  const clearCollapseTimer = () => {
    if (collapseTimer.current) {
      clearTimeout(collapseTimer.current);
      collapseTimer.current = null;
    }
  };

  // Automatically collapse after inactivity
  const scheduleCollapse = () => {
    clearCollapseTimer();

    collapseTimer.current = setTimeout(() => {
      setIsExpanded(false);
    }, 1800);
  };

  // Expand navigation
  const expandDock = () => {
    clearCollapseTimer();
    setIsExpanded(true);
  };

  // Handle compact dock button
  const toggleDock = () => {
    if (isExpanded) {
      clearCollapseTimer();
      setIsExpanded(false);
    } else {
      expandDock();
      scheduleCollapse();
    }
  };

  // Active section detection
  useEffect(() => {
    const updateActiveSection = () => {
      const activationPoint = window.innerHeight * 0.38;

      let currentSection = "hero";

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);

        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= activationPoint) {
          currentSection = item.href.slice(1);
        }
      });

      setActiveSection((previous) =>
        previous === currentSection
          ? previous
          : currentSection
      );

      ticking.current = false;
    };

    const handleScroll = () => {
      // Expand whenever scrolling begins
      expandDock();

      scheduleCollapse();

      if (!ticking.current) {
        window.requestAnimationFrame(updateActiveSection);
        ticking.current = true;
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);

      clearCollapseTimer();
    };
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className="
        fixed bottom-0 left-0 right-0 z-[9999]
        flex justify-center
        px-3
        pb-[calc(16px+env(safe-area-inset-bottom))]
        pointer-events-none
      "
    >
      {/* Auto Collapsing Liquid Glass Dock */}
      <div
        onMouseEnter={() => {
          if (isExpanded) clearCollapseTimer();
        }}
        onMouseLeave={() => {
          if (isExpanded) scheduleCollapse();
        }}
        className={`
          pointer-events-auto
          relative flex items-center justify-center
          overflow-hidden
          h-[62px]
          rounded-full
          border border-white/20
          bg-[#242832]/70
          backdrop-blur-3xl
          backdrop-saturate-200
          shadow-[0_12px_50px_rgba(0,0,0,0.55)]
          ring-1 ring-white/[0.05]
          transition-[width,background-color,box-shadow]
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            isExpanded
              ? "w-[min(94vw,390px)] px-2 sm:px-4"
              : "w-[62px] px-0"
          }
        `}
      >
        {/* Glass reflection */}
        <div
          className="
            pointer-events-none absolute inset-x-8 top-0
            h-px bg-gradient-to-r
            from-transparent via-white/60 to-transparent
          "
        />

        <div
          className="
            pointer-events-none absolute inset-0
            rounded-full
            bg-gradient-to-b
            from-white/[0.12]
            via-transparent
            to-white/[0.02]
          "
        />

        {/* Compact Icon */}
        <button
          type="button"
          onClick={toggleDock}
          aria-label={
            isExpanded
              ? "Collapse navigation"
              : "Expand navigation"
          }
          aria-expanded={isExpanded}
          className={`
            absolute z-20
            flex h-11 w-11 items-center justify-center
            rounded-full
            text-white
            transition-all duration-300
            ${
              isExpanded
                ? "pointer-events-none scale-75 opacity-0"
                : "scale-100 opacity-100 hover:bg-white/[0.12]"
            }
          `}
        >
          <Menu size={23} strokeWidth={1.8} />
        </button>

        {/* Expanded Navigation */}
        <div
          className={`
            relative z-10
            flex w-full items-center justify-between
            gap-0 sm:gap-1
            transition-all duration-300
            ${
              isExpanded
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-90 opacity-0"
            }
          `}
          aria-hidden={!isExpanded}
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              activeSection === item.href.slice(1);

            return (
              <a
                key={item.name}
                href={item.href}
                tabIndex={isExpanded ? 0 : -1}
                aria-label={item.name}
                aria-current={isActive ? "location" : undefined}
                title={item.name}
                onClick={scheduleCollapse}
                className={`
                  group relative flex shrink-0
                  h-11 w-11 sm:h-12 sm:w-12
                  items-center justify-center
                  rounded-full
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-white/[0.17] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]"
                      : "text-white/55 hover:text-white hover:bg-white/[0.10]"
                  }
                `}
              >
                <Icon
                  size={21}
                  strokeWidth={isActive ? 2.2 : 1.7}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                  "
                />

                {/* Active Indicator */}
                {isActive && (
                  <span
                    className="
                      absolute -bottom-1
                      h-1 w-1 rounded-full
                      bg-[#2997FF]
                      shadow-[0_0_9px_#2997FF]
                    "
                  />
                )}

                {/* Tooltip */}
                <span
                  className="
                    pointer-events-none
                    absolute bottom-[calc(100%+13px)]
                    left-1/2 -translate-x-1/2
                    whitespace-nowrap
                    rounded-lg
                    border border-white/15
                    bg-[#17191f]/95
                    px-3 py-1.5
                    text-xs font-medium text-white
                    opacity-0 translate-y-1
                    shadow-xl backdrop-blur-xl
                    transition-all duration-200
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    hidden sm:block
                  "
                >
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
