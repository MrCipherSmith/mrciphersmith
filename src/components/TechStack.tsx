"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const techCategories = [
  {
    category: "Languages",
    items: ["TypeScript", "Python"],
  },
  {
    category: "Runtime",
    items: ["Bun", "Node.js"],
  },
  {
    category: "Backend",
    items: ["NestJS", "MCP SDK", "grammY"],
  },
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "Vite", "TanStack Query"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "pgvector", "TypeORM"],
  },
  {
    category: "AI / ML",
    items: ["Ollama", "OpenAI", "Anthropic", "Google AI", "Groq", "DeepSeek"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Docker Compose", "GitHub Actions", "tmux", "Makefile"],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech-stack" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.h2>

        <motion.p
          className="text-[#94a3b8] text-lg mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The technologies that power every project.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              className="glass glass-hover rounded-xl p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 className="text-sm font-semibold text-indigo-300 uppercase tracking-wider mb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs rounded-md bg-[#1a1a24] text-[#cbd5e1] border border-[#6366f1]/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
