import { useEffect, useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Github,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Hotel Reservation Management System",
    category: ["java-core", "full-stack"],
    shortDesc: "A full-stack hotel reservation management system",
    image: "/projects/hrms.png",
    tags: [
      "Java",
      "Spring Boot",
      "MySQL",
      "JWT",
      "REST API",
      "React",
    ],
    githubUrl:
      "https://github.com/PranavChamoli06/Full-Stack-HRMS",
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
    tags: [
      "JavaScript",
      "Node.js",
      "React.js",
      "Express.js",
      "CSS3",
    ],
    githubUrl:
      "https://github.com/PranavChamoli06/expense-tracker",
    demoUrl:
      "https://expense-tracker-omega-indol-39.vercel.app/",

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
    tags: [
      "Python",
      "Tkinter",
      "Graphviz",
    ],
    githubUrl:
      "https://github.com/PranavChamoli06/Hinglish-Compiler",
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

      technologies: [
        "Python",
        "Tkinter",
        "Graphviz",
      ],
    },
  },

  {
    id: 4,
    title: "Real-Time Face Recognition",
    category: ["python"],
    shortDesc: "Real-time Computer Vision",
    image: "/projects/face-recognition.jpeg",
    tags: [
      "Python",
      "OpenCV",
      "Mediapipe",
    ],
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

      technologies: [
        "Python",
        "OpenCV",
        "MediaPipe",
      ],
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

      technologies: [
        "Java",
        "Swing",
        "AWT",
      ],
    },
  },
];

