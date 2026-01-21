"use client";

import { useState } from "react";
import type { QuotationWithId } from "@/types/quotation";

interface QuotationListProps {
  quotations: QuotationWithId[];
  onEdit: (quotation: QuotationWithId) => void;
  onDelete: (id: number) => Promise<void>;
}

export default function QuotationList({
  quotations,
  onEdit,
  onDelete,
}: QuotationListProps) {
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete(id: number) {
    setIsDeleting(true);
    try {
      await onDelete(id);
      setDeleteConfirm(null);
    } finally {
      setIsDeleting(false);
    }
  }

  if (quotations.length === 0) {
    return (
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 text-center">
        <p className="text-neutral-600">
          No quotations yet. Add your first one!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {quotations.map((q) => (
        <div
          key={q.id}
          className="rounded-lg border border-neutral-200 bg-white p-4"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <p className="text-neutral-900 italic">
                &ldquo;{q.text}&rdquo;
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                &mdash; {q.attribution}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onEdit(q)}
                className="rounded px-3 py-1 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              >
                Edit
              </button>

              {deleteConfirm === q.id ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDelete(q.id)}
                    disabled={isDeleting}
                    className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700 disabled:opacity-50"
                  >
                    {isDeleting ? "..." : "Confirm"}
                  </button>
                  <button
                    onClick={() => setDeleteConfirm(null)}
                    disabled={isDeleting}
                    className="rounded px-3 py-1 text-sm text-neutral-600 hover:bg-neutral-100"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setDeleteConfirm(q.id)}
                  className="rounded px-3 py-1 text-sm text-red-600 hover:bg-red-50 hover:text-red-700"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
