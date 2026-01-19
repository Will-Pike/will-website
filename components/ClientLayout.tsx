"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Header onOpenChat={() => setIsChatOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
