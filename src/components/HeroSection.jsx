import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

           {/* Profile Image */}
          <div className="flex justify-center mt-16">
            <img
              src="/profile.png"   // <-- place your photo in public/me.png
              alt="Pranav Chamoli"
              className="w-40 h-40 rounded-full border-4 border-primary shadow-lg mb-6 transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]"
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Pranav
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Chamoli
            </span>
          </h1>

          {/* Tagline */}
          <div className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "Java • Spring Boot • React Developer",
                2000,
                "Building scalable and efficient web applications",
                2000,
              ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            />
          </div>
          
          {/* Buttons */}
          <div className="pt-4 flex flex-col md:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="/PranavChamoli_Resume.pdf"   // <-- place your resume in public/resume.pdf
              download
              className="cosmic-button"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links + Email */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-2 opacity-0 animate-fade-in-delay-3">
            <a
              href="https://www.linkedin.com/in/pranav-chamoli-08a335269/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <Linkedin size={24} /> LinkedIn
            </a>
            <a
              href="https://github.com/PranavChamoli06"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <Github size={24} /> GitHub
            </a>
            <a
              href="mailto:pranavchamoli6@gmail.com"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <Mail size={24} /> Mail
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-20 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
