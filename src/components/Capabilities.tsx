"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    label: "01",
    title: "Multi-LLM Infrastructure",
    description:
      "OpenAI, Anthropic, Google, Ollama, DeepSeek — one interface for all. Switch models, not architecture.",
  },
  {
    label: "02",
    title: "Semantic Memory",
    description:
      "pgvector + embeddings. AI remembers project context, past decisions and patterns — via semantic search.",
  },
  {
    label: "03",
    title: "MCP Protocol",
    description:
      "Model Context Protocol as a standard. Claude Code, Cursor, VS Code — all connect through one server.",
  },
  {
    label: "04",
    title: "Mobile-First AI",
    description:
      "Manage AI sessions via Telegram. Voice, photos, inline approval buttons — AI in your pocket.",
  },
  {
    label: "05",
    title: "Async Indexing",
    description:
      "Docs, codebases, knowledge — everything indexed asynchronously with progress tracking.",
  },
  {
    label: "06",
    title: "Docker-First Delivery",
    description:
      "Every project runs with one command. PostgreSQL, Ollama, backend, dashboard — all in containers.",
  },
];

export default function Capabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="capabilities" className="pt-24 pb-12 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Capabilities
          </motion.h2>
          <motion.p
            className="text-[#94a3b8] text-sm hidden sm:block"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What the infrastructure I build is capable of
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#6366f1]/8 rounded-2xl overflow-hidden border border-[#6366f1]/10">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              className="group bg-[#0a0a0f] p-6 hover:bg-[#0e0e16] transition-colors relative"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <span className="block text-xs font-mono text-indigo-400/50 mb-4 group-hover:text-indigo-400/80 transition-colors">
                {c.label}
              </span>
              <h3 className="text-sm font-semibold mb-2 text-[#e2e8f0] group-hover:text-indigo-200 transition-colors leading-snug">
                {c.title}
              </h3>
              <p className="text-[#94a3b8] text-xs leading-relaxed">
                {c.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
