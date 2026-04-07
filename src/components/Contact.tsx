"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Star } from "lucide-react";
import GitHubIcon from "./GitHubIcon";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s Build Together
        </motion.h2>

        <motion.p
          className="text-[#94a3b8] text-lg mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Open to contributions, collaborations, and interesting projects in AI
          infrastructure.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://github.com/MrCipherSmith"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-400 transition-colors glow"
          >
            <GitHubIcon className="w-4 h-4" />
            View on GitHub
          </a>
          <a
            href="https://github.com/MrCipherSmith/multiclaude-tg-bot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#6366f1]/30 text-[#e2e8f0] hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all"
          >
            <Star className="w-4 h-4" />
            Star a Project
          </a>
          <a
            href="https://t.me/MrCipherSmith"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#6366f1]/30 text-[#e2e8f0] hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all"
          >
            <Send className="w-4 h-4" />
            Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
