"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  {
    title: "Context",
    description:
      "AI должен помнить, что вы делали вчера. Не пересказывать документацию — понимать ваш код, ваши решения, ваши паттерны.",
  },
  {
    title: "Freedom",
    description:
      "Никакого vendor lock-in. Любая модель, любой провайдер — архитектура не должна зависеть от чужих бизнес-решений.",
  },
  {
    title: "Simplicity",
    description:
      "Одна команда для запуска. Если для установки нужно читать три страницы — это не инструмент, это головоломка.",
  },
];

export default function Essence() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="essence" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Каждый проект начинается с одной проблемы: AI-инструменты не понимают
          контекст. Они не знают, над чем вы работали вчера, какие решения
          приняли, и почему. Я строю инфраструктуру, которая это исправляет.
        </motion.p>

        <div className="space-y-0">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              className="py-8 border-t border-[#6366f1]/10"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8">
                <span className="text-sm font-mono text-indigo-400/70 tabular-nums sm:w-32 sm:flex-shrink-0 sm:pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed max-w-lg">
                    {p.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
