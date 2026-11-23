
import { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  const workButtonRef = useRef(null);
  const resumeButtonRef = useRef(null);

  useEffect(() => {
    const openProjects = () => {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const downloadResume = () => {
      const link = document.createElement("a");
      link.href = "/PranavChamoli_Resume.pdf";
      link.download = "PranavChamoli_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
    };

    const workButton = workButtonRef.current;
    const resumeButton = resumeButtonRef.current;

    workButton?.addEventListener("click", openProjects);
    resumeButton?.addEventListener("click", downloadResume);

    return () => {
      workButton?.removeEventListener("click", openProjects);
      resumeButton?.removeEventListener("click", downloadResume);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
    >
      <div className="container z-10 mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <div className="mt-16 flex justify-center">
            <img
              src="/profile.png"
              alt="Portrait of Pranav Chamoli"
              fetchPriority="high"
              className="mb-3 h-36 w-36 rounded-full border-4 border-primary object-cover shadow-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] md:h-40 md:w-40"
            />
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            <span>Hi, I&apos;m</span>
            <span className="text-primary"> Pranav</span>
            <span className="text-gradient ml-2">Chamoli</span>
          </h1>

          <div className="mx-auto min-h-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
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

          <div className="flex flex-col items-center justify-center gap-5 pt-4 sm:flex-row">
            <sakuga-button
              ref={workButtonRef}
              aria-label="View my projects"
            >
              View My Work
            </sakuga-button>

            <sakuga-button
              ref={resumeButtonRef}
              variant="secondary"
              aria-label="Download my resume"
            >
              Download Resume
            </sakuga-button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 pt-3">
            <a
              href="https://www.linkedin.com/in/pranav-chamoli-08a335269/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={21} />
              LinkedIn
            </a>

            <a
              href="https://github.com/PranavChamoli06"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
              aria-label="GitHub profile"
            >
              <Github size={21} />
              GitHub
            </a>

            <a
              href="mailto:pranavchamoli6@gmail.com"
              className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
            >
              <Mail size={21} />
              Email
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="mt-16 flex flex-col items-center text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <span className="mb-2 text-sm">Scroll to explore</span>
        <ArrowDown className="h-5 w-5 animate-bounce text-primary" />
      </a>
    </section>
  );
};
