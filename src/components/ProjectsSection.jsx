
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Github,
  X,
  Layers3,
  Code2,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
      technologies: [
        "Java",
        "Spring Boot",
        "MySQL",
        "JWT",
        "React",
        "REST API",
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
    demoUrl: null,
    details: {
      description:
        "A full-stack personal finance application for tracking income and expenses through a simple, responsive, and easy-to-use interface.",
      features: [
        "Income and expense tracking",
        "Transaction management",
        "Dynamic financial calculations",
        "Responsive user interface",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "CSS3",
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
        "A custom compiler project that explores language processing concepts using a Hinglish-inspired programming syntax.",
      features: [
        "Custom language syntax",
        "Lexical and syntax analysis",
        "Parse tree generation",
        "Graphviz visualization",
      ],
      technologies: ["Python", "Tkinter", "Graphviz"],
    },
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
    details: {
      description:
        "A real-time computer vision application that detects and processes faces through a live camera feed.",
      features: [
        "Real-time face detection",
        "Live webcam processing",
        "Facial landmark detection",
        "Real-time visual feedback",
      ],
      technologies: ["Python", "OpenCV", "MediaPipe"],
    },
  },
  {
    id: 5,
    title: "Quiz Application",
    category: ["java-core"],
    shortDesc: "Desktop GUI",
    image: "/projects/quiz-application.png",
    tags: ["Java"],
    githubUrl:
      "https://github.com/PranavChamoli06/QUIZ-APPLICATION",
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
      technologies: ["Java", "Swing", "AWT"],
    },
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "java-core", label: "Java" },
  { id: "python", label: "Python" },
  { id: "full-stack", label: "Full Stack" },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  // Close modal using Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Lock background scrolling while modal is open
  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.category.includes(activeCategory)
        );

  const openProject = (project) => {
    setActiveProject(project);
  };

  const closeProject = () => {
    setActiveProject(null);
  };

  return (
    <section
      id="projects"
      className="
        relative isolate overflow-hidden
        bg-transparent text-[#F5F5F7]
        py-28 md:py-36 px-5
      "
    >
      {/* AMBIENT BACKGROUND LIGHTING */}

      <div className="
        pointer-events-none absolute
        -top-20 left-[10%]
        h-96 w-96 rounded-full
        bg-blue-600/[0.13] blur-[130px]
      " />

      <div className="
        pointer-events-none absolute
        top-[40%] right-[-10%]
        h-96 w-96 rounded-full
        bg-indigo-500/[0.10] blur-[140px]
      " />

      <div className="
        pointer-events-none absolute
        bottom-0 left-[35%]
        h-80 w-80 rounded-full
        bg-cyan-500/[0.07] blur-[120px]
      " />

      <div className="
        container relative z-10 mx-auto max-w-6xl
      ">

        {/* SECTION HEADING */}

        <div className="text-center mb-16">

          <span className="
            text-sm font-medium
            tracking-[0.25em] uppercase
            text-[#0071E3]
          ">
            Selected Work
          </span>

          <h2 className="
            mt-5 text-4xl md:text-6xl lg:text-7xl
            font-semibold tracking-tight
          ">
            My <span className="text-[#0071E3]">Projects.</span>
          </h2>

          <p className="
            mt-6 max-w-2xl mx-auto
            text-lg md:text-xl
            text-white/50 leading-relaxed
          ">
            A collection of applications and ideas
            I've brought to life through code.
          </p>

        </div>

        {/* CATEGORY FILTERS */}

        <div className="
          flex flex-wrap justify-center
          gap-3 mb-14
        ">

          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              className={`
                relative overflow-hidden
                px-5 py-2.5
                rounded-full
                text-sm font-medium
                border
                backdrop-blur-2xl
                transition-all duration-300

                ${
                  activeCategory === category.id
                    ? "bg-[#0071E3]/90 text-white border-blue-300/50 shadow-[0_5px_25px_rgba(0,113,227,0.25),inset_0_1px_0_rgba(255,255,255,0.25)]"
                    : "bg-white/[0.07] text-white/65 border-white/[0.16] hover:bg-white/[0.12] hover:border-blue-300/40 hover:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                }
              `}
            >
              {category.label}
            </button>
          ))}

        </div>

        {/* PROJECT GRID */}

        <motion.div
          layout
          className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-6 items-stretch
          "
        >

          <AnimatePresence mode="popLayout">

            {filteredProjects.map((project) => (

              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="
                  group relative isolate
                  flex h-full flex-col
                  overflow-hidden
                  rounded-[26px]

                  border border-white/[0.18]

                  bg-gradient-to-br
                  from-white/[0.12]
                  via-white/[0.045]
                  to-blue-500/[0.07]

                  backdrop-blur-3xl
                  backdrop-saturate-200

                  shadow-[0_15px_45px_rgba(0,0,0,0.30),inset_0_1px_1px_rgba(255,255,255,0.20)]

                  transition-all duration-500

                  hover:-translate-y-2
                  hover:border-blue-300/40

                  hover:shadow-[0_22px_60px_rgba(0,0,0,0.40),0_0_30px_rgba(0,113,227,0.13),inset_0_1px_1px_rgba(255,255,255,0.28)]
                "
              >

                {/* CARD REFLECTION */}

                <div className="
                  pointer-events-none absolute
                  inset-x-8 top-0 z-20 h-px
                  bg-gradient-to-r
                  from-transparent via-white/70 to-transparent
                " />

                {/* AMBIENT CARD LIGHT */}

                <div className="
                  pointer-events-none absolute
                  -right-24 -top-24 z-0
                  h-64 w-64 rounded-full
                  bg-blue-400/[0.14]
                  blur-[90px]
                  transition-all duration-700
                  group-hover:scale-125
                  group-hover:bg-blue-400/[0.23]
                " />

                {/* PROJECT IMAGE */}

                <button
                  type="button"
                  onClick={() => openProject(project)}
                  aria-label={`View details for ${project.title}`}
                  className="
                    relative z-10 block w-full
                    h-52 shrink-0 overflow-hidden
                    bg-[#080808]/70
                    text-left
                  "
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="
                      w-full h-full
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* IMAGE OVERLAY */}

                  <div className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/70 via-black/5 to-transparent
                    transition-all duration-300
                    group-hover:from-black/80
                  " />

                  {/* EXPLORE BUTTON */}

                  <div className="
                    absolute inset-0
                    flex items-center justify-center
                  ">

                    <span className="
                      inline-flex items-center gap-2
                      px-5 py-2.5
                      rounded-full

                      bg-white/[0.14]
                      border border-white/30

                      backdrop-blur-2xl

                      text-white text-sm font-medium

                      shadow-[0_8px_25px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.25)]

                      opacity-0
                      translate-y-3

                      group-hover:opacity-100
                      group-hover:translate-y-0

                      transition-all duration-300
                    ">
                      Explore Project
                      <ArrowRight size={15} />
                    </span>

                  </div>

                </button>

                {/* PROJECT CONTENT */}

                <div className="
                  relative z-10
                  flex flex-1 flex-col
                  p-6
                ">

                  {/* TECHNOLOGY TAGS */}

                  <div className="
                    flex flex-wrap gap-2 mb-5
                  ">

                    {project.tags.map((tag) => (

                      <span
                        key={tag}
                        className="
                          px-3 py-1.5
                          rounded-full

                          bg-white/[0.075]
                          border border-white/[0.14]

                          backdrop-blur-xl

                          text-xs text-white/65

                          shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]

                          transition-all duration-300

                          hover:border-blue-300/40
                          hover:text-[#70B7FF]
                        "
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                  {/* PROJECT TITLE */}

                  <button
                    type="button"
                    onClick={() => openProject(project)}
                    className="
                      text-left
                      text-xl font-semibold
                      tracking-tight
                      text-white
                      hover:text-[#70B7FF]
                      transition-colors duration-300
                    "
                  >
                    {project.title}
                  </button>

                  <p className="
                    mt-2 text-sm text-white/50
                  ">
                    {project.shortDesc}
                  </p>

                  {/* ACTIONS - ALIGNED AT BOTTOM */}

                  <div className="
                    mt-auto flex flex-wrap gap-3
                    border-t border-white/[0.14]
                    pt-6 mt-7
                  ">

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        px-4 py-2.5
                        rounded-full

                        bg-gradient-to-br
                        from-[#1688F5]
                        to-[#0066CC]

                        border border-blue-300/30

                        text-white text-sm font-medium

                        shadow-[0_5px_20px_rgba(0,113,227,0.20),inset_0_1px_0_rgba(255,255,255,0.20)]

                        hover:shadow-[0_8px_25px_rgba(0,113,227,0.35)]
                        hover:-translate-y-0.5

                        transition-all duration-300
                      "
                    >
                      <Github size={15} />
                      Code
                    </a>

                    {project.demoUrl && (

                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          px-4 py-2.5
                          rounded-full

                          bg-white/[0.07]
                          border border-white/20

                          backdrop-blur-xl

                          text-[#70B7FF] text-sm font-medium

                          hover:bg-blue-500/15
                          hover:border-blue-300/40

                          transition-all duration-300
                        "
                      >
                        Live Demo
                        <ExternalLink size={14} />
                      </a>

                    )}

                  </div>

                </div>

              </motion.article>

            ))}

          </AnimatePresence>

        </motion.div>

        {/* EMPTY STATE */}

        {filteredProjects.length === 0 && (
          <p className="
            text-center text-white/50 py-12
          ">
            No projects found in this category.
          </p>
        )}

        {/* GITHUB CTA */}

        <div className="
          mt-20 text-center
        ">

          <p className="
            text-white/45 text-sm mb-5
          ">
            Want to explore more of my work?
          </p>

          <a
            href="https://github.com/PranavChamoli06"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              px-7 py-3.5
              rounded-full

              border border-blue-300/30

              bg-gradient-to-br
              from-[#1688F5]
              to-[#0066CC]

              text-white font-medium

              shadow-[0_8px_30px_rgba(0,113,227,0.22),inset_0_1px_0_rgba(255,255,255,0.22)]

              hover:shadow-[0_12px_35px_rgba(0,113,227,0.35)]
              hover:scale-[1.03]

              transition-all duration-300
            "
          >
            Check My GitHub
            <ArrowRight size={17} />
          </a>

        </div>

      </div>

      {/* PROJECT DETAIL MODAL */}

      <AnimatePresence>

        {activeProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-[10000]
              bg-black/80
              backdrop-blur-xl
              flex items-center justify-center
              p-3 md:p-8
            "
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeProject();
              }
            }}
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="
                relative isolate
                w-full max-w-5xl
                max-h-[90vh]
                overflow-hidden
                rounded-[28px]

                border border-white/20

                bg-gradient-to-br
                from-[#242831]/95
                via-[#15171D]/95
                to-[#080B14]/95

                backdrop-blur-3xl
                backdrop-saturate-200

                shadow-[0_30px_100px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.20)]
              "
            >

              {/* MODAL AMBIENT LIGHT */}

              <div className="
                pointer-events-none absolute
                -top-40 right-[-5%]
                h-96 w-96 rounded-full
                bg-blue-500/[0.14]
                blur-[110px]
              " />

              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={closeProject}
                aria-label="Close project details"
                className="
                  absolute top-4 right-4 z-30
                  w-10 h-10
                  flex items-center justify-center
                  rounded-full

                  bg-white/[0.12]
                  border border-white/25

                  backdrop-blur-2xl

                  text-white

                  hover:bg-blue-500/50
                  hover:border-blue-300/40

                  transition-all duration-300
                "
              >
                <X size={19} />
              </button>

              {/* MODAL SCROLL AREA */}

              <div className="
                relative z-10
                max-h-[90vh]
                overflow-y-auto scrollbar-hide
              ">

                <div className="
                  grid grid-cols-1
                  md:grid-cols-[42%_58%]
                ">

                  {/* PROJECT IMAGE */}

                  <div className="
                    relative
                    min-h-[250px] md:min-h-[600px]
                    bg-[#080808]/70
                    flex items-center justify-center
                    overflow-hidden
                  ">

                    <img
                      src={activeProject.image}
                      alt=""
                      className="
                        absolute inset-0
                        w-full h-full
                        object-cover
                        blur-2xl scale-110
                        opacity-25
                      "
                    />

                    <div className="
                      absolute inset-0
                      bg-black/40
                    " />

                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="
                        relative z-10
                        w-full h-full
                        max-h-[350px] md:max-h-[600px]
                        object-contain
                        p-5 md:p-8
                      "
                    />

                    {/* IMAGE CAPTION */}

                    <div className="
                      absolute inset-x-0 bottom-0
                      z-20 p-6
                      bg-gradient-to-t
                      from-black/90 to-transparent
                    ">

                      <p className="
                        text-xs uppercase
                        tracking-widest
                        text-white/50 mb-2
                      ">
                        Featured Project
                      </p>

                      <h3 className="
                        text-xl md:text-2xl
                        font-semibold text-white
                      ">
                        {activeProject.title}
                      </h3>

                    </div>

                  </div>

                  {/* PROJECT DETAILS */}

                  <div className="
                    relative
                    p-6 md:p-10
                  ">

                    {/* PROJECT OVERVIEW */}

                    <div className="mb-7">

                      <div className="
                        flex items-center gap-2
                        text-[#2997FF] mb-4
                      ">

                        <Layers3 size={17} />

                        <span className="
                          text-xs uppercase
                          tracking-[0.2em]
                          font-medium
                        ">
                          Project Overview
                        </span>

                      </div>

                      <h2
                        id="project-modal-title"
                        className="
                          text-2xl md:text-4xl
                          font-semibold tracking-tight
                          text-white
                        "
                      >
                        {activeProject.title}
                      </h2>

                    </div>

                    {/* DESCRIPTION */}

                    <div className="mb-8">

                      <p className="
                        text-white/60
                        text-sm md:text-base
                        leading-8
                      ">
                        {activeProject.details.description}
                      </p>

                    </div>

                    {/* TECHNOLOGIES */}

                    <div className="mb-8">

                      <h3 className="
                        text-lg font-semibold
                        mb-4 text-white
                      ">
                        Technologies
                      </h3>

                      <div className="
                        flex flex-wrap gap-2
                      ">

                        {activeProject.details.technologies.map(
                          (tech) => (

                            <span
                              key={tech}
                              className="
                                px-3 py-2
                                rounded-full

                                bg-blue-400/[0.10]
                                border border-blue-300/20

                                backdrop-blur-xl

                                text-[#80BDFF]
                                text-sm

                                shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]
                              "
                            >
                              {tech}
                            </span>

                          )
                        )}

                      </div>

                    </div>

                    {/* FEATURES */}

                    <div className="mb-9">

                      <h3 className="
                        text-lg font-semibold
                        mb-4 text-white
                      ">
                        Key Features
                      </h3>

                      <div className="space-y-3">

                        {activeProject.details.features.map(
                          (feature) => (

                            <div
                              key={feature}
                              className="
                                flex items-start gap-3
                                text-sm text-white/60
                              "
                            >

                              <span className="
                                text-[#2997FF]
                                text-lg leading-5
                              ">
                                •
                              </span>

                              <span>{feature}</span>

                            </div>

                          )
                        )}

                      </div>

                    </div>

                    {/* MODAL ACTIONS */}

                    <div className="
                      flex flex-wrap gap-3
                      pt-5
                      border-t border-white/[0.15]
                    ">

                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          px-5 py-3
                          rounded-full

                          bg-gradient-to-br
                          from-[#1688F5]
                          to-[#0066CC]

                          border border-blue-300/30

                          text-white text-sm font-medium

                          shadow-[0_5px_20px_rgba(0,113,227,0.20),inset_0_1px_0_rgba(255,255,255,0.20)]

                          hover:shadow-[0_8px_25px_rgba(0,113,227,0.35)]

                          transition-all duration-300
                        "
                      >
                        <Github size={17} />
                        View Code
                      </a>

                      {activeProject.demoUrl && (

                        <a
                          href={activeProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex items-center gap-2
                            px-5 py-3
                            rounded-full

                            bg-white/[0.07]
                            border border-white/20

                            backdrop-blur-xl

                            text-[#70B7FF]
                            text-sm font-medium

                            hover:bg-blue-500/15
                            hover:border-blue-300/40

                            transition-all duration-300
                          "
                        >
                          <ExternalLink size={17} />
                          Live Demo
                        </a>

                      )}

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};
