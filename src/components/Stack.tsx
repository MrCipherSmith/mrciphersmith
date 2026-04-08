"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const groups = [
  {
    label: "Languages & Runtime",
    items: ["TypeScript", "Bun", "Node.js"],
  },
  {
    label: "Backend",
    items: ["NestJS", "PostgreSQL", "pgvector", "TypeORM"],
  },
  {
    label: "AI / MCP",
    items: ["MCP", "OpenAI SDK", "Anthropic", "Ollama"],
  },
  {
    label: "Frontend",
    items: ["React", "Tailwind CSS", "TanStack Query"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "Docker Compose", "Scrapy"],
  },
];

export default function Stack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="pt-0 pb-16 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-xs font-mono text-[#94a3b8]/50 tracking-widest uppercase mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Stack
        </motion.p>

        <div className="space-y-6">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: gi * 0.08 }}
            >
              <span className="text-xs text-[#94a3b8]/40 font-mono sm:w-44 flex-shrink-0 pt-0.5">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    className="px-3 py-1 text-xs rounded-full border border-[#6366f1]/12 bg-[#111118] text-[#94a3b8] hover:border-[#6366f1]/30 hover:text-indigo-300 hover:bg-[#13131f] transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: gi * 0.08 + ii * 0.04 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
