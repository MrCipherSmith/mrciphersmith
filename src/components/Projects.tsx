"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "multiclaude-tg-bot",
    desc: "Control Claude Code from Telegram. Multi-session MCP bot with dual-layer memory, voice transcription, web dashboard.",
    tags: [
      { label: "Bot", color: "text-[#30b171]" },
      { label: "Claude", color: "text-[#e07849]" },
      { label: "MCP", color: "text-[#e8bb5c]" },
    ],
    url: "https://github.com/MrCipherSmith/multiclaude-tg-bot"
  },
  {
    name: "openclaude",
    desc: "Claude Code opened to any LLM — OpenAI, Gemini, DeepSeek, Ollama, and 200+ models via OpenAI-compatible API shim.",
    tags: [
      { label: "LLM", color: "text-[#e07849]" },
      { label: "API Shim", color: "text-[#30b171]" },
    ],
    url: "https://github.com/MrCipherSmith/openclaude"
  },
  {
    name: "ecma-mcp",
    desc: "ECMA MCP Frontend Assistant with Scrapy Service, Backend, and Frontend architectures.",
    tags: [
      { label: "MCP", color: "text-[#e8bb5c]" },
      { label: "Frontend", color: "text-[#30b171]" },
    ],
    url: "https://github.com/MrCipherSmith/ecma-mcp"
  },
  {
    name: "claude-code-showcase",
    desc: "Comprehensive Claude Code project configuration example with hooks, skills, agents, commands, and workflows.",
    tags: [
      { label: "Agents", color: "text-[#e8bb5c]" },
      { label: "Claude", color: "text-[#e07849]" },
    ],
    url: "https://github.com/MrCipherSmith/claude-code-showcase"
  },
  {
    name: "goodocs-mcp",
    desc: "GoodDocs MCP Server featuring Async Indexing, Multi-Provider Embeddings, and PostgreSQL Storage.",
    tags: [
      { label: "MCP", color: "text-[#e8bb5c]" },
      { label: "PostgreSQL", color: "text-[#30b171]" },
    ],
    url: "https://github.com/MrCipherSmith/goodocs-mcp"
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-[#9ca3af]">~/</span> Intelligence_Modules
          </h2>
          <p className="text-[#9ca3af] max-w-2xl font-mono text-sm leading-relaxed">
            A collection of Model Context Protocol (MCP) servers, agentic workflows, and bridging architectures connecting LLMs with the real world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((pkg, i) => (
            <motion.a
              href={pkg.url}
              target="_blank"
              rel="noopener noreferrer"
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block relative"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-b from-[#7673DE]/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
              <div className="bg-[#151921] border border-[rgba(118,115,222,0.15)] rounded-xl p-6 h-full flex flex-col relative z-10 transition-all duration-300 group-hover:bg-[#1A1F2B] group-hover:border-[rgba(118,115,222,0.4)]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold font-mono text-white group-hover:text-[#7673DE] transition-colors">
                    {pkg.name}
                  </h3>
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 rounded-full bg-[#30b171]" />
                    <span className="w-2 h-2 rounded-full bg-[#e07849] opacity-50" />
                    <span className="w-2 h-2 rounded-full bg-[#e8bb5c] opacity-50" />
                  </div>
                </div>
                <p className="text-[#9ca3af] text-sm mb-6 flex-grow leading-relaxed">
                  {pkg.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {pkg.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-[#1e232e] border border-[rgba(118,115,222,0.2)] ${tag.color}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
