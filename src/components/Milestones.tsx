"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    date: "2025",
    label: "Start",
    tag: "Documentation",
    description:
      "First MCP server for documentation. Semantic search, async indexing, multi-provider embeddings.",
  },
  {
    date: "2026",
    label: "Infrastructure",
    tag: "LLM Layer",
    description:
      "Claude Code + any LLM. OpenAI-compatible shim, 200+ models, provider profiles.",
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
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="milestones" className="pt-20 pb-16 px-6 border-t border-[#6366f1]/8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Journey
        </motion.h2>

        <div className="space-y-4">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              className={`group relative rounded-xl border p-6 transition-all ${
                m.highlight
                  ? "border-[#6366f1]/30 bg-[#6366f1]/5 hover:border-[#6366f1]/50 hover:bg-[#6366f1]/8"
                  : "border-[#6366f1]/10 bg-[#0d0d14] hover:border-[#6366f1]/20 hover:bg-[#0f0f17]"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-mono tabular-nums ${
                      m.highlight ? "text-indigo-400" : "text-indigo-400/50"
                    }`}
                  >
                    {m.date}
                  </span>
                  <span className="text-xs text-[#94a3b8]/60">{m.label}</span>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 ${
                    m.highlight
                      ? "border-indigo-500/40 bg-indigo-500/15 text-indigo-300"
                      : "border-[#6366f1]/10 bg-[#1a1a24] text-[#94a3b8]"
                  }`}
                >
                  {m.tag}
                </span>
              </div>
              <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed max-w-xl">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
