"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mb-12" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Давайте строить
          </h2>
          <p className="text-[#94a3b8] text-lg leading-relaxed max-w-lg mb-10">
            Открыт к контрибьюциям, коллаборациям и интересным проектам в AI-инфраструктуре.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/MrCipherSmith"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-indigo-300 transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://t.me/MrCipherSmith"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-indigo-300 transition-colors text-sm"
            >
              Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
