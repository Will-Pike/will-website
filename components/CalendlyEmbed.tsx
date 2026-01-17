"use client";

import { useEffect } from "react";

export default function CalendlyEmbed() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!calendlyUrl || calendlyUrl === "https://calendly.com/your-username") {
    return (
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 text-center">
        <p className="text-neutral-600">
          Calendly integration is not yet configured. Please set your
          NEXT_PUBLIC_CALENDLY_URL environment variable.
        </p>
      </div>
    );
  }

  return (
    <div
      className="calendly-inline-widget"
      data-url={calendlyUrl}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
