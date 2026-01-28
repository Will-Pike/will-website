import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "William Pike | Software Product Manager & Technical Leader",
  description:
    "Vision-driven Software Product Manager with proven expertise in SaaS development, payments integration, and leading cross-functional teams through rapid growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.className} flex min-h-screen flex-col bg-white text-neutral-900 antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
