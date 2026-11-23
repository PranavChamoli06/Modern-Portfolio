
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
    value: "+91 6398050457",
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
      className="relative bg-black px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-5xl">

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

        {/* Contact Details */}
        <div className="mx-auto max-w-3xl divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 py-7"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
                  <Icon className="h-5 w-5 text-[#0071E3]" />
                </div>

                {/* Label and Value */}
                <div className="grid min-w-0 flex-1 grid-cols-[80px_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-5">

                  <p className="text-left text-sm text-white/40">
                    {item.label}
                  </p>

                  <p className="break-words text-left text-base font-medium text-[#F5F5F7] sm:text-lg">
                    {item.value}
                  </p>

                </div>

                {/* Action */}
                {item.href && (
                  <a
                    href={item.href}
                    aria-label={`${item.label}: ${item.value}`}
                    className="shrink-0 rounded-full p-3 text-white/40 transition-colors duration-300 hover:bg-white/[0.06] hover:text-[#0071E3]"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Email CTA */}
        <div className="mt-14 text-center">
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
