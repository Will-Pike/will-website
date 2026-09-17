import type { Metadata } from "next";
import { Lora } from "next/font/google";
import Script from "next/script";
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
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "yjy3ak2rir"}");`}
      </Script>
    </html>
  );
}
