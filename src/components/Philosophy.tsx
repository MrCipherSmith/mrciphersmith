"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Globe, Container, Brain, Terminal } from "lucide-react";

const principles = [
  {
    icon: Network,
    title: "MCP-First",
    description:
      "Model Context Protocol as the standard for AI tool integration. Every project speaks MCP.",
  },
  {
    icon: Globe,
    title: "Provider-Agnostic",
    description:
      "Support for OpenAI, Anthropic, Google, Ollama, DeepSeek — no vendor lock-in, ever.",
  },
  {
    icon: Container,
    title: "Docker-First",
    description:
      "Every project launches with one command. Full stack in containers — database, AI, backend.",
  },
  {
    icon: Brain,
    title: "Memory & Context",
    description:
      "Semantic search, persistent sessions, project context. AI that remembers what matters.",
  },
  {
    icon: Terminal,
    title: "Developer Experience",
    description:
      "CLI wizards, inline buttons, dashboards, health endpoints. Tools that respect your time.",
  },
];

export default function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Architecture Philosophy
        </motion.h2>

        <motion.p
          className="text-[#94a3b8] text-lg mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Design principles that guide every project decision.
        </motion.p>

        <div className="space-y-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              className="glass glass-hover rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                <p.icon className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
