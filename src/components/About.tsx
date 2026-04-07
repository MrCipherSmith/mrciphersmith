"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Boxes, Heart } from "lucide-react";

const principles = [
  {
    icon: Code2,
    title: "Provider-Agnostic",
    description:
      "No vendor lock-in. Support for OpenAI, Anthropic, Google, Ollama, DeepSeek — switch models, not architecture.",
  },
  {
    icon: Boxes,
    title: "Docker-First",
    description:
      "Every project runs with a single command. Full stack in containers — database, AI, backend, dashboard.",
  },
  {
    icon: Heart,
    title: "Open Source",
    description:
      "MIT licensed, transparent, community-driven. Build in the open, learn from the code.",
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <SectionTitle>AI-Native Developer Tools</SectionTitle>

        <motion.p
          className="text-[#94a3b8] text-lg leading-relaxed max-w-3xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I build the infrastructure that connects AI models to real developer
          workflows. Every project starts with a simple question: how can we make
          AI tools more accessible, more flexible, and more integrated into the
          way developers actually work?
        </motion.p>

        <motion.p
          className="text-[#94a3b8] text-lg leading-relaxed max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          From Telegram-powered Claude Code sessions to multi-LLM shims that
          unlock 200+ models — the focus is always on{" "}
          <span className="text-indigo-300">developer experience</span> and{" "}
          <span className="text-indigo-300">provider freedom</span>.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              className="glass glass-hover rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-wrap gap-6 text-sm text-[#94a3b8]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>4 public repositories</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>237 commits</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>6 months active development</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>MIT License</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
