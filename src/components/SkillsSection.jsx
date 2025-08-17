export const SkillsSection = () => {
  const mySkills = [
    { name: "Java", level: 85 },
    { name: "Spring Boot", level: 50 },
    { name: "Python", level: 90 },
    { name: "Java Swing (Desktop GUI)", level: 85 },
    { name: "JDBC (Database Connectivity)", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Machine Larning (scikit-learn)", level: 75},
    // { name: "Rest API's", level: 50},
  ];

  const tools = [
    "Git & GitHub",
    "MySQL Workbench",
    "VS Code",
    "IntelliJ IDEA",
    "Tkinter",
    "Command-Line Tools",
    "MySQL",
    "Java",
    "Python"
  ];

  const renderSkillCard = (skill, key) => (
    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
      <div className="text-left mb-4">
        <h3 className="font-semibold text-lg">{skill.name}</h3>
      </div>
      <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
        <div
          className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
          style={{ width: skill.level + "%" }}
        />
      </div>
      <div className="text-right mt-1">
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* My Skills */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mySkills.map(renderSkillCard)}
        </div>

        {/* Tools & Technologies */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Tools & Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool, key) => (
            <span
              key={key}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
