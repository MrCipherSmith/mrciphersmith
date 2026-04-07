import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrciphersmith.github.io"),
  title: "MrCipherSmith",
  description:
    "I build the layer between AI and developers. Open source MCP servers, multi-LLM tooling, and Telegram-powered AI workflows.",
  keywords: [
    "MCP",
    "Model Context Protocol",
    "AI",
    "Claude Code",
    "TypeScript",
    "Open Source",
    "Developer Tools",
    "Telegram Bot",
    "LLM",
  ],
  authors: [{ name: "MrCipherSmith", url: "https://github.com/MrCipherSmith" }],
  openGraph: {
    title: "MrCipherSmith — AI Infrastructure for Developers",
    description:
      "MCP servers, multi-LLM tooling, and Telegram-powered AI workflows.",
    type: "website",
    url: "https://mrciphersmith.github.io",
    siteName: "MrCipherSmith Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MrCipherSmith — AI Infrastructure for Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MrCipherSmith — AI Infrastructure for Developers",
    description:
      "MCP servers, multi-LLM tooling, and Telegram-powered AI workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} bg-[#0a0a0f] antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "MrCipherSmith",
              url: "https://github.com/MrCipherSmith",
              jobTitle: "AI Infrastructure Developer",
              knowsAbout: [
                "Model Context Protocol",
                "TypeScript",
                "AI/ML",
                "Developer Tools",
                "NestJS",
                "PostgreSQL",
                "Docker",
              ],
              sameAs: ["https://github.com/MrCipherSmith"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
