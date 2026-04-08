"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    label: "01",
    title: "Multi-LLM Infrastructure",
    description:
      "OpenAI, Anthropic, Google, Ollama, DeepSeek — один интерфейс для всех. Переключай модели, не архитектуру.",
  },
  {
    label: "02",
    title: "Semantic Memory",
    description:
      "pgvector + embeddings. AI помнит контекст проекта, прошлые решения и паттерны — через семантический поиск.",
  },
  {
    label: "03",
    title: "MCP Protocol",
    description:
      "Model Context Protocol как стандарт. Claude Code, Cursor, VS Code — все подключаются через один сервер.",
  },
  {
    label: "04",
    title: "Mobile-First AI",
    description:
      "Управление AI-сессиями через Telegram. Голос, фото, inline-кнопки для approval — AI в кармане.",
  },
  {
    label: "05",
    title: "Async Indexing",
    description:
      "Документация, кодбазы, знания — всё индексируется асинхронно с отслеживанием прогресса.",
  },
  {
    label: "06",
    title: "Docker-First Delivery",
    description:
      "Каждый проект — одна команда. PostgreSQL, Ollama, backend, dashboard — всё в контейнерах.",
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
            Что умеет инфраструктура, которую я строю
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
