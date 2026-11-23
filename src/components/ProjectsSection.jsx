import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hotel Reservation Management System",
    category: ["java-core", "full-stack"],
    shortDesc: "Booking and Management System",
    image: "/projects/hrms.png",
    tags: ["Java", "Spring Boot", "MySQL", "JWT", "REST API", "React"],
    githubUrl: "https://github.com/PranavChamoli06/Full-Stack-HRMS",
    demoUrl: null,
    details: {
      description:
        "A full-stack hotel reservation management system for managing rooms, customers, reservations, and hotel operations through a centralized web application.",
      features: [
        "Room and reservation management",
        "JWT-based authentication",
        "REST API integration",
        "Customer management",
      ],
    },
  },
  {
    id: 2,
    title: "Expense Tracker",
    category: ["full-stack"],
    shortDesc: "Personal Finance Management",
    image: "/projects/expense-tracker.png",
    tags: ["JavaScript", "Node.js", "React.js", "Express.js", "CSS3"],
    githubUrl: "https://github.com/PranavChamoli06/expense-tracker",
    demoUrl: "https://expense-tracker-omega-indol-39.vercel.app/",
    details: {
      description:
        "A full-stack personal finance application for tracking income and expenses through a responsive and easy-to-use interface.",
      features: [
        "Income and expense tracking",
        "Transaction management",
        "Dynamic financial calculations",
        "Responsive user interface",
      ],
    },
  },
  {
    id: 3,
    title: "Hinglish Compiler",
    category: ["python"],
    shortDesc: "Custom Language Compiler",
    image: "/projects/hinglish-compiler.png",
    tags: ["Python", "Tkinter", "Graphviz"],
    githubUrl: "https://github.com/PranavChamoli06/Hinglish-Compiler",
    demoUrl: null,
    details: {
      description:
        "A custom compiler project that explores language-processing concepts using a Hinglish-inspired programming syntax.",
      features: [
        "Custom language syntax",
        "Lexical and syntax analysis",
        "Parse tree generation",
        "Graphviz visualization",
      ],
    },
  },
  {
    id: 4,
    title: "Real-Time Face Recognition",
    category: ["python"],
    shortDesc: "Real-time Computer Vision",
    image: "/projects/face-recognition.jpeg",
    tags: ["Python", "OpenCV", "MediaPipe"],
    githubUrl:
      "https://github.com/PranavChamoli06/Real-Time-Face-Recognition",
    demoUrl: null,
    details: {
      description:
        "A real-time computer vision application that detects and processes faces through a live camera feed.",
      features: [
        "Real-time face detection",
        "Live webcam processing",
        "Facial landmark detection",
        "Real-time visual feedback",
      ],
    },
  },
  {
    id: 5,
    title: "Quiz Application",
    category: ["java-core"],
    shortDesc: "Desktop GUI Application",
    image: "/projects/quiz-application.png",
    tags: ["Java", "Swing", "AWT"],
    githubUrl: "https://github.com/PranavChamoli06/QUIZ-APPLICATION",
    demoUrl: null,
    details: {
      description:
        "A Java desktop quiz application with an interactive graphical interface for answering questions and calculating quiz scores.",
      features: [
        "Multiple-choice questions",
        "Interactive quiz interface",
        "Question navigation",
        "Automatic score calculation",
      ],
    },
  },
];

const categories = [
  { value: "all", label: "All Projects" },
  { value: "java-core", label: "Java" },
  { value: "python", label: "Python" },
  { value: "full-stack", label: "Full Stack" },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  const tabsRef = useRef(null);
  const githubButtonRef = useRef(null);

  const filteredProjects = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((project) =>
            project.category.includes(activeCategory)
          ),
    [activeCategory]
  );

  // Sakuga tabs integration
  useEffect(() => {
    let tabs;
    let cancelled = false;

    const handleChange = (event) => {
      const nextCategory = event.detail?.value;

      if (categories.some((category) => category.value === nextCategory)) {
        setActiveCategory(nextCategory);
        setActiveProject(null);
      }
    };

    customElements.whenDefined("sakuga-tabs").then(() => {
      if (cancelled) return;

      tabs = tabsRef.current;
      tabs?.addEventListener("change", handleChange);
    });

    return () => {
      cancelled = true;
      tabs?.removeEventListener("change", handleChange);
    };
  }, []);

  // GitHub button integration
  useEffect(() => {
    const button = githubButtonRef.current;

    const openGithub = () => {
      window.open(
        "https://github.com/PranavChamoli06",
        "_blank",
        "noopener,noreferrer"
      );
    };

    button?.addEventListener("click", openGithub);

    return () => {
      button?.removeEventListener("click", openGithub);
    };
  }, []);

  // Modal keyboard and scroll handling
  useEffect(() => {
    if (!activeProject) return undefined;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 px-4 py-24"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          My <span className="text-primary">Projects</span>
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
          A selection of applications and experiments I have built while
          exploring software development.
        </p>

        {/* Sakuga category filters */}
        <div className="mb-14 flex justify-center">
          <sakuga-tabs
            ref={tabsRef}
            label="Filter projects by technology"
            selected="0"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </sakuga-tabs>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-xl border border-border/70 bg-card shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(139,92,246,0.22)]"
            >
              <button
                type="button"
                onClick={() => setActiveProject(project)}
                className="relative block h-48 w-full cursor-pointer overflow-hidden text-left"
                aria-label={`View details for ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <span className="absolute inset-0 flex items-center justify-center bg-black/45 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View Project Details
                </span>
              </button>

              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="mb-2 text-left text-xl font-semibold transition-colors hover:text-primary"
                >
                  {project.title}
                </button>

                <p className="mb-5 text-sm text-muted-foreground">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button inline-flex items-center gap-2 text-sm"
                  >
                    Code <Github size={14} />
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground transition-colors hover:bg-secondary/70"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">
            No projects are available in this category yet.
          </p>
        )}

        {/* GitHub button */}
        <div className="mt-16 flex justify-center">
          <sakuga-button
            ref={githubButtonRef}
            variant="secondary"
          >
            Explore More on GitHub
          </sakuga-button>
        </div>
      </div>

      {/* Project details modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md md:p-8"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveProject(null);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-background text-left shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-border bg-background/90 p-2 text-foreground transition-colors hover:bg-secondary"
              aria-label="Close project details"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="min-h-56 bg-secondary md:min-h-full">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="h-full max-h-[360px] w-full object-cover md:max-h-full"
                />
              </div>

              <div className="p-6 md:p-9">
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-primary">
                  Project Overview
                </p>

                <h3
                  id="project-dialog-title"
                  className="mb-4 pr-8 text-2xl font-bold md:text-3xl"
                >
                  {activeProject.title}
                </h3>

                <p className="mb-7 leading-relaxed text-muted-foreground">
                  {activeProject.details.description}
                </p>

                <h4 className="mb-3 font-semibold">
                  Key Features
                </h4>

                <ul className="mb-7 space-y-2 text-sm text-muted-foreground">
                  {activeProject.details.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-1 text-primary">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="mb-3 font-semibold">
                  Technologies
                </h4>

                <div className="mb-8 flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button inline-flex items-center gap-2 text-sm"
                  >
                    View Source <Github size={15} />
                  </a>

                  {activeProject.demoUrl && (
                    <a
                      href={activeProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
                    >
                      Live Demo <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};
