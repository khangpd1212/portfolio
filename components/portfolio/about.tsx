export function About() {
  const skills = [
    "TypeScript / JavaScript (ES6)",
    "React.js / Vue.js",
    "TailwindCSS / Ant Design",
    "Redux / Zustand / React-Query",
    "React Hook Form / Zod",
    "RESTful API / Axios",
    "Electron",
    "Vite / Webpack",
    "HTML / CSS",
    "Agile / Scrum",
  ];

  return (
    <section id="about" className="px-6 py-24 lg:px-0">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 flex items-center gap-3 text-2xl font-bold text-foreground">
          <span className="font-mono text-xl text-primary">01.</span>
          About Me
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4 md:col-span-2">
            <p className="leading-relaxed text-muted-foreground">
              I am a Frontend Developer with over 4 years of hands-on experience
              building scalable enterprise and healthcare systems including{" "}
              <span className="text-primary">HIS</span>,{" "}
              <span className="text-primary">ERP</span>,{" "}
              <span className="text-primary">CRM</span>, and{" "}
              <span className="text-primary">HRM</span> platforms.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I am experienced in technical stack decision-making and UI/UX
              thinking. I collaborate closely with Designers, BAs, and Backend
              teams to define user-centric business logic. Currently, I work at{" "}
              <span className="text-primary">CTMedtech</span> developing
              Hospital Information Systems for eye-care facilities.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I am seeking to grow into a Senior Frontend role, while being
              flexible to expand into a Full-stack role based on company needs.
            </p>
            <p className="mt-2 text-muted-foreground">
              Here are some technologies I work with:
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start gap-2 font-mono text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 text-xs text-primary">
                    {">>"}
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start justify-center md:justify-end">
            <div className="group relative">
              <div className="relative z-10 overflow-hidden rounded-md">
                <div className="flex h-64 w-64 items-center justify-center bg-card font-mono text-6xl font-bold text-primary">
                  KP
                </div>
                <div className="absolute inset-0 rounded-md bg-primary/20 transition-opacity group-hover:opacity-0" />
              </div>
              <div className="absolute top-4 left-4 -z-0 h-64 w-64 rounded-md border-2 border-primary transition-all group-hover:top-3 group-hover:left-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
