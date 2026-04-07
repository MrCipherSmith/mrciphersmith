"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Star, GitFork, FileCode } from "lucide-react";
import GitHubIcon from "./GitHubIcon";

const projects = [
  {
    name: "multiclaude-tg-bot",
    description:
      "Control Claude Code from Telegram. Multi-session MCP bot with dual-layer memory, voice transcription, web dashboard, and real-time CLI monitoring.",
    featured: true,
    commits: 175,
    forks: 1,
    techs: [
      "TypeScript",
      "Bun",
      "grammY",
      "MCP",
      "PostgreSQL",
      "pgvector",
      "React",
      "Tailwind",
      "Docker",
    ],
    url: "https://github.com/MrCipherSmith/multiclaude-tg-bot",
    highlights: [
      "Multi-session MCP server",
      "Dual-layer memory with semantic search",
      "Voice transcription (Groq Whisper)",
      "Web dashboard with stats & logs",
      "CLI management utility",
      "tmux real-time monitoring",
    ],
  },
  {
    name: "openclaude",
    description:
      "Claude Code opened to any LLM — OpenAI, Gemini, DeepSeek, Ollama, and 200+ models via OpenAI-compatible API shim.",
    featured: false,
    commits: 51,
    forks: 0,
    techs: ["TypeScript", "Bun", "OpenAI SDK"],
    url: "https://github.com/MrCipherSmith/openclaude",
    highlights: [
      "OpenAI-compatible shim (724 lines)",
      "200+ models supported",
      "Provider launch profiles",
      "Runtime hardening checks",
    ],
  },
  {
    name: "ecma-mcp",
    description:
      "MCP server for frontend developers with automatic documentation indexing, web admin panel, and code review based on ECMAScript standards.",
    featured: false,
    commits: 4,
    forks: 0,
    techs: ["NestJS", "React", "TanStack Query", "Scrapy", "PostgreSQL", "Docker"],
    url: "https://github.com/MrCipherSmith/ecma-mcp",
    highlights: [
      "Auto documentation indexing",
      "Web admin panel",
      "ECMAScript-based code review",
      "Scrapy web parsing service",
    ],
  },
  {
    name: "goodocs-mcp",
    description:
      "Open Source MCP server for documentation — async indexing, PostgreSQL storage, semantic search, and AI-powered analysis.",
    featured: false,
    commits: 7,
    forks: 0,
    techs: ["NestJS", "TypeORM", "PostgreSQL", "pgvector", "Ollama", "Docker"],
    url: "https://github.com/MrCipherSmith/goodocs-mcp",
    highlights: [
      "Async indexing with task queue",
      "Multi-provider embeddings",
      "MCP protocol for AI clients",
      "REST API + Swagger docs",
    ],
  },
];

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  if (project.featured) {
    return (
      <motion.div
        className="col-span-1 md:col-span-2 glass glass-hover rounded-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 text-xs font-medium rounded bg-indigo-500/20 text-indigo-300">
                Featured
              </span>
            </div>
            <h3 className="text-2xl font-bold">{project.name}</h3>
          </div>
          <div className="flex items-center gap-4 text-sm text-[#94a3b8]">
            <span className="flex items-center gap-1">
              <FileCode className="w-4 h-4" />
              {project.commits} commits
            </span>
            <span className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              {project.forks}
            </span>
          </div>
        </div>

        <p className="text-[#94a3b8] mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {project.highlights.map((h) => (
            <div key={h} className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
              <span className="text-[#cbd5e1]">{h}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-md bg-[#1a1a24] text-[#94a3b8] border border-[#6366f1]/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-400 transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="glass glass-hover rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <div className="flex items-center gap-3 text-xs text-[#94a3b8]">
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3" />
            {project.commits}
          </span>
        </div>
      </div>

      <p className="text-[#94a3b8] text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      <ul className="space-y-1.5 mb-4">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-xs text-[#cbd5e1]">
            <span className="w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techs.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs rounded bg-[#1a1a24] text-[#94a3b8]"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
      >
        <GitHubIcon className="w-4 h-4" />
        View on GitHub
        <ExternalLink className="w-3 h-3" />
      </a>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-[#94a3b8] text-lg mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Open source tools that bridge AI models and developer workflows.
          Each project is production-ready with Docker, CI/CD, and comprehensive docs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
