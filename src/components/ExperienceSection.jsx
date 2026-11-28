
import {
  Briefcase,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

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
      className="
        relative isolate overflow-hidden
        bg-transparent text-[#F5F5F7]
        py-28 md:py-36 px-5
      "
    >
      {/* AMBIENT BACKGROUND LIGHTING */}

      <div className="
        pointer-events-none absolute
        -top-20 left-[15%]
        h-96 w-96 rounded-full
        bg-blue-600/[0.13] blur-[130px]
      " />

      <div className="
        pointer-events-none absolute
        top-[45%] right-[-10%]
        h-96 w-96 rounded-full
        bg-indigo-500/[0.10] blur-[140px]
      " />

      <div className="
        pointer-events-none absolute
        bottom-0 left-[30%]
        h-80 w-80 rounded-full
        bg-cyan-500/[0.07] blur-[120px]
      " />

      <div className="
        container relative z-10
        mx-auto max-w-6xl
      ">

        {/* SECTION HEADING */}

        <div className="text-center mb-20">

          <span className="
            text-sm font-medium
            tracking-[0.25em] uppercase
            text-[#0071E3]
          ">
            Professional Journey
          </span>

          <h2 className="
            mt-5
            text-4xl md:text-6xl lg:text-7xl
            font-semibold tracking-tight
          ">
            My{" "}
            <span className="text-[#0071E3]">
              Experience.
            </span>
          </h2>

          <p className="
            mt-6 max-w-2xl mx-auto
            text-lg md:text-xl
            text-white/50 leading-relaxed
          ">
            Learning, contributing, and growing through
            real-world professional experiences.
          </p>

        </div>

        {/* EXPERIENCE TIMELINE */}

        <div className="
          relative max-w-4xl mx-auto
        ">

          {/* TIMELINE LINE */}

          <div className="
            absolute
            left-[21px] md:left-[27px]
            top-8 bottom-8
            w-px
            bg-gradient-to-b
            from-[#2997FF]/80
            via-blue-400/20
            to-transparent
          " />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-16 md:pl-20"
            >

              {/* TIMELINE GLASS ICON */}

              <div className="
                absolute left-0 top-7 z-20
                flex items-center justify-center
                w-11 h-11 md:w-14 md:h-14
                rounded-full

                border border-white/25

                bg-gradient-to-br
                from-white/[0.16]
                via-white/[0.07]
                to-blue-500/[0.12]

                backdrop-blur-2xl
                backdrop-saturate-200

                shadow-[0_8px_30px_rgba(0,0,0,0.30),0_0_25px_rgba(0,113,227,0.16),inset_0_1px_1px_rgba(255,255,255,0.25)]
              ">
                <Briefcase className="
                  w-5 h-5 md:w-6 md:h-6
                  text-[#2997FF]
                " />
              </div>

              {/* EXPERIENCE GLASS CARD */}

              <article className="
                group relative isolate
                overflow-hidden

                p-6 md:p-10
                rounded-[28px]

                border border-white/[0.19]

                bg-gradient-to-br
                from-white/[0.12]
                via-white/[0.045]
                to-blue-500/[0.07]

                backdrop-blur-3xl
                backdrop-saturate-200

                shadow-[0_18px_55px_rgba(0,0,0,0.30),inset_0_1px_1px_rgba(255,255,255,0.22)]

                transition-all duration-500

                hover:-translate-y-1
                hover:border-blue-300/40

                hover:shadow-[0_24px_65px_rgba(0,0,0,0.40),0_0_35px_rgba(0,113,227,0.12),inset_0_1px_1px_rgba(255,255,255,0.30)]
              ">

                {/* TOP REFLECTION */}

                <div className="
                  pointer-events-none absolute
                  inset-x-10 top-0 h-px
                  bg-gradient-to-r
                  from-transparent via-white/70 to-transparent
                " />

                {/* GLASS SURFACE */}

                <div className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-br
                  from-white/[0.08]
                  via-transparent
                  to-blue-400/[0.08]
                  opacity-80
                  transition-opacity duration-500
                  group-hover:opacity-100
                " />

                {/* AMBIENT LIGHT */}

                <div className="
                  pointer-events-none absolute
                  -right-24 -top-24
                  h-72 w-72 rounded-full
                  bg-blue-400/[0.16]
                  blur-[100px]
                  transition-all duration-700
                  group-hover:scale-125
                  group-hover:bg-blue-400/[0.24]
                " />

                <div className="
                  pointer-events-none absolute
                  -bottom-28 -left-20
                  h-64 w-64 rounded-full
                  bg-indigo-500/[0.09]
                  blur-[100px]
                " />

                {/* CARD CONTENT */}

                <div className="
                  relative z-10
                ">

                  {/* CARD HEADER */}

                  <div className="
                    flex flex-col
                    md:flex-row
                    md:items-start
                    md:justify-between
                    gap-6 mb-8
                  ">

                    <div>

                      <div className="
                        flex items-center gap-2 mb-5
                      ">

                        <ShieldCheck className="
                          w-4 h-4 text-[#2997FF]
                        " />

                        <span className="
                          text-xs uppercase
                          tracking-[0.2em]
                          text-[#2997FF]
                          font-medium
                        ">
                          Professional Experience
                        </span>

                      </div>

                      <h3 className="
                        text-2xl md:text-3xl
                        font-semibold tracking-tight
                        text-white
                      ">
                        {exp.role}
                      </h3>

                      <p className="
                        mt-3 text-base md:text-lg
                        text-white/60
                      ">
                        {exp.company}
                      </p>

                    </div>

                    {/* GLASS DATE BADGE */}

                    <div className="
                      inline-flex items-center gap-2
                      self-start
                      px-4 py-2.5
                      rounded-full

                      border border-white/[0.18]

                      bg-gradient-to-br
                      from-white/[0.13]
                      to-white/[0.045]

                      backdrop-blur-2xl

                      shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]

                      text-sm text-white/75
                      whitespace-nowrap
                    ">
                      <CalendarDays className="
                        w-4 h-4 text-[#2997FF]
                      " />

                      {exp.duration}
                    </div>

                  </div>

                  {/* REFLECTIVE DIVIDER */}

                  <div className="
                    h-px mb-8
                    bg-gradient-to-r
                    from-white/20
                    via-white/[0.08]
                    to-transparent
                  " />

                  {/* EXPERIENCE OVERVIEW */}

                  <div>

                    <h4 className="
                      text-sm font-semibold
                      text-white/85 mb-3
                    ">
                      Overview
                    </h4>

                    <p className="
                      text-sm md:text-base
                      leading-8 text-white/60
                    ">
                      {exp.description}
                    </p>

                  </div>

                  {/* AREAS OF EXPOSURE */}

                  <div className="mt-9">

                    <h4 className="
                      text-sm font-semibold
                      text-white/85 mb-4
                    ">
                      Areas of Exposure
                    </h4>

                    <div className="
                      flex flex-wrap gap-3
                    ">

                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="
                            px-4 py-2.5
                            rounded-full

                            border border-blue-300/20

                            bg-gradient-to-br
                            from-blue-400/[0.15]
                            to-blue-500/[0.055]

                            backdrop-blur-xl

                            text-sm text-[#80BDFF]

                            shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]

                            transition-all duration-300

                            hover:bg-blue-400/[0.20]
                            hover:border-blue-300/40
                            hover:text-white
                          "
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

              </article>

            </div>
          ))}

        </div>

        {/* CLOSING STATEMENT */}

        <div className="mt-20 text-center">

          <p className="
            text-sm md:text-base
            text-white/40 tracking-wide
          ">
            Every experience is an opportunity to grow.
          </p>

        </div>

      </div>
    </section>
  );
};
