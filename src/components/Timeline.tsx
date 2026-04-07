"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    date: "Nov 2025",
    title: "goodocs-mcp",
    description:
      "First MCP server for documentation — async indexing, semantic search, multi-provider embeddings.",
    tag: "Documentation",
  },
  {
    date: "Jan 2026",
    title: "ecma-mcp",
    description:
      "MCP for frontend developers — auto-indexing, code review, admin panel, Scrapy parsing.",
    tag: "Frontend Tools",
  },
  {
    date: "Mar 2026",
    title: "openclaude",
    description:
      "Claude Code + any LLM. OpenAI-compatible shim unlocking 200+ models with provider profiles.",
    tag: "LLM Infrastructure",
  },
  {
    date: "Apr 2026",
    title: "multiclaude-tg-bot v1.9.0",
    description:
      "Flagship Telegram MCP bot — multi-session, dual-layer memory, voice, dashboard, CLI monitoring.",
    tag: "Flagship",
    highlight: true,
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-24 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Activity Timeline
        </motion.h2>

        <motion.p
          className="text-[#94a3b8] text-lg mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Six months of building — from documentation servers to full AI
          infrastructure.
        </motion.p>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.date}
                className="relative pl-12"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div
                  className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 ${
                    item.highlight
                      ? "bg-indigo-500 border-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                      : "bg-[#0a0a0f] border-indigo-500/50"
                  }`}
                />

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-indigo-400">
                    {item.date}
                  </span>
                  <span
                    className={`px-2 py-0.5 text-xs rounded-full ${
                      item.highlight
                        ? "bg-indigo-500/20 text-indigo-300"
                        : "bg-[#1a1a24] text-[#94a3b8]"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
