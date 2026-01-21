"use client";

import { useState, useEffect, useCallback } from "react";
import LoginForm from "@/components/admin/LoginForm";
import ExperienceList from "@/components/admin/ExperienceList";
import ExperienceForm from "@/components/admin/ExperienceForm";
import QuotationList from "@/components/admin/QuotationList";
import QuotationForm from "@/components/admin/QuotationForm";
import ChatLogsViewer from "@/components/admin/ChatLogsViewer";
import type { ExperienceWithId, Experience } from "@/types/experience";
import type { QuotationWithId, Quotation } from "@/types/quotation";

type View = "list" | "add" | "edit";
type Tab = "experiences" | "quotations" | "chat-logs";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [experiences, setExperiences] = useState<ExperienceWithId[]>([]);
  const [quotations, setQuotations] = useState<QuotationWithId[]>([]);
  const [view, setView] = useState<View>("list");
  const [tab, setTab] = useState<Tab>("experiences");
  const [editingExperience, setEditingExperience] =
    useState<ExperienceWithId | null>(null);
  const [editingQuotation, setEditingQuotation] =
    useState<QuotationWithId | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchExperiences = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/experience");
      if (res.ok) {
        const data = await res.json();
        setExperiences(data);
        setIsAuthenticated(true);
      } else if (res.status === 401) {
        setIsAuthenticated(false);
      }
    } catch {
      setError("Failed to fetch experiences");
    }
  }, []);

  const fetchQuotations = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/quotations");
      if (res.ok) {
        const data = await res.json();
        setQuotations(data);
      }
    } catch {
      setError("Failed to fetch quotations");
    }
  }, []);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/login");
        const data = await res.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
          fetchExperiences();
          fetchQuotations();
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      }
    }
    checkAuth();
  }, [fetchExperiences, fetchQuotations]);

  async function handleLogin(password: string) {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!res.ok) {
      throw new Error("Invalid password");
    }

    setIsAuthenticated(true);
    fetchExperiences();
    fetchQuotations();
  }

  async function handleLogout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    setIsAuthenticated(false);
    setExperiences([]);
    setQuotations([]);
    setView("list");
  }

  // Experience handlers
  async function handleAddExperience(experience: Experience) {
    const res = await fetch("/api/admin/experience", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(experience),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Failed to add experience");
    }

    await fetchExperiences();
    setView("list");
  }

  async function handleUpdateExperience(id: number, experience: Experience) {
    const res = await fetch(`/api/admin/experience/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(experience),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Failed to update experience");
    }

    await fetchExperiences();
    setEditingExperience(null);
    setView("list");
  }

  async function handleDeleteExperience(id: number) {
    const res = await fetch(`/api/admin/experience/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Failed to delete experience");
    }

    await fetchExperiences();
  }

  async function handleReorder(order: number[]) {
    const res = await fetch("/api/admin/experience/reorder", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order }),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Failed to reorder experiences");
    }

    await fetchExperiences();
  }

  // Quotation handlers
  async function handleAddQuotation(quotation: Quotation) {
    const res = await fetch("/api/admin/quotations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quotation),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Failed to add quotation");
    }

    await fetchQuotations();
    setView("list");
  }

  async function handleUpdateQuotation(id: number, quotation: Quotation) {
    const res = await fetch(`/api/admin/quotations/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quotation),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Failed to update quotation");
    }

    await fetchQuotations();
    setEditingQuotation(null);
    setView("list");
  }

  async function handleDeleteQuotation(id: number) {
    const res = await fetch(`/api/admin/quotations/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Failed to delete quotation");
    }

    await fetchQuotations();
  }

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-neutral-600">Loading...</div>
      </div>
    );
  }

  // Login form
  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  // Main admin interface
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-neutral-900">Admin</h1>
          <button
            onClick={handleLogout}
            className="rounded-lg border border-neutral-300 px-4 py-2 font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
          >
            Logout
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="mb-6 flex gap-2 border-b border-neutral-200">
          <button
            onClick={() => {
              setTab("experiences");
              setView("list");
              setEditingExperience(null);
              setEditingQuotation(null);
            }}
            className={`px-4 py-2 font-medium transition-colors -mb-px ${
              tab === "experiences"
                ? "text-neutral-900 border-b-2 border-neutral-900"
                : "text-neutral-500 hover:text-neutral-700"
            }`}
          >
            Experiences
          </button>
          <button
            onClick={() => {
              setTab("quotations");
              setView("list");
              setEditingExperience(null);
              setEditingQuotation(null);
            }}
            className={`px-4 py-2 font-medium transition-colors -mb-px ${
              tab === "quotations"
                ? "text-neutral-900 border-b-2 border-neutral-900"
                : "text-neutral-500 hover:text-neutral-700"
            }`}
          >
            Quotations
          </button>
          <button
            onClick={() => {
              setTab("chat-logs");
              setEditingExperience(null);
              setEditingQuotation(null);
            }}
            className={`px-4 py-2 font-medium transition-colors -mb-px ${
              tab === "chat-logs"
                ? "text-neutral-900 border-b-2 border-neutral-900"
                : "text-neutral-500 hover:text-neutral-700"
            }`}
          >
            Chat Logs
          </button>
        </div>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-700">
            {error}
            <button
              onClick={() => setError(null)}
              className="ml-4 text-sm underline"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Experiences Tab */}
        {tab === "experiences" && (
          <>
            {view === "list" && (
              <>
                <div className="mb-4 flex justify-end">
                  <button
                    onClick={() => setView("add")}
                    className="rounded-lg bg-neutral-900 px-4 py-2 font-medium text-white transition-colors hover:bg-neutral-800"
                  >
                    Add Experience
                  </button>
                </div>
                <ExperienceList
                  experiences={experiences}
                  onEdit={(exp) => {
                    setEditingExperience(exp);
                    setView("edit");
                  }}
                  onDelete={handleDeleteExperience}
                  onReorder={handleReorder}
                />
              </>
            )}

            {view === "add" && (
              <ExperienceForm
                onSubmit={handleAddExperience}
                onCancel={() => setView("list")}
              />
            )}

            {view === "edit" && editingExperience && (
              <ExperienceForm
                experience={editingExperience}
                onSubmit={(exp) => handleUpdateExperience(editingExperience.id, exp)}
                onCancel={() => {
                  setEditingExperience(null);
                  setView("list");
                }}
              />
            )}
          </>
        )}

        {/* Quotations Tab */}
        {tab === "quotations" && (
          <>
            {view === "list" && (
              <>
                <div className="mb-4 flex justify-end">
                  <button
                    onClick={() => setView("add")}
                    className="rounded-lg bg-neutral-900 px-4 py-2 font-medium text-white transition-colors hover:bg-neutral-800"
                  >
                    Add Quotation
                  </button>
                </div>
                <QuotationList
                  quotations={quotations}
                  onEdit={(q) => {
                    setEditingQuotation(q);
                    setView("edit");
                  }}
                  onDelete={handleDeleteQuotation}
                />
              </>
            )}

            {view === "add" && (
              <QuotationForm
                onSubmit={handleAddQuotation}
                onCancel={() => setView("list")}
              />
            )}

            {view === "edit" && editingQuotation && (
              <QuotationForm
                quotation={editingQuotation}
                onSubmit={(q) => handleUpdateQuotation(editingQuotation.id, q)}
                onCancel={() => {
                  setEditingQuotation(null);
                  setView("list");
                }}
              />
            )}
          </>
        )}

        {/* Chat Logs Tab */}
        {tab === "chat-logs" && <ChatLogsViewer />}
      </div>
    </div>
  );
}
