import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Panacea Infosec Private Limited",
    role: "Intern – Consulting",
    duration: "Jan 2026 – May 2026",
    description:
      " Gained exposure to cybersecurity consulting, compliance processes, and audit-related workflows. Observed and understood project-based consulting practices in a professional corporate environment",
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
      className="py-24 px-4 relative z-10"
    >
      <div className="container mx-auto max-w-5xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-primary/30 ml-4 md:ml-10">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-16 ml-8 relative"
            >

              {/* Timeline Dot */}
              <div className="absolute -left-[50px] top-10">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center backdrop-blur-md">
                  <Briefcase className="text-primary w-5 h-5" />
                </div>
              </div>

              {/* Card */}
              <div
                className="
                  bg-card/60
                  backdrop-blur-md
                  border border-white/10
                  rounded-2xl
                  p-8
                  transition-all duration-300
                  hover:border-primary/30
                  hover:shadow-[0_10px_40px_rgba(139,92,246,0.2)]
                "
              >

                {/* Date */}
                <div className="flex justify-end items-center gap-2 text-muted-foreground text-sm mb-6">
                  <Calendar size={16} />
                  <span>{exp.duration}</span>
                </div>

                {/* Centered Content */}
                <div className="text-center">

                  <h3 className="text-3xl font-bold mb-2">
                    {exp.role}
                  </h3>

                  <p className="text-primary font-semibold text-lg mb-8">
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-3">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="
                          px-4 py-2
                          rounded-full
                          text-sm
                          bg-primary/10
                          text-primary
                          border border-primary/20
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};