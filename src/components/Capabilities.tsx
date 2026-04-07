"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    title: "Multi-LLM Infrastructure",
    description:
      "OpenAI, Anthropic, Google, Ollama, DeepSeek — один интерфейс для всех. Переключай модели, не архитектуру.",
  },
  {
    title: "Semantic Memory",
    description:
      "pgvector + embeddings. AI помнит контекст проекта, прошлые решения и паттерны — через семантический поиск.",
  },
  {
    title: "MCP Protocol",
    description:
      "Model Context Protocol как стандарт. Claude Code, Cursor, VS Code — все подключаются через один сервер.",
  },
  {
    title: "Mobile-First AI",
    description:
      "Управление AI-сессиями через Telegram. Голос, фото, inline-кнопки для approval — AI в кармане.",
  },
  {
    title: "Async Indexing",
    description:
      "Документация, кодбазы, знания — всё индексируется асинхронно с отслеживанием прогресса.",
  },
  {
    title: "Docker-First Delivery",
    description:
      "Каждый проект — одна команда. PostgreSQL, Ollama, backend, dashboard — всё в контейнерах.",
  },
];

export default function Capabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="capabilities" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Capabilities
        </motion.h2>

        <motion.p
          className="text-[#94a3b8] text-lg mb-16 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Что умеет инфраструктура, которую я строю.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              className="group"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3 className="text-base font-semibold mb-2 group-hover:text-indigo-300 transition-colors">
                {c.title}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                {c.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
