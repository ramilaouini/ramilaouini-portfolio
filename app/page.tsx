import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SkillMarquee } from "@/components/ui/SkillMarquee";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { GitHubStats } from "@/components/sections/GitHubStats";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillMarquee />
        <Skills />
        <Projects />
        <GitHubStats />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
