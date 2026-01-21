"use client";

import { useState } from "react";
import type { Quotation, QuotationWithId } from "@/types/quotation";

interface QuotationFormProps {
  quotation?: QuotationWithId;
  onSubmit: (quotation: Quotation) => Promise<void>;
  onCancel: () => void;
}

export default function QuotationForm({
  quotation,
  onSubmit,
  onCancel,
}: QuotationFormProps) {
  const [text, setText] = useState(quotation?.text || "");
  const [attribution, setAttribution] = useState(quotation?.attribution || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!text.trim() || !attribution.trim()) {
      setError("Both text and attribution are required");
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit({
        text: text.trim(),
        attribution: attribution.trim(),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save quotation");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-lg border border-neutral-200 bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold text-neutral-900">
          {quotation ? "Edit Quotation" : "Add Quotation"}
        </h2>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-700">
              Quotation Text
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter the quotation..."
              rows={4}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-700">
              Attribution
            </label>
            <input
              type="text"
              value={attribution}
              onChange={(e) => setAttribution(e.target.value)}
              placeholder="e.g., John Smith, VP Engineering at Acme Corp"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-neutral-900 px-6 py-2 font-medium text-white transition-colors hover:bg-neutral-800 disabled:opacity-50"
        >
          {isSubmitting ? "Saving..." : quotation ? "Update" : "Add"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="rounded-lg border border-neutral-300 px-6 py-2 font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
