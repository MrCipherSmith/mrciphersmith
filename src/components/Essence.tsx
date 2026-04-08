"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

const stats = [
  { value: 200, suffix: "+", label: "models" },
  { value: 4200, suffix: "", label: "vectors" },
  { value: 1, suffix: "", label: "command" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 60;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / total;
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));
      if (frame >= total) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Essence() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10%" });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const line = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section className="px-6 py-16 md:py-0 w-full max-w-4xl mx-auto" ref={ref}>
      <motion.p
        className="text-[#94a3b8] text-lg sm:text-xl leading-relaxed mb-14 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Every project starts from the same problem: AI tools don&apos;t understand
        context. They don&apos;t know what you worked on yesterday, what decisions
        you made, or why. I build the infrastructure that fixes this.
      </motion.p>

      <motion.div
        className="space-y-px"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            variants={line}
            className="group flex gap-8 py-7 border-t border-[#6366f1]/10 hover:border-[#6366f1]/25 transition-colors"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#6366f1]/20 bg-[#6366f1]/8 flex items-center justify-center group-hover:border-[#6366f1]/40 group-hover:bg-[#6366f1]/12 transition-all">
              <span className="text-xs font-mono text-indigo-400/80">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="pt-0.5">
              <h3 className="text-lg font-semibold mb-1.5 group-hover:text-indigo-200 transition-colors">
                {p.title}
              </h3>
              <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed max-w-lg">
                {p.description}
              </p>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-[#6366f1]/10" />
      </motion.div>

      {/* Animated stats */}
      <motion.div
        className="mt-10 flex gap-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-2xl font-bold font-mono gradient-text">
              <CountUp target={s.value} suffix={s.suffix} active={inView} />
            </div>
            <div className="text-xs text-[#94a3b8]/60 mt-0.5">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
