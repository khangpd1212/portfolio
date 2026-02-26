import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "HIS - Hospital Information System",
    description:
      "A clinic management system for patient check-in, appointment scheduling, and medical record management in eye-care facilities. Streamlines patient registration and examination workflows, improving efficiency for doctors and receptionists.",
    impact:
      "Faster examinations, reduced user errors and better adoption by doctors.",
    techs: [
      "React.js",
      "Zustand",
      "React Hook Form",
      "React-Query",
      "TailwindCSS",
      "TypeScript",
    ],
    company: "CTMedtech",
    period: "Jun 2024 - Present",
  },
  {
    title: "Camera Check-in App",
    description:
      "A desktop app that automates patient check-in using facial recognition. Integrates webcam scanning and secure authentication, reducing manual workload and improving patient flow during peak hours.",
    impact:
      "Reduced manual workload for receptionists and improved patient flow during peak hours.",
    techs: ["Vue 3", "Electron", "TypeScript"],
    company: "CTMedtech",
    period: "Jan 2025 - Present",
  },
  {
    title: "DLS - Design Language System",
    description:
      "Built a reusable component library and Design Language System from scratch to centralize UI components and libraries within the company ecosystem. Solved issues like customizing Tailwind merging and versioned distribution.",
    impact:
      "Improved development speed and UI consistency across the company ecosystem.",
    techs: ["React.js", "TailwindCSS", "TypeScript", "Gulp", "Rollup"],
    company: "Tera Solutions",
    period: "May 2023 - Dec 2023",
  },
  {
    title: "Landing Page CTMedtech",
    description:
      "Company profile website built with Webflow. Optimized all pages for SEO with proper meta tags, heading structures, image alt texts, and fast-loading assets.",
    impact: "Professional online presence with excellent SEO performance.",
    techs: ["Webflow", "SEO", "Custom Domain"],
    company: "CTMedtech",
    period: "Dec 2024 - Jan 2025",
    url: "https://ctmedtech.com",
  },
  {
    title: "HRM - Human Resource Management",
    description:
      "Streamlined employee administration with features for employee records, leave/attendance tracking, performance evaluation, and payroll. Built email template management and fixed cross-device compatibility.",
    impact:
      "Complete HR digitization with org chart, payroll, and timekeeping.",
    techs: [
      "React.js",
      "Redux Toolkit",
      "Ant Design",
      "Styled Components",
      "TypeScript",
    ],
    company: "Innotech VietNam",
    period: "Mar 2022 - May 2023",
  },
  {
    title: "CRM - Customer Relationship Management",
    description:
      "Restructured CRM system with lead management, contact management features. Enabled sales teams to effectively manage customer relationships, track interactions, and analyze sales performance.",
    impact:
      "Better sales tracking and customer relationship management for teams.",
    techs: [
      "React.js",
      "React Hook Form",
      "TypeScript",
      "TailwindCSS",
    ],
    company: "Tera Solutions",
    period: "Jun 2023 - Apr 2024",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 lg:px-0">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 flex items-center gap-3 text-2xl font-bold text-foreground">
          <span className="font-mono text-xl text-primary">03.</span>
          Things I{"'"}ve Built
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-lg bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mb-2 font-mono text-xs text-primary/70">
                {project.company} &middot; {project.period}
              </p>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
