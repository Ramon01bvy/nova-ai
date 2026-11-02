import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "NovaAI – Geautomatiseerde workflows, aangedreven door AI",
  description: "NovaAI automatiseert je workflows, brengt je data samen en levert realtime inzichten.",
  icons: { icon: "/assets/novaai-logo.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className="dark">
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
