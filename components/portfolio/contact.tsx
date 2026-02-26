import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:px-0">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 font-mono text-base text-primary">
          04. What{"'"}s Next?
        </p>
        <h2 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
          Get In Touch
        </h2>
        <p className="mx-auto mb-10 max-w-lg leading-relaxed text-muted-foreground">
          I am currently looking for new opportunities to grow as a Senior
          Frontend Developer. Whether you have a question or just want to say
          hi, my inbox is always open.
        </p>

        <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href="mailto:phankd1212@gmail.com"
            className="flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail size={16} className="text-primary" />
            phankd1212@gmail.com
          </a>
          <a
            href="tel:+84941223216"
            className="flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone size={16} className="text-primary" />
            0941 223 216
          </a>
          <span className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <MapPin size={16} className="text-primary" />
            Tan Binh, HCM
          </span>
        </div>

        <a
          href="mailto:phankd1212@gmail.com"
          className="inline-block rounded border border-primary px-8 py-4 font-mono text-sm text-primary transition-all hover:bg-primary/10"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
