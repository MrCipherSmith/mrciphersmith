"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Core Ideas
const concepts = [
  {
    name: "GoodAI Foundations",
    desc: "Scalable architecture and base framework for robust, general autonomic reasoning tasks.",
    tag: "Framework", tagColor: "text-[#30b171]"
  },
  {
    name: "Multi-Agent Orchestration",
    desc: "Coordinating autonomous agents to solve complex workflows with shared memory structures.",
    tag: "Orchestration", tagColor: "text-[#30b171]"
  },
  {
    name: "Universal Interfaces",
    desc: "Standardizing interactions across diverse language models and underlying APIs.",
    tag: "Protocols", tagColor: "text-[#e07849]"
  },
  {
    name: "Semantic Data Mining",
    desc: "Extracting deterministic data patterns from chaotic execution environments.",
    tag: "Extraction", tagColor: "text-[#e8bb5c]"
  },
  {
    name: "Contextual Memory",
    desc: "Persistent indexing and vectorization of knowledge for continuous agent continuity.",
    tag: "Memory", tagColor: "text-[#e07849]"
  },
  {
    name: "Voice-to-Intent",
    desc: "Synthesizing vocal inputs directly into executable multi-layered operations.",
    tag: "Interfaces", tagColor: "text-[#30b171]"
  }
];

// Streaming text component
function TypewriterLine({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        index++;
        setDisplayed(text.slice(0, index));
        if (index > text.length) {
          clearInterval(interval);
        }
      }, 15);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [text, startDelay]);

  return <div className="opacity-90 leading-relaxed font-medium">{displayed || "\u00A0"}</div>;
}

type LogEntry = { id: string; text: string; delay: number };

