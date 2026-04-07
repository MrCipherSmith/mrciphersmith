import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Philosophy from "@/components/Philosophy";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Philosophy />
      <Timeline />
      <Contact />
      <footer className="py-8 px-6 border-t border-[#6366f1]/10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#94a3b8]">
          <span>&copy; {new Date().getFullYear()} MrCipherSmith</span>
          <span>Built with Next.js, Tailwind CSS & Framer Motion</span>
        </div>
      </footer>
    </>
  );
}
