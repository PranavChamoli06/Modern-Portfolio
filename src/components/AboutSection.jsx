
import { Briefcase, Code2, Database } from "lucide-react";

const expertise = [
  {
    number: "01",
    icon: Code2,
    title: "Software Development",
    description:
      "Building scalable desktop and web applications with modern tools and clean code practices.",
    tags: ["Application Development", "Clean Code"],
  },
  {
    number: "02",
    icon: Database,
    title: "Backend Development",
    description:
      "Developing robust server-side applications and working with databases to power dynamic systems.",
    tags: ["Server-side Systems", "Databases"],
  },
  {
    number: "03",
    icon: Briefcase,
    title: "Project Execution",
    description:
      "Managing projects from concept to deployment using agile methodologies.",
    tags: ["Planning", "Deployment"],
  },
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-28 md:py-36 px-5 overflow-hidden bg-black text-[#F5F5F7]"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="text-sm font-medium tracking-[0.25em] uppercase text-[#0071E3]">
            Get to know me
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            About <span className="text-[#0071E3]">Me.</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-white/55">
            A developer passionate about building efficient,
            functional, and user-friendly applications.
          </p>
        </div>

        {/* Personal Statement */}
        <div className="relative max-w-4xl mx-auto mb-24 text-center">
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-40 h-40 bg-[#0071E3]/10 blur-[90px] rounded-full pointer-events-none" />

          <p className="relative text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-relaxed">
            "Code with purpose,
            <span className="text-[#0071E3]"> build with heart.</span>"
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="
                  group relative flex flex-col
                  min-h-[320px] p-7 md:p-8
                  rounded-2xl
                  bg-[#111111]
                  border border-white/[0.08]
                  transition-all duration-500
                  hover:border-[#0071E3]/50
                  hover:-translate-y-2
                  opacity-0
                  animate-fade-in-delay-2
                "
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-12">
                  <span className="text-sm font-medium tracking-widest text-white/30">
                    {item.number}
                  </span>

                  <div className="
                    flex items-center justify-center
                    w-12 h-12 rounded-xl
                    bg-[#0071E3]/10
                    border border-[#0071E3]/20
                    transition-all duration-300
                    group-hover:bg-[#0071E3]/20
                  ">
                    <Icon className="w-6 h-6 text-[#0071E3]" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex-1">
                  <h3 className="
                    text-xl md:text-2xl
                    font-semibold tracking-tight
                    text-white
                    mb-4
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    text-sm md:text-base
                    leading-relaxed
                    text-white/50
                  ">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between mt-8 pt-5 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          text-xs px-3 py-1.5
                          rounded-full
                          bg-white/[0.05]
                          text-white/50
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="mt-20 text-center">
          <p className="text-sm md:text-base text-white/35 tracking-wide">
            Always learning. Always building. Always improving.
          </p>
        </div>

      </div>
    </section>
  );
};
