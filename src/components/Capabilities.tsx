"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    label: "01",
    title: "Multi-LLM Infrastructure",
    description:
      "OpenAI, Anthropic, Google, Ollama, DeepSeek — one interface for all. Switch models, not architecture.",
    span: 2,
  },
  {
    label: "02",
    title: "Semantic Memory",
    description:
      "pgvector + embeddings. AI remembers project context, past decisions and patterns — via semantic search.",
    span: 1,
  },
  {
    label: "03",
    title: "MCP Protocol",
    description:
      "Model Context Protocol as a standard. Claude Code, Cursor, VS Code — all connect through one server.",
    span: 1,
  },
  {
    label: "04",
    title: "Mobile-First AI",
    description:
      "Manage AI sessions via Telegram. Voice, photos, inline approval buttons — AI in your pocket.",
    span: 2,
  },
  {
    label: "05",
    title: "Async Indexing",
    description:
      "Docs, codebases, knowledge — everything indexed asynchronously with progress tracking.",
    span: 2,
  },
  {
    label: "06",
    title: "Docker-First Delivery",
    description:
      "Every project runs with one command. PostgreSQL, Ollama, backend, dashboard — all in containers.",
    span: 1,
  },
];

export default function Capabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10%" });

  return (
    <section className="px-6 py-16 md:py-0 w-full max-w-4xl mx-auto" ref={ref}>
      <div className="flex items-end justify-between mb-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Capabilities
        </motion.h2>
        <motion.p
          className="text-[#94a3b8] text-sm hidden sm:block"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          What the infrastructure I build is capable of
        </motion.p>
      </div>

      <div className="grid grid-cols-3 gap-px bg-[#6366f1]/8 rounded-2xl overflow-hidden border border-[#6366f1]/10">
        {capabilities.map((c, i) => (
          <motion.div
            key={c.title}
            className={`group bg-[#0a0a0f] p-5 hover:bg-[#0e0e16] transition-colors ${
              c.span === 2 ? "col-span-2" : "col-span-1"
            }`}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <span className="block text-xs font-mono text-indigo-400/45 mb-3 group-hover:text-indigo-400/80 transition-colors">
              {c.label}
            </span>
            <h3 className="text-sm font-semibold mb-1.5 text-[#e2e8f0] group-hover:text-indigo-200 transition-colors">
              {c.title}
            </h3>
            <p className="text-[#94a3b8] text-xs leading-relaxed">{c.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
