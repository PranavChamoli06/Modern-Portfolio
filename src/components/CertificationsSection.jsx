
import React from "react";
import {
  Award,
  BrainCircuit,
  ShieldCheck,
  ExternalLink,
  CalendarDays,
  Clock3,
} from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford Online",
    platform: "Coursera",
    date: "May 25, 2025",
    category: "Artificial Intelligence",
    description:
      "Completed training in supervised machine learning, focusing on regression and classification techniques.",
    icon: BrainCircuit,
    credentialId: "POSFD9HNZXRJ",
    link: "https://coursera.org/verify/POSFD9HNZXRJ",
    duration: null,
  },
  {
    id: 2,
    title: "ISO 27001:2022 Lead Auditor: ISMS Audit Step by Step",
    issuer: "Dr. Amar Massoud",
    platform: "Udemy",
    date: "November 11, 2026",
    category: "Cybersecurity",
    description:
      "Completed a 7-hour course covering ISO 27001:2022 Lead Auditor concepts and Information Security Management System (ISMS) auditing.",
    icon: ShieldCheck,
    credentialId:
      "UC-e6f4b084-9468-4c81-83e7-4933425d85d0",
    link:
      "https://ude.my/UC-e6f4b084-9468-4c81-83e7-4933425d85d0",
    duration: "7 Hours",
  },
];

const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Award className="w-10 h-10 text-primary" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Certifications</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning
            that strengthen my knowledge in technology,
            artificial intelligence and cybersecurity.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

          {certifications.map((cert) => {
            const Icon = cert.icon;

            return (
              <div
                key={cert.id}
                className="group relative p-6 md:p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
              >

                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-7">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary">
                    {cert.category}
                  </span>
                </div>

                {/* Certificate Information */}
                <h3 className="text-xl font-semibold mb-3 leading-snug group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-5">
                  {cert.description}
                </p>

                <div className="space-y-3 text-sm mb-7">

                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">
                      {cert.platform} · {cert.issuer}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CalendarDays className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">
                      {cert.date}
                    </span>
                  </div>

                  {cert.duration && (
                    <div className="flex items-center gap-3">
                      <Clock3 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">
                        {cert.duration}
                      </span>
                    </div>
                  )}

                </div>

                {/* Credential Button */}
                <div className="pt-5 border-t border-border">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                  >
                    View Credential
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Always learning. Always improving.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
