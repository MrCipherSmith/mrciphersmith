import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Essence from "@/components/Essence";
import Capabilities from "@/components/Capabilities";
import Stack from "@/components/Stack";
import Milestones from "@/components/Milestones";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Essence />
      <Capabilities />
      <Stack />
      <Milestones />
      <Contact />
      <footer className="py-6 px-6 border-t border-[#6366f1]/10">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-[#94a3b8]">
          <span>&copy; {new Date().getFullYear()}</span>
          <span>open source</span>
        </div>
      </footer>
    </>
  );
}
