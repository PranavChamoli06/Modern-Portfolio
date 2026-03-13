import { useState } from "react";
import { ArrowRight, ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hotel Reservation and Management System",
    category: "java-core",
    shortDesc: "Full Stack",
    description:
      "A complete JavaFX + MySQL hotel booking platform with role-based access, reporting, and full CRUD functionality.",
    image: "/projects/project1.png",
    tags: ["Java", "MySQL", "IntelliJ IDE"],
    techStack: ["Java", "JDBC", "MySQL", "CSS3", "FXML", "Maven"],
    githubUrl:
      "https://github.com/PranavChamoli06/Hotel-Reservation-and-Management-System",
    demoUrl: null,
  },
  {
    id: 2,
    title: "Real-Time Face Recognition",
    category: "python",
    shortDesc: "Real-time Computer Vision",
    description:
      "A Python-based real-time face recognition system using CNN and Mediapipe.",
    image: "/projects/project2.jpeg",
    tags: ["Python", "OpenCV", "Mediapipe"],
    techStack: ["Python", "OpenCV", "Mediapipe"],
    githubUrl:
      "https://github.com/PranavChamoli06/Real-Time-Face-Recognition",
    demoUrl: null,
  },
  {
    id: 3,
    title: "Quiz Application",
    category: "java-core",
    shortDesc: "Desktop GUI",
    description:
      "A Java Swing and AWT-based quiz application with interactive GUI.",
    image: "/projects/project3.png",
    tags: ["Java"],
    techStack: ["Java", "Swing", "AWT"],
    githubUrl: "https://github.com/PranavChamoli06/QUIZ-APPLICATION",
    demoUrl: null,
  },
  {
    id: 4,
    title: "Dynamic Rounded Palette Generator",
    category: "frontend",
    shortDesc: "WebTool",
    description:
      "A visually interactive web-based tool to create, preview, and download custom color palettes.",
    image: "/projects/project4.jpg",
    tags: ["Html", "Css", "Javascript"],
    techStack: ["Html", "Css", "Javascript"],
    githubUrl:
      "https://github.com/PranavChamoli06/color-palette-site",
    demoUrl: "https://dynamic-rounded-palette-generator.netlify.app/",
  },
  {
    id: 5,
    title: "Volume Hand Tracking",
    category: "python",
    shortDesc: "Interactive Computer Vision",
    description:
      "This project demonstrates hand tracking capabilities using OpenCV and MediaPipe in Python.",
    image: "/projects/project5.jpeg",
    tags: ["Python"],
    techStack: ["Python", "OpenCV", "Mediapipe"],
    githubUrl:
      "https://github.com/PranavChamoli06/VOLUME-HAND-TRACKING",
    demoUrl: null,
  },
];

const categories = ["all", "java-core", "python", "frontend"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        {/* CURRENTLY BUILDING */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg mb-20 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(139,92,246,0.25)]">
          <div className="grid md:grid-cols-2 gap-6 items-center">

            <div className="p-6">
              <img
                src="/projects/hrms.png"
                alt="HRMS Backend"
                className="w-full rounded-lg object-cover shadow-lg transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-8">

              <p className="text-sm text-primary font-medium mb-2">
                Currently Building
              </p>

              <h3 className="text-2xl font-bold mb-3">
                HRMS
              </h3>

              <span className="px-3 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full mb-4 inline-block">
                Work in Progress
              </span>

              <p className="text-muted-foreground mb-4">
                A Complete Full Stack based Hotel Reservation Management System
                with authentication, employee management, role-based access
                control, and REST APIs for enterprise HR operations.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Java", "Spring Boot", "MySQL", "JWT", "REST API", "React"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/PranavChamoli06/HRMS-Backend"
                  target="_blank"
                  className="cosmic-button flex items-center gap-2"
                >
                  View Code <Github size={16} />
                </a>
              </div>

            </div>
          </div>
        </div>

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

        {/* PROJECT GRID */}
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
                    className="cosmic-button flex items-center gap-2 text-sm"
                  >
                    Code <Github size={14} />
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
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

        {/* Github Button */}
        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/PranavChamoli06"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};