const categories = [
  "all",
  "java-core",
  "python",
  "full-stack",
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] =
    useState("all");

  const [activeProject, setActiveProject] =
    useState(null);

  /* ======================================================
     ESC KEY
  ====================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* ======================================================
     LOCK BACKGROUND SCROLL
  ====================================================== */

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  /* ======================================================
     FILTER PROJECTS
  ====================================================== */

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.category.includes(activeCategory)
        );

  /* ======================================================
     OPEN PROJECT
  ====================================================== */

  const openProject = (project) => {
    setActiveProject(project);
  };

  /* ======================================================
     CLOSE PROJECT
  ====================================================== */

  const closeProject = () => {
    setActiveProject(null);
  };

  return (
    <section
      id="projects"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl">

        {/* ==================================================
            SECTION TITLE
        ================================================== */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            text-3xl
            md:text-4xl
            font-bold
            mb-12
            text-center
          "
        >
          My{" "}
          <span className="text-primary">
            Projects
          </span>
        </motion.h2>

        {/* ==================================================
            CATEGORY FILTER
        ================================================== */}

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                closeProject();
              }}
              className={`px-5 py-2 rounded-full capitalize transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-secondary/70 hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ==================================================
            PROJECT GRID
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {filteredProjects.map(
            (project, index) => (
              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="
                  group
                  bg-card
                  rounded-lg
                  overflow-hidden
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_15px_40px_rgba(139,92,246,0.25)]
                "
              >

                {/* =================================================
                    PROJECT IMAGE
                ================================================== */}

                <div
                  className="
                    h-48
                    overflow-hidden
                    cursor-pointer
                    relative
                  "
                  onClick={() =>
                    openProject(project)
                  }
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-110
                    "
                  />

                  {/* Hover Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/40
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <span
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-background/90
                        text-sm
                        font-medium
                      "
                    >
                      View Details
                    </span>
                  </div>
                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================== */}

                <div className="p-6">

                  {/* Tags */}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(
                      (tag, i) => (
                        <span
                          key={i}
                          className="
                            px-2
                            py-1
                            text-xs
                            border
                            rounded-full
                            bg-secondary
                            text-secondary-foreground
                          "
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>

                  {/* Title */}

                  <h3
                    onClick={() =>
                      openProject(project)
                    }
                    className="
                      text-xl
                      font-semibold
                      mb-1
                      cursor-pointer
                      transition-colors
                      group-hover:text-primary
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Short Description */}

                  <p
                    className="
                      text-muted-foreground
                      text-sm
                      mb-4
                    "
                  >
                    {project.shortDesc}
                  </p>

                  {/* =================================================
                      CARD ACTION BUTTONS
                  ================================================== */}

                  <div className="flex gap-3">

                    {/* GitHub */}

                    <a
                      href={
                        project.githubUrl
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        cosmic-button
                        flex
                        items-center
                        gap-2
                        text-sm
                      "
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                    >
                      Code
                      <Github size={14} />
                    </a>

                    {/* Demo */}

                    {project.demoUrl && (
                      <a
                        href={
                          project.demoUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          px-4
                          py-2
                          rounded-md
                          flex
                          items-center
                          gap-2
                          bg-gray-300
                          text-gray-800
                          hover:bg-gray-400
                          text-sm
                          transition-colors
                        "
                        onClick={(e) =>
                          e.stopPropagation()
                        }
                      >
                        Demo
                        <ExternalLink
                          size={14}
                        />
                      </a>
                    )}

                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* ==================================================
            GITHUB BUTTON
        ================================================== */}

        <div className="text-center mt-16">
          <a
            className="
              cosmic-button
              w-fit
              flex
              items-center
              mx-auto
              gap-2
            "
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/PranavChamoli06"
          >
            Check My Github
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* ====================================================
          PROJECT DETAIL MODAL
      ===================================================== */}

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              p-4
              md:p-8
              bg-black/75
              backdrop-blur-md
            "
            onMouseDown={(event) => {
              if (
                event.target ===
                event.currentTarget
              ) {
                closeProject();
              }
            }}
          >

            {/* =================================================
                MODAL
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 35,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 25,
              }}
              transition={{
                duration: 0.45,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                relative
                w-full
                max-w-5xl
                h-[88vh]
                overflow-hidden
                rounded-2xl
                bg-card
                border
                border-border/60
                shadow-[0_30px_100px_rgba(0,0,0,0.55)]
              "
              onMouseDown={(event) =>
                event.stopPropagation()
              }
            >

              {/* =================================================
                  CLOSE BUTTON
              ================================================== */}

              <button
                onClick={closeProject}
                aria-label="Close project details"
                className="
                  absolute
                  top-4
                  right-4
                  z-50
                  w-10
                  h-10
                  rounded-full
                  bg-black/60
                  backdrop-blur-md
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:bg-primary
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                <X size={20} />
              </button>

              {/* =================================================
                  HIDDEN-SCROLLBAR CONTAINER
              ================================================== */}

              <div
                className="
                  h-full
                  overflow-y-auto
                  scrollbar-hide
                "
              >

                {/* =================================================
                    TWO COLUMN LAYOUT
                ================================================== */}

                <div
                  className="
                    grid
                    grid-cols-1
                    md:grid-cols-[42%_58%]
                    min-h-full
                  "
                >

                  {/* =================================================
                      LEFT PROJECT IMAGE
                  ================================================== */}

                  <div
                    className="
                      relative
                      h-64
                      md:h-full
                      min-h-[360px]
                      overflow-hidden
                      bg-black
                    "
                  >

                    {/* Blurred Background */}

                    <img
                      src={
                        activeProject.image
                      }
                      alt=""
                      aria-hidden="true"
                      className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        scale-110
                        blur-2xl
                        opacity-40
                      "
                    />

                    {/* Dark Overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-black/40
                      "
                    />

                    {/* Complete Project Image */}

                    <motion.img
                      key={
                        activeProject.id
                      }
                      initial={{
                        scale: 1.08,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                      }}
                      src={
                        activeProject.image
                      }
                      alt={
                        activeProject.title
                      }
                      className="
                        relative
                        z-10
                        w-full
                        h-full
                        object-contain
                        p-5
                        md:p-8
                      "
                    />

                    {/* Bottom Gradient */}

                    <div
                      className="
                        absolute
                        inset-x-0
                        bottom-0
                        h-40
                        bg-gradient-to-t
                        from-black/80
                        to-transparent
                        z-20
                        pointer-events-none
                      "
                    />

                    {/* Project Name */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.25,
                        duration: 0.4,
                      }}
                      className="
                        absolute
                        bottom-6
                        left-6
                        right-6
                        z-30
                      "
                    >
                      <p
                        className="
                          text-white/70
                          text-sm
                          mb-1
                        "
                      >
                        Project
                      </p>

                      <h3
                        className="
                          text-white
                          text-2xl
                          font-bold
                        "
                      >
                        {
                          activeProject.title
                        }
                      </h3>
                    </motion.div>
                  </div>

                  {/* =================================================
                      RIGHT PROJECT DETAILS
                  ================================================== */}

                  <div
                    className="
                      p-6
                      md:p-10
                      flex
                      flex-col
                    "
                  >

                    {/* =================================================
                        PROJECT TITLE
                    ================================================== */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.15,
                        duration: 0.4,
                      }}
                      className="mb-5"
                    >
                      <h2
                        className="
                          text-3xl
                          md:text-4xl
                          font-bold
                        "
                      >
                        {
                          activeProject.title
                        }
                      </h2>
                    </motion.div>

                    {/* =================================================
                        DESCRIPTION
                    ================================================== */}

                    <motion.p
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.22,
                        duration: 0.4,
                      }}
                      className="
                        text-muted-foreground
                        leading-7
                        text-sm
                        md:text-base
                        mb-7
                      "
                    >
                      {
                        activeProject
                          .details
                          .description
                      }
                    </motion.p>

                    {/* =================================================
                        TECHNOLOGIES
                    ================================================== */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.28,
                        duration: 0.4,
                      }}
                      className="mb-7"
                    >
                      <h3
                        className="
                          text-lg
                          font-semibold
                          mb-3
                        "
                      >
                        Technologies
                      </h3>

                      <div className="flex flex-wrap gap-2">

                        {activeProject.details.technologies.map(
                          (
                            tech,
                            index
                          ) => (
                            <motion.span
                              key={tech}
                              initial={{
                                opacity: 0,
                                scale: 0.9,
                              }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                              }}
                              transition={{
                                delay:
                                  0.35 +
                                  index *
                                    0.04,
                              }}
                              className="
                                px-3
                                py-1.5
                                rounded-full
                                bg-secondary
                                text-secondary-foreground
                                text-sm
                              "
                            >
                              {tech}
                            </motion.span>
                          )
                        )}

                      </div>
                    </motion.div>

                    {/* =================================================
                        KEY FEATURES
                    ================================================== */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.32,
                        duration: 0.4,
                      }}
                      className="mb-8"
                    >
                      <h3
                        className="
                          text-lg
                          font-semibold
                          mb-3
                        "
                      >
                        Key Features
                      </h3>

                      <div className="space-y-2.5">

                        {activeProject.details.features.map(
                          (
                            feature,
                            index
                          ) => (
                            <motion.div
                              key={feature}
                              initial={{
                                opacity: 0,
                                x: 10,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                delay:
                                  0.4 +
                                  index *
                                    0.06,
                              }}
                              className="
                                flex
                                items-start
                                gap-2.5
                                text-sm
                                text-muted-foreground
                              "
                            >
                              <span
                                className="
                                  text-primary
                                  text-lg
                                  leading-4
                                "
                              >
                                •
                              </span>

                              <span>
                                {feature}
                              </span>
                            </motion.div>
                          )
                        )}

                      </div>
                    </motion.div>

                    {/* =================================================
                        ACTION BUTTONS
                    ================================================== */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.5,
                        duration: 0.4,
                      }}
                      className="
                        flex
                        flex-wrap
                        gap-3
                        mt-auto
                        pt-4
                      "
                    >

                      {/* GitHub */}

                      <a
                        href={
                          activeProject.githubUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          cosmic-button
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <Github size={17} />
                        View Code
                      </a>

                      {/* Demo */}

                      {activeProject.demoUrl && (
                        <a
                          href={
                            activeProject.demoUrl
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            px-5
                            py-2.5
                            rounded-md
                            flex
                            items-center
                            gap-2
                            bg-gray-300
                            text-gray-800
                            hover:bg-gray-400
                            transition-colors
                          "
                        >
                          <ExternalLink
                            size={17}
                          />
                          Live Demo
                        </a>
                      )}

                    </motion.div>
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