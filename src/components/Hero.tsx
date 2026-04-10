"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

function KeryxLogo() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-auto drop-shadow-2xl" aria-hidden="true" style={{ filter: 'drop-shadow(0px 10px 20px rgba(118, 115, 222, 0.2))' }}>
      <defs>
        <filter id="box-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Silhouette Shoulders */}
      <path d="M 30 190 C 40 140, 70 110, 100 110 C 130 110, 160 140, 170 190 Z" fill="#151921" />
      
      {/* Head / Face base */}
      <rect x="70" y="80" width="60" height="70" rx="10" fill="#151921" />
      
      {/* Hat Brim */}
      <path d="M 40 75 Q 100 85 160 75 Q 165 72 160 68 Q 100 78 40 68 Q 35 72 40 75 Z" fill="#151921" />
      {/* Hat Top */}
      <path d="M 65 70 L 70 20 Q 100 10 130 20 L 135 70 Z" fill="#151921" />

      {/* Face Code Window */}
      <rect x="72" y="82" width="56" height="56" rx="8" fill="#7673DE" />
      
      {/* Bracket { */}
      <text x="75" y="122" fill="#1e232e" fontSize="38" fontFamily="monospace" fontWeight="bold">{"{"}</text>
      
      {/* Dots */}
      <circle cx="92" cy="110" r="4.5" fill="#30b171" />
      <circle cx="102" cy="110" r="4.5" fill="#e07849" />
      <circle cx="112" cy="110" r="4.5" fill="#e8bb5c" />
      
      {/* Bracket } */}
      <text x="114" y="122" fill="#1e232e" fontSize="38" fontFamily="monospace" fontWeight="bold">{"}"}</text>
      
      <text x="100" y="170" fill="#FFFFFF" opacity="0.9" fontSize="24" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Keryx</text>
    </svg>
  );
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(99,102,241,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          transform: `translateY(${scrollY * 0.07}px)`,
          maskImage:
            "radial-gradient(ellipse 75% 75% at 50% 45%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 75% at 50% 45%, black 20%, transparent 100%)",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-500/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-10 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent mx-auto" />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          MrCipherSmith <br />
          <span className="text-[#7673DE]">&gt; AI Tooling Engineer_</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-[#9ca3af] max-w-xl mx-auto mb-14 leading-relaxed font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Building open-source multi-agent systems, deep LLM integrations, and advanced MCP servers.
        </motion.p>

        <motion.div
          className="mx-auto w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="rounded-2xl border border-[rgba(118,115,222,0.15)] bg-[rgba(32,37,49,0.7)] px-6 pt-6 pb-4 backdrop-blur-md shadow-[0_0_60px_rgba(118,115,222,0.08)] transition-all hover:border-[rgba(118,115,222,0.4)]">
            <KeryxLogo />
            <p className="text-center text-[11px] font-mono text-[#9ca3af] mt-4 tracking-wider uppercase opacity-80">
              Identity Verified
            </p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#essence"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#94a3b8]/40 hover:text-indigo-400 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.6, duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
}
