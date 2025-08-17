import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to connect.
        </p>

        {/* Blurred Box with Contact Info */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-xl shadow-lg max-w-lg mx-auto space-y-6 text-left">
          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <a
                href="mailto:pranavchamoli6@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                pranavchamoli6@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Phone</h4>
              <a
                href="tel:+916398050457"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91 6398050457
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-muted-foreground">
                Dehradun, Uttarakhand, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
