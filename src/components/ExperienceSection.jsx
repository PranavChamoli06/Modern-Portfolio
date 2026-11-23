
import { Briefcase, CalendarDays, ShieldCheck } from "lucide-react";

const experiences = [
  {
    company: "Panacea Infosec Private Limited",
    role: "Intern – Consulting",
    duration: "Jan 2026 – May 2026",
    description:
      "Gained exposure to cybersecurity consulting, compliance processes, and audit-related workflows. Observed and understood project-based consulting practices in a professional corporate environment.",
    skills: [
      "ISO Compliance",
      "Audit Documentation",
      "Risk Assessment",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative bg-black text-[#F5F5F7] py-28 md:py-36 px-5 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="text-sm font-medium tracking-[0.25em] uppercase text-[#0071E3]">
            Professional Journey
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            My <span className="text-[#0071E3]">Experience.</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed">
            Learning, contributing, and growing through
            real-world professional experiences.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Timeline Line */}
          <div className="absolute left-[21px] md:left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-[#0071E3]/70 via-white/10 to-transparent" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-16 md:pl-20"
            >

              {/* Timeline Icon */}
              <div className="
                absolute left-0 top-7
                w-11 h-11 md:w-14 md:h-14
                rounded-full
                flex items-center justify-center
                bg-[#111111]
                border border-[#0071E3]/40
                shadow-[0_0_25px_rgba(0,113,227,0.12)]
                z-10
              ">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-[#0071E3]" />
              </div>

              {/* Experience Card */}
              <article className="
                group relative
                p-6 md:p-10
                rounded-2xl
                bg-[#111111]
                border border-white/[0.08]
                transition-all duration-300
                hover:border-[#0071E3]/40
              ">

                {/* Card Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-8">

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-4 h-4 text-[#0071E3]" />

                      <span className="text-xs uppercase tracking-[0.2em] text-[#0071E3] font-medium">
                        Professional Experience
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                      {exp.role}
                    </h3>

                    <p className="mt-3 text-base md:text-lg text-white/60">
                      {exp.company}
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="
                    inline-flex items-center gap-2
                    self-start
                    px-4 py-2
                    rounded-full
                    bg-white/[0.05]
                    border border-white/[0.08]
                    text-sm text-white/60
                    whitespace-nowrap
                  ">
                    <CalendarDays className="w-4 h-4 text-[#0071E3]" />
                    {exp.duration}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/[0.08] mb-7" />

                {/* Description */}
                <div>
                  <h4 className="text-sm font-medium text-white/80 mb-3">
                    Overview
                  </h4>

                  <p className="text-sm md:text-base leading-8 text-white/50">
                    {exp.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-white/80 mb-4">
                    Areas of Exposure
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-4 py-2
                          rounded-full
                          bg-[#0071E3]/[0.08]
                          border border-[#0071E3]/20
                          text-sm text-[#65AEFF]
                          transition-all duration-300
                          hover:bg-[#0071E3]/15
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </article>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-20 text-center">
          <p className="text-sm md:text-base text-white/35 tracking-wide">
            Every experience is an opportunity to grow.
          </p>
        </div>

      </div>
    </section>
  );
};
