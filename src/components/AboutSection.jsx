
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
      className="
        relative isolate overflow-hidden
        px-5 py-28 md:py-36
        bg-transparent text-[#F5F5F7]
      "
    >
      {/* AMBIENT BACKGROUND LIGHTING */}

      <div className="
        pointer-events-none absolute
        -top-20 left-[15%]
        h-96 w-96 rounded-full
        bg-blue-600/15 blur-[130px]
      " />

      <div className="
        pointer-events-none absolute
        top-[40%] right-[-10%]
        h-96 w-96 rounded-full
        bg-indigo-500/12 blur-[140px]
      " />

      <div className="
        pointer-events-none absolute
        bottom-0 left-[35%]
        h-80 w-80 rounded-full
        bg-cyan-500/[0.08] blur-[120px]
      " />

      <div className="container relative z-10 mx-auto max-w-6xl">

        {/* SECTION HEADING */}

        <div className="mb-16 md:mb-20 text-center">
          <span className="
            text-sm font-medium uppercase
            tracking-[0.25em] text-[#2997FF]
          ">
            Get to know me
          </span>

          <h2 className="
            mt-5 text-4xl md:text-6xl lg:text-7xl
            font-semibold tracking-tight
          ">
            About <span className="text-[#0071E3]">Me.</span>
          </h2>

          <p className="
            mt-6 mx-auto max-w-2xl
            text-lg md:text-xl
            leading-relaxed text-white/55
          ">
            A developer passionate about building efficient,
            functional, and user-friendly applications.
          </p>
        </div>

        {/* PHILOSOPHY STATEMENT - MINIMAL DESIGN */}

        <div className="
          relative
          mx-auto mb-20 md:mb-24
          max-w-5xl
          py-10 md:py-14
          text-center
        ">

          <span className="
            text-xs md:text-sm
            font-medium uppercase
            tracking-[0.25em]
            text-[#2997FF]
          ">
            My Philosophy
          </span>

          <p className="
            mt-8
            text-3xl md:text-4xl lg:text-5xl
            font-medium
            tracking-tight
            leading-relaxed
            text-[#F5F5F7]
          ">
            "Code with purpose,
            <span className="text-[#0071E3]">
              {" "}build with heart.
            </span>"
          </p>

        </div>

        {/* EXPERTISE GLASS CARDS */}

        <div className="
          grid grid-cols-1 md:grid-cols-3
          gap-5 md:gap-6
        ">

          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="
                  group relative isolate
                  flex flex-col min-h-[340px]
                  overflow-hidden
                  rounded-[28px]
                  border border-white/[0.20]
                  bg-gradient-to-br
                  from-white/[0.13]
                  via-white/[0.055]
                  to-blue-500/[0.075]
                  backdrop-blur-3xl
                  backdrop-saturate-200
                  shadow-[0_15px_45px_rgba(0,0,0,0.30),inset_0_1px_1px_rgba(255,255,255,0.22)]
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-blue-300/40
                  hover:shadow-[0_22px_65px_rgba(0,0,0,0.40),0_0_35px_rgba(0,113,227,0.15),inset_0_1px_1px_rgba(255,255,255,0.3)]
                "
              >

                {/* TOP SPECULAR REFLECTION */}

                <div className="
                  pointer-events-none absolute
                  inset-x-8 top-0 h-px
                  bg-gradient-to-r
                  from-transparent via-white/75 to-transparent
                " />

                {/* GLASS LIGHT REFLECTION */}

                <div className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-br
                  from-white/[0.09]
                  via-transparent
                  to-blue-400/[0.08]
                  opacity-80
                  transition-opacity duration-500
                  group-hover:opacity-100
                " />

                {/* AMBIENT LIGHT INSIDE CARD */}

                <div className="
                  pointer-events-none absolute
                  -right-20 -top-20
                  h-64 w-64 rounded-full
                  bg-blue-400/[0.16]
                  blur-[85px]
                  transition-all duration-700
                  group-hover:bg-blue-400/[0.25]
                  group-hover:scale-125
                " />

                <div className="
                  pointer-events-none absolute
                  -bottom-24 -left-20
                  h-52 w-52 rounded-full
                  bg-indigo-500/[0.09]
                  blur-[80px]
                " />

                {/* CARD CONTENT */}

                <div className="
                  relative z-10
                  flex flex-col flex-1
                  p-7 md:p-8
                ">

                  {/* CARD HEADER */}

                  <div className="
                    flex items-center justify-between
                    mb-12
                  ">
                    <span className="
                      text-sm font-medium
                      tracking-widest text-white/45
                    ">
                      {item.number}
                    </span>

                    <div className="
                      flex items-center justify-center
                      h-14 w-14 rounded-2xl
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
                      <Icon
                        size={25}
                        strokeWidth={1.8}
                        className="text-[#2997FF]"
                      />
                    </div>
                  </div>

                  {/* CARD TEXT */}

                  <div className="flex-1">
                    <h3 className="
                      text-xl md:text-2xl
                      font-semibold tracking-tight
                      text-white mb-4
                    ">
                      {item.title}
                    </h3>

                    <p className="
                      text-sm md:text-base
                      leading-relaxed text-white/65
                    ">
                      {item.description}
                    </p>
                  </div>

                  {/* CARD TAGS */}

                  <div className="
                    flex flex-wrap gap-2
                    mt-8 pt-5
                    border-t border-white/[0.15]
                  ">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border border-white/[0.16]
                          bg-white/[0.09]
                          px-3 py-2
                          text-xs font-medium
                          text-white/70
                          backdrop-blur-xl
                          shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]
                          transition-all duration-300
                          group-hover:bg-white/[0.13]
                          group-hover:border-white/25
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

        {/* CLOSING STATEMENT */}

        <div className="mt-20 text-center">
          <div className="
            inline-flex items-center gap-3
            rounded-full
            border border-white/15
            bg-white/[0.07]
            px-6 py-3
            backdrop-blur-2xl
            shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]
          ">
            <span className="
              h-2 w-2 rounded-full
              bg-[#2997FF]
              shadow-[0_0_12px_rgba(41,151,255,0.9)]
            " />

            <p className="
              text-xs md:text-sm
              text-white/65 tracking-wide
            ">
              Always learning. Always building. Always improving.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
