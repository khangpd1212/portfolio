"use client";

import { useState, useEffect, useCallback } from "react";
import { Download } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Track scroll for header background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver for active section detection
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.sectionId);
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio among those intersecting
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Pick the one closest to the top of the viewport
          let bestEntry = visibleEntries[0];
          for (const entry of visibleEntries) {
            if (
              entry.boundingClientRect.top < bestEntry.boundingClientRect.top ||
              (entry.boundingClientRect.top ===
                bestEntry.boundingClientRect.top &&
                entry.intersectionRatio > bestEntry.intersectionRatio)
            ) {
              bestEntry = entry;
            }
          }
          setActiveSection(bestEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Handle nav click - set active immediately for snappy feel
  const handleNavClick = useCallback(
    (sectionId: string) => {
      setActiveSection(sectionId);
      if (mobileOpen) setMobileOpen(false);
    },
    [mobileOpen]
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-12">
        <a
          href="#"
          onClick={() => setActiveSection("")}
          className="font-mono text-lg font-bold text-primary transition-colors hover:text-primary/80"
          aria-label="Home"
        >
          {"<KP />"}
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.sectionId)}
                  className={`group relative flex items-center gap-1 font-mono text-sm transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <span className="text-primary">
                    {"0" + (i + 1) + "."}
                  </span>
                  {link.label}
                  {/* Active indicator line */}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="/Khang-Pham-Frontend-Developer-CV.pdf"
              download="Khang-Pham-Frontend-Developer-CV.pdf"
              className="inline-flex items-center gap-2 rounded border border-primary px-4 py-2 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
            >
              <Download size={14} />
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 z-40 flex items-center justify-center bg-background/95 backdrop-blur-sm transition-all duration-300 md:hidden ${
            mobileOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.sectionId)}
                    className={`flex flex-col items-center gap-1 font-mono text-lg transition-colors ${
                      isActive ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    <span className="text-sm text-primary">
                      {"0" + (i + 1) + "."}
                    </span>
                    {link.label}
                    {isActive && (
                      <span className="mt-1 h-px w-8 bg-primary" />
                    )}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="/Khang-Pham-Frontend-Developer-CV.pdf"
                download="Khang-Pham-Frontend-Developer-CV.pdf"
                className="inline-flex items-center gap-2 rounded border border-primary px-6 py-3 font-mono text-primary transition-colors hover:bg-primary/10"
              >
                <Download size={16} />
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
