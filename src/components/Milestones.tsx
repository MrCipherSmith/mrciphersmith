"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    date: "2025",
    label: "Начало",
    description: "Первый MCP-сервер для документации. Семантический поиск, async индексация, мульти-провайдер embeddings.",
  },
  {
    date: "2026",
    label: "Инфраструктура",
    description: "Claude Code + любой LLM. OpenAI-compatible shim, 200+ моделей, provider profiles.",
  },
  {
    date: "2026",
    label: "Платформа",
    description: "Telegram MCP-бот с multi-session, dual-layer memory, voice, dashboard и CLI monitoring.",
  },
];

export default function Milestones() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Путь
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-violet-500/20 to-transparent" />

          <div className="space-y-12 pl-8">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, x: -15 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="absolute -left-[37px] top-1.5 w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-xs font-mono text-indigo-400/60 mb-1 block">
                  {m.date} — {m.label}
                </span>
                <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed max-w-xl">
                  {m.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
