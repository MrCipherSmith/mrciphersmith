"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Core Ideas
const concepts = [
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

// Terminal pane
function TerminalPane({ hoveredItem }: { hoveredItem: string | null }) {
  const [logs, setLogs] = useState<string[]>([
    "INITIALIZING KERYX OS v2.0.4...",
    "establishing connection to main protocol...",
    "kernel: verified. memory: intact.",
    "READY."
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hoveredItem) {
      setLogs((prev) => {
        const newLogs = [...prev, `> EXEC: inspect [${hoveredItem}]`, `reading metadata for ${hoveredItem}... DONE.`];
        return newLogs.length > 50 ? newLogs.slice(-50) : newLogs;
      });
    }
  }, [hoveredItem]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  return (
    <div className="bg-[#10131A]/80 border border-[#7673DE]/20 rounded-xl p-4 font-mono text-xs text-[#30b171] h-full flex flex-col overflow-hidden backdrop-blur-md relative shadow-[inset_0_0_20px_rgba(48,177,113,0.05)]">
      <div className="flex items-center space-x-2 border-b border-[#7673DE]/20 pb-3 mb-3 shrink-0">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="text-[#9ca3af] ml-2 opacity-60 uppercase text-[10px] tracking-widest">Sys_Terminal</span>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto pr-2 space-y-1 terminal-scroll">
        {logs.map((log, i) => (
          <div key={i} className="opacity-90">{log}</div>
        ))}
        <div ref={endRef} />
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
      
      <div className="w-48 h-48 sm:w-64 sm:h-64 relative z-10">
        <img 
          src="/keryx_avatar.png" 
          alt="Keryx Magritte Avatar" 
          className="w-full h-full object-cover rounded-3xl drop-shadow-[0_15px_35px_rgba(118,115,222,0.2)] brightness-[0.8] contrast-[1.05] saturate-[0.85]" 
        />
      </div>

      <div className="z-10 mt-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2 font-mono">Keryx</h1>
        <p className="text-[#7673DE] font-mono uppercase tracking-[0.2em] text-sm">MrCipherSmith</p>
        <p className="text-[#9ca3af] mt-4 text-sm max-w-sm border-t border-[#7673DE]/20 pt-4">
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
          transition={{ delay: 0.3 + (idx * 0.1) }}
          onMouseEnter={() => setHovered(concept.name)}
          onMouseLeave={() => setHovered(null)}
          className="group flex-1 bg-[#151921]/60 border border-[#7673DE]/10 hover:border-[#7673DE]/40 hover:bg-[#1A1F2B]/90 rounded-xl p-5 backdrop-blur-md transition-all flex items-center justify-between shadow-sm cursor-pointer"
        >
          <div>
            <h3 className="text-white font-mono font-bold mb-1 group-hover:text-[#7673DE] transition-colors">{concept.name}</h3>
            <p className="text-[#9ca3af] text-xs max-w-xs">{concept.desc}</p>
          </div>
          <span className={`text-[10px] font-mono px-2 py-1 rounded bg-[#0a0a0f]/80 ml-4 border border-[rgba(118,115,222,0.1)] ${concept.tagColor}`}>
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
    <main className="min-h-screen bg-[#0C0E14] text-white p-4 sm:p-8 flex items-center justify-center overflow-x-hidden font-sans">
      <div className="w-full max-w-7xl h-auto md:h-[85vh] min-h-[600px] grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 relative z-10">
        
        {/* Left Column: Terminal */}
        <div className="md:col-span-3 lg:col-span-3 h-64 md:h-[85vh] md:max-h-full min-h-0 order-2 md:order-1">
          <TerminalPane hoveredItem={hoveredProject} />
        </div>

        {/* Center Canvas: Identity */}
        <div className="md:col-span-5 lg:col-span-5 h-[500px] md:h-full order-1 md:order-2">
          <IdentityPane />
        </div>

        {/* Right Column: Modules */}
        <div className="md:col-span-4 lg:col-span-4 h-full order-3 md:order-3">
          <ModulesPane setHovered={setHoveredProject} />
        </div>

      </div>

      {/* Edge glows */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7673DE]/40 to-transparent shadow-[0_0_20px_rgba(118,115,222,0.3)]" />
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#30b171]/40 to-transparent shadow-[0_0_20px_rgba(48,177,113,0.3)]" />
    </main>
  );
}
