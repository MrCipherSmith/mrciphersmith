"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import GitHubIcon from "./GitHubIcon";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Timeline", href: "#timeline" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-[#6366f1]/10"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#hero"
            className="text-lg font-bold tracking-tight gradient-text"
          >
            MrCipherSmith
          </a>

          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#94a3b8] hover:text-indigo-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/MrCipherSmith"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#94a3b8] hover:text-indigo-300 transition-colors"
              aria-label="GitHub profile"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-[#94a3b8]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-xl text-[#e2e8f0] hover:text-indigo-300 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://github.com/MrCipherSmith"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xl text-[#e2e8f0] hover:text-indigo-300 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => setMobileOpen(false)}
              >
                <GitHubIcon className="w-5 h-5" />
                GitHub
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
