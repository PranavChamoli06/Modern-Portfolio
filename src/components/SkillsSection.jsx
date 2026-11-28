
import {
  Code2,
  Server,
  PanelsTopLeft,
  ClipboardCheck,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    description: "Languages and foundations for building applications.",
    icon: Code2,
    skills: ["Java", "Python", "JavaScript"],
  },
  {
    number: "02",
    title: "Backend & Database",
    description: "Server-side development and database connectivity.",
    icon: Server,
    skills: ["Spring Boot", "JDBC", "REST APIs", "MySQL"],
  },
  {
    number: "03",
    title: "Frontend Development",
    description: "Building responsive and user-friendly interfaces.",
    icon: PanelsTopLeft,
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    number: "04",
    title: "Desktop Development",
    description: "Developing desktop applications and graphical interfaces.",
    icon: Code2,
    skills: ["JavaFX"],
  },
  {
    number: "05",
    title: "Testing & Development Practices",
    description: "Understanding software development and quality processes.",
    icon: ClipboardCheck,
    skills: ["Manual Testing", "SDLC"],
  },
];

const tools = [
  "Git & GitHub",
  "MySQL Workbench",
  "VS Code",
  "IntelliJ IDEA",
  "Command-Line Tools",
  "Postman",
];

export const SkillsSection = () => {
  return (
    <section
      id="skills"
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

      <div className="container relative z-10 mx-auto max-w-6xl">

        {/* SECTION HEADING */}

        <div className="text-center mb-20">

          <span className="
            text-sm font-medium
            tracking-[0.25em] uppercase
            text-[#0071E3]
          ">
            What I work with
          </span>

          <h2 className="
            mt-5 text-4xl md:text-6xl lg:text-7xl
            font-semibold tracking-tight
          ">
            My <span className="text-[#0071E3]">Skills.</span>
          </h2>

          <p className="
            mt-6 max-w-2xl mx-auto
            text-lg md:text-xl
            leading-relaxed text-white/50
          ">
            Technologies and tools I use to turn ideas
            into functional digital solutions.
          </p>

        </div>

        {/* STAGGERED GLASS SKILLS GRID */}

        <div className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6
          gap-5 md:gap-6
        ">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            const desktopPosition =
              index === 3
                ? "lg:col-start-2"
                : index === 4
                  ? "lg:col-start-4"
                  : "";

            return (
              <div
                key={group.number}
                className={`
                  group relative isolate
                  col-span-1 md:col-span-1 lg:col-span-2
                  ${desktopPosition}
                  flex flex-col
                  min-h-[270px]
                  overflow-hidden
                  rounded-[26px]
                  p-7 md:p-8

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

                  hover:shadow-[0_22px_60px_rgba(0,0,0,0.40),0_0_30px_rgba(0,113,227,0.12),inset_0_1px_1px_rgba(255,255,255,0.30)]
                `}
              >

                {/* TOP GLASS REFLECTION */}

                <div className="
                  pointer-events-none absolute
                  inset-x-8 top-0 h-px
                  bg-gradient-to-r
                  from-transparent via-white/70 to-transparent
                " />

                {/* GLASS SURFACE */}

                <div className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-br
                  from-white/[0.08]
                  via-transparent
                  to-blue-400/[0.07]
                  opacity-80
                  transition-opacity duration-500
                  group-hover:opacity-100
                " />

                {/* AMBIENT BLUE LIGHT */}

                <div className="
                  pointer-events-none absolute
                  -right-20 -top-20
                  h-64 w-64 rounded-full
                  bg-blue-400/[0.15]
                  blur-[85px]
                  transition-all duration-700
                  group-hover:scale-125
                  group-hover:bg-blue-400/[0.24]
                " />

                <div className="
                  pointer-events-none absolute
                  -bottom-24 -left-20
                  h-48 w-48 rounded-full
                  bg-indigo-500/[0.09]
                  blur-[80px]
                " />

                {/* CARD CONTENT */}

                <div className="
                  relative z-10
                  flex flex-col flex-1
                ">

                  {/* CARD HEADER */}

                  <div className="
                    flex justify-between items-center
                    mb-9
                  ">

                    <span className="
                      text-sm tracking-widest
                      text-white/40 font-medium
                    ">
                      {group.number}
                    </span>

                    <div className="
                      w-12 h-12
                      flex items-center justify-center
                      rounded-2xl

                      border border-white/20

                      bg-gradient-to-br
                      from-white/[0.16]
                      to-blue-500/[0.12]

                      backdrop-blur-2xl

                      shadow-[0_8px_25px_rgba(0,0,0,0.20),inset_0_1px_0_rgba(255,255,255,0.25)]

                      transition-all duration-500

                      group-hover:scale-110
                      group-hover:border-blue-300/40
                    ">
                      <Icon className="
                        w-5 h-5 text-[#2997FF]
                      " />
                    </div>

                  </div>

                  {/* CARD TEXT */}

                  <h3 className="
                    text-xl font-semibold
                    tracking-tight mb-3
                    text-white
                  ">
                    {group.title}
                  </h3>

                  <p className="
                    text-sm text-white/60
                    leading-relaxed mb-7
                  ">
                    {group.description}
                  </p>

                  {/* TECHNOLOGY TAGS */}

                  <div className="
                    flex flex-wrap gap-2
                    mt-auto pt-5
                    border-t border-white/[0.14]
                  ">

                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-2
                          rounded-full

                          border border-white/[0.16]
                          bg-white/[0.08]

                          text-sm text-white/75

                          backdrop-blur-xl

                          shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]

                          transition-all duration-300

                          hover:bg-blue-500/[0.16]
                          hover:text-[#70B7FF]
                          hover:border-blue-400/40
                        "
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* TOOLS & TECHNOLOGIES */}

        <div className="mt-24">

          <div className="text-center mb-12">

            <span className="
              text-sm tracking-[0.25em]
              uppercase text-[#0071E3]
              font-medium
            ">
              My Development Setup
            </span>

            <h3 className="
              mt-4 text-3xl md:text-4xl
              font-semibold tracking-tight
            ">
              Tools &{" "}
              <span className="text-[#0071E3]">
                Technologies.
              </span>
            </h3>

            <p className="
              mt-4 text-white/50
              text-base md:text-lg
            ">
              Tools I use throughout my development workflow.
            </p>

          </div>

          {/* GLASS TOOL PILLS */}

          <div className="
            flex flex-wrap justify-center gap-3
            max-w-4xl mx-auto
          ">

            {tools.map((tool) => (
              <span
                key={tool}
                className="
                  relative overflow-hidden

                  px-5 py-3
                  rounded-full

                  border border-white/[0.17]

                  bg-gradient-to-br
                  from-white/[0.12]
                  to-white/[0.035]

                  backdrop-blur-2xl
                  backdrop-saturate-150

                  text-sm md:text-base
                  text-white/75

                  shadow-[0_5px_20px_rgba(0,0,0,0.20),inset_0_1px_0_rgba(255,255,255,0.16)]

                  transition-all duration-300

                  hover:-translate-y-1
                  hover:border-blue-300/40
                  hover:bg-blue-500/[0.10]
                  hover:text-[#70B7FF]
                "
              >
                {tool}
              </span>
            ))}

          </div>

        </div>

        {/* CLOSING STATEMENT */}

        <div className="mt-20 text-center">

          <p className="
            text-sm md:text-base
            text-white/40 tracking-wide
          ">
            Learning new technologies. Building better solutions.
          </p>

        </div>

      </div>
    </section>
  );
};
