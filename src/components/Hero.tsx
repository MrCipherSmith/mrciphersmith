"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import GitHubIcon from "./GitHubIcon";

const techBadges = [
  "TypeScript",
  "MCP",
  "PostgreSQL",
  "Docker",
  "Open Source",
];

const nodes = [
  { id: "telegram", label: "Telegram", x: 15, y: 50, color: "#229ED9" },
  { id: "mcp", label: "MCP Server", x: 50, y: 50, color: "#6366f1" },
  { id: "llm", label: "LLM", x: 85, y: 25, color: "#8b5cf6" },
  { id: "cli", label: "CLI", x: 85, y: 75, color: "#10b981" },
];

const connections = [
  { from: "telegram", to: "mcp" },
  { from: "mcp", to: "llm" },
  { from: "mcp", to: "cli" },
];

function ArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-auto"
        aria-hidden="true"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {connections.map((conn, i) => {
          const fromNode = nodes.find((n) => n.id === conn.from)!;
          const toNode = nodes.find((n) => n.id === conn.to)!;
          return (
            <motion.line
              key={i}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="url(#lineGrad)"
              strokeWidth="0.4"
              strokeDasharray="2 1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: i * 0.3, ease: "easeInOut" }}
            />
          );
        })}

        {nodes.map((node, i) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={activeNode === i ? 8 : 6}
              fill={node.color}
              opacity={activeNode === i ? 0.2 : 0.1}
              animate={{
                r: activeNode === i ? [6, 9, 6] : 6,
                opacity: activeNode === i ? [0.15, 0.25, 0.15] : 0.1,
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill={node.color}
              filter={activeNode === i ? "url(#glow)" : undefined}
              opacity={activeNode === i ? 1 : 0.7}
            />
            <text
              x={node.x}
              y={node.y + 9}
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="3.5"
              fontFamily="monospace"
            >
              {node.label}
            </text>
          </g>
        ))}

        {connections.map((conn, i) => {
          const fromNode = nodes.find((n) => n.id === conn.from)!;
          const toNode = nodes.find((n) => n.id === conn.to)!;
          const midX = (fromNode.x + toNode.x) / 2;
          const midY = (fromNode.y + toNode.y) / 2;
          return (
            <motion.circle
              key={`dot-${i}`}
              cx={midX}
              cy={midY}
              r="0.8"
              fill="#6366f1"
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08)_0%,_transparent_70%)]" />

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Building{" "}
          <span className="gradient-text">AI Infrastructure</span>
          <br />
          for Developers
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-[#94a3b8] max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          MCP servers, multi-LLM tooling, and Telegram-powered AI workflows.
          Open source, Docker-first, provider-agnostic.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-400 transition-colors glow"
          >
            Explore Projects
          </a>
          <a
            href="https://github.com/MrCipherSmith"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#6366f1]/30 text-[#e2e8f0] hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 mt-12 w-full max-w-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <ArchitectureDiagram />
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5 text-[#94a3b8]" />
      </motion.div>
    </section>
  );
}
