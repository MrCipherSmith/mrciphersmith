"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const groups = [
  { label: "Languages & Runtime", items: ["TypeScript", "Bun", "Node.js"] },
  { label: "Backend", items: ["NestJS", "PostgreSQL", "pgvector", "TypeORM"] },
  { label: "AI / MCP", items: ["MCP", "OpenAI SDK", "Anthropic", "Ollama"] },
  { label: "Frontend", items: ["React", "Tailwind CSS", "TanStack Query"] },
  { label: "Infrastructure", items: ["Docker", "Docker Compose", "Scrapy"] },
];

export default function Stack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10%" });

  return (
    <section className="px-6 py-16 md:py-0 w-full max-w-4xl mx-auto" ref={ref}>
      <motion.p
        className="text-xs font-mono text-[#94a3b8]/45 tracking-widest uppercase mb-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        Stack
      </motion.p>

      <div className="space-y-5">
        {groups.map((group, gi) => (
          <motion.div
            key={group.label}
            className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6"
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.45, delay: gi * 0.09 }}
          >
            <span className="text-xs text-[#94a3b8]/38 font-mono sm:w-44 flex-shrink-0">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, ii) => (
                <motion.span
                  key={item}
                  className="px-3 py-1 text-xs rounded-full border border-[#6366f1]/12 bg-[#111118] text-[#94a3b8] hover:border-[#6366f1]/35 hover:text-indigo-300 hover:bg-[#13131f] transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, delay: gi * 0.09 + ii * 0.04 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
