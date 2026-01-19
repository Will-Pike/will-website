import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grady Karp | Executive Technical Leadership",
  description:
    "Executive-level technical & business leader with a track record of success in engineering leadership and operational excellence.",
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
