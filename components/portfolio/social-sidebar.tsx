"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/khangpd1212",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/khang-ph%E1%BA%A1m-b69b48230",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:phankd1212@gmail.com",
    label: "Email",
  },
];

export function SocialSidebar() {
  return (
    <>
      {/* Left social bar */}
      <div className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-6 lg:flex xl:left-10">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all hover:-translate-y-1 hover:text-primary"
            aria-label={link.label}
          >
            <link.icon size={20} />
          </a>
        ))}
        <div className="h-24 w-px bg-muted-foreground" />
      </div>

      {/* Right email bar */}
      <div className="fixed right-6 bottom-0 z-40 hidden flex-col items-center gap-6 lg:flex xl:right-10">
        <a
          href="mailto:phankd1212@gmail.com"
          className="font-mono text-xs tracking-widest text-muted-foreground transition-all hover:-translate-y-1 hover:text-primary"
          style={{ writingMode: "vertical-rl" }}
        >
          phankd1212@gmail.com
        </a>
        <div className="h-24 w-px bg-muted-foreground" />
      </div>
    </>
  );
}
