import { useState } from "react";
import { ArrowRight, ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hotel Reservation and Management System",
    category: "java-core",
    shortDesc: "Full Stack",
    description:
      " A complete JavaFX + MySQL hotel booking platform with role-based access, reporting, and full CRUD functionality.",
    image: "/projects/project1.png",
    tags: ["Java", "MySQL", "IntelliJ IDE"],
    techStack: ["Java", "JDBC", "MySQL", "CSS3", "FXML", "Maven"],
    githubUrl: "https://github.com/PranavChamoli06/Hotel-Reservation-and-Management-System",
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
    githubUrl: "https://github.com/PranavChamoli06/Real-Time-Face-Recognition",
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
    techStack: ["Html","Css","Javascript"],
    githubUrl: "https://github.com/PranavChamoli06/color-palette-site",
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
    githubUrl: "https://github.com/PranavChamoli06/VOLUME-HAND-TRACKING",
    demoUrl: null,
  },
  /*{
    id: 6,
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
  }, */
];

const categories = ["all", "java-core", "python","frontend"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Clicking image or title will open modal */}
              <div
                className="h-48 overflow-hidden cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  className="text-xl font-semibold mb-1 cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.shortDesc}
                </p>

                {/* Direct Action Buttons */}
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
                      className="px-4 py-2 rounded-md flex items-center gap-2 transition-colors bg-gray-300 text-gray-800 hover:bg-gray-400 text-sm"
                    >
                      Demo <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Project Modal */}
        {activeProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-lg max-w-4xl w-full p-6 relative overflow-hidden">
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className="h-48 w-full overflow-hidden rounded-md mb-4">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details Section */}
              <div className="text-left space-y-4">
                {/* Title + Category */}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{activeProject.title}</h3>
                  <span className="cosmic-button text-sm font-medium capitalize">
                    {activeProject.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground">
                  {activeProject.description}
                </p>

                {/* Tech Stack */}
                <h4 className="font-semibold">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    className="cosmic-button flex items-center gap-2"
                  >
                    View Code <Github size={16} />
                  </a>
                  <a
                    href={activeProject.demoUrl || "#"}
                    target="_blank"
                    className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                      activeProject.demoUrl
                        ? "bg-gray-300 text-gray-800 hover:bg-gray-400"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                    onClick={(e) => {
                      if (!activeProject.demoUrl) e.preventDefault();
                    }}
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Github Button */}
        <div className="text-center mt-12">
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
