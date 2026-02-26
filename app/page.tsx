import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { SocialSidebar } from "@/components/portfolio/social-sidebar";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <SocialSidebar />
      <main className="mx-auto max-w-6xl">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
