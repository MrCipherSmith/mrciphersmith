"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const nodes = [
  { id: "ts", label: "TypeScript", x: 12, y: 50, main: false },
  { id: "mcp", label: "MCP Server", x: 50, y: 50, main: true },
  { id: "claude", label: "Claude Code", x: 88, y: 20, main: false },
  { id: "pg", label: "PostgreSQL", x: 88, y: 50, main: false },
  { id: "tg", label: "Telegram", x: 88, y: 80, main: false },
];

const edges = [
  { path: "M 12 50 L 50 50", delay: 0, dur: 2 },
  { path: "M 50 50 L 88 20", delay: 0.4, dur: 1.6 },
  { path: "M 50 50 L 88 50", delay: 0.15, dur: 1.6 },
  { path: "M 50 50 L 88 80", delay: 0.7, dur: 1.6 },
];

function TopologyDiagram() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-auto" aria-hidden="true">
      <defs>
        <filter id="node-glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="packet-glow">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {edges.map((e, i) => (
        <g key={i}>
          <path
            d={e.path}
            fill="none"
            stroke="rgba(99,102,241,0.18)"
            strokeWidth="0.4"
            strokeDasharray="2.5 2"
          />
          <circle r="1.2" fill="#818cf8" filter="url(#packet-glow)">
            <animateMotion
              dur={`${e.dur}s`}
              repeatCount="indefinite"
              begin={`${e.delay}s`}
              path={e.path}
            />
          </circle>
        </g>
      ))}

      {nodes.map((n) => (
        <g key={n.id}>
          {n.main && (
            <circle
              cx={n.x} cy={n.y} r="8"
              fill="rgba(99,102,241,0.06)"
              stroke="rgba(99,102,241,0.15)"
              strokeWidth="0.3"
            />
          )}
          <circle
            cx={n.x} cy={n.y}
            r={n.main ? 5 : 3.5}
            fill={n.main ? "rgba(99,102,241,0.15)" : "rgba(13,13,20,0.9)"}
            stroke={n.main ? "rgba(129,140,248,0.6)" : "rgba(99,102,241,0.3)"}
            strokeWidth="0.5"
            filter={n.main ? "url(#node-glow)" : undefined}
          />
          <circle
            cx={n.x} cy={n.y}
            r={n.main ? 2 : 1.2}
            fill={n.main ? "#818cf8" : "rgba(99,102,241,0.55)"}
          />
          <text
            x={n.x}
            y={n.y + (n.main ? 12 : 9)}
            textAnchor="middle"
            fill="#94a3b8"
            fontSize={n.main ? "4" : "3.5"}
            fontFamily="'JetBrains Mono', monospace"
            opacity="0.75"
          >
            {n.label}
          </text>
        </g>
      ))}
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
          Tools that let AI understand your codebase, remember your context,
          and work alongside you — not against you.
        </motion.p>

        <motion.div
          className="mx-auto w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="rounded-2xl border border-[#6366f1]/15 bg-[#0d0d14]/70 px-6 pt-6 pb-4 backdrop-blur-sm shadow-[0_0_60px_rgba(99,102,241,0.06)]">
            <TopologyDiagram />
            <p className="text-center text-[10px] font-mono text-[#94a3b8]/35 mt-2 tracking-wider">
              architecture
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
