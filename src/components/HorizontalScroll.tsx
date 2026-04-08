"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL_SECTIONS = 6;
const SECTION_HASHES = ["", "essence", "capabilities", "stack", "milestones", "contact"];

export default function HorizontalScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const isDesktop = () => typeof window !== "undefined" && window.innerWidth >= 768;

  const goToSection = useCallback((idx: number) => {
    const container = containerRef.current;
    if (!container || !isDesktop()) return;
    const clamped = Math.max(0, Math.min(TOTAL_SECTIONS - 1, idx));
    if (isAnimating.current) return;
    isAnimating.current = true;
    container.scrollTo({ left: clamped * container.clientWidth, behavior: "smooth" });
    setCurrentSection(clamped);
    setTimeout(() => { isAnimating.current = false; }, 900);
  }, []);

  // Track current section from scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const idx = Math.round(container.scrollLeft / container.clientWidth);
      setCurrentSection(idx);
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Wheel → horizontal snap
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleWheel = (e: WheelEvent) => {
      if (!isDesktop()) return;
      e.preventDefault();
      if (isAnimating.current) return;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 3) return;
      goToSection(currentSection + (delta > 0 ? 1 : -1));
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [currentSection, goToSection]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isDesktop()) return;
      if (["ArrowRight", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        goToSection(currentSection + 1);
      } else if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        goToSection(currentSection - 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentSection, goToSection]);

  // Intercept anchor hash clicks → horizontal navigate
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!isDesktop()) return;
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.hash.slice(1);
      const idx = SECTION_HASHES.indexOf(hash);
      if (idx !== -1) {
        e.preventDefault();
        goToSection(idx);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [goToSection]);

  return (
    <>
      <div
        ref={containerRef}
        className="horizontal-scroll-container"
      >
        {children}
      </div>

      {/* Progress indicator — desktop only */}
      <AnimatePresence>
        {mounted && isDesktop() && (
          <motion.div
            className="fixed bottom-7 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {Array.from({ length: TOTAL_SECTIONS }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToSection(i)}
                aria-label={`Section ${i + 1}`}
                className={`rounded-full transition-all duration-400 cursor-pointer ${
                  i === currentSection
                    ? "w-6 h-[5px] bg-indigo-400"
                    : "w-[5px] h-[5px] bg-indigo-400/25 hover:bg-indigo-400/50"
                }`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
