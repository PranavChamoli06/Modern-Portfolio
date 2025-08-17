import { Briefcase, Code, Database } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="flex flex-col gap-12 items-center">
          {/* Top: Intro Text */}
          <div className="space-y-4 text-center">
            <p className="text-muted-foreground text-xl font-medium">
              I enjoy building efficient, functional, and user-friendly applications.
            </p>
            <p className="italic text-primary text-xl font-medium opacity-0 animate-fade-in-delay-1">
              "Code with purpose, build with heart."
            </p>
          </div>

          {/* Bottom: Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="gradient-border p-6 card-hover opacity-0 animate-fade-in-delay-2">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable desktop and web applications with modern tools and clean code practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover opacity-0 animate-fade-in-delay-3">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Developing robust server-side applications and working with databases to power dynamic systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover opacity-0 animate-fade-in-delay-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Execution</h4>
                  <p className="text-muted-foreground">
                    Managing projects from concept to deployment using agile methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
