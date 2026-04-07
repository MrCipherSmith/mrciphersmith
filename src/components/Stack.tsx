"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const tech = [
  "TypeScript",
  "NestJS",
  "PostgreSQL",
  "pgvector",
  "MCP",
  "Docker",
  "React",
  "Tailwind",
  "Bun",
  "Ollama",
  "OpenAI",
  "Anthropic",
];

export default function Stack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-[#94a3b8] text-sm font-mono mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          stack
        </motion.p>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {tech.map((t, i) => (
            <motion.span
              key={t}
              className="text-[#94a3b8] text-sm hover:text-indigo-300 transition-colors cursor-default"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
