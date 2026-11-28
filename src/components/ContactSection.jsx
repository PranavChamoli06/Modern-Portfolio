
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "pranavchamoli6@gmail.com",
    href: "mailto:pranavchamoli6@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-6398050457",
    href: "tel:+916398050457",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dehradun, Uttarakhand, India",
    href: null,
  },
];

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-6 py-28 md:py-36"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-500/[0.08] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#0071E3]">
            Contact
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#F5F5F7] sm:text-5xl md:text-6xl">
            Let's build something
            <span className="block text-white/45">
              meaningful together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
            Have an opportunity, a project idea, or just want to connect?
            Feel free to reach out. I'd be happy to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">

          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group relative flex min-h-[356px] flex-col overflow-hidden rounded-[32px] border border-white/[0.16] bg-gradient-to-br from-white/[0.16] via-white/[0.06] to-blue-500/[0.10] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_20px_60px_rgba(0,113,227,0.10)] sm:p-10"
              >
                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/[0.10] blur-[70px] transition-opacity duration-500 group-hover:bg-blue-400/[0.16]" />

                {/* Icon */}
                <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] border border-white/[0.22] bg-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl">
                  <Icon className="h-9 w-9 text-[#2997FF]" />
                </div>

                {/* Main Content */}
                <div className="relative flex flex-1 flex-col justify-center py-8 text-center">
                  <p className="mb-5 text-base font-medium text-white/50">
                    {item.label}
                  </p>

                  <p className="break-words text-xl font-semibold leading-snug text-[#F5F5F7] sm:text-2xl">
                    {item.value}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="relative min-h-[28px]">
                  {item.href && (
                    <a
                      href={item.href}
                      aria-label={`Connect via ${item.label}`}
                      className="inline-flex items-center gap-3 text-lg font-medium text-[#2997FF] transition-all duration-300 hover:gap-4 hover:text-[#64B5FF]"
                    >
                      Connect with me
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}

        </div>

        {/* Email CTA */}
        <div className="mt-16 text-center">
          <a
            href="mailto:pranavchamoli6@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#0071E3] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#0066CC] active:scale-[0.98]"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
