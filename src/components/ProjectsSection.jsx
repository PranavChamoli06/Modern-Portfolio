import { useState } from "react";
import { ArrowRight, ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "HRMS",
    category: ["java-core", "full-stack"],
    shortDesc: "Hotel Reservation Management System",
    image: "/projects/hrms.png",
    tags: ["Java", "Spring Boot", "MySQL", "JWT", "REST API", "React"],
    githubUrl: "https://github.com/PranavChamoli06/Full-Stack-HRMS",
    demoUrl: null,
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
  },
  {
    id: 3,
    title: "Hinglish Compiler",
    category: ["python"],
    shortDesc: "Custom Language Compiler",
    image: "/projects/hinglish-compiler.png",
    tags: ["Python", "Tkinter", "Graphviz"],
    githubUrl:
      "https://github.com/PranavChamoli06/Hinglish-Compiler",
    demoUrl: null,
  },
  {
    id: 4,
    title: "Real-Time Face Recognition",
    category: ["python"],
    shortDesc: "Real-time Computer Vision",
    image: "/projects/face-recognition.jpeg",
    tags: ["Python", "OpenCV", "Mediapipe"],
    githubUrl:
      "https://github.com/PranavChamoli06/Real-Time-Face-Recognition",
    demoUrl: null,
  },
  {
    id: 5,
    title: "Quiz Application",
    category: ["java-core"],
    shortDesc: "Desktop GUI",
    image: "/projects/quiz-application.png",
    tags: ["Java"],
    techStack: ["Java", "Swing", "AWT"],
    githubUrl: "https://github.com/PranavChamoli06/QUIZ-APPLICATION",
    demoUrl: null,
  },
];

const categories = ["all", "java-core", "python", "full-stack"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.category.includes(activeCategory)
        );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full capitalize transition-colors duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(139,92,246,0.25)]"
            >
              <div
                className="h-48 overflow-hidden cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  className="text-xl font-semibold mb-1 cursor-pointer transition-colors group-hover:text-primary"
                  onClick={() => setActiveProject(project)}
                >
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.shortDesc}
                </p>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button flex items-center gap-2 text-sm"
                  >
                    Code <Github size={14} />
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md flex items-center gap-2 bg-gray-300 text-gray-800 hover:bg-gray-400 text-sm"
                    >
                      Demo <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/PranavChamoli06"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};