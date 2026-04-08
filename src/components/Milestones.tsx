"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    date: "2025",
    label: "Start",
    tag: "Documentation",
    description:
      "First MCP server for documentation. Semantic search, async indexing, multi-provider embeddings.",
    highlight: false,
  },
  {
    date: "2026",
    label: "Infrastructure",
    tag: "LLM Layer",
    description:
      "Claude Code + any LLM. OpenAI-compatible shim, 200+ models, provider profiles.",
    highlight: false,
  },
  {
    date: "2026",
    label: "Platform",
    tag: "Flagship",
    description:
      "Telegram MCP bot with multi-session, dual-layer memory, voice, dashboard and CLI monitoring.",
    highlight: true,
  },
];

export default function Milestones() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10%" });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section className="px-6 py-16 md:py-0 w-full max-w-4xl mx-auto" ref={ref}>
      <motion.h2
        className="text-3xl sm:text-4xl font-bold tracking-tight mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        Journey
      </motion.h2>

      <motion.div
        className="space-y-4"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {milestones.map((m) => (
          <motion.div
            key={m.tag}
            variants={item}
            className={`group relative rounded-xl border p-5 transition-all ${
              m.highlight
                ? "border-[#6366f1]/30 bg-[#6366f1]/5 hover:border-[#6366f1]/50"
                : "border-[#6366f1]/10 bg-[#0d0d14] hover:border-[#6366f1]/22"
            }`}
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-mono tabular-nums ${m.highlight ? "text-indigo-400" : "text-indigo-400/50"}`}>
                  {m.date}
                </span>
                <span className="text-xs text-[#94a3b8]/55">{m.label}</span>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 ${
                m.highlight
                  ? "border-indigo-500/40 bg-indigo-500/15 text-indigo-300"
                  : "border-[#6366f1]/10 bg-[#1a1a24] text-[#94a3b8]"
              }`}>
                {m.tag}
              </span>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xl">
              {m.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