// Terminal pane
function TerminalPane({ hoveredItem }: { hoveredItem: string | null }) {
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: "init-1", text: "INITIALIZING KERYX OS v2.0.4...", delay: 0 },
    { id: "init-2", text: "establishing connection to main protocol...", delay: 400 },
    { id: "init-3", text: "kernel: verified. memory: intact.", delay: 1000 },
    { id: "init-4", text: "READY. Listening for module inspection...", delay: 1600 }
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hoveredItem) {
      const pfx = Date.now();
      const newLogs: LogEntry[] = [
        { id: `${pfx}-1`, text: `> EXEC: analyze_module --target="${hoveredItem}"`, delay: 0 },
        { id: `${pfx}-2`, text: `[AUTH] Verifying neural signature... GRANTED`, delay: 500 },
        { id: `${pfx}-3`, text: `[INFO] Parsing topological vectors for ${hoveredItem}`, delay: 1000 },
        { id: `${pfx}-4`, text: `[RESULT] Memory buffer mapped at 0x${Math.floor(Math.random()*16777215).toString(16).toUpperCase()}`, delay: 1600 }
      ];
      setLogs((prev) => {
        const next = [...prev, ...newLogs];
        return next.length > 50 ? next.slice(-50) : next;
      });
    }
  }, [hoveredItem]);

  useEffect(() => {
    const int = setInterval(() => {
      if (endRef.current) {
        endRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }, 150);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="bg-[#10131A]/80 border border-[#7673DE]/20 rounded-xl p-4 sm:p-6 font-mono text-sm sm:text-base text-[#30b171] h-full flex flex-col overflow-hidden backdrop-blur-md relative shadow-[inset_0_0_20px_rgba(48,177,113,0.05)]">
      <div className="flex items-center space-x-2 border-b border-[#7673DE]/20 pb-3 mb-3 shrink-0">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="text-[#9ca3af] ml-2 opacity-60 uppercase text-[10px] tracking-widest">Sys_Terminal</span>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto pr-2 space-y-1 terminal-scroll">
        {logs.map((log) => (
          <TypewriterLine key={log.id} text={log.text} startDelay={log.delay} />
        ))}
        <div ref={endRef} className="h-1" />
      </div>
      <div className="mt-3 pt-2 border-t border-[#7673DE]/10 flex items-center text-[#9ca3af] shrink-0">
        <span className="text-[#7673DE] mr-2 font-bold">{"$"}</span>
        <span className="animate-pulse flex-1 h-[12px] bg-[#7673DE]/60 max-w-[8px]" />
      </div>
    </div>
  );
}

// Logo pane
function IdentityPane() {
  return (
    <div className="bg-[#151921]/90 border border-[#7673DE]/30 rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-lg shadow-[0_0_40px_rgba(118,115,222,0.1)] h-full">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />
      
      <motion.div 
        className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 relative z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image 
          src="/mrciphersmith/keryx_avatar.png" 
          alt="Keryx Magritte Avatar" 
          fill
          className="object-cover rounded-3xl drop-shadow-[0_15px_35px_rgba(118,115,222,0.25)] brightness-[0.8] contrast-[1.05] saturate-[0.85]" 
        />
      </motion.div>

      <div className="z-10 mt-8 lg:mt-12 text-center max-w-lg px-4">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-2 font-mono drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Keryx</h1>
        <p className="text-[#7673DE] font-mono uppercase tracking-[0.25em] text-sm lg:text-base mb-6">MrCipherSmith</p>
        <p className="text-[#9ca3af] mt-4 text-base lg:text-lg border-t border-[#7673DE]/20 pt-6 leading-relaxed">
          Architecting open-source multi-agent systems and deep LLM integration protocols.
        </p>
      </div>
    </div>
  );
}

// Projects pane
function ModulesPane({ setHovered }: { setHovered: (s: string | null) => void }) {
  return (
    <div className="h-full flex flex-col gap-4">
      {concepts.map((concept, idx) => (
        <motion.div
          key={concept.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02, x: -5 }}
          whileTap={{ scale: 0.98 }}
          transition={{ delay: 0.3 + (idx * 0.1) }}
          onMouseEnter={() => setHovered(concept.name)}
          onMouseLeave={() => setHovered(null)}
          className="group flex-1 bg-gradient-to-l from-[#0e1117]/80 to-[#151921]/60 border border-[#7673DE]/10 hover:border-[#7673DE]/50 hover:from-[#151921]/90 hover:to-[#1A1F2B]/90 rounded-xl p-5 backdrop-blur-md transition-all duration-300 flex items-center justify-between cursor-pointer hover:shadow-[0_0_30px_rgba(118,115,222,0.15)] relative overflow-hidden"
        >
          {/* Edge highlight injection on hover */}
          <div className="absolute top-0 right-0 h-full w-[2px] bg-[#7673DE] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_rgba(118,115,222,1)]" />
          <div className="pr-4">
            <h3 className="text-lg lg:text-xl text-white font-mono font-bold mb-2 group-hover:text-[#7673DE] transition-colors">{concept.name}</h3>
            <p className="text-[#9ca3af] text-sm lg:text-base leading-relaxed">{concept.desc}</p>
          </div>
          <span className={`text-[11px] lg:text-xs font-mono px-3 py-1.5 rounded-md bg-[#0a0a0f]/80 ml-2 border border-[rgba(118,115,222,0.1)] ${concept.tagColor} whitespace-nowrap shrink-0`}>
            {concept.tag}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default function OSDesktop() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#0C0E14] text-white p-4 sm:p-6 lg:p-10 flex items-center justify-center overflow-x-hidden font-sans">
      <div className="w-full max-w-[1600px] h-auto xl:h-[85vh] min-h-[800px] grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 xl:gap-8 relative z-10 py-10 xl:py-0">
        
        {/* Left Column: Terminal */}
        <div className="xl:col-span-3 h-[320px] sm:h-[400px] xl:h-[85vh] xl:max-h-full min-h-0 order-2 xl:order-1">
          <TerminalPane hoveredItem={hoveredProject} />
        </div>

        {/* Center Canvas: Identity */}
        <div className="xl:col-span-5 h-[500px] sm:h-[650px] xl:h-full order-1 xl:order-2">
          <IdentityPane />
        </div>

        {/* Right Column: Modules */}
        <div className="xl:col-span-4 h-full order-3 xl:order-3">
          <ModulesPane setHovered={setHoveredProject} />
        </div>

      </div>

      {/* Edge glows */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7673DE]/40 to-transparent shadow-[0_0_20px_rgba(118,115,222,0.3)]" />
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#30b171]/40 to-transparent shadow-[0_0_20px_rgba(48,177,113,0.3)]" />
    </main>
  );
}
