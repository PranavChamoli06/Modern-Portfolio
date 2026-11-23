
import {
  Code2,
  Server,
  PanelsTopLeft,
  ClipboardCheck,
  Wrench,
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
      className="relative bg-black text-[#F5F5F7] py-28 md:py-36 px-5 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="text-sm font-medium tracking-[0.25em] uppercase text-[#0071E3]">
            What I work with
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            My <span className="text-[#0071E3]">Skills.</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-white/50">
            Technologies and tools I use to turn ideas
            into functional digital solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.number}
                className="
                  group relative
                  p-7 md:p-8
                  min-h-[250px]
                  rounded-2xl
                  bg-[#111111]
                  border border-white/[0.08]
                  transition-all duration-300
                  hover:border-[#0071E3]/50
                  hover:-translate-y-1
                "
              >
                {/* Card Header */}
                <div className="flex justify-between items-center mb-9">
                  <span className="text-sm tracking-widest text-white/30 font-medium">
                    {group.number}
                  </span>

                  <div className="
                    w-11 h-11
                    flex items-center justify-center
                    rounded-xl
                    bg-[#0071E3]/10
                    border border-[#0071E3]/20
                    group-hover:bg-[#0071E3]/20
                    transition-colors duration-300
                  ">
                    <Icon className="w-5 h-5 text-[#0071E3]" />
                  </div>
                </div>

                {/* Card Content */}
                <h3 className="text-xl font-semibold tracking-tight mb-3">
                  {group.title}
                </h3>

                <p className="text-sm text-white/45 leading-relaxed mb-7">
                  {group.description}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-3 py-2
                        rounded-full
                        bg-white/[0.05]
                        border border-white/[0.06]
                        text-sm text-white/70
                        transition-all duration-300
                        hover:bg-[#0071E3]/10
                        hover:text-[#0071E3]
                        hover:border-[#0071E3]/30
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <div className="mt-24">

          <div className="text-center mb-12">
            <span className="text-sm tracking-[0.25em] uppercase text-[#0071E3] font-medium">
              My Development Setup
            </span>

            <h3 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              Tools & <span className="text-[#0071E3]">Technologies.</span>
            </h3>

            <p className="mt-4 text-white/45 text-base md:text-lg">
              Tools I use throughout my development workflow.
            </p>
          </div>

          <div className="
            flex flex-wrap justify-center gap-3
            max-w-4xl mx-auto
          ">
            {tools.map((tool) => (
              <span
                key={tool}
                className="
                  px-5 py-3
                  rounded-full
                  bg-[#111111]
                  border border-white/[0.08]
                  text-sm md:text-base
                  text-white/70
                  transition-all duration-300
                  hover:border-[#0071E3]/50
                  hover:text-[#0071E3]
                  hover:bg-[#0071E3]/[0.05]
                "
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-20 text-center">
          <p className="text-sm md:text-base text-white/35 tracking-wide">
            Learning new technologies. Building better solutions.
          </p>
        </div>

      </div>
    </section>
  );
};
