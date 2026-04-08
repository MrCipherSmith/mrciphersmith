"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  {
    title: "Context",
    description:
      "AI should remember what you worked on yesterday. Not just recite docs — understand your code, your decisions, your patterns.",
  },
  {
    title: "Freedom",
    description:
      "No vendor lock-in. Any model, any provider — your architecture should never depend on someone else's business decisions.",
  },
  {
    title: "Simplicity",
    description:
      "One command to run. If setup requires reading three pages of docs, it's not a tool — it's a puzzle.",
  },
];

export default function Essence() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="essence" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Every project starts from the same problem: AI tools don't understand
          context. They don't know what you worked on yesterday, what decisions
          you made, or why. I build the infrastructure that fixes this.
        </motion.p>

        <div className="space-y-px">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              className="group relative flex gap-8 py-8 border-t border-[#6366f1]/10 hover:border-[#6366f1]/25 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#6366f1]/20 bg-[#6366f1]/8 flex items-center justify-center group-hover:border-[#6366f1]/40 group-hover:bg-[#6366f1]/12 transition-all">
                <span className="text-xs font-mono text-indigo-400/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="pt-0.5">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-200 transition-colors">
                  {p.title}
                </h3>
                <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed max-w-lg">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#6366f1]/10" />
        </div>
      </div>
    </section>
  );
}
