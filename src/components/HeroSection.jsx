
import { Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = ({ isVisible = true }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 pt-20 pb-10 sm:pt-24 md:pb-8 overflow-hidden bg-background"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">

        {/* Profile Image */}
        <div
          className={`flex justify-center mb-6 md:mb-7 hero-reveal hero-profile ${
            isVisible ? "hero-visible" : ""
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-125" />

            <img
              src="/profile.png"
              alt="Pranav Chamoli"
              className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 object-cover rounded-full border border-white/20 shadow-[0_0_35px_rgba(0,113,227,0.16)] transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Introduction */}
        <div
          className={`mb-4 md:mb-5 hero-reveal hero-tagline ${
            isVisible ? "hero-visible" : ""
          }`}
        >
          <span className="text-xs sm:text-sm tracking-[0.18em] md:tracking-[0.2em] font-medium text-muted-foreground uppercase">
            Full-Stack Developer
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-foreground hero-reveal hero-name ${
            isVisible ? "hero-visible" : ""
          }`}
        >
          Hi, I'm{" "}
          <span className="text-primary">Pranav</span>
          <br className="hidden sm:block" />
          <span> Chamoli.</span>
        </h1>

        {/* Animated Description */}
        <div
          className={`mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto min-h-[48px] md:min-h-[65px] leading-relaxed hero-reveal hero-tagline ${
            isVisible ? "hero-visible" : ""
          }`}
        >
          {isVisible && (
            <TypeAnimation
              sequence={[
                "Building scalable web applications.",
                2000,
                "Java • Spring Boot • React Developer.",
                2000,
                "Turning ideas into digital experiences.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          )}
        </div>

        {/* Action Buttons */}
        <div
          className={`mt-5 md:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 hero-reveal hero-buttons ${
            isVisible ? "hero-visible" : ""
          }`}
        >
          <a
            href="#projects"
            className="cosmic-button w-full max-w-[240px] sm:w-auto sm:max-w-none min-w-44"
          >
            View My Work
          </a>

          <a
            href="/PranavChamoli_Resume.pdf"
            download
            className="inline-flex items-center justify-center w-full max-w-[240px] sm:w-auto sm:max-w-none min-w-44 px-6 py-3 rounded-full border border-white/25 text-foreground font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div
          className={`mt-8 md:mt-12 flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-muted-foreground hero-reveal hero-socials ${
            isVisible ? "hero-visible" : ""
          }`}
        >
          <a
            href="https://www.linkedin.com/in/pranav-chamoli-08a335269/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/PranavChamoli06"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>

          <a
            href="mailto:pranavchamoli6@gmail.com"
            aria-label="Email"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
        </div>

      </div>
    </section>
  );
};
