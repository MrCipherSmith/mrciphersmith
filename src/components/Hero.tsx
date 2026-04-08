"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const terminal = [
  { prompt: true, text: "docker compose up" },
  { prompt: false, text: "✓  mcp-server    :3000", color: "#4ade80" },
  { prompt: false, text: "✓  postgres       ready", color: "#4ade80" },
  { prompt: false, text: "✓  index          4.2k vectors", color: "#4ade80" },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < terminal.length) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: `translateY(${scrollY * 0.08}px)`,
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent mx-auto" />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          I build the layer between
          <br />
          <span className="gradient-text">AI and developers</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-[#94a3b8] max-w-xl mx-auto mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Tools that let AI understand your codebase, remember your context, and
          work alongside you — not against you.
        </motion.p>

        <motion.div
          className="mx-auto w-full max-w-md text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="rounded-xl border border-[#6366f1]/15 bg-[#0d0d14] overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.05)]">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#6366f1]/10 bg-[#0a0a0f]/60">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/60" />
              <span className="ml-3 text-xs font-mono text-[#94a3b8]/50">terminal</span>
            </div>
            <div className="p-5 font-mono text-xs space-y-2 min-h-[100px]">
              {terminal.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  {line.prompt ? (
                    <>
                      <span className="text-indigo-400">$</span>
                      <span className="text-[#e2e8f0]">{line.text}</span>
                    </>
                  ) : (
                    <span style={{ color: line.color ?? "#94a3b8" }}>
                      {line.text}
                    </span>
                  )}
                </motion.div>
              ))}
              {visibleLines === terminal.length && (
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span className="text-indigo-400">$</span>
                  <span className="w-2 h-3.5 bg-indigo-400/70 animate-pulse" />
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#essence"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#94a3b8]/50 hover:text-indigo-400 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.8, duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
}
