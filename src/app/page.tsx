import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Essence from "@/components/Essence";
import Capabilities from "@/components/Capabilities";
import Stack from "@/components/Stack";
import Milestones from "@/components/Milestones";
import Contact from "@/components/Contact";
import HorizontalScroll from "@/components/HorizontalScroll";

export default function Home() {
  return (
    <>
      <Navbar />
      <HorizontalScroll>
        <div className="horizontal-slide" id="hero">
          <Hero />
        </div>
        <div className="horizontal-slide" id="essence">
          <Essence />
        </div>
        <div className="horizontal-slide" id="capabilities">
          <Capabilities />
        </div>
        <div className="horizontal-slide" id="stack">
          <Stack />
        </div>
        <div className="horizontal-slide" id="milestones">
          <Milestones />
        </div>
        <div className="horizontal-slide" id="contact">
          <Contact />
          <footer className="py-4 px-6 border-t border-[#6366f1]/10 mt-auto">
            <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-[#94a3b8]">
              <span>&copy; {new Date().getFullYear()}</span>
              <span>open source</span>
            </div>
          </footer>
        </div>
      </HorizontalScroll>
    </>
  );
}
