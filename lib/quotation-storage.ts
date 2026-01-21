import { put, list } from "@vercel/blob";
import type { Quotation } from "@/types/quotation";

const QUOTATIONS_BLOB_PATH = "profile/quotations.json";

// In-memory cache with TTL
let quotationsCache: {
  data: Quotation[];
  url: string;
  timestamp: number;
} | null = null;
const CACHE_TTL_MS = 60 * 1000; // 60 seconds

export async function getQuotationsFromBlob(): Promise<Quotation[] | null> {
  // Check cache first
  if (
    quotationsCache &&
    Date.now() - quotationsCache.timestamp < CACHE_TTL_MS
  ) {
    return quotationsCache.data;
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    console.error("BLOB_READ_WRITE_TOKEN is not configured");
    return null;
  }

  try {
    const { blobs } = await list({ prefix: "profile/", token });
    const quotationsBlob = blobs.find(
      (b) => b.pathname === QUOTATIONS_BLOB_PATH
    );

    if (!quotationsBlob) {
      return null;
    }

    const response = await fetch(quotationsBlob.url, { cache: "no-store" });

    if (!response.ok) {
      return null;
    }

    const quotations = (await response.json()) as Quotation[];

    quotationsCache = {
      data: quotations,
      url: quotationsBlob.url,
      timestamp: Date.now(),
    };

    return quotations;
  } catch (error) {
    console.error("Failed to read quotations from blob:", error);
    return null;
  }
}

export async function saveQuotationsToBlob(
  quotations: Quotation[]
): Promise<string> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    throw new Error("BLOB_READ_WRITE_TOKEN is not configured");
  }

  const { url } = await put(
    QUOTATIONS_BLOB_PATH,
    JSON.stringify(quotations, null, 2),
    {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
      allowOverwrite: true,
      token,
    }
  );

  quotationsCache = {
    data: quotations,
    url,
    timestamp: Date.now(),
  };

  return url;
}

export async function getQuotations(): Promise<Quotation[]> {
  const quotations = await getQuotationsFromBlob();
  return quotations ?? [];
}

export async function updateQuotations(quotations: Quotation[]): Promise<void> {
  await saveQuotationsToBlob(quotations);
}
