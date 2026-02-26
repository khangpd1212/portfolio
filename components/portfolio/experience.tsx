const experiences = [
  {
    title: "Frontend Developer",
    company: "CTMedtech",
    url: "https://ctmedtech.com",
    period: "Jun 2024 - Present",
    points: [
      "Developed and optimized user interfaces for HIS (Hospital Information System), a platform for patient check-in, medical record management, and eye examination workflows.",
      "Built a camera check-in system using Electron for automatic patient registration, reducing manual workload at reception desks.",
      "Designed dynamic medical forms that adapt as clinical rules and workflows change.",
      "Integrated IoT devices to automatically collect ophthalmic examination data, solving slow clinical workflows.",
      "Collaborated with BA, Backend, and medical staff to translate clinical workflows into intuitive digital interfaces.",
      "Built a company profile landing page using Webflow, optimized for SEO with proper meta tags and heading structures.",
    ],
    techs: [
      "React.js",
      "Vue 3",
      "Electron",
      "Zustand",
      "React-Query",
      "TailwindCSS",
      "TypeScript",
      "RHF",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Tera Solutions",
    period: "May 2023 - Apr 2024",
    points: [
      "Built and maintained features for HRM, CRM, and internal DLS projects.",
      "Proposed and built a Design Language System from scratch to centralize reusable components.",
      "Contributed to design language systems and UI/UX testing.",
      "Achieved potential employee recognition for self-assessing task difficulty and taking responsibility.",
    ],
    techs: [
      "React.js",
      "TailwindCSS",
      "TypeScript",
      "Gulp",
      "Rollup",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Innotech VietNam",
    period: "Mar 2022 - Mar 2023",
    points: [
      "Developed modules for HRM and Cloud Admin platforms.",
      "Built feature management with org chart, setting system, payroll, timekeeping.",
      "Integrated REST APIs and collaborated with BE/BA teams.",
      "Optimized performance with React hooks (memo, useCallback) and lazy loading.",
      "Built and researched micro frontend with ModuleFederationPlugin in webpack.",
    ],
    techs: [
      "React.js",
      "Redux Toolkit",
      "Ant Design",
      "Styled Components",
      "TypeScript",
      "Webpack",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 lg:px-0">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 flex items-center gap-3 text-2xl font-bold text-foreground">
          <span className="font-mono text-xl text-primary">02.</span>
          Where I{"'"}ve Worked
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>

        <div className="flex flex-col gap-12">
          {experiences.map((exp) => (
            <div key={exp.company} className="group">
              <div className="grid gap-4 md:grid-cols-[200px_1fr]">
                <div className="font-mono text-sm text-muted-foreground">
                  {exp.period}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">
                    {exp.title}{" "}
                    <span className="text-primary">
                      {"@ "}
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </span>
                  </h3>
                  <ul className="mt-4 flex flex-col gap-3">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-1.5 shrink-0 text-xs text-primary">
                          {">>"}
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
