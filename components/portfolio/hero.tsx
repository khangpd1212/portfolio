"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col justify-center px-6 pt-20 lg:px-0"
    >
      <div
        className={`mx-auto w-full max-w-4xl transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p
          className="mb-4 font-mono text-base text-primary"
          style={{ transitionDelay: "100ms" }}
        >
          Hi, my name is
        </p>
        <h1 className="mb-2 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          <span className="text-balance">Pham Duy Khang.</span>
        </h1>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-muted-foreground sm:text-4xl lg:text-5xl">
          <span className="text-balance">I build things for the web.</span>
        </h2>
        <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Frontend Developer with 4 years of experience building scalable
          enterprise and healthcare systems. Specializing in{" "}
          <span className="text-primary">React</span>,{" "}
          <span className="text-primary">Vue.js</span>, and{" "}
          <span className="text-primary">TypeScript</span> to craft intuitive
          digital experiences.
        </p>
        <a
          href="#projects"
          className="inline-block rounded border border-primary px-7 py-4 font-mono text-sm text-primary transition-all hover:bg-primary/10"
        >
          Check out my work
        </a>
      </div>
    </section>
  );
}
